import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import {
  audience,
  homeStandards,
  pricingHighlights,
  processSteps,
  services,
} from "@/content/siteContent";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                A clearer,
                <br />
                more profitable
                <br />
                path to close.
              </h1>
              <p>
                Sure Path Mortgage Solutions supports brokers, loan officers,
                branch leaders, and lending teams with structured mortgage
                processing designed to improve communication, file movement, and
                closing readiness.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="button-primary">
                  Book a Discovery Call
                </Link>
                <Link href="/process" className="button-secondary">
                  See the Process
                </Link>
              </div>

              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>24-hour</strong>
                  <span>Initial review target for newly assigned files</span>
                </div>
                <div className="metric-card">
                  <strong>White-label</strong>
                  <span>Support aligned to your team and borrower experience</span>
                </div>
                <div className="metric-card">
                  <strong>Close-ready</strong>
                  <span>Structured follow-up with clearer milestone visibility</span>
                </div>
              </div>
            </div>

            <aside className="hero-panel">
              <span className="panel-label">Why teams partner with Sure Path</span>
              <h2 className="panel-title">Clean execution matters when file volume starts to stretch your team.</h2>
              <p className="panel-copy">
                Sure Path is designed to reduce avoidable bottlenecks, improve
                communication, and give mortgage teams a more dependable
                processing rhythm without adding in-house payroll.
              </p>

              <div className="panel-list">
                <div className="panel-list-item">Processing partner, not a lender</div>
                <div className="panel-list-item">Built for brokers, loan officers, and lending teams</div>
              </div>

              <div className="hero-pricing-card">
                <span className="pricing-label">Flat-fee pricing</span>
                <strong>$995</strong>
                <p>Per loan, positioned for teams that want predictable support costs and steadier operational capacity.</p>
              </div>
            </aside>
          </div>
        </section>

        <div className="home-band">
          <section className="section">
            <div className="container section-frame section-frame-band">
              <div className="section-heading">
                <span className="kicker">Who Sure Path Supports</span>
                <h2>Built for lending professionals who need steadier operational support without disrupting how their team works.</h2>
              </div>

              <div className="content-grid">
                {audience.map((item) => (
                  <article className="content-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container section-split section-band-panel">
              <div className="section-heading section-heading-tight">
                <span className="kicker">What We Do</span>
                <h2>Processing support centered on file movement, communication, and closing readiness.</h2>
                <p>
                  Sure Path is positioned as an operational partner that helps
                  lending professionals protect turn times, borrower experience, and
                  day-to-day visibility.
                </p>
              </div>

              <div className="content-grid">
                {services.map((service) => (
                  <article className="content-card" key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container pricing-section section-band-panel">
              <div className="pricing-copy">
                <span className="kicker">Flat-Fee Pricing</span>
                <h2>Simple pricing that makes it easier to plan around growth.</h2>
                <p>
                  The pricing model is straightforward: one flat fee per loan for
                  teams that want dependable processing support without a more
                  complicated staffing structure.
                </p>
              </div>

              <div className="pricing-card">
                <span className="pricing-label">Sure Path processing fee</span>
                <div className="pricing-amount">
                  <strong>$995</strong>
                  <span>per loan</span>
                </div>
                <div className="pricing-divider" />
                <div className="pricing-list">
                  {pricingHighlights.map((item) => (
                    <div className="pricing-list-item" key={item}>
                      <span className="pricing-dot" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="button-primary pricing-button">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section className="section">
          <div className="container section-frame">
            <div className="section-heading">
              <span className="kicker">Process Preview</span>
              <h2>A disciplined workflow from intake through closing readiness.</h2>
              <p>
                The process stays structured so loan teams can see what is
                happening, what is outstanding, and what needs attention next.
              </p>
            </div>

            <div className="process-preview-grid">
              {processSteps.map((step) => (
                <article className="process-preview-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="section-actions">
              <Link href="/process" className="button-secondary">
                See the Process
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-frame">
            <div className="section-heading">
              <span className="kicker">Operating Standards</span>
              <h2>The work is built around responsiveness, consistency, and borrower-aware execution.</h2>
            </div>

            <div className="content-grid">
              {homeStandards.map((item) => (
                <article className="content-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
