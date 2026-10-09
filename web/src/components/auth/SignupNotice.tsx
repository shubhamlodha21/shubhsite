"use client";

import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { pricingConfig } from "@/config/pricing";
import { templates } from "@/content/templates";

/** Reflects the plan/template the visitor chose before arriving at sign-up. */
export function SignupSelection() {
  const params = useSearchParams();
  const plan = pricingConfig.plans.find((p) => p.id === params.get("plan"));
  const template = templates.find((t) => t.id === params.get("template"));
  if (!plan && !template) return null;

  return (
    <div className="mt-6 rounded-2xl bg-brand-soft p-4 text-sm text-brand-strong" role="status">
      <p className="flex items-center gap-2 font-semibold">
        <Check className="size-4" aria-hidden="true" strokeWidth={3} />
        {plan && <>You chose the {plan.name} plan.</>}
        {plan && template && " "}
        {template && <>Starting template: {template.name}.</>}
      </p>
      <p className="mt-1 text-brand-strong/80">We’ll remember this when sign-ups open — just mention it in your message.</p>
    </div>
  );
}
