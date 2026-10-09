import type { Platform } from "@/components/ui/PlatformIcon";

/**
 * Customer stories. These are FICTIONAL, illustrative examples — they do not
 * describe real businesses or real results. Replace with genuine, approved
 * case studies when available.
 */
export type Story = {
  slug: string;
  business: string;
  industry: "E-commerce" | "Creator" | "Agency" | "Hospitality";
  location: string;
  channels: Platform[];
  headline: string;
  challenge: string;
  solution: string;
  outcome: string;
  workflow: string[];
  palette: { bg: string; accent: string; shape: string };
  initials: string;
};

export const storiesDisclaimer =
  "Illustrative examples. These businesses are fictional and the stories describe how SocialXReach is designed to be used — not measured results.";

export const stories: Story[] = [
  {
    slug: "terra-and-kiln",
    business: "Terra & Kiln",
    industry: "E-commerce",
    location: "Small-batch ceramics studio",
    channels: ["instagram"],
    headline: "A ceramics studio that stopped copy-pasting product links.",
    challenge:
      "Every new collection post filled up with “price?” and “link?” comments. The two-person team answered by hand in the evenings, and shoppers often left before a reply arrived.",
    solution:
      "A comment-to-DM workflow replies publicly, then sends the product card in a private message. Shoppers who ask about shipping get the shipping FAQ automatically.",
    outcome:
      "Shoppers get the link while they’re still interested, and the team spends evenings on new pieces instead of the inbox.",
    workflow: ["Comment contains “price”", "Public reply", "DM with product card", "Tag: spring-drop"],
    palette: { bg: "bg-peach", accent: "text-[#9a4a1f]", shape: "bg-coral/60" },
    initials: "TK",
  },
  {
    slug: "coach-rivera",
    business: "Coach Rivera",
    industry: "Creator",
    location: "Online fitness coach",
    channels: ["instagram", "tiktok"],
    headline: "A fitness creator turning new followers into newsletter readers.",
    challenge:
      "Followers asked for the same beginner plan every day. Sharing it manually was slow, and there was no record of who was interested in coaching.",
    solution:
      "A welcome flow greets new followers, offers the free plan in exchange for an email, and tags anyone who asks about one-to-one coaching.",
    outcome: "Each new follower gets a consistent first experience, and coaching enquiries are easy to find and follow up.",
    workflow: ["New follower conversation", "Offer free plan", "Collect email", "Tag: coaching-interest"],
    palette: { bg: "bg-lilac", accent: "text-brand-strong", shape: "bg-brand/50" },
    initials: "CR",
  },
  {
    slug: "northline-studio",
    business: "Northline Studio",
    industry: "Agency",
    location: "Digital agency, 12 clients",
    channels: ["messenger", "instagram", "whatsapp"],
    headline: "An agency running lead capture for a dozen clients from one place.",
    challenge:
      "Each client had a different process for handling enquiries, which made reporting and handovers messy for the account team.",
    solution:
      "Separate workspaces per client, a shared library of qualifying templates, and a weekly digest of new leads sent to each account manager.",
    outcome: "Account managers onboard new clients faster and every lead arrives with the same structured details.",
    workflow: ["Quote request", "Budget + timeline questions", "Save lead", "Notify account manager"],
    palette: { bg: "bg-mint", accent: "text-mint-strong", shape: "bg-[#3fbf7f]/50" },
    initials: "NS",
  },
  {
    slug: "olive-street-cafe",
    business: "Olive Street Café",
    industry: "Hospitality",
    location: "Neighbourhood café",
    channels: ["whatsapp"],
    headline: "A café answering “are you open?” without picking up the phone.",
    challenge:
      "Staff were interrupted during busy service by messages about opening hours, allergens and table availability.",
    solution:
      "An AI assistant answers from an approved list of FAQs and hands anything unusual — like large bookings — to the manager.",
    outcome: "Regulars get quick, accurate answers, and staff only step in when a person is genuinely needed.",
    workflow: ["Incoming question", "Match approved FAQ", "Send answer", "Escalate if unsure"],
    palette: { bg: "bg-sun", accent: "text-[#7a5300]", shape: "bg-[#f0c24b]/70" },
    initials: "OS",
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
