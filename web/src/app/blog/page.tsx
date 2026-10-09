import { BookOpen, LayoutTemplate, Workflow } from "lucide-react";
import { pageMetadata } from "@/lib/utils";
import { ResourcePlaceholder } from "@/components/shared/ResourcePlaceholder";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Ideas and practical advice on conversational marketing and social media automation.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <ResourcePlaceholder
      eyebrow="Blog"
      title="Ideas on conversational growth."
      description="Practical writing on turning social engagement into real relationships — launching soon."
      planned={[
        { title: "Comment-to-DM playbooks", text: "How creators and shops structure keyword campaigns." },
        { title: "Writing automated messages", text: "Keeping automation warm, clear and on-brand." },
        { title: "Platform policy explainers", text: "Plain-language notes on messaging rules for each channel." },
      ]}
      related={[
        { icon: LayoutTemplate, title: "Templates", text: "Ready-made workflows to adapt.", href: "/templates" },
        { icon: BookOpen, title: "Customer stories", text: "Illustrative example journeys.", href: "/customers" },
        { icon: Workflow, title: "Platform overview", text: "See how the builder works.", href: "/product" },
      ]}
    />
  );
}
