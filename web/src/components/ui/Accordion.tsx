"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { question: string; answer: ReactNode };

/**
 * Accessible accordion (WAI-ARIA disclosure pattern).
 * Height animates with the CSS grid-rows technique, so it degrades gracefully.
 */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line rounded-[var(--radius-card)] bg-white ring-1 ring-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 rounded-[var(--radius-card)] px-6 py-5 text-left text-[1.05rem] font-semibold text-ink transition-colors hover:text-brand sm:px-8 sm:py-6"
              >
                {item.question}
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color] duration-300",
                    isOpen ? "rotate-45 bg-brand text-white" : "bg-surface text-ink",
                  )}
                  aria-hidden="true"
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="px-6 pb-6 pr-16 leading-relaxed text-muted sm:px-8">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
