import { Briefcase, Palette, ShoppingBag } from "lucide-react";
import { pageMetadata } from "@/lib/utils";
import { ResourcePlaceholder } from "@/components/shared/ResourcePlaceholder";

export const metadata = pageMetadata({
  title: "Guides",
  description: "Step-by-step playbooks for creators, e-commerce brands, agencies and marketing teams.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <ResourcePlaceholder
      eyebrow="Guides"
      title="Step-by-step playbooks."
      description="In-depth guides for planning, building and measuring conversational campaigns are on the way."
      planned={[
        { title: "Launch a lead magnet in a day", text: "From keyword to delivered freebie and captured email." },
        { title: "Qualify leads in chat", text: "Which questions to ask, and when to hand off." },
        { title: "Measuring conversation ROI", text: "Tracking clicks, leads and sales from workflows." },
      ]}
      related={[
        { icon: Palette, title: "For creators", text: "Workflows for growing an audience.", href: "/solutions/creators" },
        { icon: ShoppingBag, title: "For e-commerce", text: "From product question to purchase.", href: "/solutions/ecommerce" },
        { icon: Briefcase, title: "For agencies", text: "Run workflows for every client.", href: "/solutions/agencies" },
      ]}
    />
  );
}
