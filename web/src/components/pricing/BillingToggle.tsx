"use client";

import type { BillingCycle } from "@/config/pricing";
import { pricingConfig } from "@/config/pricing";
import { cn } from "@/lib/utils";

export function BillingToggle({ value, onChange }: { value: BillingCycle; onChange: (v: BillingCycle) => void }) {
  const options: { id: BillingCycle; label: string }[] = [
    { id: "monthly", label: "Monthly" },
    { id: "annual", label: "Annual" },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full bg-surface p-1 ring-1 ring-line">
        {options.map((o) => {
          const checked = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => onChange(o.id)}
              onKeyDown={(e) => {
                if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
                  e.preventDefault();
                  const next = value === "monthly" ? "annual" : "monthly";
                  onChange(next);
                  (e.currentTarget.parentElement?.querySelector(`[data-cycle="${next}"]`) as HTMLElement | null)?.focus();
                }
              }}
              tabIndex={checked ? 0 : -1}
              data-cycle={o.id}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                checked ? "bg-white text-ink shadow-soft ring-1 ring-line" : "text-muted hover:text-ink",
              )}
            >
              {o.label}
              {o.id === "annual" && (
                <span className="rounded-full bg-mint px-2 py-0.5 text-[0.66rem] font-semibold text-mint-strong">
                  {pricingConfig.annualSavingsLabel}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
