import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./About.css";

export default function About() {
  const a = content.about;
  const ref = useReveal();

  return (
    <section id="about" ref={ref}>
      <div className="container about-grid">
        <div className="about-portrait">
          <img src="/headshot.jpg" alt={a.heading} />
          <div className="about-portrait-frame" />
        </div>

        <div className="about-content">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="section-heading" style={{ marginBottom: 4 }}>{a.heading}</h2>
          <p className="about-role">{a.subheading}</p>
          <p className="about-body">{a.body}</p>

          <blockquote className="about-quote">
            <p>"{content.hero.quote}"</p>
            <cite>{content.hero.quoteAttribution}</cite>
          </blockquote>

          <div className="about-credentials">
            {a.credentials.map((c, i) => (
              <div className="about-credential" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={c.label}>
                <div className="about-credential-value">{c.value}</div>
                <div className="about-credential-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
