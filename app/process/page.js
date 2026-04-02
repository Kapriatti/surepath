import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import {
  homeStandards,
  processExpectations,
  processSteps,
} from "@/content/siteContent";

export const metadata = {
  title: "Our Process | Sure Path Mortgage Solutions",
};

export default function ProcessPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero">
          <div className="container hero-grid page-hero-grid">
            <div className="hero-copy page-hero-copy">
              <span className="kicker">Our Process</span>
              <h1>
                A cleaner process starts with clearer expectations at every
                stage.
              </h1>
              <p>
                Sure Path follows a structured file workflow so clients know
                what is happening, what is still outstanding, and what is
                required to move the loan forward.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="button-primary">
                  Book a Discovery Call
                </Link>
                <Link href="/about" className="button-secondary">
                  About Sure Path
                </Link>
              </div>

              <div className="hero-metrics page-hero-metrics">
                <div className="metric-card">
                  <strong>4 stages</strong>
                  <span>A structured file path from intake to closing readiness</span>
                </div>
                <div className="metric-card">
                  <strong>Visible updates</strong>
                  <span>Clearer insight into what is done and what comes next</span>
                </div>
                <div className="metric-card">
                  <strong>Close-focused</strong>
                  <span>Execution built around momentum, follow-up, and readiness</span>
                </div>
              </div>
            </div>

            <aside className="hero-panel page-hero-panel">
              <span className="panel-label">How the workflow works</span>
              <h2 className="panel-title">
                Each file follows a visible path from intake to closing
                readiness.
              </h2>
              <p className="panel-copy">
                The process is designed to keep expectations clear, surface
                outstanding items early, and support cleaner handoffs as the
                loan moves forward.
              </p>

              <div className="panel-list">
                <div className="panel-list-item">
                  Structured intake and documentation review
                </div>
                <div className="panel-list-item">
                  Consistent follow-up through underwriting and final readiness
                </div>
              </div>

              <div className="page-hero-note-card">
                <span className="pricing-label">What clients can expect</span>
                <p>
                  Visibility into the file, cleaner communication loops, and a
                  steadier path toward closing.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <div className="container">
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

          <section className="section">
            <div className="section-heading">
              <span className="kicker">Execution Standards</span>
              <h2>The process works best when communication, timing, and follow-up stay disciplined.</h2>
              <p>
                Sure Path is structured to help teams maintain momentum without
                creating more noise around the file.
              </p>
            </div>

            <div className="content-grid">
              {homeStandards.map((item) => (
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
