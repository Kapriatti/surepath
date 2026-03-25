import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  formatSubmissionHtml,
  formatSubmissionText,
  validateContactPayload,
} from "@/lib/contact";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const payload = await request.json();
    const validation = validateContactPayload(payload);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          message: "Please review the form fields and try again.",
          errors: validation.errors,
        },
        { status: 400 },
      );
    }

    if (validation.data.website) {
      return NextResponse.json({
        message: "Thanks for reaching out. We will be in touch soon.",
      });
    }

    if (!resend || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        {
          message:
            "The contact form is temporarily unavailable. Please email hello@surepathmortgagesolutions.com directly.",
        },
        { status: 500 },
      );
    }

    const subjectCompany = validation.data.company || validation.data.role || "New inquiry";

    const sendAdminEmail = resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: validation.data.email,
      subject: `Sure Path inquiry: ${subjectCompany}`,
      text: formatSubmissionText(validation.data),
      html: formatSubmissionHtml(validation.data),
    });

    const autoResponseFrom = process.env.CONTACT_AUTO_RESPONSE_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;
    const tasks = [sendAdminEmail];

    if (autoResponseFrom) {
      tasks.push(
        resend.emails.send({
          from: autoResponseFrom,
          to: [validation.data.email],
          subject: "We received your inquiry",
          text:
            "Thank you for reaching out to Sure Path Mortgage Solutions. We received your message and typically respond within one business day.",
          html:
            "<div style=\"font-family:Arial,sans-serif;color:#1D2230;line-height:1.6\"><p>Thank you for reaching out to Sure Path Mortgage Solutions.</p><p>We received your message and typically respond within one business day.</p></div>",
        }),
      );
    }

    const results = await Promise.all(tasks);

    if (results.some((result) => result.error)) {
      return NextResponse.json(
        {
          message: "We could not send your message right now. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Thanks for reaching out. Your message has been sent.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "We could not send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
