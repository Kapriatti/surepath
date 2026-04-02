import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import {
  aboutHighlights,
  audience,
  operatingPrinciples,
} from "@/content/siteContent";

export const metadata = {
  title: "About | Sure Path Mortgage Solutions",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero">
          <div className="container hero-grid page-hero-grid">
            <div className="hero-copy page-hero-copy">
              <span className="kicker">About Sure Path</span>
              <h1>
                A Texas-based processing partner built to bring steadier support
                to mortgage teams.
              </h1>
              <p>
                Sure Path Mortgage Solutions was created to support brokers,
                loan officers, branch leaders, and lending teams that want a
                more dependable processing partner behind the scenes.
                Company-specific history, founder details, and exact milestones
                can be finalized after client review.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="button-primary">
                  Book a Discovery Call
                </Link>
                <Link href="/process" className="button-secondary">
                  See the Process
                </Link>
              </div>

              <div className="hero-metrics page-hero-metrics">
                <div className="metric-card">
                  <strong>Texas-based</strong>
                  <span>Placeholder location details can be refined with the client</span>
                </div>
                <div className="metric-card">
                  <strong>Founder-led</strong>
                  <span>Founder story and background can be finalized after review</span>
                </div>
                <div className="metric-card">
                  <strong>Production-focused</strong>
                  <span>Built for mortgage teams that need steadier operational support</span>
                </div>
              </div>
            </div>

            <aside className="hero-panel page-hero-panel">
              <span className="panel-label">Who Sure Path is</span>
              <h2 className="panel-title">
                The goal is to feel like a dependable extension of the
                production team, not a disconnected outside vendor.
              </h2>
              <p className="panel-copy">
                Sure Path is positioned around professional communication,
                visible execution, and support that helps clients protect their
                borrower experience as volume grows.
              </p>

              <div className="panel-list">
                <div className="panel-list-item">Texas-based operational support</div>
                <div className="panel-list-item">Built for brokers, loan officers, and branch leaders</div>
              </div>

              <div className="page-hero-note-card">
                <span className="pricing-label">Founder placeholder</span>
                <p>
                  [Founder Name], [Title Placeholder], with [X]+ years in
                  mortgage operations. Final bio can be updated after client
                  approval.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="content-grid">
            {aboutHighlights.map((item) => (
              <article className="content-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <section className="section">
            <div className="section-frame">
              <div className="section-split">
                <div className="section-heading section-heading-tight">
                  <span className="kicker">Our Story</span>
                  <h2>Built to make file movement feel clearer, steadier, and easier to trust.</h2>
                  <p>
                    Sure Path exists to help mortgage teams create more
                    operational consistency without losing control of their
                    borrower experience. The company story can ultimately be
                    tailored around the founder&apos;s background, why the business
                    was started, and how the Texas market shaped the service
                    model.
                  </p>
                </div>

                <article className="sidebar-card about-founder-card">
                  <span className="kicker">Founder Placeholder</span>
                  <h3>[Founder Name]</h3>
                  <p className="about-founder-meta">
                    Founder &amp; [Title Placeholder]
                  </p>

                  <div className="resource-list">
                    <div className="resource-item">
                      <strong>[X]+ years in mortgage operations</strong>
                      <p>Replace with approved background and experience summary.</p>
                    </div>
                    <div className="resource-item">
                      <strong>Based in [Texas City], Texas</strong>
                      <p>Replace with exact headquarters or primary service area.</p>
                    </div>
                    <div className="resource-item">
                      <strong>Serving [broker teams / lenders / branch groups]</strong>
                      <p>Replace with the client&apos;s preferred positioning language.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <span className="kicker">Who We Support</span>
              <h2>Best suited for teams that want stronger processing support without overcomplicating the way they already work.</h2>
              <p>
                Sure Path is intended to feel like a reliable extension of the
                production team, not a disconnected outside vendor.
              </p>
            </div>

            <div className="content-grid">
              {audience.map((item) => (
                <article className="content-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <span className="kicker">How We Work</span>
              <h2>The relationship should feel responsive, professional, and easy to rely on.</h2>
              <p>
                The strongest processing partnerships are built on visibility,
                consistency, and a communication style that reflects well on the
                client&apos;s brand.
              </p>
            </div>

            <div className="principles-grid">
              {operatingPrinciples.map((item) => (
                <article className="principle-card" key={item.title}>
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
