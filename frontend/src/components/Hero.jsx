import content from "../data/content.js";
import "./Hero.css";

export default function Hero() {
  const h = content.hero;
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 className="hero-headline">
            {h.headline} <em>{h.headlineEmphasis}</em>
            {h.headlineEnd}
          </h1>
          <p className="hero-sub">{h.subhead}</p>

          <div className="hero-actions">
            <a href={content.contact.calendlyUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              {h.primaryCta}
            </a>
            <a href="#services" className="btn btn-ghost">
              {h.secondaryCta}
            </a>
          </div>

          <blockquote className="hero-quote">
            <p>"{h.quote}"</p>
            <cite>{h.quoteAttribution}</cite>
          </blockquote>
        </div>

        <div className="hero-portrait">
          <img src="/profile1.jpeg" alt={content.about.heading} />
          <div className="hero-portrait-frame" />
        </div>
      </div>

      <div className="container">
        <div className="hero-stats">
          {h.stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
