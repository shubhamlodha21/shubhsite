import { Info, Sparkles } from "lucide-react";
import type { Product } from "@/content/products";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { ChatPanel, Connector, FlowNode } from "@/components/mockups/primitives";
import { Conversation } from "@/components/mockups/Conversation";

export function ProductHero({ product }: { product: Product }) {
  const [first, second] = product.workflow.steps;
  return (
    <section aria-labelledby="product-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[72px] -z-10 h-[calc(100%+72px)] bg-[radial-gradient(50%_60%_at_85%_10%,#f1ebff_0%,transparent_70%),radial-gradient(40%_40%_at_0%_100%,#fff1ea_0%,transparent_70%)]"
      />
      <Container className="grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            {product.platform ? (
              <PlatformIcon platform={product.platform} size="sm" />
            ) : (
              <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-white">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
            )}
            <Eyebrow>{product.eyebrow}</Eyebrow>
          </div>
          <h1
            id="product-title"
            className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl"
          >
            {product.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{product.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.links.signup} size="lg" arrow>
              Get started free
            </ButtonLink>
            <ButtonLink href="/templates" size="lg" variant="secondary">
              Browse templates
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-start gap-2 rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-muted ring-1 ring-line">
            <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-ink">Availability: </strong>
              {product.availability}
            </span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]" role="img" aria-label={`Illustration of a ${product.shortName} automation conversation`}>
          <div aria-hidden="true" className="absolute -right-6 top-4 size-[70%] rounded-full bg-lilac/80 blur-2xl" />
          <div aria-hidden="true" className="absolute -left-4 bottom-0 h-1/3 w-1/2 rounded-full bg-peach/80 blur-2xl" />
          <div className="relative grid gap-4 sm:grid-cols-[1fr_0.75fr] sm:items-end">
            <ChatPanel name={product.hero.channelName} platform={product.hero.platform} initials={product.hero.initials}>
              <Conversation steps={product.hero.conversation} />
            </ChatPanel>
            <div className="hidden rounded-[22px] bg-white/90 p-3 shadow-float ring-1 ring-ink/5 sm:block">
              <p className="mb-2 px-1 text-[0.7rem] font-semibold text-ink">{product.workflow.name}</p>
              <FlowNode kind={first.kind} title={first.title} compact />
              <Connector height={12} />
              <FlowNode kind={second.kind} title={second.title} compact />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
