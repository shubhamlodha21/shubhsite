import { Check } from "lucide-react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[72px] -z-10 h-[calc(100%+72px)] bg-[radial-gradient(60%_50%_at_85%_10%,#f1ebff_0%,transparent_70%),radial-gradient(40%_40%_at_0%_100%,#fff1ea_0%,transparent_70%)]"
      />
      <Container className="grid items-center gap-14 pb-20 pt-10 sm:pt-14 xl:grid-cols-[1fr_1.08fr] xl:gap-10 lg:pb-28 lg:pt-16">
        <div className="max-w-xl">
          <Eyebrow>The smarter way to grow</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-7xl lg:text-[4.6rem] xl:text-[5.1rem]"
          >
            Turn every conversation into an{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">opportunity.</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 z-0 h-[0.32em] w-full text-coral"
              >
                <path d="M3 14C60 5 140 3 297 9" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-muted sm:text-xl">
            Automate your social media conversations, capture more leads, and turn audience engagement into real
            business growth — without spending all day in your inbox.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.links.signup} size="lg" arrow>
              Get started free
            </ButtonLink>
            <ButtonLink href={site.links.product} size="lg" variant="secondary">
              Explore the platform
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted">
            <span className="flex size-5 items-center justify-center rounded-full bg-mint text-mint-strong">
              <Check className="size-3" aria-hidden="true" strokeWidth={3} />
            </span>
            Start in minutes. No coding required.
          </p>
        </div>

        <HeroIllustration />
      </Container>
    </section>
  );
}
