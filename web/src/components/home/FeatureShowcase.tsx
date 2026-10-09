import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { ArrowLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { AIVisual, AnalyticsVisual, CommentToDMVisual, LeadCaptureVisual } from "./FeatureVisuals";

type Feature = {
  eyebrow: string;
  title: string;
  text: string;
  benefits: string[];
  link: { label: string; href: string };
  visual: ReactNode;
};

const features: Feature[] = [
  {
    eyebrow: "Automate conversations",
    title: "Reply the moment someone shows interest.",
    text: "Comments, direct messages, story replies and keywords can each start an automation. Reply publicly, continue privately, and keep the conversation moving.",
    benefits: ["Keyword and comment triggers", "Public reply plus private follow-up", "Quick replies that guide the next step"],
    link: { label: "See Instagram automation", href: "/product/instagram" },
    visual: <CommentToDMVisual />,
  },
  {
    eyebrow: "Capture and qualify leads",
    title: "Collect the details that matter — in the chat.",
    text: "Ask for an email, a budget or a timeline without sending people to a form. Every answer is saved to the contact so your team knows who to talk to first.",
    benefits: ["Conversational lead forms", "Tags, fields and segments", "Hand-off to your CRM or sales inbox"],
    link: { label: "Lead generation for teams", href: "/solutions/marketing-teams" },
    visual: <LeadCaptureVisual />,
  },
  {
    eyebrow: "Scale with AI",
    title: "Answer common questions with your own knowledge.",
    text: "Give the assistant approved information — FAQs, policies, opening hours — and it drafts accurate replies. Set clear rules for when a person should take over.",
    benefits: ["Grounded in information you approve", "Escalation to a human when needed", "Review conversations and refine answers"],
    link: { label: "Explore AI automation", href: "/product/ai" },
    visual: <AIVisual />,
  },
];

function FeatureCopy({ f, className }: { f: Feature | Omit<Feature, "visual">; className?: string }) {
  return (
    <div className={cn("max-w-lg", className)}>
      <Eyebrow>{f.eyebrow}</Eyebrow>
      <h3 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.6rem]">{f.title}</h3>
      <p className="mt-5 text-lg leading-relaxed text-muted">{f.text}</p>
      {f.benefits.length > 0 && (
        <ul className="mt-6 space-y-3">
          {f.benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 font-medium text-ink">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Check className="size-3" aria-hidden="true" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      )}
      <ArrowLink href={f.link.href} className="mt-7">
        {f.link.label}
      </ArrowLink>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <Section id="features" labelledBy="features-title">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title="Everything you need to turn engagement into growth."
          description="Automate the repetitive parts of every conversation, and keep the human parts human."
        />

        <div className="mt-20 space-y-24 sm:space-y-32">
          {features.map((f, i) => (
            <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <FeatureCopy f={f} />
              </Reveal>
              <Reveal delay={0.1} className={cn(i % 2 === 1 && "lg:order-1")}>
                {f.visual}
              </Reveal>
            </div>
          ))}

          {/* Feature 4: full-width layout for the dashboard */}
          <div className="rounded-[40px] bg-surface px-4 py-10 ring-1 ring-line sm:px-10 sm:py-14 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
              <Reveal>
                <FeatureCopy
                  f={{
                    eyebrow: "Measure performance",
                    title: "See which conversations turn into customers.",
                    text: "Track conversations, captured leads, link clicks and conversions for every workflow, so you can double down on what works.",
                    benefits: [],
                    link: { label: "Compare plan analytics", href: "/pricing#compare" },
                  }}
                />
              </Reveal>
              <Reveal delay={0.05}>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {["Workflow-level reporting", "Lead and conversion tracking", "Channel comparisons"].map((b) => (
                    <li key={b} className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-ink ring-1 ring-line">
                      <Check className="size-4 shrink-0 text-brand" aria-hidden="true" strokeWidth={3} />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="mt-10">
              <AnalyticsVisual />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
