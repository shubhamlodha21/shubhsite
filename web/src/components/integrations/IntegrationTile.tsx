import type { Integration } from "@/content/integrations";
import { statusLabels } from "@/content/integrations";
import { cn } from "@/lib/utils";

export function Monogram({ integration, className }: { integration: Integration; className?: string }) {
  const letters = integration.name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white", className)}
      style={{ background: integration.color }}
    >
      {letters}
    </span>
  );
}

export function StatusBadge({ status }: { status: Integration["status"] }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[0.66rem] font-semibold whitespace-nowrap",
        status === "available" && "bg-mint text-mint-strong",
        status === "planned" && "bg-brand-soft text-brand-strong",
        status === "exploring" && "bg-surface text-muted ring-1 ring-line",
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
