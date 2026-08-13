// ============================================================================
// SITE CONTENT — sourced from thegrowthsurgeon.co.in
// Edit anything here; components read from this file only.
// ============================================================================

const content = {
  brand: {
    name: "The Growth Surgeon",
    title: "Sales & Business Growth Consultant",
    tagline: "Diagnose · Fix · Grow",
    logoInitials: "GS",
  },

  meta: {
    pageTitle: "The Growth Surgeon | Sales & Business Growth Consultant",
    description: "The Growth Surgeon — Sales & Business Growth Consultant. Build a sales engine that actually grows.",
  },

  nav: {
    links: [
      { label: "Who it's for", href: "#who" },
      { label: "What I do", href: "#services" },
      { label: "Impact", href: "#impact" },
      { label: "How it works", href: "#process" },
      { label: "Profile", href: "#about" },
    ],
    cta: "Book a Growth Call",
  },

  announcement: "Sales & Business Growth Consultant · Diagnose · Fix · Grow",

  hero: {
    eyebrow: "Sales & Business Growth Consultant",
    headline: "Build a sales engine that actually",
    headlineEmphasis: "grows",
    headlineEnd: ".",
    subhead: "I help growing businesses improve sales, team performance and go-to-market execution.",
    primaryCta: "Book a Growth Call →",
    secondaryCta: "See what I do",
    stats: [
      { value: "10+ Years", label: "Sales & Business Development leadership" },
      { value: "0 → 1000+", label: "team scale experience" },
      { value: "₹25K → ₹20L", label: "daily collection scale-up experience" },
      { value: "2500+", label: "field force operations experience" },
    ],
    quote: "They don't need more advice. They need systems that make growth happen.",
    quoteAttribution: "Sumit Kumar Rai · The Growth Surgeon",
  },

  who: {
    eyebrow: "The problem",
    heading: "Growth is rarely just a lead problem",
    subheading: "You may have the product, market and team. But if sales or execution isn't working, growth gets stuck.",
    segments: [
      {
        tag: "01 · Sales",
        title: "Sales aren't growing",
        description: "You have a team, but revenue is not moving at the pace it should.",
      },
      {
        tag: "02 · Process",
        title: "Sales depends on people",
        description: "Your process works only when a few strong individuals are driving it.",
      },
      {
        tag: "03 · Team",
        title: "Productivity is stuck",
        description: "The team is busy, but output, accountability and performance aren't improving.",
      },
      {
        tag: "04 · GTM",
        title: "You want to expand",
        description: "You want new markets, territories or segments but need to know what to fix first.",
      },
    ],
    notAFit: "Practical strategy backed by execution — not advice that stays inside a presentation.",
  },

  services: {
    eyebrow: "What I do",
    heading: "Three levers. One goal: better growth.",
    subheading: "Practical strategy backed by execution — not advice that stays inside a presentation.",
    tiers: [
      {
        step: "01",
        badge: "Sales Growth",
        title: "Build a predictable sales process",
        duration: "Sales process & pipeline discipline",
        bullets: [
          "Clearer sales stages, end to end",
          "Stronger conversion at every step",
          "Better pipeline discipline and visibility",
          "A repeatable sales motion, not a one-off push",
        ],
        price: "Scoped on a call",
        priceNote: "engagement shaped around your sales stage",
      },
      {
        step: "02",
        badge: "Sales Teams",
        title: "Make teams more productive",
        duration: "Structure, coaching & accountability",
        bullets: [
          "Clearer team structure and roles",
          "Coaching built into the operating rhythm",
          "Accountability that's visible, not implied",
          "Productivity and performance across the org",
        ],
        price: "Scoped on a call",
        priceNote: "engagement shaped around your team size",
      },
      {
        step: "03",
        badge: "Go-to-Market",
        title: "Turn expansion into execution",
        duration: "New markets, territories & segments",
        bullets: [
          "Practical strategy for new markets or territories",
          "Segment-by-segment prioritization",
          "What to fix before you expand",
          "Execution plan, not just a strategy deck",
        ],
        price: "Scoped on a call",
        priceNote: "engagement shaped around your expansion plan",
      },
    ],
    aligned: "Diagnose · Build · Execute · Scale — the same operating approach behind all three.",
  },

  impact: {
    eyebrow: "Impact",
    heading: "Strategy backed by execution",
    subheading: "Experience across Sales, Business Development, B2C, B2B, SaaS, EdTech, Media and Subscription businesses.",
    stats: [
      { tag: "Leadership", value: "10+ Years", label: "Sales & Business Development leadership" },
      { tag: "Team scale", value: "0 → 1000+", label: "Large-scale sales team building experience" },
      { tag: "Collections", value: "₹25K → ₹20L", label: "Daily collection scale-up experience" },
      { tag: "Operations", value: "2500+", label: "Field force / large-scale sales operations" },
    ],
  },

  gallery: {
    eyebrow: "In action",
    heading: "On stage, in the room, on the tools",
    subheading: "Workshops, leadership talks and hands-on working sessions with sales teams and founders.",
    banner: { src: "/profile2.jpeg", caption: "Working through strategy with clients" },
  },

  process: {
    eyebrow: "How it works",
    heading: "Diagnose. Build. Execute. Scale.",
    subheading: "A simple operating approach that moves from finding the bottleneck to making what's working repeatable.",
    phases: [
      {
        range: "01",
        tag: "Diagnose",
        title: "Find the bottleneck",
        description: "Understand what is actually blocking sales, team performance or GTM execution.",
        deliverable: "A clear, evidence-based view of what's really holding growth back",
      },
      {
        range: "02",
        tag: "Build",
        title: "Create the system",
        description: "Build the right sales process, structure, metrics, playbooks and growth priorities.",
        deliverable: "Sales process, structure and playbooks built around your business",
      },
      {
        range: "03",
        tag: "Execute",
        title: "Work with the team",
        description: "Put the strategy into action through reviews, coaching, accountability and operating cadence.",
        deliverable: "A working cadence of reviews, coaching and accountability",
      },
    ],
    cadence: "The goal throughout: move from finding the bottleneck to making what's working repeatable — so growth scales.",
  },

  about: {
    eyebrow: "Profile",
    heading: "Sumit Kumar Rai",
    subheading: "Sales & Business Growth Consultant",
    body: "With 10+ years of experience across Sales, Business Development, B2C, B2B, SaaS, EdTech, Media and Subscription businesses, Sumit has spent his career building teams, improving sales performance and driving business growth. He works at the intersection of sales strategy and execution — helping businesses identify what is holding growth back, then building the systems, team rhythm and accountability needed to move forward.",
    credentials: [
      { value: "Sales Strategy", label: "Strategy & execution" },
      { value: "Team Performance", label: "Structure & accountability" },
      { value: "GTM Strategy", label: "Markets & territories" },
      { value: "Revenue Systems", label: "Predictable growth" },
    ],
  },

  faq: null,

 contact: {
    heading: "Is your growth stuck?",
    subheading: "Let's find out what's holding it back. Pick a convenient time and book a focused growth conversation.",
    primaryCta: "Open Calendly →",
    email: "thegrowthsurgeon.co.in", 
    phone: "+91 82797 17992",
    whatsappNumber: "918279717992",
    whatsappMessage: "Hi Sumit, found you via thegrowthsurgeon.co.in — I'd like to talk about our sales growth.",
    calendlyUrl: "https://calendly.com/thegrowthsurgeon-uchx/30min",
    linkedin: "https://www.linkedin.com/in/the-growth-surgeon",
    instagram: "https://www.instagram.com/the.growth.surgeon?igsh=bmVzZXNyODI2azE0&utm_source=qr",
    footerNote: "Sales Growth · Sales Teams · GTM · Revenue Growth Systems",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} The Growth Surgeon`,
  },
};

export default content;
