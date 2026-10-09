import { CircleCheck, Heart, Zap } from "lucide-react";
import type { ConvoStep } from "@/content/types";
import { cn } from "@/lib/utils";
import { Avatar, Bubble, LinkCard, QuickReplies } from "./primitives";

export function CommentCard({
  author,
  initials,
  text,
  post,
  className,
}: {
  author: string;
  initials: string;
  text: string;
  post: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-white p-3 ring-1 ring-line", className)}>
      <p className="mb-2 text-[0.66rem] font-medium text-subtle">Comment on “{post}”</p>
      <div className="flex items-start gap-2.5">
        <Avatar initials={initials} tone="peach" className="size-7" />
        <div className="min-w-0 flex-1">
          <p className="text-[0.78rem] leading-snug text-ink">
            <span className="font-semibold">{author}</span> {text}
          </p>
          <p className="mt-0.5 text-[0.66rem] text-subtle">Just now · Reply</p>
        </div>
        <Heart className="mt-1 size-3.5 text-subtle" aria-hidden="true" />
      </div>
    </div>
  );
}

function EventChip({ text, tone = "brand" }: { text: string; tone?: "brand" | "mint" | "coral" }) {
  const tones = {
    brand: "bg-brand-soft text-brand-strong",
    mint: "bg-mint text-mint-strong",
    coral: "bg-coral-soft text-coral-strong",
  };
  const Icon = tone === "mint" ? CircleCheck : Zap;
  return (
    <div className="flex justify-center">
      <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold", tones[tone])}>
        <Icon className="size-3" aria-hidden="true" />
        {text}
      </span>
    </div>
  );
}

export function ConvoStepView({ step }: { step: ConvoStep }) {
  switch (step.type) {
    case "comment":
      return <CommentCard {...step} />;
    case "bubble":
      return <Bubble from={step.from}>{step.text}</Bubble>;
    case "quick":
      return <QuickReplies options={step.options} selected={step.selected} />;
    case "link":
      return <LinkCard title={step.title} subtitle={step.subtitle} cta={step.cta} />;
    case "event":
      return <EventChip text={step.text} tone={step.tone} />;
  }
}

/** Static rendering of a conversation (server component friendly). */
export function Conversation({ steps }: { steps: ConvoStep[] }) {
  return (
    <>
      {steps.map((step, i) => (
        <ConvoStepView key={i} step={step} />
      ))}
    </>
  );
}
