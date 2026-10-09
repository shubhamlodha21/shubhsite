import type { Metadata } from "next";
import { X } from "lucide-react";
import { getSolution, type Solution } from "@/content/solutions";
import { templates } from "@/content/templates";
import { site } from "@/config/site";
import { pageMetadata, cn } from "@/lib/utils";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformIcon, platformLabels } from "@/components/ui/PlatformIcon";
import { Reveal } from "@/components/ui/Reveal";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { AgenciesVisual, CreatorsVisual, EcommerceVisual, MarketingVisual } from "@/components/home/AudienceSection";

const visuals: Record<Solution["slug"], () => React.JSX.Element> = {
  creators: CreatorsVisual,
  ecommerce: EcommerceVisual,
  agencies: AgenciesVisual,
  "marketing-teams": MarketingVisual,
};

export function solutionMetadata(slug: Solution["slug"]): Metadata {
  const s = getSolution(slug);
  return pageMetadata({ title: `${s.name} solutions`, description: s.metaDescription, path: `/solutions/${s.slug}` });
}

export function SolutionPage({ slug }: { slug: Solution["slug"] }) {
  const s = getSolution(slug);
  const Visual = visuals[slug];
  const recommended = s.templateIds
    .map((id) => templates.find((t) => t.id === id))
    .filter((t): t is (typeof templates)[number] => Boolean(t));

  return (
    <>
      <section aria-labelledby="solution-title" className="relative isolate overflow-hidden">
        <Container className="grid items-center gap-12 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-xl">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1
              id="solution-title"
              className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl"
            >
              {s.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{s.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.links.signup} size="lg" arrow>
                Get started free
              </ButtonLink>
              <ButtonLink href="/templates" size="lg" variant="secondary">
                See templates
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span>Works with</span>
              {s.channels.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 font-medium text-ink">
                  <PlatformIcon platform={c} size="xs" />
                  {platformLabels[c]}
                </span>
              ))}
            </div>
          </div>
          <div className={cn("rounded-[36px] p-8 sm:p-12", s.bg)}>
            <Visual />
          </div>
        </Container>
      </section>

      <Section labelledBy="pains-title" className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading id="pains-title" align="left" eyebrow="Sound familiar?" title="The inbox shouldn’t hold you back." />
          <ul className="grid gap-3">
            {s.pains.map((p) => (
              <li key={p} className="flex items-center gap-4 rounded-2xl bg-white p-5 text-lg font-medium text-ink ring-1 ring-line">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-coral-soft text-coral-strong">
                  <X className="size-4" aria-hidden="true" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="plays-title">
        <Container>
          <SectionHeading id="plays-title" eyebrow="How it helps" title={`Workflows built for ${s.name.toLowerCase()}.`} />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.plays.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 0.05} className="rounded-[24px] bg-white p-6 ring-1 ring-line">
                <span className="text-sm font-bold text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="rec-title" className="bg-[#f6f3ff]">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="rec-title" className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Recommended templates
            </h2>
            <ArrowLink href="/templates">Browse all templates</ArrowLink>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((t) => (
              <li key={t.id}>
                <TemplateCard template={t} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FAQSection faqs={s.faqs} title={`Questions from ${s.name.toLowerCase()}.`} />
      <FinalCTA secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
