import { Link2, Rocket, UserPlus } from "lucide-react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", icon: UserPlus, title: "Create your account.", text: "Sign up and set up your workspace in a few minutes." },
  { n: "02", icon: Link2, title: "Connect a supported channel.", text: "Securely link Instagram, Messenger or another supported account." },
  { n: "03", icon: Rocket, title: "Build and activate your first workflow.", text: "Start from a template, adjust the messages and switch it on." },
];

export function HowItWorks() {
  return (
    <Section labelledBy="how-title" className="bg-white">
      <Container>
        <SectionHeading id="how-title" eyebrow="Getting started" title="Your first automation is closer than you think." />
        <Reveal className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[60px] hidden border-t-2 border-dashed border-brand/25 md:block"
          />
          <ol className="relative grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
                <li key={s.n} className="relative flex gap-5 rounded-[28px] bg-surface p-6 ring-1 ring-line md:flex-col md:items-center md:p-8 md:text-center">
                  <span className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-soft ring-1 ring-line">
                    <Icon className="size-6" aria-hidden="true" />
                    <span className="absolute -right-2 -top-2 rounded-full bg-ink px-1.5 py-0.5 text-[0.62rem] font-bold text-white">
                      {s.n}
                    </span>
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      <span className="sr-only">Step {s.n}: </span>
                      {s.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
            );
          })}
          </ol>
        </Reveal>
        <div className="mt-12 flex justify-center">
          <ButtonLink href={site.links.signup} size="lg" arrow>
            Get started free
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
