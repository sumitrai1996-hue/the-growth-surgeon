import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Services.css";

export default function Services() {
  const s = content.services;
  const ref = useReveal();

  return (
    <section id="services" ref={ref}>
      <div className="container">
        <p className="eyebrow">{s.eyebrow}</p>
        <h2 className="section-heading">{s.heading}</h2>
        <p className="section-sub">{s.subheading}</p>

        <div className="ladder">
          {s.tiers.map((tier, i) => (
            <div
              className="ladder-step"
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              key={tier.title}
            >
              <div className="ladder-step-head">
                <span className="ladder-step-num">{tier.step}</span>
                {tier.badge && <span className="ladder-badge">{tier.badge}</span>}
              </div>
              <h3>{tier.title}</h3>
              <p className="ladder-duration">{tier.duration}</p>
              <ul>
                {tier.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="ladder-price">
                <div className="ladder-price-value">{tier.price}</div>
                <div className="ladder-price-note">{tier.priceNote}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="ladder-aligned">{s.aligned}</p>
      </div>
    </section>
  );
}
