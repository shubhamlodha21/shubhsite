"use client";

import { cn } from "@/lib/utils";

/** Single-select filter chips (radio semantics). */
export function FilterChips<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const checked = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={checked}
            onClick={() => onChange(o.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              checked ? "bg-ink text-white" : "bg-white text-ink/80 ring-1 ring-line hover:text-ink hover:ring-ink/25",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
