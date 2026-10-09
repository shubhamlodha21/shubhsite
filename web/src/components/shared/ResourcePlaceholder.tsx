import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "./PageHero";

/**
 * Used for resource sections that are planned but not yet published.
 * Shows what's coming and points to pages that already help.
 */
export function ResourcePlaceholder({
  eyebrow,
  title,
  description,
  planned,
  related,
}: {
  eyebrow: string;
  title: string;
  description: string;
  planned: { title: string; text: string }[];
  related: { icon: LucideIcon; title: string; text: string; href: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <span className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 text-sm font-semibold text-[#7a5300]">
          <Clock className="size-4" aria-hidden="true" />
          Coming soon. Nothing has been published here yet.
        </span>
      </PageHero>

      <Container className="pb-24">
        <section aria-labelledby="planned-title">
          <h2 id="planned-title" className="text-2xl font-semibold tracking-tight text-ink">
            What we’re planning
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planned.map((p) => (
              <li key={p.title} className="rounded-[24px] border border-dashed border-line bg-surface/60 p-6">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="related-res-title" className="mt-16">
          <h2 id="related-res-title" className="text-2xl font-semibold tracking-tight text-ink">
            Useful right now
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(({ icon: Icon, title, text, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full items-start gap-4 rounded-[24px] bg-white p-6 ring-1 ring-line transition-shadow hover:shadow-float"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-1 font-semibold text-ink">
                      {title}
                      <ArrowUpRight className="size-4 opacity-50 group-hover:opacity-100" aria-hidden="true" />
                    </span>
                    <span className="mt-1 block text-sm text-muted">{text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
