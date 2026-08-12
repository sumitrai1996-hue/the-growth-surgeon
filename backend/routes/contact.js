import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// In-memory store as a fallback / lightweight log. Swap for a real database
// (Postgres, MongoDB, Airtable, etc.) once you're ready to go beyond a demo.
const submissions = [];

function getTransporter() {
  if (!process.env.SMTP_HOST) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", async (req, res) => {
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const submission = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    company: company ? String(company).slice(0, 200) : "",
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  submissions.push(submission);

  try {
    const transporter = getTransporter();
    if (transporter && process.env.CONTACT_TO_EMAIL) {
      await transporter.sendMail({
        from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: submission.email,
        subject: `New enquiry from ${submission.name}${submission.company ? " · " + submission.company : ""}`,
        text: `Name: ${submission.name}\nEmail: ${submission.email}\nCompany: ${submission.company}\n\nMessage:\n${submission.message}`,
      });
    } else {
      console.log("[contact] SMTP not configured — logging submission instead:", submission);
    }
    res.json({ status: "received" });
  } catch (err) {
    console.error("[contact] failed to send email:", err.message);
    // The submission is still saved above, so nothing is lost even if email fails.
    res.json({ status: "received", warning: "Saved, but email notification failed." });
  }
});

// Lets you sanity-check saved submissions in dev without a database.
router.get("/", (req, res) => {
  res.json({ count: submissions.length, submissions });
});

export default router;
