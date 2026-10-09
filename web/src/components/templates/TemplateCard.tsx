import Link from "next/link";
import type { AutomationTemplate } from "@/content/templates";
import { nodeKinds } from "@/components/mockups/primitives";
import { PlatformIcon, platformLabels } from "@/components/ui/PlatformIcon";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const categoryTone: Record<AutomationTemplate["category"], string> = {
  "Lead generation": "bg-mint text-mint-strong",
  Sales: "bg-peach text-[#9a4a1f]",
  Engagement: "bg-brand-soft text-brand-strong",
  Support: "bg-sun text-[#7a5300]",
};

export function TemplateCard({ template }: { template: AutomationTemplate }) {
  return (
    <article className="flex h-full flex-col rounded-[24px] bg-white p-5 ring-1 ring-line transition-shadow hover:shadow-float">
      <div className="flex items-center justify-between gap-2">
        <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", categoryTone[template.category])}>
          {template.category}
        </span>
        <span className="flex gap-1" aria-label={`Channels: ${template.channels.map((c) => platformLabels[c]).join(", ")}`}>
          {template.channels.map((c) => (
            <PlatformIcon key={c} platform={c} size="xs" />
          ))}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{template.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{template.description}</p>

      <ol className="mt-5 space-y-1.5 rounded-2xl bg-surface p-3" aria-label="Steps">
        {template.steps.map((s) => {
          const k = nodeKinds[s.kind];
          const Icon = k.icon;
          return (
            <li key={s.title} className="flex items-center gap-2 text-[0.8rem] text-ink">
              <span className={cn("flex size-6 items-center justify-center rounded-lg", k.tile)}>
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              {s.title}
            </li>
          );
        })}
      </ol>

      <div className="mt-auto pt-5">
        <Link
          href={`${site.links.signup}?template=${template.id}`}
          className="inline-flex items-center gap-1 rounded text-sm font-semibold text-brand hover:text-brand-strong"
        >
          Use this template<span className="sr-only">: {template.name}</span> →
        </Link>
      </div>
    </article>
  );
}
