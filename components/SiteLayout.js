import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link href="/" className="brand-lockup">
          <span className="brand-kicker">Sure Path</span>
          <span className="brand-name">Mortgage Solutions</span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
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

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-panel">
          <div>
            <div className="brand-lockup">
              <span className="brand-kicker">Sure Path</span>
              <span className="brand-name">Mortgage Solutions</span>
            </div>
            <p>
              Premium outsourced mortgage processing support for brokers, loan
              officers, and lenders who need a steadier path to close.
            </p>
          </div>

          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ kicker, title, description }) {
  return (
    <div className="page-intro">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
