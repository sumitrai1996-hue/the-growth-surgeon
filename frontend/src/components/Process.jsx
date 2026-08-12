import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Process.css";

export default function Process() {
  const p = content.process;
  const ref = useReveal();

  return (
    <section id="process" ref={ref}>
      <div className="container">
        <p className="eyebrow">{p.eyebrow}</p>
        <h2 className="section-heading">{p.heading}</h2>
        <p className="section-sub">{p.subheading}</p>

        <div className="timeline">
          {p.phases.map((phase, i) => (
            <div className="timeline-item" data-reveal style={{ transitionDelay: `${i * 90}ms` }} key={phase.title}>
              <div className="timeline-range">{phase.range}</div>
              <div className="timeline-dot" />
              <span className="timeline-tag">{phase.tag}</span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
              <p className="timeline-deliverable">
                <strong>You get:</strong> {phase.deliverable}
              </p>
            </div>
          ))}
        </div>

        <p className="timeline-cadence">{p.cadence}</p>
      </div>
    </section>
  );
}
