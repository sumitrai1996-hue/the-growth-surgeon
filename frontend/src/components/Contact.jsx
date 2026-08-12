import { useState } from "react";
import content from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Contact.css";

export default function Contact() {
  const c = content.contact;
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  const whatsappHref = `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappMessage)}`;

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="container contact-grid">
        <div>
          <h2 className="section-heading">{c.heading}</h2>
          <p className="section-sub">{c.subheading}</p>
 <div className="profile-calendly">
  <img src="/profile3.jpeg" alt="Sumit" className="contact-photo" />
  <div className="calendly-cta">
    <span className="calendly-cta-text">Book a 45 min slot</span>
    <a href={c.calendlyUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
      {c.primaryCta}
    </a>
  </div>
</div>
          <div className="contact-links">
            <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={`mailto:${c.email}`}>{c.email}</a>
          </div>

          <p className="contact-footnote">{c.footerNote}</p>
        </div>

        <form className="contact-form" data-reveal onSubmit={handleSubmit}>
          <label>
            Name
            <input required value={form.name} onChange={handleChange("name")} placeholder="Your name" />
          </label>
          <label>
            Email
            <input required type="email" value={form.email} onChange={handleChange("email")} placeholder="you@company.com" />
          </label>
          <label>
            Company
            <input value={form.company} onChange={handleChange("company")} placeholder="Company name" />
          </label>
          <label>
            Message
            <textarea rows="4" value={form.message} onChange={handleChange("message")} placeholder="What's going on with revenue right now?" />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && <p className="contact-status success">Thanks — I'll be in touch within a day.</p>}
          {status === "error" && <p className="contact-status error">Something went wrong. Email me directly at {c.email}.</p>}
        </form>
      </div>
    </section>
  );
}