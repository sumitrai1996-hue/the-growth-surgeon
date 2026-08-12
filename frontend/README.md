# Consultancy Website — Frontend + Backend

A fractional-advisor / consultancy website (React + Node/Express), modeled on
the fractional-cro.in layout: hero, who-it's-for, pricing tiers, process
timeline, case studies, an interactive "will you hit target" calculator, FAQ,
and a working contact form.

**Everything is placeholder content.** Before you launch, edit one file:
`frontend/src/data/content.js` — it's the single source of truth for every
piece of text on the site (name, services, pricing, case studies, contact
info). You shouldn't need to touch any component file just to update copy.

## Project structure

```
consultancy-site/
├── frontend/          React app (Vite)
│   └── src/
│       ├── data/content.js     ← edit all site copy here
│       ├── components/         one file per section + its .css
│       └── App.jsx
└── backend/           Node/Express API
    ├── server.js
    └── routes/
        ├── contact.js     POST /api/contact   (contact form → email)
        └── calculate.js   POST /api/calculate (pipeline/target math)
```

## Running it locally

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env    # then fill in SMTP details (see below)
npm run dev              # runs on http://localhost:4000
```

**Email setup (optional but recommended):** the contact form works without
any email configuration — submissions are logged to the server console and
kept in memory. To actually receive emails, fill in `.env`:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — your email provider's
  SMTP credentials (Gmail needs an "App Password", not your normal password)
- `CONTACT_TO_EMAIL` — where form submissions should be sent

### 2. Frontend

```bash
cd frontend
npm install
npm run dev               # runs on http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to the backend automatically
(see `frontend/vite.config.js`), so just open http://localhost:5173.

## Customizing the site

1. Open `frontend/src/data/content.js`
2. Replace every `[bracketed placeholder]` with the real details —
   name, niche, target client, pricing, case studies, contact info
3. Swap the color/typography tokens in `frontend/src/index.css` (`:root`)
   if you want a different look — search for `--accent` to change the
   gold/brass accent color site-wide
4. Add a real headshot/logo image to `frontend/public/` and reference it
   from `About.jsx` if you want a photo

## Deploying

- **Frontend:** `npm run build` in `frontend/` produces a static `dist/`
  folder — deploy it to Vercel, Netlify, Cloudflare Pages, or any static host.
- **Backend:** deploy `backend/` to Render, Railway, Fly.io, or a small VPS.
  Set the environment variables from `.env.example` in your host's dashboard,
  and set `FRONTEND_ORIGIN` to your deployed frontend's URL (for CORS).
- Point the frontend's API calls at your deployed backend URL if they're on
  different domains (edit the `fetch("/api/...")` calls in `Calculator.jsx`
  and `Contact.jsx`, or set up a reverse proxy).

## What's included

- Responsive, mobile-friendly layout (dark, editorial theme — brass/gold
  accent, serif display type paired with a clean sans body)
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Working contact form → backend → email notification
- Interactive revenue/target calculator with server-side calculation
  (and a client-side fallback if the API is briefly unreachable)
- Rate limiting on the API to reduce spam
