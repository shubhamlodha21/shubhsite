import type { LucideIcon } from "lucide-react";
import { HelpCircle, MessageSquareReply, UserPlus, UserRoundCheck } from "lucide-react";
import type { Platform } from "@/components/ui/PlatformIcon";
import type { ConvoStep, FlowStep } from "./types";

export type Scenario = {
  id: string;
  label: string;
  icon: LucideIcon;
  platform: Platform;
  channelName: string;
  trigger: string;
  customerAction: string;
  decision: string;
  outgoing: string;
  benefit: string;
  conversation: ConvoStep[];
  flow: FlowStep[];
};

export const scenarios: Scenario[] = [
  {
    id: "comments",
    label: "Reply to comments",
    icon: MessageSquareReply,
    platform: "instagram",
    channelName: "Terra & Kiln",
    trigger: "Someone comments “PRICE” on a post",
    customerAction: "Jordan comments “PRICE” on the new mug drop.",
    decision: "SocialXReach detects the keyword “price”.",
    outgoing: "“Thanks for your interest! I’ll send you the details in a DM.”",
    benefit: "Every interested commenter gets the link in seconds — no copy-pasting replies by hand.",
    conversation: [
      { type: "comment", author: "jordan.makes", initials: "JM", text: "PRICE", post: "Spring glaze drop" },
      { type: "event", text: "Keyword “price” detected", tone: "coral" },
      { type: "bubble", from: "brand", text: "Thanks for your interest! I’ll send you the details in a DM." },
      { type: "bubble", from: "brand", text: "Hi Jordan! The Terra mug is part of our spring drop. Here’s the link:" },
      { type: "link", title: "Terra Mug — Speckled Sand", subtitle: "Handmade stoneware", cta: "View product" },
    ],
    flow: [
      { kind: "trigger", title: "Comment on post", detail: "Spring glaze drop" },
      { kind: "condition", title: "Contains “price”", detail: "Also: cost, how much" },
      { kind: "message", title: "Public reply + DM", detail: "Sends product link" },
      { kind: "action", title: "Tag: interested", detail: "Segment: spring-drop" },
    ],
  },
  {
    id: "followers",
    label: "Welcome new followers",
    icon: UserPlus,
    platform: "instagram",
    channelName: "Coach Rivera",
    trigger: "A new follower messages after following",
    customerAction: "Sam follows the account and taps “Say hi”.",
    decision: "SocialXReach checks Sam isn’t already tagged as a subscriber.",
    outgoing: "“Welcome! Want the free 7-day starter plan?”",
    benefit: "New followers get a warm first touch and a reason to stay — automatically.",
    conversation: [
      { type: "event", text: "New conversation from a recent follower", tone: "brand" },
      { type: "bubble", from: "customer", text: "Hey! Just found your page" },
      { type: "bubble", from: "brand", text: "Welcome, Sam! Glad you’re here. Want my free 7-day starter plan?" },
      { type: "quick", options: ["Yes, send it", "Maybe later"], selected: "Yes, send it" },
      { type: "link", title: "7-Day Starter Plan", subtitle: "PDF guide · 12 pages", cta: "Open guide" },
    ],
    flow: [
      { kind: "trigger", title: "New follower conversation" },
      { kind: "condition", title: "Not tagged “subscriber”" },
      { kind: "message", title: "Welcome + offer", detail: "Quick replies" },
      { kind: "action", title: "Tag: subscriber", detail: "Starts nurture sequence" },
    ],
  },
  {
    id: "leads",
    label: "Capture leads",
    icon: UserRoundCheck,
    platform: "messenger",
    channelName: "Northline Studio",
    trigger: "A visitor asks for a quote",
    customerAction: "Priya messages “I’d like a quote for a new website”.",
    decision: "SocialXReach asks two qualifying questions and checks the budget.",
    outgoing: "“Great — what’s the best email to send your proposal to?”",
    benefit: "Qualified enquiries arrive with context, so your team can follow up with confidence.",
    conversation: [
      { type: "bubble", from: "customer", text: "Hi, I’d like a quote for a new website" },
      { type: "bubble", from: "brand", text: "Happy to help! Roughly what budget do you have in mind?" },
      { type: "quick", options: ["Under $2k", "$2k–$10k", "$10k+"], selected: "$2k–$10k" },
      { type: "bubble", from: "brand", text: "Great — what’s the best email to send your proposal to?" },
      { type: "bubble", from: "customer", text: "priya@example.com" },
      { type: "event", text: "Tagged: qualified lead", tone: "mint" },
    ],
    flow: [
      { kind: "trigger", title: "Message contains “quote”" },
      { kind: "message", title: "Ask budget", detail: "3 quick replies" },
      { kind: "condition", title: "Budget ≥ $2k" },
      { kind: "action", title: "Save email + tag lead", detail: "Notify sales inbox" },
    ],
  },
  {
    id: "faq",
    label: "Answer FAQs",
    icon: HelpCircle,
    platform: "whatsapp",
    channelName: "Olive Street Café",
    trigger: "A customer asks a common question",
    customerAction: "Alex asks “Are you open on Sunday?”",
    decision: "SocialXReach matches the question to your approved opening-hours answer.",
    outgoing: "“Yes! We’re open 9am–3pm on Sundays. Want to reserve a table?”",
    benefit: "Customers get accurate answers any time, and tricky questions go to a person.",
    conversation: [
      { type: "bubble", from: "customer", text: "Are you open on Sunday?" },
      { type: "event", text: "Matched FAQ: Opening hours", tone: "brand" },
      { type: "bubble", from: "brand", text: "Yes! We’re open 9am–3pm on Sundays. Want to reserve a table?" },
      { type: "quick", options: ["Reserve a table", "Talk to staff"], selected: "Reserve a table" },
      { type: "bubble", from: "brand", text: "Lovely — how many people should we expect?" },
    ],
    flow: [
      { kind: "trigger", title: "Incoming message" },
      { kind: "ai", title: "Match approved FAQ", detail: "Source: Opening hours" },
      { kind: "message", title: "Send answer", detail: "Offer next step" },
      { kind: "condition", title: "Unsure? → hand off", detail: "Route to staff inbox" },
    ],
  },
];
