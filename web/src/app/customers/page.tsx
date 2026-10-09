import { Info } from "lucide-react";
import { storiesDisclaimer } from "@/content/stories";
import { pageMetadata } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Container } from "@/components/ui/Container";
import { StoryList } from "@/components/customers/StoryList";

export const metadata = pageMetadata({
  title: "Customer stories",
  description: "Illustrative examples of how creators, shops, agencies and local businesses can use SocialXReach.",
  path: "/customers",
});

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer stories"
        title="Better conversations, in practice."
        description="See how different kinds of businesses could use automation to respond faster and follow up better."
      >
        <p className="mx-auto flex max-w-xl items-start gap-2 rounded-2xl bg-sun/60 p-4 text-left text-sm leading-relaxed text-[#5c4000]">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {storiesDisclaimer}
        </p>
      </PageHero>
      <Container className="pb-12">
        <StoryList />
      </Container>
      <FinalCTA secondary={{ label: "Browse templates", href: "/templates" }} />
    </>
  );
}
