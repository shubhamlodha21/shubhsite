/**
 * Central brand + link configuration.
 * Rename the product, swap destinations or add social links here.
 */
export const site = {
  name: "SocialXReach",
  tagline: "Turn every conversation into an opportunity.",
  description:
    "SocialXReach helps creators, brands and agencies automate social conversations, capture leads and turn engagement into customers — no coding required.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  copyrightYear: 2026,

  links: {
    signup: "/signup",
    signin: "/signin",
    pricing: "/pricing",
    product: "/product",
    contact: "/contact",
    templates: "/templates",
    integrations: "/integrations",
  },

  /** The existing FastAPI backend (../backend) stores contact form submissions. */
  apiBase: process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000",

  /** Social links are only rendered when at least one is configured. */
  social: [] as { label: string; href: string }[],

  languages: [
    { code: "en", label: "English" },
  ],
} as const;

export type SiteConfig = typeof site;
