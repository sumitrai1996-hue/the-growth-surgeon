import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Impact.css";

export default function Impact() {
  const im = content.impact;
  const ref = useReveal();

  return (
    <section id="impact" ref={ref} className="impact-section">
      <div className="container">
        <p className="eyebrow">{im.eyebrow}</p>
        <h2 className="section-heading">{im.heading}</h2>
        <p className="section-sub">{im.subheading}</p>

        {/* signature element: a pulse/ECG line, nodding to "The Growth Surgeon" */}
        <svg className="impact-pulse" viewBox="0 0 900 60" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="0,30 220,30 250,8 275,52 300,30 340,30 365,18 385,30 900,30"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        </svg>

        <div className="impact-grid">
          {im.stats.map((s, i) => (
            <div className="impact-card" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={s.label}>
              <span className="impact-tag">{s.tag}</span>
              <div className="impact-value">{s.value}</div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
