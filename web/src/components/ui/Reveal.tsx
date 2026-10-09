"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered fade/slide driven by CSS (see `.reveal` in globals.css).
 * Content is only hidden when JavaScript is running AND the user allows
 * motion, so it is always visible without JS or with reduced motion.
 * Use `as="li"` inside lists.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const props = {
    className: cn("reveal", className),
    style: delay ? ({ transitionDelay: `${delay}s` } satisfies CSSProperties) : undefined,
  };

  return Tag === "li" ? (
    <li ref={ref as RefObject<HTMLLIElement>} {...props}>
      {children}
    </li>
  ) : (
    <div ref={ref as RefObject<HTMLDivElement>} {...props}>
      {children}
    </div>
  );
}
