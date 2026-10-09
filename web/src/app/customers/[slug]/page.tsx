import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { getStory, stories, storiesDisclaimer } from "@/content/stories";
import { pageMetadata } from "@/lib/utils";
import { platformLabels } from "@/components/ui/PlatformIcon";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { StoryArt } from "@/components/customers/StoryCard";
import { Connector, FlowNode } from "@/components/mockups/primitives";
import { FinalCTA } from "@/components/shared/FinalCTA";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/customers/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return pageMetadata({
    title: `${story.business} (illustrative example)`,
    description: story.headline,
    path: `/customers/${story.slug}`,
  });
}

const flowKinds = ["trigger", "message", "condition", "action"] as const;

export default async function StoryPage({ params }: PageProps<"/customers/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const index = stories.findIndex((s) => s.slug === story.slug);
  const prev = stories[(index - 1 + stories.length) % stories.length];
  const next = stories[(index + 1) % stories.length];

  return (
    <>
      <article>
        <Container className="pb-16 pt-10 sm:pt-14">
          <Link href="/customers" className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-muted hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden="true" /> All stories
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Eyebrow>
                {story.industry} · {story.location}
              </Eyebrow>
              <h1 className="mt-4 text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl">
                {story.headline}
              </h1>
              <p className="mt-6 flex items-start gap-2 rounded-2xl bg-sun/60 p-4 text-sm leading-relaxed text-[#5c4000]">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {storiesDisclaimer}
              </p>
            </div>
            <StoryArt story={story} className="h-64 rounded-[32px] sm:h-80" />
          </div>
        </Container>

        <Container className="grid gap-12 pb-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10 text-lg leading-relaxed text-ink/85">
            <section aria-labelledby="challenge">
              <h2 id="challenge" className="text-2xl font-semibold tracking-tight text-ink">
                The challenge
              </h2>
              <p className="mt-3">{story.challenge}</p>
            </section>
            <section aria-labelledby="solution">
              <h2 id="solution" className="text-2xl font-semibold tracking-tight text-ink">
                The solution
              </h2>
              <p className="mt-3">{story.solution}</p>
            </section>
            <section aria-labelledby="outcome">
              <h2 id="outcome" className="text-2xl font-semibold tracking-tight text-ink">
                The intended outcome
              </h2>
              <p className="mt-3">{story.outcome}</p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="canvas-dots rounded-[28px] bg-[#f6f3ff] p-6 ring-1 ring-line">
              <p className="mb-4 text-sm font-semibold text-ink">Workflow</p>
              <ol>
                {story.workflow.map((step, i) => (
                  <li key={step}>
                    {i > 0 && <Connector height={16} />}
                    <FlowNode kind={flowKinds[Math.min(i, flowKinds.length - 1)]} title={step} compact />
                  </li>
                ))}
              </ol>
            </div>
            <dl className="rounded-[28px] bg-surface p-6 text-sm ring-1 ring-line">
              <div className="flex justify-between border-b border-line pb-3">
                <dt className="text-muted">Business</dt>
                <dd className="font-semibold text-ink">{story.business}</dd>
              </div>
              <div className="flex justify-between border-b border-line py-3">
                <dt className="text-muted">Industry</dt>
                <dd className="font-semibold text-ink">{story.industry}</dd>
              </div>
              <div className="flex justify-between pt-3">
                <dt className="text-muted">Channels</dt>
                <dd className="font-semibold text-ink">{story.channels.map((c) => platformLabels[c]).join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </article>

      <nav aria-label="More stories" className="border-t border-line">
        <Container className="grid gap-4 py-10 sm:grid-cols-2">
          <Link href={`/customers/${prev.slug}`} className="group rounded-[22px] p-5 ring-1 ring-line transition-colors hover:bg-surface">
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <ArrowLeft className="size-4" aria-hidden="true" /> Previous story
            </span>
            <span className="mt-1 block font-semibold text-ink">{prev.business}</span>
          </Link>
          <Link
            href={`/customers/${next.slug}`}
            className="group rounded-[22px] p-5 text-right ring-1 ring-line transition-colors hover:bg-surface"
          >
            <span className="flex items-center justify-end gap-1.5 text-sm text-muted">
              Next story <ArrowRight className="size-4" aria-hidden="true" />
            </span>
            <span className="mt-1 block font-semibold text-ink">{next.business}</span>
          </Link>
        </Container>
      </nav>

      <FinalCTA secondary={{ label: "Browse templates", href: "/templates" }} />
    </>
  );
}
