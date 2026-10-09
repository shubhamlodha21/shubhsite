import { Eye, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/utils";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Bubble } from "@/components/mockups/primitives";

export const metadata = pageMetadata({
  title: "About",
  description: `Why we’re building ${site.name}: helping businesses have more meaningful conversations at scale.`,
  path: "/about",
});

const principles = [
  { icon: HeartHandshake, title: "Conversations, not campaigns", text: "Automation should make people feel helped, not processed." },
  { icon: ShieldCheck, title: "Play by the platform rules", text: "We build on official APIs and respect each channel’s policies." },
  { icon: Eye, title: "Honest by default", text: "No inflated claims, fake reviews or dark patterns — on this site or in the product." },
  { icon: Sparkles, title: "AI with guardrails", text: "AI should use what you approve and know when to hand over." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Every business deserves time for the conversations that matter."
        description={`${site.name} exists to take the repetitive work out of social messaging — so creators and teams can spend their energy on people, not copy-paste.`}
      />

      <Section labelledBy="story-title" className="pt-0 sm:pt-0">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="story-title" align="left" eyebrow="Our story" title="Where we are today." />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                {site.name} is an early-stage product. We’re designing a platform that turns comments, DMs and chats into
                organised, helpful customer journeys.
              </p>
              <p>
                We’re not open to customers yet, so you won’t find customer logos or usage numbers here. When we have real
                results to share, we’ll share them — with permission.
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="space-y-3 rounded-[36px] bg-[linear-gradient(140deg,#f5f1ff,#fff4ef)] p-8 sm:p-12">
            <Bubble from="customer">Do you actually read these messages?</Bubble>
            <Bubble from="brand">We do — and now we can reply to every one of them, even at 2am.</Bubble>
            <Bubble from="customer">That’s the dream.</Bubble>
            <Bubble from="brand">That’s the plan.</Bubble>
          </div>
        </Container>
      </Section>

      <Section labelledBy="principles-title" className="bg-surface">
        <Container>
          <SectionHeading id="principles-title" eyebrow="Principles" title="What we believe." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-[24px] bg-white p-6 ring-1 ring-line">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCTA
        title="Want to follow along?"
        text="Register your interest and we’ll let you know when SocialXReach opens."
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
