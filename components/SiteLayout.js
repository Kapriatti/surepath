"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinks } from "@/content/siteContent";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link href="/" className="brand-lockup">
          <span className="brand-kicker">Sure Path</span>
          <span className="brand-name">Mortgage Solutions</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link-active" : ""}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          Book a Discovery Call
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter({ hideCta = false }) {
  return (
    <footer className="footer">
      <div className="container">
        {!hideCta ? (
          <div className="footer-cta">
            <div>
              <span className="kicker">Ready to talk</span>
              <h2>Schedule a discovery call and take a closer look at your current loan flow.</h2>
            </div>
            <Link href="/contact" className="button-primary">
              Book a Discovery Call
            </Link>
          </div>
        ) : null}

        <div className="footer-panel">
          <div className="footer-brand">
            <div className="brand-lockup">
              <span className="brand-kicker">Sure Path</span>
              <span className="brand-name">Mortgage Solutions</span>
            </div>
            <p>
              Mortgage processing support for brokers, loan officers, branch
              leaders, and lending teams that need a steadier route to close.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-heading">Navigate</span>
            <div className="footer-links">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <span className="footer-heading">Contact</span>
            <a href="mailto:hello@surepathmortgagesolutions.com">hello@surepathmortgagesolutions.com</a>
            <a href="tel:5550147776">(555) 014-7776</a>
            <p>Responses are typically sent within one business day.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ kicker, title, description, compact = false }) {
  return (
    <div className={`page-intro${compact ? " page-intro-compact" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
