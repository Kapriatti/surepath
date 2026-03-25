import ContactForm from "@/components/ContactForm";
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
            kicker="Contact"
            title="Start with a discovery call."
            description="Share a few details about your team, your current loan flow, and what kind of support you are evaluating. Sure Path typically responds within one business day."
            compact
          />

          <div className="contact-layout">
            <section className="form-card">
              <div className="form-card-header">
                <span className="kicker">Inquiry Form</span>
                <h2>Tell us about your team and current volume.</h2>
                <p>
                  This form is intended for brokers, loan officers, branch
                  leaders, and lending teams exploring outsourced processing
                  support.
                </p>
              </div>
              <ContactForm />
            </section>

            <aside className="contact-sidebar">
              <article className="sidebar-card">
                <span className="kicker">Contact Details</span>
                <h3>What to expect</h3>
                <p>
                  New inquiries are typically reviewed within one business day.
                  Discovery calls are best used to review file volume, team
                  structure, and current processing bottlenecks.
                </p>
                <div className="contact-list">
                  <a href="mailto:hello@surepathmortgagesolutions.com">
                    hello@surepathmortgagesolutions.com
                  </a>
                  <a href="tel:5550147776">(555) 014-7776</a>
                </div>
              </article>

              <article className="sidebar-card">
                <span className="kicker">Resources</span>
                <h3>Helpful starting points</h3>
                <div className="resource-list">
                  {resources.map((resource) => (
                    <div className="resource-item" key={resource.title}>
                      <div>
                        <strong>{resource.title}</strong>
                        <p>{resource.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter hideCta />
    </div>
  );
}
