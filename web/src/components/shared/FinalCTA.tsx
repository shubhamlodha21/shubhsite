import { MessageCircle, Sparkles, UserRoundCheck } from "lucide-react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA({
  title = "Your next conversation could be your next customer.",
  text = "Spend less time repeating yourself and more time growing your business.",
  secondary = { label: "Explore features", href: "/product" },
}: {
  title?: string;
  text?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#2a1a7a_0%,#5636dc_45%,#8b5cf6_75%,#ff6b78_120%)] text-white">
        {/* Floating bubbles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 size-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 right-0 size-80 rounded-full bg-coral/30 blur-3xl" />
          <div className="absolute left-[7%] top-[18%] hidden animate-float items-center gap-2 rounded-2xl rounded-bl-md bg-white/15 px-4 py-2.5 text-sm backdrop-blur-sm lg:flex">
            <MessageCircle className="size-4" /> Is this still available?
          </div>
          <div className="absolute bottom-[16%] left-[11%] hidden animate-float-slow items-center gap-2 rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-float lg:flex">
            <Sparkles className="size-4 text-brand" /> Yes! Sending the link now
          </div>
          <div className="absolute right-[8%] top-[22%] hidden animate-float-slow items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-semibold text-mint-strong shadow-float lg:flex">
            <UserRoundCheck className="size-4" /> New lead captured
          </div>
        </div>

        <Container className="relative py-20 text-center sm:py-28">
          <h2
            id="cta-title"
            className="mx-auto max-w-3xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={site.links.signup} variant="inverted" size="lg" arrow>
              Get started free
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="outline-inverted" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
