import { site } from "@/config/site";
import type { FAQ } from "./types";

export const homeFaqs: FAQ[] = [
  {
    question: `What is ${site.name}?`,
    answer: `${site.name} is a no-code platform for automating social media conversations. You build workflows that respond to comments, messages and other supported events, capture lead details and route conversations to your team.`,
  },
  {
    question: "Which channels can I connect?",
    answer:
      "We’re designing for Instagram, Facebook Messenger, WhatsApp and TikTok. Exactly what you can automate depends on each platform’s official APIs, your account type and any approvals the platform requires — for example, WhatsApp needs a WhatsApp Business account.",
  },
  {
    question: "Do I need coding skills?",
    answer:
      "No. Workflows are built visually by connecting triggers, conditions, messages and actions. Templates give you a starting point you can adapt.",
  },
  {
    question: "How do automations work?",
    answer:
      "Each automation starts with a trigger — like a keyword in a comment or a new message. It can then check conditions, wait, send messages, ask questions and tag the contact. You can review every conversation in the unified inbox and step in at any time.",
  },
  {
    question: "Can I use AI to answer customer questions?",
    answer:
      "Yes, on plans that include AI. You provide approved business information — such as FAQs, policies and opening hours — and the assistant uses it to draft replies. You control when it should hand the conversation to a person.",
  },
  {
    question: "Can I manage multiple workflows?",
    answer:
      "Yes. You can run several automations side by side, organise them by channel or campaign, and see how each one performs. Business plans add separate workspaces for teams and agencies.",
  },
  {
    question: `Does ${site.name} have a free plan?`,
    answer:
      "A free plan is planned so you can try automation on one channel. Plan details on this site are placeholders until launch and may change.",
  },
  {
    question: "How do I get started?",
    answer: `Create an account, connect a supported channel and pick a template. ${site.name} is not yet open for sign-ups — you can register your interest on the sign-up page.`,
  },
];

export const pricingFaqs: FAQ[] = [
  {
    question: "Are these prices final?",
    answer:
      "No. The plans shown are placeholders while the product is in development. Final pricing will be published before launch.",
  },
  {
    question: "What counts as a contact?",
    answer:
      "A contact is a person who has interacted with one of your connected channels and is stored in your workspace. Contacts are counted once, even if they use more than one channel.",
  },
  {
    question: "How does annual billing work?",
    answer:
      "Annual billing is charged once per year at a lower effective monthly price. Prices shown on the annual toggle are the equivalent monthly amount.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes. The intention is that you can upgrade or downgrade at any time, with changes applied from your next billing period.",
  },
  {
    question: "Why are some channels marked with conditions?",
    answer:
      "Messaging platforms set their own rules. WhatsApp requires a business account and approved message templates, and TikTok only exposes certain capabilities to third-party tools. We’ll only offer what each platform officially supports.",
  },
  {
    question: "Do you offer discounts for non-profits or education?",
    answer: "We’d like to. Get in touch through the contact page and tell us about your organisation.",
  },
];
