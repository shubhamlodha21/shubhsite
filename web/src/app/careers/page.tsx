import { Info, Mail, Rocket } from "lucide-react";
import { pageMetadata } from "@/lib/utils";
import { ResourcePlaceholder } from "@/components/shared/ResourcePlaceholder";

export const metadata = pageMetadata({
  title: "Careers",
  description: "Careers at SocialXReach.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <ResourcePlaceholder
      eyebrow="Careers"
      title="Build the future of conversations with us."
      description="There are no open roles right now. When we start hiring, positions will be listed here."
      planned={[
        { title: "Product & engineering", text: "Builders who care about reliability and great UX." },
        { title: "Design", text: "People who make complex tools feel simple." },
        { title: "Customer success", text: "Helping customers launch their first automations." },
      ]}
      related={[
        { icon: Info, title: "About SocialXReach", text: "Our mission and principles.", href: "/about" },
        { icon: Rocket, title: "The product", text: "What we’re building.", href: "/product" },
        { icon: Mail, title: "Get in touch", text: "Introduce yourself.", href: "/contact" },
      ]}
    />
  );
}
