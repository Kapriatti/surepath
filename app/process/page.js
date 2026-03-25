import { SiteFooter, SiteHeader, PageIntro } from "@/components/SiteLayout";
import { processSteps } from "@/content/siteContent";

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
            title="A structured workflow built to move loans cleanly from intake to close."
            description="This page uses realistic placeholder sequencing for outsourced mortgage processing, giving us a credible foundation now while staying flexible for later revisions."
          />

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="content-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <section className="section">
            <div className="cta-panel">
              <div>
                <span className="kicker">How This Helps</span>
                <h2>Better file visibility means fewer surprises late in the pipeline.</h2>
                <p>
                  The placeholder process is designed around the outcomes mortgage
                  teams care about most: cleaner submissions, faster follow-up,
                  stronger borrower communication, and smoother closing readiness.
                </p>
              </div>

              <div className="cta-badge-list">
                <span className="cta-badge">Faster file setup</span>
                <span className="cta-badge">Condition tracking</span>
                <span className="cta-badge">Borrower follow-up</span>
                <span className="cta-badge">Clear closing prep</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
