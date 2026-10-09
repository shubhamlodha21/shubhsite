import { pageMetadata } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Container } from "@/components/ui/Container";
import { TemplateGallery } from "@/components/templates/TemplateGallery";

export const metadata = pageMetadata({
  title: "Automation templates",
  description: "Ready-made SocialXReach workflows for lead generation, sales, engagement and support across social channels.",
  path: "/templates",
});

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Templates"
        title="Start from a proven workflow."
        description="Pick a template, adjust the messages to sound like you, and switch it on. Filter by goal or channel to find the right starting point."
      />
      <Container className="pb-8">
        <TemplateGallery />
      </Container>
      <FinalCTA
        title="Have a workflow in mind?"
        text="Start from a blank canvas or adapt any template to fit your business."
        secondary={{ label: "Try the builder demo", href: "/product#builder" }}
      />
    </>
  );
}
