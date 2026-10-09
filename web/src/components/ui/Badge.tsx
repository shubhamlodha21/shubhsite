import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "coral" | "mint" | "neutral" | "sun" | "dark";

const tones: Record<Tone, string> = {
  brand: "bg-brand-soft text-brand-strong",
  coral: "bg-coral-soft text-coral-strong",
  mint: "bg-mint text-mint-strong",
  neutral: "bg-surface text-muted ring-1 ring-line",
  sun: "bg-sun text-[#7a5300]",
  dark: "bg-ink text-white",
};

export function Badge({ children, tone = "brand", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold leading-none whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small honest label for illustrative content. */
export function DemoLabel({ children = "Demo data", className }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-sun px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-[#7a5300]",
        className,
      )}
    >
      {children}
    </span>
  );
}
