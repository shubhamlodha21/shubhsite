import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Story } from "@/content/stories";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { cn } from "@/lib/utils";

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

/** Abstract, original artwork for a story — no stock photography. */
export function StoryArt({ story, className }: { story: Story; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden", story.palette.bg, className)}>
      <span className={cn("absolute -right-6 -top-8 size-40 rounded-full", story.palette.shape)} />
      <span className="absolute -bottom-10 left-6 size-32 rounded-[40%_60%_55%_45%] bg-white/50" />
      <span
        className={cn(
          "absolute bottom-5 left-5 flex size-14 items-center justify-center rounded-2xl bg-white text-lg font-bold shadow-soft",
          story.palette.accent,
        )}
      >
        {story.initials}
      </span>
      <div className="absolute bottom-5 right-5 flex gap-1.5">
        {story.channels.map((c) => (
          <PlatformIcon key={c} platform={c} size="sm" />
        ))}
      </div>
    </div>
  );
}

export function StoryCard({ story, featured = false }: { story: Story; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-line transition-shadow duration-300 hover:shadow-float",
        featured && "lg:flex-row",
      )}
    >
      <StoryArt story={story} className={cn("h-44 shrink-0", featured && "lg:h-auto lg:w-[42%]")} />
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:p-10")}>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-surface px-2.5 py-1 text-ink ring-1 ring-line">{story.industry}</span>
          <span className="rounded-full bg-sun px-2.5 py-1 text-[#7a5300]">Illustrative example</span>
        </div>
        <h3 className={cn("mt-4 font-semibold tracking-tight text-ink", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {story.headline}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {story.business} · {story.location}
        </p>
        <dl className={cn("mt-5 grid gap-4 text-[0.92rem] leading-relaxed", featured && "sm:grid-cols-3")}>
          <div>
            <dt className="font-semibold text-ink">Challenge</dt>
            <dd className="mt-1 text-muted">{featured ? story.challenge : firstSentence(story.challenge)}</dd>
          </div>
          {featured && (
            <div>
              <dt className="font-semibold text-ink">Solution</dt>
              <dd className="mt-1 text-muted">{story.solution}</dd>
            </div>
          )}
          <div>
            <dt className="font-semibold text-ink">Outcome</dt>
            <dd className="mt-1 text-muted">{story.outcome}</dd>
          </div>
        </dl>
        <div className="mt-auto pt-6">
          <Link
            href={`/customers/${story.slug}`}
            className="inline-flex items-center gap-1.5 rounded font-semibold text-brand after:absolute after:inset-0 after:content-[''] hover:text-brand-strong"
          >
            Read the story<span className="sr-only">: {story.business}</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
