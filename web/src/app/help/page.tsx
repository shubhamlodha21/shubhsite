import { CreditCard, Mail, MessagesSquare } from "lucide-react";
import { pageMetadata } from "@/lib/utils";
import { ResourcePlaceholder } from "@/components/shared/ResourcePlaceholder";

export const metadata = pageMetadata({
  title: "Help center",
  description: "Answers and how-to articles for setting up and running SocialXReach automations.",
  path: "/help",
});

export default function HelpPage() {
  return (
    <ResourcePlaceholder
      eyebrow="Help center"
      title="How can we help?"
      description="Step-by-step help articles will live here once SocialXReach opens to customers."
      planned={[
        { title: "Connecting channels", text: "Account requirements and connection steps for each platform." },
        { title: "Building your first workflow", text: "Triggers, conditions, messages and actions explained." },
        { title: "Billing and plans", text: "How contacts, seats and upgrades work." },
      ]}
      related={[
        { icon: MessagesSquare, title: "Homepage FAQ", text: "Quick answers to common questions.", href: "/#faq" },
        { icon: CreditCard, title: "Pricing FAQ", text: "Plans, billing and limits.", href: "/pricing#faq" },
        { icon: Mail, title: "Contact us", text: "Ask a question directly.", href: "/contact?topic=support" },
      ]}
    />
  );
}
