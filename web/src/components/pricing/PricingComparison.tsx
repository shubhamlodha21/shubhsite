import { Check, Minus } from "lucide-react";
import { comparison, pricingConfig, type Entitlement } from "@/config/pricing";
import { cn } from "@/lib/utils";

function Value({ value }: { value: Entitlement }) {
  if (value === true)
    return (
      <>
        <Check className="mx-auto size-5 text-brand" aria-hidden="true" strokeWidth={2.5} />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus className="mx-auto size-4 text-subtle" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </>
    );
  return <span className="text-sm font-medium text-ink">{value}</span>;
}

export function PricingComparison() {
  const plans = pricingConfig.plans;
  return (
    <div
      role="region"
      aria-label="Plan comparison table (scrolls horizontally on small screens)"
      tabIndex={0}
      className="relative overflow-x-auto rounded-[28px] bg-white ring-1 ring-line"
    >
      <table className="w-full min-w-[760px] border-collapse text-left">
        <caption className="sr-only">Feature comparison across {plans.map((p) => p.name).join(", ")} plans</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="sticky left-0 z-10 w-[34%] bg-white px-6 py-5 text-sm font-semibold text-muted">
              Features
            </th>
            {plans.map((p) => (
              <th
                key={p.id}
                scope="col"
                className={cn("px-4 py-5 text-center text-base font-semibold text-ink", p.recommended && "bg-brand-soft/60")}
              >
                {p.name}
                {p.recommended && <span className="block text-[0.7rem] font-semibold text-brand">Recommended</span>}
              </th>
            ))}
          </tr>
        </thead>
        {comparison.map((group) => (
          <tbody key={group.title}>
            <tr>
              <th
                scope="colgroup"
                colSpan={plans.length + 1}
                className="sticky left-0 bg-surface px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink"
              >
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.feature} className="border-b border-line last:border-0">
                <th scope="row" className="sticky left-0 z-10 bg-white px-6 py-4 align-top text-[0.93rem] font-medium text-ink">
                  {row.feature}
                  {row.note && <span className="mt-0.5 block text-xs font-normal leading-snug text-muted">{row.note}</span>}
                </th>
                {plans.map((p) => (
                  <td key={p.id} className={cn("px-4 py-4 text-center align-middle", p.recommended && "bg-brand-soft/40")}>
                    <Value value={row.values[p.id]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
