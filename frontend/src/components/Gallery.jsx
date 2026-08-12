import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Gallery.css";

export default function Gallery() {
  const g = content.gallery;
  const ref = useReveal();

  return (
    <section id="gallery" ref={ref}>
      <div className="container">
        <p className="eyebrow">{g.eyebrow}</p>
        <h2 className="section-heading">{g.heading}</h2>
        <p className="section-sub">{g.subheading}</p>

        <figure className="gallery-banner" data-reveal>
          <img src={g.banner.src} alt={g.banner.caption} loading="lazy" />
          <figcaption>{g.banner.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
