import { PricingPlans } from "@/components/pricing/PricingPlans";
import { ArrowLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingPreview() {
  return (
    <Section id="pricing" labelledBy="pricing-title" className="bg-surface">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple plans. Room to grow."
          description="Start free, then upgrade as your audience and team grow."
          className="mb-10"
        />
        <PricingPlans />
        <div className="mt-10 flex justify-center">
          <ArrowLink href="/pricing#compare">Compare all features</ArrowLink>
        </div>
      </Container>
    </Section>
  );
}
