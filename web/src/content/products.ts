import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  BellRing,
  BookOpen,
  Bot,
  CircleHelp,
  ClipboardList,
  Eye,
  Hash,
  Headphones,
  Heart,
  Link2,
  MessageSquareReply,
  ShieldCheck,
  Sparkles,
  UserPlus,
  UserRoundCheck,
  Users,
  Video,
} from "lucide-react";
import type { Platform } from "@/components/ui/PlatformIcon";
import type { ConvoStep, FAQ, FlowStep } from "./types";

export type Product = {
  slug: "instagram" | "whatsapp" | "messenger" | "tiktok" | "ai";
  name: string;
  shortName: string;
  platform?: Platform;
  eyebrow: string;
  title: string;
  intro: string;
  metaDescription: string;
  availability: string;
  hero: { channelName: string; initials: string; platform: Platform; conversation: ConvoStep[] };
  useCases: { icon: LucideIcon; title: string; text: string }[];
  workflow: { name: string; description: string; steps: FlowStep[] };
  features: { title: string; text: string }[];
  setup: { title: string; text: string }[];
  integrations: string[];
  faqs: FAQ[];
};

export const products: Product[] = [
  {
    slug: "instagram",
    name: "Instagram automation",
    shortName: "Instagram",
    platform: "instagram",
    eyebrow: "Instagram automation",
    title: "Turn comments and DMs into customers.",
    intro:
      "Reply to comments, continue the conversation in DMs, welcome people who reach out and share the right link at the right moment — automatically.",
    metaDescription: "Automate Instagram comment replies, DMs, story replies and keyword-triggered conversations with SocialXReach.",
    availability:
      "Requires an Instagram professional (Business or Creator) account. Automations follow Instagram’s messaging rules, including the window in which businesses can reply.",
    hero: {
      channelName: "Bloom Studio",
      initials: "BS",
      platform: "instagram",
      conversation: [
        { type: "comment", author: "ava.plants", initials: "AP", text: "GUIDE please!", post: "Care tips for monstera" },
        { type: "event", text: "Keyword “guide” matched", tone: "coral" },
        { type: "bubble", from: "brand", text: "Hi Ava! Here’s our free plant-care guide. Want care reminders too?" },
        { type: "quick", options: ["Yes please", "Just the guide"], selected: "Yes please" },
        { type: "event", text: "Tagged: plant-care-subscriber", tone: "mint" },
      ],
    },
    useCases: [
      { icon: MessageSquareReply, title: "Automated comment replies", text: "Reply publicly to comments with a keyword and follow up privately." },
      { icon: AtSign, title: "Direct message automation", text: "Answer common DMs, share links and guide people to the next step." },
      { icon: UserPlus, title: "New follower welcome", text: "Greet people who start a conversation after following you." },
      { icon: Hash, title: "Keyword-triggered conversations", text: "Launch a campaign with one word: GUIDE, PRICE, LINK or anything you choose." },
    ],
    workflow: {
      name: "Comment → DM lead magnet",
      description: "A keyword comment on a reel starts a private conversation that delivers a freebie and captures an email.",
      steps: [
        { kind: "trigger", title: "Comment contains “guide”", detail: "On selected reels" },
        { kind: "message", title: "Public reply", detail: "“Check your DMs!”" },
        { kind: "message", title: "DM with guide + question", detail: "Quick replies" },
        { kind: "condition", title: "Wants reminders?", detail: "Yes / No" },
        { kind: "action", title: "Save email + tag", detail: "plant-care-subscriber" },
      ],
    },
    features: [
      { title: "Comment and story reply triggers", text: "Start workflows from comments on chosen posts, or from replies to your stories." },
      { title: "Public + private replies", text: "Acknowledge the comment publicly and continue the conversation in a DM." },
      { title: "Quick replies and buttons", text: "Make the next step one tap away instead of asking people to type." },
      { title: "Run-once rules", text: "Avoid sending the same message to the same person twice." },
    ],
    setup: [
      { title: "Switch to a professional account", text: "Instagram automation needs a Business or Creator account." },
      { title: "Connect with official login", text: "Authorise SocialXReach through Instagram’s secure connection flow." },
      { title: "Pick a template", text: "Start with comment-to-DM or a welcome flow and customise the messages." },
    ],
    integrations: ["shopify", "mailchimp", "sheets", "hubspot"],
    faqs: [
      {
        question: "Can SocialXReach reply to every Instagram comment?",
        answer: "It can respond to comments on the posts you choose, using the keywords you set. You decide which posts and which words trigger a reply.",
      },
      {
        question: "Is Instagram automation allowed?",
        answer: "Instagram provides official APIs for messaging with professional accounts. SocialXReach is designed to use those APIs and respect their rules, including messaging windows.",
      },
      {
        question: "Can I still reply manually?",
        answer: "Yes. Every conversation appears in the unified inbox, and you can pause automation for a contact and take over at any time.",
      },
    ],
  },
  {
    slug: "whatsapp",
    name: "WhatsApp automation",
    shortName: "WhatsApp",
    platform: "whatsapp",
    eyebrow: "WhatsApp automation",
    title: "Support and sell where your customers already chat.",
    intro:
      "Answer common questions, qualify leads and send helpful notifications on WhatsApp — with approved templates and clear opt-in.",
    metaDescription: "Automate WhatsApp customer support, lead qualification and approved notifications with SocialXReach.",
    availability:
      "Requires a WhatsApp Business account via the WhatsApp Business Platform. Messages sent outside the customer-service window must use pre-approved templates, and recipients must opt in.",
    hero: {
      channelName: "Atlas Outdoor",
      initials: "AO",
      platform: "whatsapp",
      conversation: [
        { type: "bubble", from: "customer", text: "Hi! Where’s my order #4821?" },
        { type: "event", text: "Order question detected", tone: "brand" },
        { type: "bubble", from: "brand", text: "Thanks! Your order shipped yesterday and should arrive Thursday." },
        { type: "link", title: "Track your parcel", subtitle: "Carrier tracking page", cta: "Open tracking" },
        { type: "quick", options: ["All good", "Talk to support"] },
      ],
    },
    useCases: [
      { icon: Headphones, title: "Customer support automation", text: "Resolve common questions instantly and route the rest to your team." },
      { icon: UserRoundCheck, title: "Lead qualification", text: "Ask a few questions and pass qualified leads to sales." },
      { icon: BellRing, title: "Customer notifications", text: "Send opted-in updates like confirmations and reminders." },
      { icon: ShieldCheck, title: "Approved messaging workflows", text: "Use pre-approved templates wherever WhatsApp requires them." },
    ],
    workflow: {
      name: "Support triage",
      description: "Common questions are answered right away; anything else goes to a person with context attached.",
      steps: [
        { kind: "trigger", title: "Incoming WhatsApp message" },
        { kind: "condition", title: "Topic detected", detail: "Order · Returns · Other" },
        { kind: "message", title: "Send matching answer" },
        { kind: "condition", title: "Resolved?", detail: "Quick reply" },
        { kind: "action", title: "Assign to support", detail: "If not resolved" },
      ],
    },
    features: [
      { title: "Template management", text: "Keep approved message templates organised and ready to use in workflows." },
      { title: "Opt-in capture", text: "Record consent clearly before sending notifications." },
      { title: "Human hand-off", text: "Move a conversation to a teammate with the full history." },
      { title: "Business hours", text: "Set different behaviour for when your team is and isn’t available." },
    ],
    setup: [
      { title: "Set up the WhatsApp Business Platform", text: "Verify your business and phone number with Meta." },
      { title: "Connect SocialXReach", text: "Link your WhatsApp Business account securely." },
      { title: "Submit templates", text: "Create templates for notifications and wait for approval." },
    ],
    integrations: ["shopify", "hubspot", "slack", "webhooks"],
    faqs: [
      {
        question: "Can I use my personal WhatsApp number?",
        answer: "No. Automation requires the WhatsApp Business Platform, which uses a business-verified phone number.",
      },
      {
        question: "Why do some messages need templates?",
        answer: "WhatsApp requires pre-approved templates for business-initiated messages sent outside the customer-service window. This keeps messaging relevant for users.",
      },
      {
        question: "Can I send broadcasts on WhatsApp?",
        answer: "You can send approved template messages to contacts who have opted in, subject to WhatsApp’s policies and messaging limits.",
      },
    ],
  },
  {
    slug: "messenger",
    name: "Messenger automation",
    shortName: "Messenger",
    platform: "messenger",
    eyebrow: "Messenger automation",
    title: "Conversations that capture leads while you sleep.",
    intro: "Greet visitors to your Facebook Page, answer frequent questions and collect lead details in a natural back-and-forth.",
    metaDescription: "Automate Facebook Messenger conversations, lead capture and FAQ responses with SocialXReach.",
    availability:
      "Requires a Facebook Page. Automated messages follow Messenger platform policies, including the standard messaging window.",
    hero: {
      channelName: "Harbor Dental",
      initials: "HD",
      platform: "messenger",
      conversation: [
        { type: "bubble", from: "brand", text: "Hi! How can we help today?" },
        { type: "quick", options: ["Book a check-up", "Opening hours", "Pricing"], selected: "Book a check-up" },
        { type: "bubble", from: "brand", text: "Great! Are you a new or existing patient?" },
        { type: "bubble", from: "customer", text: "New patient" },
        { type: "event", text: "Lead saved · New patient", tone: "mint" },
      ],
    },
    useCases: [
      { icon: Bot, title: "Automated conversations", text: "Welcome visitors with a menu of helpful options." },
      { icon: ClipboardList, title: "Lead capture", text: "Collect names, emails and needs inside the chat." },
      { icon: CircleHelp, title: "FAQ responses", text: "Answer opening hours, pricing and policy questions instantly." },
      { icon: Link2, title: "Ad-to-Messenger journeys", text: "Continue the conversation when people tap a click-to-Messenger ad." },
    ],
    workflow: {
      name: "Appointment enquiry",
      description: "A visitor picks an option, answers two questions and is saved as a lead for the front desk.",
      steps: [
        { kind: "trigger", title: "Conversation started" },
        { kind: "message", title: "Welcome menu", detail: "3 options" },
        { kind: "condition", title: "Chose “Book”" },
        { kind: "message", title: "Ask patient type + email" },
        { kind: "action", title: "Save lead + notify", detail: "Front desk" },
      ],
    },
    features: [
      { title: "Welcome menus", text: "Offer clear choices the moment a conversation starts." },
      { title: "Conversational forms", text: "Ask questions one at a time and validate answers like emails." },
      { title: "Segments and tags", text: "Organise contacts by interest, stage or campaign." },
      { title: "Team inbox", text: "See automated and manual conversations together." },
    ],
    setup: [
      { title: "Connect your Facebook Page", text: "Authorise SocialXReach through Facebook’s secure login." },
      { title: "Choose a welcome flow", text: "Start from a template that matches your business." },
      { title: "Go live", text: "Turn the workflow on and review conversations in the inbox." },
    ],
    integrations: ["hubspot", "sheets", "calendly", "zapier"],
    faqs: [
      {
        question: "Does Messenger automation work with Facebook ads?",
        answer: "Conversations that start from click-to-Messenger ads can enter a workflow, so the follow-up is immediate.",
      },
      {
        question: "Can I follow up later?",
        answer: "Messenger limits when businesses can send messages after a person’s last reply. Workflows are designed to respect those limits.",
      },
      {
        question: "Can I share Messenger and Instagram workflows?",
        answer: "Many workflow steps work across channels, so you can adapt a template for each channel without starting from scratch.",
      },
    ],
  },
  {
    slug: "tiktok",
    name: "TikTok automation",
    shortName: "TikTok",
    platform: "tiktok",
    eyebrow: "TikTok automation",
    title: "Turn short-form attention into lasting relationships.",
    intro:
      "Use supported TikTok capabilities to continue engagement-driven journeys — from a viral video to a captured lead on the channel that suits you.",
    metaDescription: "Build engagement and lead-generation workflows for TikTok with SocialXReach, within TikTok’s supported API capabilities.",
    availability:
      "TikTok exposes a limited set of capabilities to third-party tools, and access may require approval. SocialXReach will only offer what TikTok officially supports; some workflows continue on another channel.",
    hero: {
      channelName: "Coach Rivera",
      initials: "CR",
      platform: "tiktok",
      conversation: [
        { type: "event", text: "Supported engagement event", tone: "coral" },
        { type: "bubble", from: "brand", text: "Thanks for watching! Want the 7-day plan from the video?" },
        { type: "quick", options: ["Send it", "Not now"], selected: "Send it" },
        { type: "bubble", from: "brand", text: "Here you go — I’ll also send weekly tips if you’d like." },
        { type: "event", text: "Contact captured", tone: "mint" },
      ],
    },
    useCases: [
      { icon: Video, title: "Video-to-lead journeys", text: "Give viewers a clear next step after a video performs well." },
      { icon: Heart, title: "Engagement follow-ups", text: "Respond to supported engagement events with helpful resources." },
      { icon: Users, title: "Cross-channel continuation", text: "Move the relationship to email or another supported channel." },
      { icon: ClipboardList, title: "Lead capture", text: "Collect contact details with clear consent." },
    ],
    workflow: {
      name: "Video resource delivery",
      description: "Viewers who engage in a supported way receive the promised resource and can opt into more.",
      steps: [
        { kind: "trigger", title: "Supported engagement", detail: "Depends on API access" },
        { kind: "message", title: "Offer resource" },
        { kind: "condition", title: "Accepted?" },
        { kind: "action", title: "Capture contact", detail: "With consent" },
      ],
    },
    features: [
      { title: "Capability-aware builder", text: "Only steps supported for your TikTok account are available." },
      { title: "Cross-channel handover", text: "Continue the journey on Instagram, Messenger or email." },
      { title: "Campaign tagging", text: "Tag contacts by the video or campaign that brought them in." },
      { title: "Performance tracking", text: "See which videos lead to captured contacts." },
    ],
    setup: [
      { title: "Check eligibility", text: "Confirm which TikTok capabilities your account can access." },
      { title: "Connect your account", text: "Authorise SocialXReach via TikTok’s official login." },
      { title: "Start with a template", text: "Use a video-to-lead template and adapt it." },
    ],
    integrations: ["mailchimp", "convertkit", "sheets", "zapier"],
    faqs: [
      {
        question: "Can SocialXReach send TikTok DMs automatically?",
        answer: "Only if and where TikTok’s official APIs permit it for your account. We’ll clearly show which capabilities are available before you build.",
      },
      {
        question: "Why is TikTok support limited?",
        answer: "TikTok controls which features are available to third-party tools. We won’t use unofficial methods that could put your account at risk.",
      },
      {
        question: "What if a capability isn’t available?",
        answer: "Many creators continue TikTok-driven journeys on another channel, such as Instagram or email, using a link in bio.",
      },
    ],
  },
  {
    slug: "ai",
    name: "AI automation",
    shortName: "AI",
    eyebrow: "AI-powered automation",
    title: "Helpful answers, grounded in what you know.",
    intro:
      "Give SocialXReach’s AI assistant your approved business information and let it handle common questions — with clear rules for when a person takes over.",
    metaDescription: "AI-powered replies grounded in your approved business knowledge, with human escalation and conversation review.",
    availability:
      "AI features are planned for Pro and Business plans. AI replies can make mistakes; we recommend reviewing conversations and keeping hand-off rules in place.",
    hero: {
      channelName: "Olive Street Café",
      initials: "OS",
      platform: "whatsapp",
      conversation: [
        { type: "bubble", from: "customer", text: "Do you have vegan options?" },
        { type: "event", text: "AI answer · Source: Menu FAQ", tone: "brand" },
        { type: "bubble", from: "brand", text: "We do! Our lentil bowl and oat-milk pastries are fully vegan. Want to see the menu?" },
        { type: "bubble", from: "customer", text: "Can I book for 12 people on Saturday?" },
        { type: "event", text: "Large booking → handed to manager", tone: "coral" },
      ],
    },
    useCases: [
      { icon: BookOpen, title: "Business knowledge", text: "Add FAQs, policies, hours and product details the AI can use." },
      { icon: Sparkles, title: "AI response generation", text: "Draft natural, on-brand answers from approved information." },
      { icon: Users, title: "Escalation to a human", text: "Hand off sensitive topics or low-confidence answers to your team." },
      { icon: Eye, title: "Review and monitoring", text: "See what the AI said, why, and improve answers over time." },
    ],
    workflow: {
      name: "AI FAQ with hand-off",
      description: "The AI answers what it can from your knowledge and routes everything else to a person.",
      steps: [
        { kind: "trigger", title: "Incoming question" },
        { kind: "ai", title: "Search approved knowledge" },
        { kind: "condition", title: "Confident + allowed topic?" },
        { kind: "message", title: "Send AI answer", detail: "If yes" },
        { kind: "action", title: "Assign to human", detail: "If no" },
      ],
    },
    features: [
      { title: "Approved sources only", text: "Answers draw on information you add and can be limited to it." },
      { title: "Tone and guardrails", text: "Set your brand voice and topics the AI should never answer." },
      { title: "Confidence-based hand-off", text: "Route uncertain answers to a teammate instead of guessing." },
      { title: "Conversation review", text: "Audit AI replies and turn good answers into knowledge." },
    ],
    setup: [
      { title: "Add your knowledge", text: "Paste FAQs, upload policies or write short answers." },
      { title: "Set rules", text: "Choose topics, tone and when to hand off." },
      { title: "Test, then enable", text: "Try questions in a preview before switching on." },
    ],
    integrations: ["slack", "hubspot", "notion", "webhooks"],
    faqs: [
      {
        question: "Will the AI make things up?",
        answer: "AI can make mistakes. SocialXReach’s AI is designed to rely on your approved information, and hand-off rules let a person step in when it isn’t confident.",
      },
      {
        question: "Which AI model does SocialXReach use?",
        answer: "The AI service hasn’t been finalised. We’ll publish details about the provider and how data is handled before AI features launch.",
      },
      {
        question: "Is my data used to train AI models?",
        answer: "Our intention is that your business data is used only to answer your customers. Final terms will be published with the AI launch.",
      },
    ],
  },
];

export function getProduct(slug: Product["slug"]) {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown product: ${slug}`);
  return p;
}
