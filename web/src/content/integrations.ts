/**
 * Integration directory. Nothing here is live yet: every entry is either
 * "planned" (on the roadmap) or "exploring" (under consideration).
 * Update `status` to "available" only once an integration is built and verified.
 */
export type IntegrationStatus = "available" | "planned" | "exploring";

export type IntegrationCategory =
  | "CRM"
  | "Email marketing"
  | "E-commerce"
  | "Analytics"
  | "Productivity"
  | "Automation"
  | "Developer";

export type Integration = {
  id: string;
  name: string;
  category: IntegrationCategory;
  description: string;
  status: IntegrationStatus;
  /** Monogram tile colours; we avoid reproducing third-party logos. */
  color: string;
};

export const integrationCategories: IntegrationCategory[] = [
  "CRM",
  "Email marketing",
  "E-commerce",
  "Analytics",
  "Productivity",
  "Automation",
  "Developer",
];

export const statusLabels: Record<IntegrationStatus, string> = {
  available: "Available",
  planned: "Planned",
  exploring: "Exploring",
};

export const integrations: Integration[] = [
  { id: "hubspot", name: "HubSpot", category: "CRM", description: "Create or update contacts when a lead is captured.", status: "planned", color: "#ff7a59" },
  { id: "salesforce", name: "Salesforce", category: "CRM", description: "Send qualified leads to your sales pipeline.", status: "exploring", color: "#1798c1" },
  { id: "pipedrive", name: "Pipedrive", category: "CRM", description: "Turn conversations into deals automatically.", status: "exploring", color: "#1a1a1a" },
  { id: "mailchimp", name: "Mailchimp", category: "Email marketing", description: "Add opted-in contacts to audiences and tags.", status: "planned", color: "#e8b800" },
  { id: "klaviyo", name: "Klaviyo", category: "Email marketing", description: "Sync subscribers and trigger email flows.", status: "planned", color: "#232426" },
  { id: "convertkit", name: "Kit", category: "Email marketing", description: "Grow creator newsletters from DMs.", status: "exploring", color: "#fb6970" },
  { id: "shopify", name: "Shopify", category: "E-commerce", description: "Share products and look up order status.", status: "planned", color: "#5e8e3e" },
  { id: "woocommerce", name: "WooCommerce", category: "E-commerce", description: "Link store products inside conversations.", status: "exploring", color: "#7f54b3" },
  { id: "stripe", name: "Stripe", category: "E-commerce", description: "Send payment links from a workflow.", status: "exploring", color: "#635bff" },
  { id: "ga4", name: "Google Analytics", category: "Analytics", description: "Attribute site visits to conversations.", status: "planned", color: "#f9ab00" },
  { id: "segment", name: "Segment", category: "Analytics", description: "Stream conversation events to your stack.", status: "exploring", color: "#52bd94" },
  { id: "sheets", name: "Google Sheets", category: "Productivity", description: "Append captured leads to a spreadsheet.", status: "planned", color: "#0f9d58" },
  { id: "slack", name: "Slack", category: "Productivity", description: "Alert your team when a hot lead arrives.", status: "planned", color: "#4a154b" },
  { id: "notion", name: "Notion", category: "Productivity", description: "Log enquiries in a shared database.", status: "exploring", color: "#191919" },
  { id: "calendly", name: "Calendly", category: "Productivity", description: "Offer booking links after qualification.", status: "exploring", color: "#006bff" },
  { id: "zapier", name: "Zapier", category: "Automation", description: "Connect thousands of apps without code.", status: "planned", color: "#ff4f00" },
  { id: "make", name: "Make", category: "Automation", description: "Build multi-step scenarios around conversations.", status: "exploring", color: "#6d00cc" },
  { id: "webhooks", name: "Webhooks", category: "Developer", description: "Send workflow events to any HTTPS endpoint.", status: "planned", color: "#6c4cf1" },
  { id: "api", name: "REST API", category: "Developer", description: "Manage contacts and tags programmatically.", status: "planned", color: "#191820" },
];

export function getIntegrations(ids: string[]) {
  return ids.map((id) => integrations.find((i) => i.id === id)).filter((i): i is Integration => Boolean(i));
}
