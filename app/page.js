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

        <section className="section home-overview-section">
          <div className="container home-overview-grid">
            <div className="section-frame overview-copy-card">
              <div className="section-heading section-heading-tight">
                <span className="kicker">Operational Overview</span>
                <h2>Support for mortgage teams that want cleaner throughput without a heavier internal workload.</h2>
                <p>
                  Sure Path is structured to help files move more clearly from
                  intake to closing readiness while keeping communication and
                  borrower experience aligned with your team.
                </p>
              </div>

              <div className="overview-points">
                <div className="overview-point">
                  <strong>For brokers, loan officers, and branch leaders</strong>
                  <p>Support designed for active production teams, not borrower-facing lending.</p>
                </div>
                <div className="overview-point">
                  <strong>Operational help without another full-time hire</strong>
                  <p>Built for teams balancing growth, file volume, and day-to-day execution pressure.</p>
                </div>
              </div>
            </div>

            <div className="overview-aside">
              <article className="overview-glance-card">
                <span className="kicker">At a Glance</span>
                <div className="overview-glance-list">
                  <div>
                    <strong>24-hour review target</strong>
                    <p>Early visibility on what a file needs next.</p>
                  </div>
                  <div>
                    <strong>White-label support</strong>
                    <p>Communication can stay aligned to your borrower experience.</p>
                  </div>
                  <div>
                    <strong>Close-ready focus</strong>
                    <p>Structured follow-up that reduces last-minute surprises.</p>
                  </div>
                </div>
              </article>

              <article className="overview-quote-card">
                <p>
                  Clean execution matters most when file volume starts testing
                  the capacity of the team behind it.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section home-mosaic-section">
          <div className="container home-mosaic-grid">
            <div className="section-heading home-mosaic-heading">
              <span className="kicker">What We Do</span>
              <h2>Structured processing support that feels more intentional and easier to manage.</h2>
              <p>
                The model is built around cleaner file movement, steadier
                follow-up, and predictable operational coverage for growing
                lending teams.
              </p>
            </div>

            <article className="content-card service-feature-card">
              <span className="kicker">Support Model</span>
              <h3>Processing partner, not a lender.</h3>
              <p>
                Sure Path works behind the scenes as an extension of the
                production team, helping protect momentum without taking the
                relationship away from your brand.
              </p>
            </article>

            {services.map((service) => (
              <article className="content-card service-mosaic-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}

            <div className="pricing-card pricing-mosaic-card">
              <div className="pricing-card-top">
                <span className="pricing-label">Flat-Fee Pricing</span>
                <span className="pricing-note">Predictable model</span>
              </div>
              <div className="pricing-hero">
                <div className="pricing-amount">
                  <strong>$995</strong>
                  <span>per loan</span>
                </div>
                <p className="pricing-summary">
                  Straightforward pricing for teams that want dependable support
                  costs and a cleaner way to plan around production volume.
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
            </div>
          </div>
        </section>

        <section className="section home-process-section">
          <div className="container home-process-grid">
            <div className="section-frame home-process-copy">
              <div className="section-heading section-heading-tight">
                <span className="kicker">Process Preview</span>
                <h2>A more visible workflow from intake through closing readiness.</h2>
                <p>
                  The process is structured to keep priorities visible, reduce
                  bottlenecks, and help teams know what needs attention next.
                </p>
              </div>

              <div className="home-process-actions">
                <Link href="/process" className="button-secondary">
                  See the Process
                </Link>
                <Link href="/contact" className="button-primary">
                  Book a Discovery Call
                </Link>
              </div>
            </div>

            <div className="process-preview-stack">
              {previewSteps.map((step) => (
                <article className="process-preview-card process-preview-offset" key={step.number}>
                  <div className="process-preview-topline">
                    <span className="step-number">{step.number}</span>
                    <span className="process-preview-line" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
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
