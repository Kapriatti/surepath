import Link from "next/link";
import { SiteFooter, SiteHeader, PageIntro } from "@/components/SiteLayout";
import { aboutHighlights, operatingPrinciples } from "@/content/siteContent";

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
            title="A processing partner built around dependable execution and professional communication."
            description="Sure Path is positioned for mortgage teams that need structured processing support, clear borrower-aware communication, and a steadier route from file setup to close."
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
            <div className="section-heading">
              <span className="kicker">How Sure Path Operates</span>
              <h2>The relationship is built on consistency, not noise.</h2>
              <p>
                When processing support is done well, communication feels steadier,
                timelines feel clearer, and borrowers experience less friction.
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

          <section className="section">
            <div className="cta-panel">
              <div>
                <span className="kicker">Working Relationship</span>
                <h2>Sure Path is designed to feel like an operational extension of your team.</h2>
                <p>
                  The goal is dependable support, clear communication, and a
                  process that stays aligned with how your lending team wants to
                  work.
                </p>
              </div>
              <Link href="/contact" className="button-primary">
                Book a Discovery Call
              </Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
