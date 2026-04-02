import { SiteFooter, SiteHeader, PageIntro } from "@/components/SiteLayout";
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
        <div className="container">
          <PageIntro
            kicker="About Sure Path"
            title="A Texas-based processing partner built to bring steadier support to mortgage teams."
            description="Sure Path Mortgage Solutions was created to support brokers, loan officers, branch leaders, and lending teams that want a more dependable processing partner behind the scenes. Company-specific history, founder details, and exact milestones can be finalized after client review."
          />

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
