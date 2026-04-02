import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import {
  pricingHighlights,
  processSteps,
  services,
} from "@/content/siteContent";

export default function Home() {
  const previewSteps = processSteps.slice(0, 3);

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

        <section className="section home-ribbon-section">
          <div className="container">
            <div className="home-ribbon">
              <div className="home-ribbon-item">
                <span className="kicker">Who It&apos;s For</span>
                <p>Brokers, loan officers, branch leaders, and lending teams.</p>
              </div>
              <div className="home-ribbon-item">
                <span className="kicker">Support Style</span>
                <p>White-label processing support that stays aligned to your workflow.</p>
              </div>
              <div className="home-ribbon-item">
                <span className="kicker">Fee Structure</span>
                <p>One flat fee per loan for more predictable planning.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section home-services-section">
          <div className="container home-services-layout">
            <div className="section-frame home-story-card">
              <div className="section-heading section-heading-tight">
                <span className="kicker">Why Teams Use Sure Path</span>
                <h2>Operational support that creates clarity without creating more noise.</h2>
                <p>
                  Sure Path is built for production teams that want cleaner file
                  movement, steadier follow-up, and better visibility without
                  overcomplicating how the team already works.
                </p>
              </div>

              <div className="home-story-points">
                <div className="home-story-point">
                  <strong>Built for active production teams</strong>
                  <p>Support designed for the people managing volume, relationships, and closing pace every day.</p>
                </div>
                <div className="home-story-point">
                  <strong>Structured to reduce bottlenecks</strong>
                  <p>Clearer movement from intake through readiness helps protect momentum when file pressure rises.</p>
                </div>
              </div>
            </div>

            <div className="home-services-stack">
              {services.map((service) => (
                <article className="content-card home-service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-pricing-section">
          <div className="container">
            <div className="section-frame home-pricing-frame">
              <div className="pricing-copy home-pricing-copy">
                <span className="kicker">Flat-Fee Pricing</span>
                <h2>Simple pricing placed in one clear, easy-to-scan section.</h2>
                <p>
                  The model is straightforward: one flat fee per loan for teams
                  that want dependable processing support without a more
                  complicated staffing structure.
                </p>
              </div>

              <div className="pricing-card home-pricing-card">
                <div className="pricing-card-top">
                  <span className="pricing-label">Sure Path processing fee</span>
                  <span className="pricing-note">One flat fee</span>
                </div>
                <div className="pricing-hero">
                  <div className="pricing-amount">
                    <strong>$995</strong>
                    <span>per loan</span>
                  </div>
                  <p className="pricing-summary">
                    Predictable support costs for teams that want steadier file
                    movement and a cleaner path around growth.
                  </p>
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
          </div>
        </section>

        <section className="section home-process-section">
          <div className="container home-process-layout">
            <div className="section-heading home-process-heading">
              <span className="kicker">Process Preview</span>
              <h2>A disciplined workflow that stays visible from intake through closing readiness.</h2>
              <p>
                The process is structured so loan teams can see what is
                happening, what is still outstanding, and what needs attention
                next.
              </p>
            </div>

            <div className="home-process-grid-v2">
              {previewSteps.map((step) => (
                <article className="process-preview-card home-process-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="home-process-footer">
              <Link href="/process" className="button-secondary">
                See the Process
              </Link>
              <Link href="/contact" className="button-primary">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
