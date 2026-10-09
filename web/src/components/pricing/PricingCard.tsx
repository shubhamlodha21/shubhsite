import Link from "next/link";
import { Check, Users } from "lucide-react";
import { formatPrice, type BillingCycle, type Plan } from "@/config/pricing";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function PricingCard({ plan, cycle }: { plan: Plan; cycle: BillingCycle }) {
  const price = cycle === "monthly" ? plan.monthly : plan.annual;
  const highlighted = plan.recommended;

  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      className={cn(
        "relative flex h-full flex-col rounded-[28px] p-7",
        highlighted ? "bg-ink text-white shadow-float" : "bg-white text-ink ring-1 ring-line",
      )}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-coral px-2.5 py-1 text-[0.7rem] font-semibold text-ink">
          Recommended
        </span>
      )}
      <h3 id={`plan-${plan.id}`} className="text-lg font-semibold">
        {plan.name}
      </h3>
      <p className={cn("mt-1 min-h-[2.5rem] text-sm", highlighted ? "text-white/70" : "text-muted")}>
        {plan.summary}
      </p>

      <div className="mt-6 flex min-h-[64px] items-end gap-1.5" aria-live="polite">
        {price === null ? (
          <span className="text-4xl font-semibold tracking-tight">Custom</span>
        ) : (
          <>
            <span className="text-5xl font-semibold tracking-[-0.04em]">{formatPrice(price)}</span>
            <span className={cn("pb-1.5 text-sm", highlighted ? "text-white/70" : "text-muted")}>
              / month{price > 0 && cycle === "annual" ? ", billed yearly" : ""}
            </span>
          </>
        )}
      </div>
      <p
        className={cn(
          "mt-3 inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-xs font-semibold",
          highlighted ? "bg-white/10 text-white" : "bg-brand-soft text-brand-strong",
        )}
      >
        <Users className="size-3.5" aria-hidden="true" />
        {plan.contacts}
      </p>

      <Link
        href={plan.cta.href}
        className={buttonClasses({
          variant: highlighted ? "inverted" : plan.id === "free" ? "secondary" : "primary",
          className: "mt-7 w-full",
        })}
      >
        {plan.cta.label}
        <span className="sr-only"> — {plan.name} plan</span>
      </Link>

      <ul className="mt-7 space-y-3 text-[0.93rem]">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <Check
              className={cn("mt-0.5 size-4 shrink-0", highlighted ? "text-coral" : "text-brand")}
              aria-hidden="true"
              strokeWidth={3}
            />
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}
