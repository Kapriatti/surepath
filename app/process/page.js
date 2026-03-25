import { SiteFooter, SiteHeader, PageIntro } from "@/components/SiteLayout";
import { processExpectations, processSteps } from "@/content/siteContent";

export const metadata = {
  title: "Our Process | Sure Path Mortgage Solutions",
};

export default function ProcessPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="inner-page">
        <div className="container">
          <PageIntro
            kicker="Our Process"
            title="A cleaner process starts with clearer expectations at every stage."
            description="Sure Path follows a structured file workflow so clients know what is happening, what is still outstanding, and what is required to move the loan forward."
          />

          <div className="process-detail-grid">
            {processSteps.map((step) => (
              <article className="process-detail-card" key={step.number}>
                <div className="process-detail-header">
                  <span className="step-number">{step.number}</span>
                  <h2>{step.title}</h2>
                </div>
                <p>{step.description}</p>
                <div className="deliverable-list">
                  {step.deliverables.map((item) => (
                    <div className="deliverable-item" key={item}>
                      <span className="pricing-dot" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="section">
            <div className="section-heading">
              <span className="kicker">What Clients Can Expect</span>
              <h2>Operational support that stays visible, responsive, and close-focused.</h2>
            </div>

            <div className="content-grid">
              {processExpectations.map((item) => (
                <article className="content-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
