import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Compass,
  LifeBuoy,
  Megaphone,
  Newspaper,
  Palette,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Platform } from "@/components/ui/PlatformIcon";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  platform?: Platform;
};

export type NavGroup = {
  label: string;
  items: NavLink[];
  footer?: NavLink;
};

export const productMenu: NavGroup = {
  label: "Product",
  items: [
    { label: "Instagram automation", href: "/product/instagram", platform: "instagram", description: "Comments, DMs, story replies" },
    { label: "WhatsApp automation", href: "/product/whatsapp", platform: "whatsapp", description: "Support, alerts, qualification" },
    { label: "Messenger automation", href: "/product/messenger", platform: "messenger", description: "Conversations and lead capture" },
    { label: "TikTok automation", href: "/product/tiktok", platform: "tiktok", description: "Engagement-to-lead journeys" },
    { label: "AI automation", href: "/product/ai", icon: Sparkles, description: "Answers grounded in your info" },
    { label: "Automation builder", href: "/product#builder", icon: Workflow, description: "Visual, no-code workflows" },
  ],
  footer: { label: "Platform overview", href: "/product" },
};

export const solutionsMenu: NavGroup = {
  label: "Solutions",
  items: [
    { label: "Creators", href: "/solutions/creators", icon: Palette, description: "Grow and monetise your audience" },
    { label: "E-commerce", href: "/solutions/ecommerce", icon: ShoppingBag, description: "Guide shoppers from DM to checkout" },
    { label: "Agencies", href: "/solutions/agencies", icon: Briefcase, description: "Run workflows for every client" },
    { label: "Marketing teams", href: "/solutions/marketing-teams", icon: Megaphone, description: "Capture and qualify demand" },
  ],
};

export const resourcesMenu: NavGroup = {
  label: "Resources",
  items: [
    { label: "Blog", href: "/blog", icon: Newspaper, description: "Ideas on conversational growth" },
    { label: "Help center", href: "/help", icon: LifeBuoy, description: "Answers and how-tos" },
    { label: "Guides", href: "/guides", icon: Compass, description: "Step-by-step playbooks" },
    { label: "Customer stories", href: "/customers", icon: BookOpen, description: "Illustrative example journeys" },
  ],
};

export const primaryNav: (NavGroup | NavLink)[] = [
  productMenu,
  solutionsMenu,
  { label: "Templates", href: "/templates" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  resourcesMenu,
];

export function isGroup(item: NavGroup | NavLink): item is NavGroup {
  return "items" in item;
}

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Instagram", href: "/product/instagram" },
      { label: "WhatsApp", href: "/product/whatsapp" },
      { label: "Messenger", href: "/product/messenger" },
      { label: "TikTok", href: "/product/tiktok" },
      { label: "AI automation", href: "/product/ai" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Creators", href: "/solutions/creators" },
      { label: "E-commerce", href: "/solutions/ecommerce" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Marketing teams", href: "/solutions/marketing-teams" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Integrations", href: "/integrations" },
      { label: "Customer stories", href: "/customers" },
      { label: "Blog", href: "/blog" },
      { label: "Help center", href: "/help" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
