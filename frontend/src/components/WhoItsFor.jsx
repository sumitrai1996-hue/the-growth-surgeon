import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./WhoItsFor.css";

export default function WhoItsFor() {
  const w = content.who;
  const ref = useReveal();
  return (
    <section id="who" ref={ref}>
      <div className="container">
        <p className="eyebrow">{w.eyebrow}</p>
        <h2 className="section-heading">{w.heading}</h2>
        <p className="section-sub">{w.subheading}</p>

        <div className="who-grid">
          {w.segments.map((s, i) => (
            <div className="who-card" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={s.title}>
              <span className="who-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>

        <p className="who-notfit">{w.notAFit}</p>
      </div>
    </section>
  );
}
