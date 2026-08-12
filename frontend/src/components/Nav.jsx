import { useEffect, useState } from "react";
import content from "../data/content.js";
import "./Nav.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="announcement">{content.announcement}</div>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-brand">
            <img src="/logo.png" alt={content.brand.name} className="nav-brand-logo" />
            <span className="nav-brand-text">
              <span className="nav-brand-name">{content.brand.name}</span>
              <span className="nav-brand-tagline">{content.brand.tagline}</span>
            </span>
          </a>

          <nav className="nav-links">
            {content.nav.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href={content.contact.calendlyUrl} className="btn btn-primary nav-cta" target="_blank" rel="noreferrer">
            {content.nav.cta}
          </a>

          <button
            className={`nav-burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>

        {open && (
          <div className="nav-mobile">
            <div className="nav-mobile-brand">
              <span className="nav-brand-name">{content.brand.name}</span>
              <span className="nav-brand-tagline">{content.brand.tagline}</span>
            </div>
            {content.nav.links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={content.contact.calendlyUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              {content.nav.cta}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
