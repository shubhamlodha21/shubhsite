import { getIntegrations } from "@/content/integrations";
import { Monogram, StatusBadge } from "@/components/integrations/IntegrationTile";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { SectionHeading } from "@/components/ui/SectionHeading";

const hubIds = ["hubspot", "shopify", "sheets", "zapier", "mailchimp", "slack", "ga4", "webhooks"];

export function IntegrationsSection() {
  const items = getIntegrations(hubIds);

  return (
    <Section labelledBy="integrations-title" className="overflow-hidden bg-surface">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            id="integrations-title"
            align="left"
            eyebrow="Integrations"
            title="Connect your conversations to your workflow."
            description="Send captured leads to your CRM, add subscribers to email lists, share products from your store and trigger your own automations with webhooks."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {["CRM", "Email marketing", "E-commerce", "Analytics", "Webhooks", "Workflow automation"].map((c) => (
              <li key={c} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-ink">Roadmap, not yet live:</strong> the tools shown are illustrative examples
            of integrations we plan or are exploring. None are connected today.
          </p>
          <ButtonLink href="/integrations" variant="secondary" className="mt-8" arrow>
            Browse the integration directory
          </ButtonLink>
        </div>

        {/* Hub (md+) */}
        <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[540px] md:block">
          <div className="absolute inset-[12%] rounded-full border border-dashed border-brand/25" />
          <div className="absolute inset-[30%] rounded-full border border-brand/15 bg-white/60" />
          <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-[32px] bg-white shadow-float ring-1 ring-line">
            <LogoMark className="size-12" />
            <span className="text-xs font-semibold text-ink">SocialXReach</span>
          </div>
          {items.map((it, i) => {
            const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
            const r = 38; // % of container
            const left = 50 + r * Math.cos(angle);
            const top = 50 + r * Math.sin(angle);
            return (
              <div
                key={it.id}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 rounded-2xl bg-white px-3 py-2.5 shadow-soft ring-1 ring-line"
                style={{ left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%` }}
              >
                <Monogram integration={it} className="size-9" />
                <span className="text-[0.72rem] font-semibold text-ink">{it.name}</span>
                <StatusBadge status={it.status} />
              </div>
            );
          })}
        </div>

        {/* Grid (mobile) */}
        <ul className="grid grid-cols-2 gap-3 md:hidden">
          {items.map((it) => (
            <li key={it.id} className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-line">
              <Monogram integration={it} className="size-9" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{it.name}</p>
                <StatusBadge status={it.status} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
