import { pricingFaqs } from "@/content/faq";
import { pageMetadata } from "@/lib/utils";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PageHero } from "@/components/shared/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";

export const metadata = pageMetadata({
  title: "Pricing",
  description: "Compare SocialXReach plans — from a free plan for trying automation to Business plans for agencies and teams.",
  path: "/pricing",
});

const reassurance = [
  { icon: Workflow, title: "Every plan includes the builder", text: "Visual, no-code workflows from day one." },
  { icon: Sparkles, title: "AI where it helps", text: "AI features on Pro and Business plans." },
  { icon: Users, title: "Grow your team", text: "Add seats and workspaces as you scale." },
  { icon: ShieldCheck, title: "Built to play by the rules", text: "Designed around each channel’s messaging policies." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Plans that grow
            <br className="hidden sm:block" /> with your conversations.
          </>
        }
        description="Start free on one channel. Upgrade for more contacts, channels, AI and team features."
        className="pb-0"
      />

      <Container className="pb-20">
        <PricingPlans />
      </Container>

      <Container>
        <ul className="grid gap-4 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
          {reassurance.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink">{title}</p>
                <p className="text-sm text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Section id="compare" labelledBy="compare-title">
        <Container>
          <SectionHeading
            id="compare-title"
            title="Compare every feature."
            description="Usage limits, channels, AI features, team seats, integrations and support — side by side."
            className="mb-12"
          />
          <PricingComparison />
          <p className="mt-4 text-center text-sm text-muted">
            Channel availability depends on each platform’s API access, account type and approval requirements.
          </p>
        </Container>
      </Section>

      <FAQSection faqs={pricingFaqs} title="Pricing questions, answered." className="bg-surface" />
      <FinalCTA
        title="Start free. Upgrade when you’re ready."
        text="Try your first automation on the Free plan — no coding required."
        secondary={{ label: "Talk to us", href: "/contact?topic=sales" }}
      />
    </>
  );
}
