import { SiteFooter, SiteHeader, PageIntro } from "@/components/SiteLayout";
import { differentiators, testimonials } from "@/content/siteContent";

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
            title="A premium processing partner for mortgage teams that need reliability at scale."
            description="Until we have the client's full story, this page frames Sure Path around the strengths most credible processing partners emphasize: communication, consistency, compliance awareness, close-ready execution, and simple flat-fee pricing."
          />

          <div className="content-grid">
            <article className="content-card">
              <h3>Our Mission</h3>
              <p>
                Help mortgage professionals create a smoother, more dependable
                file journey without adding unnecessary operational strain.
              </p>
            </article>
            <article className="content-card">
              <h3>Our Approach</h3>
              <p>
                Blend responsive human support with repeatable workflow standards
                so every file gets momentum, visibility, and accountability.
              </p>
            </article>
            <article className="content-card">
              <h3>Who We Serve</h3>
              <p>
                Loan officers, brokers, and lending teams who want stronger
                throughput, cleaner communication, and more time to focus on
                production.
              </p>
            </article>
          </div>

          <section className="section">
            <div className="section-heading">
              <span className="kicker">Why Teams Choose Sure Path</span>
              <h2>Positioned around practical trust signals, not empty claims.</h2>
              <p>
                These differentiators are realistic placeholder assumptions based
                on common industry expectations for outsourced mortgage
                processing.
              </p>
            </div>

            <div className="cta-badge-list">
              {differentiators.map((item) => (
                <span className="cta-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.source}>
                  <h3>Client Perspective</h3>
                  <p className="quote">"{testimonial.quote}"</p>
                  <p className="quote-source">{testimonial.source}</p>
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
