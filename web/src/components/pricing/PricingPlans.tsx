"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { pricingConfig, type BillingCycle } from "@/config/pricing";
import { BillingToggle } from "./BillingToggle";
import { PricingCard } from "./PricingCard";

/** Billing toggle + plan cards with shared state. */
export function PricingPlans() {
  const [cycle, setCycle] = useState<BillingCycle>("annual");
  return (
    <div>
      <BillingToggle value={cycle} onChange={setCycle} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pricingConfig.plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} cycle={cycle} />
        ))}
      </div>
      {pricingConfig.isDemo && (
        <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
          {pricingConfig.demoNotice}
        </p>
      )}
    </div>
  );
}
