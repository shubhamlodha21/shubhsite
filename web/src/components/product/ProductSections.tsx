import { Check } from "lucide-react";
import type { Product } from "@/content/products";
import { getIntegrations } from "@/content/integrations";
import { Monogram, StatusBadge } from "@/components/integrations/IntegrationTile";
import { ArrowLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Connector, FlowNode } from "@/components/mockups/primitives";

export function ProductUseCases({ product }: { product: Product }) {
  return (
    <Section labelledBy="usecases-title" className="bg-surface">
      <Container>
        <SectionHeading
          id="usecases-title"
          eyebrow="Use cases"
          title={`What you can automate on ${product.shortName}.`}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.useCases.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-[24px] bg-white p-6 ring-1 ring-line transition-shadow hover:shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function ProductWorkflow({ product }: { product: Product }) {
  const { workflow } = product;
  return (
    <Section labelledBy="workflow-title">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="workflow-title"
            align="left"
            eyebrow="Workflow example"
            title={workflow.name}
            description={workflow.description}
          />
          <ArrowLink href="/product#builder" className="mt-8">
            Explore the visual builder
          </ArrowLink>
        </div>
        <Reveal>
          <div className="canvas-dots rounded-[32px] bg-[#f6f3ff] p-6 ring-1 ring-line sm:p-10">
            <ol className="mx-auto max-w-sm" aria-label={`${workflow.name} steps`}>
              {workflow.steps.map((s, i) => (
                <li key={s.title}>
                  {i > 0 && <Connector height={20} />}
                  <FlowNode kind={s.kind} title={s.title} detail={s.detail} />
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <Section labelledBy="pfeatures-title" className="pt-0 sm:pt-0">
      <Container>
        <div className="rounded-[40px] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16">
          <h2 id="pfeatures-title" className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Benefits and features
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Check className="size-4 text-coral" aria-hidden="true" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-white/70">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export function ProductSetup({ product }: { product: Product }) {
  return (
    <Section labelledBy="setup-title" className="pt-0 sm:pt-0">
      <Container>
        <SectionHeading id="setup-title" eyebrow="Setup" title="Get set up in three steps." />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {product.setup.map((s, i) => (
            <li key={s.title} className="rounded-[24px] bg-surface p-7 ring-1 ring-line">
              <span className="text-sm font-bold text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function RelatedIntegrations({ ids, title = "Related integrations" }: { ids: string[]; title?: string }) {
  const items = getIntegrations(ids);
  return (
    <Section labelledBy="related-title" className="bg-surface">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="related-title" className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-muted">Planned and exploratory integrations — none are live yet.</p>
          </div>
          <ArrowLink href="/integrations">View all integrations</ArrowLink>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.id} className="flex items-start gap-3 rounded-[22px] bg-white p-5 ring-1 ring-line">
              <Monogram integration={it} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-ink">{it.name}</p>
                  <StatusBadge status={it.status} />
                </div>
                <p className="mt-1 text-sm leading-snug text-muted">{it.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
