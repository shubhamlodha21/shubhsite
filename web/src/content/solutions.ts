import type { Platform } from "@/components/ui/PlatformIcon";
import type { FAQ } from "./types";

export type Solution = {
  slug: "creators" | "ecommerce" | "agencies" | "marketing-teams";
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaDescription: string;
  bg: string;
  pains: string[];
  plays: { title: string; text: string }[];
  channels: Platform[];
  templateIds: string[];
  faqs: FAQ[];
};

export const solutions: Solution[] = [
  {
    slug: "creators",
    name: "Creators",
    eyebrow: "For creators",
    title: "Grow an audience that actually talks back.",
    intro:
      "Deliver freebies, answer “link?” comments and turn followers into subscribers and clients — while you focus on making things.",
    metaDescription: "SocialXReach for creators: automate comment replies, deliver freebies and grow your email list from social DMs.",
    bg: "bg-lilac/70",
    pains: [
      "Hundreds of “link?” comments under every post",
      "No easy way to grow an email list from Instagram",
      "Brand and coaching enquiries buried in DMs",
    ],
    plays: [
      { title: "Comment-to-DM resources", text: "Ask people to comment a word and send the link privately." },
      { title: "Lead magnets", text: "Trade a guide or preset for an email address, with consent." },
      { title: "Welcome sequences", text: "Make new followers feel seen with a warm first message." },
      { title: "Enquiry sorting", text: "Tag brand deals and coaching requests so you never miss them." },
    ],
    channels: ["instagram", "tiktok", "messenger"],
    templateIds: ["comment-to-dm", "lead-magnet", "welcome-follower", "giveaway"],
    faqs: [
      {
        question: "Will automated replies feel robotic?",
        answer: "You write every message in your own voice. Templates are starting points, not scripts.",
      },
      {
        question: "Can I connect my email platform?",
        answer: "Email marketing integrations such as Mailchimp and Kit are on the roadmap. Until then, you can export contacts.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    eyebrow: "For e-commerce",
    title: "Turn product questions into purchases.",
    intro:
      "Answer sizing and shipping questions instantly, share the right product link in DMs and follow up thoughtfully with interested shoppers.",
    metaDescription: "SocialXReach for e-commerce brands: answer product questions, share product links and support purchase journeys in DMs.",
    bg: "bg-peach/70",
    pains: [
      "Shoppers asking “price?” and leaving before you reply",
      "The same shipping and returns questions every day",
      "No visibility into which posts drive sales",
    ],
    plays: [
      { title: "Product link delivery", text: "Reply to comments with the exact product card." },
      { title: "Shipping and returns FAQs", text: "Answer the top questions from your own policy text." },
      { title: "Order status help", text: "Collect an order number and point to tracking." },
      { title: "Considerate follow-ups", text: "Check in once if a shopper goes quiet after asking." },
    ],
    channels: ["instagram", "whatsapp", "messenger"],
    templateIds: ["comment-to-dm", "order-status", "abandoned-question", "faq-ai"],
    faqs: [
      {
        question: "Does SocialXReach connect to my store?",
        answer: "A Shopify integration is planned so you can share products and look up orders. It is not available yet.",
      },
      {
        question: "Can I track sales from conversations?",
        answer: "Conversion tracking through tagged links is planned for Pro and Business plans.",
      },
    ],
  },
  {
    slug: "agencies",
    name: "Agencies",
    eyebrow: "For agencies",
    title: "Run conversational campaigns for every client.",
    intro:
      "Keep each client in its own workspace, reuse proven workflows and report on leads with consistent structure across accounts.",
    metaDescription: "SocialXReach for agencies: manage multiple client workspaces, reuse workflow templates and report on leads.",
    bg: "bg-mint/70",
    pains: [
      "Rebuilding the same flows for every new client",
      "Messy hand-overs between account managers",
      "Inconsistent lead data across accounts",
    ],
    plays: [
      { title: "Client workspaces", text: "Separate channels, contacts and team access per client." },
      { title: "Reusable templates", text: "Save your best workflows and roll them out in minutes." },
      { title: "Roles and permissions", text: "Give clients view access without risking live automations." },
      { title: "Weekly digests", text: "Send a structured lead summary to each account owner." },
    ],
    channels: ["instagram", "messenger", "whatsapp"],
    templateIds: ["quote-qualifier", "booking", "client-report", "event-rsvp"],
    faqs: [
      {
        question: "Is there agency pricing?",
        answer: "The Business plan is designed for multi-workspace teams. Talk to us about your client count.",
      },
      {
        question: "Can clients log in?",
        answer: "Role-based access is planned so clients can view results without editing workflows.",
      },
    ],
  },
  {
    slug: "marketing-teams",
    name: "Marketing teams",
    eyebrow: "For marketing teams",
    title: "Capture demand the moment it shows up.",
    intro:
      "Qualify prospects in the conversation, route them to the right owner and improve response consistency across every campaign.",
    metaDescription: "SocialXReach for marketing teams: capture and qualify leads from social conversations and route them to sales.",
    bg: "bg-sun/70",
    pains: [
      "Social leads that never reach the CRM",
      "Slow, inconsistent responses across the team",
      "No clear view of which campaigns create pipeline",
    ],
    plays: [
      { title: "Conversational qualification", text: "Ask budget, timeline and use case before hand-off." },
      { title: "Campaign keywords", text: "Give each campaign its own trigger and tag." },
      { title: "Sales routing", text: "Notify the right owner with full conversation context." },
      { title: "Event and webinar RSVPs", text: "Collect registrations and send reminders." },
    ],
    channels: ["instagram", "messenger", "whatsapp"],
    templateIds: ["quote-qualifier", "lead-magnet", "event-rsvp", "faq-ai"],
    faqs: [
      {
        question: "Can leads go to our CRM?",
        answer: "HubSpot is planned first, with others under consideration. Webhooks are planned for custom routing.",
      },
      {
        question: "How do we keep messaging on-brand?",
        answer: "Shared templates, review permissions and AI tone settings help keep every reply consistent.",
      },
    ],
  },
];

export function getSolution(slug: Solution["slug"]) {
  const s = solutions.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown solution: ${slug}`);
  return s;
}
