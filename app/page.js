import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import {
  audience,
  differentiators,
  processSteps,
  pricingHighlights,
  resources,
  services,
  testimonials,
  trustStats,
  valuePoints,
} from "@/content/siteContent";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Outsourced mortgage processing for modern loan teams</span>
              <div className="hero-trust-line">
                <span>For brokers, loan officers, and lending teams</span>
                <span>Flat $995 per loan</span>
              </div>
              <h1>
                A clearer,
                <br />
                more profitable
                <br />
                path to close.
              </h1>
              <p>
                Sure Path Mortgage Solutions supports brokers, loan officers, and
                lending teams with high-accountability processing designed to
                reduce bottlenecks, strengthen file quality, and keep every loan
                moving toward the closing table with flat, predictable pricing of
                $995 per loan.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="button-primary">
                  Start the Conversation
                </Link>
                <Link href="/process" className="button-secondary">
                  See the Process
                </Link>
              </div>

              <div className="hero-proof-ribbon">
                <span>Processing partner, not a lender</span>
                <span>Built for mortgage professionals</span>
                <span>Premium support with flat-fee clarity</span>
              </div>

              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>24-hour</strong>
                  <span>Placeholder initial file review standard for new submissions.</span>
                </div>
                <div className="metric-card">
                  <strong>$995</strong>
                  <span>Flat per-loan pricing structured to stay simple and predictable.</span>
                </div>
                <div className="metric-card">
                  <strong>White-label</strong>
                  <span>Client-facing communication can stay aligned with your brand and workflow.</span>
                </div>
              </div>
            </div>

            <div className="glass-panel">
              <div className="panel-orbit panel-orbit-one" />
              <div className="panel-orbit panel-orbit-two" />
              <span className="panel-label">Why teams outsource</span>
              <h2 className="panel-title">
                More production,
                <br />
                less operational drag.
              </h2>
              <p className="panel-copy">
                This first-version copy assumes Sure Path is positioned as a
                premium processing partner for professionals who want cleaner
                files, stronger follow-up, and a more dependable borrower
                experience without adding in-house payroll or vague per-file
                pricing.
              </p>

              <div className="process-mini-list">
                {[
                  "Fewer bottlenecks from intake to clear-to-close",
                  "More time for loan officers to focus on origination",
                  "A repeatable workflow that scales with pipeline growth",
                ].map((item, index) => (
                  <div className="process-mini-item" key={item}>
                    <span className="process-mini-number">0{index + 1}</span>
                    <div>{item}</div>
                  </div>
                ))}
              </div>

              <div className="hero-pricing-card">
                <span className="pricing-label">Simple pricing</span>
                <strong>$995</strong>
                <p>Per loan, positioned as a flat-fee processing partnership instead of variable overhead.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container trust-strip">
            {trustStats.map((stat) => (
              <div className="trust-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-tight">
          <div className="container audience-band">
            <div className="audience-copy">
              <span className="kicker">Who We Serve</span>
              <h2>Built for professionals who need operational leverage, not more admin friction.</h2>
            </div>
            <div className="audience-list">
              {audience.map((item) => (
                <div className="audience-pill" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">What We Do</span>
              <h2>Processing support built for mortgage professionals, not borrowers.</h2>
              <p>
                The site currently uses realistic placeholder positioning based on
                outsourced processing industry standards. It is written to feel
                credible now, while staying easy to revise when we get exact
                service details from the client.
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
          <div className="container pricing-section">
            <div className="pricing-copy">
              <span className="kicker">Pricing Positioning</span>
              <h2>One flat fee, framed around clarity instead of complexity.</h2>
              <p>
                Since we only know the core pricing model so far, the site now
                treats $995 per loan as a trust-building differentiator. That
                gives the client a strong sales angle today without overcommitting
                to promises we have not confirmed yet.
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
                Ask About Your Pipeline
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">Our Process</span>
              <h2>A structured workflow that keeps every file moving.</h2>
              <p>
                This process page content is intentionally specific enough to feel
                real, while still functioning as a placeholder framework we can
                tune after client discovery.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="content-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">The Business Case</span>
              <h2>Why outsourced processing can feel like a growth lever instead of a stopgap.</h2>
              <p>
                This section turns the sales pitch into outcomes a mortgage
                professional actually cares about: profit visibility, capacity,
                and client experience.
              </p>
            </div>

            <div className="value-grid">
              {valuePoints.map((point) => (
                <article className="value-card" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">About Sure Path</span>
              <h2>Operational support that feels steady, professional, and close-ready.</h2>
              <p>
                Placeholder brand story: Sure Path Mortgage Solutions was built to
                help growing mortgage teams improve file quality, strengthen
                communication, and create a smoother path from application to
                closing. The tone is high-trust, polished, and service-led rather
                than generic corporate boilerplate.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.source}>
                  <h3>Trusted by growing loan teams</h3>
                  <p className="quote">"{testimonial.quote}"</p>
                  <p className="quote-source">{testimonial.source}</p>
                </article>
              ))}
            </div>

            <div className="cta-panel">
              <div>
                <span className="kicker">Why Sure Path</span>
                <h2>Built to support scale without sacrificing borrower experience.</h2>
                <p>
                  Until we have final sales messaging from the client, the site is
                  positioned around realistic differentiators: responsiveness,
                  communication, file cleanliness, compliance awareness, and
                  dedicated support.
                </p>
              </div>

              <div className="cta-badge-list">
                {differentiators.map((item) => (
                  <span className="cta-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <article className="contact-card">
              <span className="kicker">Contact</span>
              <h3>Let's talk about your current pipeline and processing load.</h3>
              <p>
                Another placeholder assumption: the best next step is a discovery
                call for brokers, branch leaders, or lending teams who want to
                improve turn times, reduce internal processing pressure, and
                evaluate whether a flat $995 per loan model fits their pipeline.
              </p>

              <div className="contact-list">
                <a href="mailto:hello@surepathmortgagesolutions.com">
                  hello@surepathmortgagesolutions.com
                </a>
                <a href="tel:5550147776">(555) 014-7776</a>
                <Link href="/contact">Schedule a 20-minute consultation</Link>
              </div>
            </article>

            <article className="contact-card">
              <span className="kicker">Resources</span>
              <h3>Helpful starting points for future clients.</h3>
              <p>
                These resource blocks are positioned as lightweight trust-builders
                and can later become gated downloads, PDFs, or a simple knowledge
                hub if the client wants more lead generation assets.
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
