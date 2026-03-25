import { SiteFooter, SiteHeader, PageIntro } from "@/components/SiteLayout";
import { resources } from "@/content/siteContent";

export const metadata = {
  title: "Contact | Sure Path Mortgage Solutions",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="inner-page">
        <div className="container">
          <PageIntro
            kicker="Contact and Resources"
            title="Start with a discovery conversation, then shape the right processing support model."
            description="This page assumes the primary conversion goal is a consultation request, supported by lightweight trust-building resources that can be upgraded later."
          />

          <div className="contact-grid">
            <article className="contact-card">
              <span className="kicker">Get In Touch</span>
              <h3>Talk through your current pipeline, file volume, and bottlenecks.</h3>
              <p>
                Placeholder conversion path: a 20-minute discovery call focused on
                turn times, staffing pressure, borrower communication, and where
                outsourced processing may create leverage under a flat $995 per
                loan pricing structure.
              </p>

              <div className="contact-list">
                <a href="mailto:hello@surepathmortgagesolutions.com">
                  hello@surepathmortgagesolutions.com
                </a>
                <a href="tel:5550147776">(555) 014-7776</a>
                <a href="#">Schedule a 20-minute consultation</a>
              </div>
            </article>

            <article className="contact-card">
              <span className="kicker">Resources</span>
              <h3>Useful materials for prospective broker and lender partners.</h3>
              <p>
                These can stay simple for now or evolve into downloadable lead
                magnets, onboarding documents, or a client education hub.
              </p>

              <div className="resource-list">
                {resources.map((resource) => (
                  <div className="resource-item" key={resource.title}>
                    <div>
                      <strong>{resource.title}</strong>
                      <p>{resource.description}</p>
                    </div>
                    <span>View</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
