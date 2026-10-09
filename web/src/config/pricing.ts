/**
 * Central pricing configuration.
 * All prices, limits and entitlements on the site are read from here.
 * The values below are DEMO placeholders — replace them before launch.
 */

export type BillingCycle = "monthly" | "annual";

export type Plan = {
  id: "free" | "starter" | "pro" | "business";
  name: string;
  summary: string;
  /** Price per month when billed monthly. `null` = custom / contact sales. */
  monthly: number | null;
  /** Effective price per month when billed annually. */
  annual: number | null;
  contacts: string;
  highlights: string[];
  cta: { label: string; href: string };
  recommended?: boolean;
};

export const pricingConfig = {
  currency: "USD",
  locale: "en-US",
  isDemo: true,
  demoNotice:
    "Demo pricing: these plans and prices are placeholders for illustration and are not a commercial offer.",
  annualSavingsLabel: "Save 20%",
  plans: [
    {
      id: "free",
      name: "Free",
      summary: "Try automation on one channel.",
      monthly: 0,
      annual: 0,
      contacts: "Up to 500 contacts",
      highlights: [
        "1 connected channel",
        "3 active automations",
        "Comment & DM keyword triggers",
        "Unified inbox",
        "SocialXReach branding on messages",
      ],
      cta: { label: "Start for free", href: "/signup?plan=free" },
    },
    {
      id: "starter",
      name: "Starter",
      summary: "For creators getting serious.",
      monthly: 19,
      annual: 15,
      contacts: "Up to 2,500 contacts",
      highlights: [
        "2 connected channels",
        "Unlimited automations",
        "Lead capture forms",
        "Tags and segments",
        "Remove SocialXReach branding",
      ],
      cta: { label: "Start free trial", href: "/signup?plan=starter" },
    },
    {
      id: "pro",
      name: "Pro",
      summary: "For growing brands and small teams.",
      monthly: 49,
      annual: 39,
      contacts: "Up to 10,000 contacts",
      highlights: [
        "All supported channels",
        "AI replies from your knowledge",
        "Broadcasts and sequences",
        "3 team seats",
        "Analytics and conversion tracking",
      ],
      cta: { label: "Start free trial", href: "/signup?plan=pro" },
      recommended: true,
    },
    {
      id: "business",
      name: "Business",
      summary: "For agencies and multi-brand teams.",
      monthly: null,
      annual: null,
      contacts: "Custom contact volume",
      highlights: [
        "Multiple workspaces",
        "Unlimited team seats",
        "Roles and permissions",
        "Advanced AI controls",
        "Priority support",
      ],
      cta: { label: "Talk to us", href: "/contact?topic=sales" },
    },
  ] satisfies Plan[],
};

/** `true` = included, `false` = not included, string = specific allowance */
export type Entitlement = boolean | string;

export type ComparisonRow = {
  feature: string;
  note?: string;
  values: Record<Plan["id"], Entitlement>;
};

export type ComparisonGroup = { title: string; rows: ComparisonRow[] };

export const comparison: ComparisonGroup[] = [
  {
    title: "Usage & contacts",
    rows: [
      { feature: "Contacts", values: { free: "500", starter: "2,500", pro: "10,000", business: "Custom" } },
      { feature: "Active automations", values: { free: "3", starter: "Unlimited", pro: "Unlimited", business: "Unlimited" } },
      { feature: "Broadcast messages / month", values: { free: false, starter: "5,000", pro: "25,000", business: "Custom" } },
    ],
  },
  {
    title: "Channels",
    rows: [
      { feature: "Instagram", values: { free: true, starter: true, pro: true, business: true } },
      { feature: "Facebook Messenger", values: { free: true, starter: true, pro: true, business: true } },
      {
        feature: "WhatsApp",
        note: "Requires a WhatsApp Business account and provider approval",
        values: { free: false, starter: true, pro: true, business: true },
      },
      {
        feature: "TikTok",
        note: "Limited to capabilities supported by TikTok's APIs",
        values: { free: false, starter: false, pro: true, business: true },
      },
      { feature: "Connected channels", values: { free: "1", starter: "2", pro: "All supported", business: "All supported" } },
    ],
  },
  {
    title: "Automation",
    rows: [
      { feature: "Visual workflow builder", values: { free: true, starter: true, pro: true, business: true } },
      { feature: "Keyword & comment triggers", values: { free: true, starter: true, pro: true, business: true } },
      { feature: "Conditions, delays & branches", values: { free: false, starter: true, pro: true, business: true } },
      { feature: "Template library", values: { free: "Basic", starter: "Full", pro: "Full", business: "Full + custom" } },
      { feature: "Sequences & follow-ups", values: { free: false, starter: true, pro: true, business: true } },
    ],
  },
  {
    title: "AI features",
    rows: [
      { feature: "AI-suggested replies", values: { free: false, starter: true, pro: true, business: true } },
      { feature: "AI answers from your knowledge", values: { free: false, starter: false, pro: true, business: true } },
      { feature: "Human hand-off rules", values: { free: false, starter: false, pro: true, business: true } },
      { feature: "AI conversation review", values: { free: false, starter: false, pro: false, business: true } },
    ],
  },
  {
    title: "Team",
    rows: [
      { feature: "Team seats", values: { free: "1", starter: "1", pro: "3", business: "Unlimited" } },
      { feature: "Workspaces", values: { free: "1", starter: "1", pro: "1", business: "Multiple" } },
      { feature: "Roles & permissions", values: { free: false, starter: false, pro: false, business: true } },
    ],
  },
  {
    title: "Integrations",
    rows: [
      { feature: "Google Sheets export", values: { free: false, starter: true, pro: true, business: true } },
      { feature: "Webhooks", values: { free: false, starter: false, pro: true, business: true } },
      { feature: "CRM & e-commerce connectors", values: { free: false, starter: false, pro: true, business: true } },
      { feature: "API access", values: { free: false, starter: false, pro: false, business: true } },
    ],
  },
  {
    title: "Analytics & support",
    rows: [
      { feature: "Automation analytics", values: { free: "Basic", starter: "Standard", pro: "Advanced", business: "Advanced" } },
      { feature: "Conversion tracking", values: { free: false, starter: false, pro: true, business: true } },
      { feature: "Support", values: { free: "Help center", starter: "Email", pro: "Priority email", business: "Dedicated contact" } },
    ],
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(pricingConfig.locale, {
    style: "currency",
    currency: pricingConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
