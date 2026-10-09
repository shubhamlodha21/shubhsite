import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden="true">
      <defs>
        <linearGradient id="fp-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7b5cff" />
          <stop offset="1" stopColor="#5131d6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="10" fill="url(#fp-mark)" />
      <path d="M9 11.5c0-1.4 1.1-2.5 2.5-2.5h9c1.4 0 2.5 1.1 2.5 2.5v5c0 1.4-1.1 2.5-2.5 2.5h-5.2L11.6 22v-3H11.5A2.5 2.5 0 0 1 9 16.5v-5Z" fill="#fff" />
      <circle cx="13" cy="14" r="1.4" fill="#6c4cf1" />
      <circle cx="19" cy="14" r="1.4" fill="#ff6b78" />
      <path d="M14.4 14h3.2" stroke="#6c4cf1" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="0.1 1.6" />
    </svg>
  );
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 rounded-lg", className)}
      aria-label={`${site.name} home`}
    >
      <LogoMark />
      <span className={cn("text-[1.2rem] font-semibold tracking-tight", inverted ? "text-white" : "text-ink")}>
        {site.name}
      </span>
    </Link>
  );
}
