import { pageMetadata } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Container } from "@/components/ui/Container";
import { IntegrationDirectory } from "@/components/integrations/IntegrationDirectory";

export const metadata = pageMetadata({
  title: "Integrations",
  description: "Explore the CRM, email, e-commerce, analytics and automation tools on the SocialXReach integration roadmap.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Connect conversations to the tools you use."
        description="Here’s the integration roadmap: CRMs, email platforms, stores, analytics and webhooks. Each one shows its current status."
      />
      <Container className="pb-12">
        <IntegrationDirectory />
      </Container>
      <FinalCTA
        title="Need an integration we don’t list?"
        text="Tell us what you use — requests help shape the roadmap."
        secondary={{ label: "Request an integration", href: "/contact?topic=integration" }}
      />
    </>
  );
}
