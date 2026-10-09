import type { Platform } from "@/components/ui/PlatformIcon";
import type { FlowStep } from "./types";

export type TemplateCategory = "Lead generation" | "Sales" | "Engagement" | "Support";

export type AutomationTemplate = {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  channels: Platform[];
  audience: ("creators" | "ecommerce" | "agencies" | "marketing-teams")[];
  steps: FlowStep[];
};

export const templateCategories: TemplateCategory[] = ["Lead generation", "Sales", "Engagement", "Support"];

export const templates: AutomationTemplate[] = [
  {
    id: "comment-to-dm",
    name: "Comment-to-DM link",
    description: "Reply to a keyword comment and send the link privately.",
    category: "Sales",
    channels: ["instagram"],
    audience: ["creators", "ecommerce"],
    steps: [
      { kind: "trigger", title: "Comment contains keyword" },
      { kind: "message", title: "Public reply" },
      { kind: "message", title: "DM with link" },
    ],
  },
  {
    id: "lead-magnet",
    name: "Free guide lead magnet",
    description: "Deliver a freebie in exchange for an email address.",
    category: "Lead generation",
    channels: ["instagram", "messenger"],
    audience: ["creators", "marketing-teams"],
    steps: [
      { kind: "trigger", title: "Keyword “GUIDE”" },
      { kind: "message", title: "Ask for email" },
      { kind: "action", title: "Save + send guide" },
    ],
  },
  {
    id: "welcome-follower",
    name: "New follower welcome",
    description: "Greet people who start a conversation after following.",
    category: "Engagement",
    channels: ["instagram"],
    audience: ["creators"],
    steps: [
      { kind: "trigger", title: "New follower conversation" },
      { kind: "message", title: "Welcome message" },
      { kind: "action", title: "Tag: new follower" },
    ],
  },
  {
    id: "quote-qualifier",
    name: "Quote request qualifier",
    description: "Ask budget and timeline before passing to sales.",
    category: "Lead generation",
    channels: ["messenger", "whatsapp"],
    audience: ["agencies", "marketing-teams"],
    steps: [
      { kind: "trigger", title: "Message contains “quote”" },
      { kind: "condition", title: "Budget check" },
      { kind: "action", title: "Notify sales" },
    ],
  },
  {
    id: "order-status",
    name: "Order status helper",
    description: "Answer “where is my order?” and route exceptions.",
    category: "Support",
    channels: ["whatsapp", "messenger"],
    audience: ["ecommerce"],
    steps: [
      { kind: "trigger", title: "Order question detected" },
      { kind: "message", title: "Ask order number" },
      { kind: "condition", title: "Needs a person?" },
    ],
  },
  {
    id: "faq-ai",
    name: "AI FAQ assistant",
    description: "Answer common questions from approved business info.",
    category: "Support",
    channels: ["instagram", "messenger", "whatsapp"],
    audience: ["ecommerce", "marketing-teams", "agencies"],
    steps: [
      { kind: "trigger", title: "Incoming question" },
      { kind: "ai", title: "Answer from knowledge" },
      { kind: "condition", title: "Low confidence → hand off" },
    ],
  },
  {
    id: "giveaway",
    name: "Giveaway entry",
    description: "Confirm entries and share the rules by DM.",
    category: "Engagement",
    channels: ["instagram", "tiktok"],
    audience: ["creators", "ecommerce"],
    steps: [
      { kind: "trigger", title: "Comment “ENTER”" },
      { kind: "message", title: "Confirm + rules" },
      { kind: "action", title: "Tag: giveaway entrant" },
    ],
  },
  {
    id: "abandoned-question",
    name: "Product question follow-up",
    description: "Check in after a shopper asks about a product.",
    category: "Sales",
    channels: ["instagram", "messenger"],
    audience: ["ecommerce"],
    steps: [
      { kind: "trigger", title: "Product question" },
      { kind: "delay", title: "Wait 24 hours" },
      { kind: "message", title: "Helpful follow-up" },
    ],
  },
  {
    id: "event-rsvp",
    name: "Event RSVP",
    description: "Collect RSVPs and send reminders before the day.",
    category: "Engagement",
    channels: ["messenger", "whatsapp"],
    audience: ["marketing-teams", "agencies"],
    steps: [
      { kind: "trigger", title: "Keyword “RSVP”" },
      { kind: "action", title: "Save attendee" },
      { kind: "delay", title: "Reminder 1 day before" },
    ],
  },
  {
    id: "booking",
    name: "Consultation booking",
    description: "Qualify, then share a booking link with good-fit leads.",
    category: "Lead generation",
    channels: ["instagram", "messenger", "whatsapp"],
    audience: ["agencies", "creators"],
    steps: [
      { kind: "trigger", title: "“Book a call” tapped" },
      { kind: "condition", title: "Qualifying questions" },
      { kind: "message", title: "Send booking link" },
    ],
  },
  {
    id: "tiktok-lead",
    name: "TikTok bio-link capture",
    description: "Continue a TikTok-driven journey on a supported channel.",
    category: "Lead generation",
    channels: ["tiktok", "instagram"],
    audience: ["creators"],
    steps: [
      { kind: "trigger", title: "Supported engagement event" },
      { kind: "message", title: "Offer resource" },
      { kind: "action", title: "Capture contact" },
    ],
  },
  {
    id: "client-report",
    name: "Agency weekly digest",
    description: "Summarise leads per client workspace each week.",
    category: "Support",
    channels: ["instagram", "messenger"],
    audience: ["agencies"],
    steps: [
      { kind: "trigger", title: "Every Monday" },
      { kind: "action", title: "Collect lead counts" },
      { kind: "message", title: "Send digest to team" },
    ],
  },
];
