import { TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export type LegalSection = { heading: string; body: string[] };

/** Placeholder legal document layout with a table of contents. */
export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <Container className="pb-24 pt-12 sm:pt-20">
      <div className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl">{title}</h1>
        <p className="mt-4 text-muted">Last updated: {updated}</p>
        <div role="note" className="mt-8 flex items-start gap-3 rounded-2xl bg-sun/70 p-5 text-[#5c4000]">
          <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong className="font-semibold">Placeholder document.</strong> This page outlines the topics a final policy
            will cover. It is not legal advice and is not a binding agreement. Replace it with text reviewed by qualified
            counsel before launch.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[240px_1fr]">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold text-ink">On this page</p>
          <ol className="mt-3 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${slug(s.heading)}`} className="rounded text-muted hover:text-ink">
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.heading} id={slug(s.heading)} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
