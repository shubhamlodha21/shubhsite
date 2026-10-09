import Link from "next/link";
import { ArrowUpRight, BarChart3, Inbox, Megaphone, Sparkles, Tags, Workflow } from "lucide-react";
import { products } from "@/content/products";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { WorkflowBuilderDemo } from "@/components/home/WorkflowBuilderDemo";
import { AnalyticsVisual } from "@/components/home/FeatureVisuals";

export const metadata = pageMetadata({
  title: "Platform overview",
  description:
    "One platform to automate Instagram, WhatsApp, Messenger and TikTok conversations — with a visual builder, AI, unified inbox and analytics.",
  path: "/product",
});

const capabilities = [
  { icon: Workflow, title: "No-code workflow builder", text: "Connect triggers, conditions, messages and actions visually." },
  { icon: Inbox, title: "Unified inbox", text: "Every automated and manual conversation in one place." },
  { icon: Tags, title: "Segmentation and tagging", text: "Organise contacts by interest, stage and campaign." },
  { icon: Megaphone, title: "Broadcast messaging", text: "Reach opted-in contacts within each channel’s rules." },
  { icon: Sparkles, title: "AI conversations", text: "Answer FAQs from approved knowledge, with hand-off." },
  { icon: BarChart3, title: "Analytics and tracking", text: "See which workflows lead to clicks, leads and sales." },
];

export default function ProductOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            One platform for every
            <br className="hidden sm:block" /> customer conversation.
          </>
        }
        description="Automate replies, capture leads and understand what works — across the channels your audience already uses."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={site.links.signup} size="lg" arrow>
            Get started free
          </ButtonLink>
          <ButtonLink href="#builder" size="lg" variant="secondary">
            Try the builder demo
          </ButtonLink>
        </div>
      </PageHero>

      <Section labelledBy="channels-title" className="pt-4 sm:pt-4">
        <Container>
          <h2 id="channels-title" className="sr-only">
            Channels and capabilities
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} as="li">
                  <Link
                    href={`/product/${p.slug}`}
                    className="group flex h-full flex-col rounded-[24px] bg-white p-6 ring-1 ring-line transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-float"
                  >
                    {p.platform ? (
                      <PlatformIcon platform={p.platform} size="md" />
                    ) : (
                      <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white">
                        <Sparkles className="size-5" aria-hidden="true" />
                      </span>
                    )}
                    <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold text-ink">
                      {p.name}
                      <ArrowUpRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.title}</p>
                  </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <WorkflowBuilderDemo />

      <Section labelledBy="caps-title">
        <Container>
          <SectionHeading id="caps-title" eyebrow="Capabilities" title="Everything in one workspace." />
          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Reveal className="mt-16">
            <AnalyticsVisual />
          </Reveal>
        </Container>
      </Section>

      <FinalCTA secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
