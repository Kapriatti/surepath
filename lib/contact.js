const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(input) {
  const data = {
    firstName: clean(input.firstName),
    lastName: clean(input.lastName),
    company: clean(input.company),
    role: clean(input.role),
    email: clean(input.email),
    phone: clean(input.phone),
    monthlyFileVolume: clean(input.monthlyFileVolume),
    message: clean(input.message),
    website: clean(input.website),
  };

  const errors = {};

  if (!data.firstName) errors.firstName = "First name is required.";
  if (!data.lastName) errors.lastName = "Last name is required.";
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.company && !data.role) {
    errors.company = "Company or role is required.";
    errors.role = "Company or role is required.";
  }

  if (!data.message) {
    errors.message = "Message is required.";
  } else if (data.message.length < 20) {
    errors.message = "Please share a little more detail.";
  }

  if (data.phone && data.phone.length > 32) {
    errors.phone = "Phone number looks too long.";
  }

  if (data.monthlyFileVolume && data.monthlyFileVolume.length > 50) {
    errors.monthlyFileVolume = "Please shorten this answer.";
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

export function formatSubmissionText(data) {
  return [
    "New Sure Path contact form submission",
    "",
    `First name: ${data.firstName}`,
    `Last name: ${data.lastName}`,
    `Company: ${data.company || "Not provided"}`,
    `Role: ${data.role || "Not provided"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Monthly file volume: ${data.monthlyFileVolume || "Not provided"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function formatSubmissionHtml(data) {
  const safe = (value) => value || "Not provided";

  return `
    <div style="font-family:Arial,sans-serif;color:#1D2230;line-height:1.6">
      <h1 style="font-size:22px;margin-bottom:16px;">New Sure Path contact form submission</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        <tbody>
          <tr><td style="padding:8px 0;font-weight:700;">First name</td><td style="padding:8px 0;">${safe(data.firstName)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Last name</td><td style="padding:8px 0;">${safe(data.lastName)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Company</td><td style="padding:8px 0;">${safe(data.company)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Role</td><td style="padding:8px 0;">${safe(data.role)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Email</td><td style="padding:8px 0;">${safe(data.email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Phone</td><td style="padding:8px 0;">${safe(data.phone)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;">Monthly file volume</td><td style="padding:8px 0;">${safe(data.monthlyFileVolume)}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:24px;">
        <div style="font-weight:700;margin-bottom:8px;">Message</div>
        <div style="padding:16px;border:1px solid #DDD6D2;border-radius:12px;background:#F9F5F3;white-space:pre-wrap;">${data.message}</div>
      </div>
    </div>
  `;
}
