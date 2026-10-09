import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Gift, ShoppingCart } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar, Bubble } from "@/components/mockups/primitives";
import { cn } from "@/lib/utils";

export function CreatorsVisual() {
  return (
    <div className="relative h-full min-h-[190px]" aria-hidden="true">
      <div className="absolute left-0 top-2 w-[62%] rounded-2xl bg-white p-3 shadow-float">
        <div className="flex items-center gap-2">
          <Avatar initials="CR" tone="brand" className="size-9" />
          <div>
            <p className="text-[0.78rem] font-semibold text-ink">Coach Rivera</p>
            <p className="text-[0.66rem] text-muted">Fitness · Creator</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {["#e9e1ff", "#ffe7da", "#dff7ea"].map((c) => (
            <span key={c} className="aspect-square rounded-md" style={{ background: c }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[58%] space-y-2">
        <Bubble from="customer">Can I get the free plan?</Bubble>
        <div className="flex justify-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.7rem] font-semibold text-brand shadow-soft">
            <Gift className="size-3.5" /> Freebie sent
          </span>
        </div>
      </div>
    </div>
  );
}

export function EcommerceVisual() {
  return (
    <div className="relative h-full min-h-[190px]" aria-hidden="true">
      <div className="mx-auto w-[78%] overflow-hidden rounded-2xl bg-white shadow-float">
        <div className="relative h-24 bg-[linear-gradient(135deg,#ffe7da,#ffd0c2)]">
          <span className="absolute bottom-3 left-1/2 h-14 w-12 -translate-x-1/2 rounded-b-2xl rounded-t-lg bg-white/85 shadow" />
        </div>
        <div className="p-3">
          <p className="text-[0.78rem] font-semibold text-ink">Linen Tote — Sand</p>
          <p className="text-[0.68rem] text-muted">In stock · Ships tomorrow</p>
          <div className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-ink py-1.5 text-[0.72rem] font-semibold text-white">
            <ShoppingCart className="size-3.5" /> View in store
          </div>
        </div>
      </div>
    </div>
  );
}

export function AgenciesVisual() {
  const clients = [
    { name: "Bloom Florals", n: "4 workflows", tone: "coral" as const },
    { name: "Peak Fitness", n: "6 workflows", tone: "mint" as const },
    { name: "Harbor Dental", n: "3 workflows", tone: "brand" as const },
  ];
  return (
    <div className="h-full min-h-[190px] rounded-2xl bg-white p-3 shadow-float" aria-hidden="true">
      <p className="px-1 text-[0.64rem] font-semibold uppercase tracking-wider text-subtle">Client workspaces</p>
      <ul className="mt-2 space-y-1.5">
        {clients.map((c, i) => (
          <li
            key={c.name}
            className={cn("flex items-center gap-2.5 rounded-xl px-2 py-2", i === 0 ? "bg-brand-soft" : "bg-surface")}
          >
            <Avatar initials={c.name.slice(0, 2).toUpperCase()} tone={c.tone} className="size-7" />
            <span className="flex-1 text-[0.76rem] font-semibold text-ink">{c.name}</span>
            <span className="text-[0.66rem] text-muted">{c.n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketingVisual() {
  const stages = [
    { label: "Conversations", w: "100%" },
    { label: "Engaged", w: "72%" },
    { label: "Leads", w: "46%" },
    { label: "Qualified", w: "28%" },
  ];
  return (
    <div className="h-full min-h-[190px] rounded-2xl bg-white p-4 shadow-float" aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="text-[0.74rem] font-semibold text-ink">Campaign funnel</p>
        <span className="rounded-full bg-sun px-2 py-0.5 text-[0.6rem] font-semibold uppercase text-[#7a5300]">Sample</span>
      </div>
      <ul className="mt-3 space-y-2.5">
        {stages.map((s, i) => (
          <li key={s.label}>
            <div className="mb-1 flex justify-between text-[0.68rem] text-muted">
              <span>{s.label}</span>
            </div>
            <div className="h-2.5 rounded-full bg-surface">
              <div
                className="h-full rounded-full"
                style={{ width: s.w, background: i === 3 ? "#ff6b78" : `rgba(108,76,241,${1 - i * 0.2})` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const audiences: { title: string; text: string; href: string; visual: ReactNode; bg: string; span: string }[] = [
  {
    title: "Creators",
    text: "Grow your audience, share resources, and turn engagement into opportunities.",
    href: "/solutions/creators",
    visual: <CreatorsVisual />,
    bg: "bg-lilac/70",
    span: "lg:col-span-7",
  },
  {
    title: "E-commerce",
    text: "Answer product questions, share product links, and support purchase journeys.",
    href: "/solutions/ecommerce",
    visual: <EcommerceVisual />,
    bg: "bg-peach/70",
    span: "lg:col-span-5",
  },
  {
    title: "Agencies",
    text: "Manage multiple client workflows and organise campaign operations.",
    href: "/solutions/agencies",
    visual: <AgenciesVisual />,
    bg: "bg-mint/70",
    span: "lg:col-span-5",
  },
  {
    title: "Marketing teams",
    text: "Capture leads, qualify prospects, and improve response consistency.",
    href: "/solutions/marketing-teams",
    visual: <MarketingVisual />,
    bg: "bg-sun/70",
    span: "lg:col-span-7",
  },
];

export function AudienceSection() {
  return (
    <Section labelledBy="audience-title">
      <Container>
        <SectionHeading
          id="audience-title"
          eyebrow="Solutions"
          title="Made for the way you grow."
          description="Whether you’re a creator of one or a team of fifty, start with workflows designed for how you work."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} className={a.span}>
              <Link
                href={a.href}
                className={cn(
                  "group relative grid h-full gap-6 overflow-hidden rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
                  a.bg,
                  a.span.includes("7") && "lg:grid-cols-[1fr_1.1fr] lg:items-center",
                )}
              >
                <div>
                  <h3 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-ink">
                    {a.title}
                    <ArrowUpRight
                      className="size-5 opacity-60 transition-[transform,opacity] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-ink/75">{a.text}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-ink underline decoration-ink/30 underline-offset-4 group-hover:decoration-ink">
                    Explore solutions for {a.title.toLowerCase()}
                  </span>
                </div>
                {a.visual}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
