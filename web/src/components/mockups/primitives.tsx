import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Clock, GitBranch, MessageCircle, Sparkles, Tag, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlatformIcon, type Platform } from "@/components/ui/PlatformIcon";

/* ---------- Avatars ---------- */

const avatarTones = {
  brand: "bg-lilac text-brand-strong",
  coral: "bg-coral-soft text-coral-strong",
  peach: "bg-peach text-[#9a4a1f]",
  mint: "bg-mint text-mint-strong",
  ink: "bg-ink text-white",
} as const;

export function Avatar({
  initials,
  tone = "brand",
  className,
}: {
  initials: string;
  tone?: keyof typeof avatarTones;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold",
        avatarTones[tone],
        className,
      )}
    >
      {initials}
    </span>
  );
}

/* ---------- Conversation surfaces ---------- */

export function ChatPanel({
  name,
  status = "Automated replies on",
  platform,
  initials = "SL",
  children,
  className,
}: {
  name: string;
  status?: string;
  platform?: Platform;
  initials?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[22px] bg-white shadow-float ring-1 ring-ink/5", className)}>
      <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
        <Avatar initials={initials} tone="ink" className="size-7" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.8rem] font-semibold text-ink">{name}</p>
          <p className="flex items-center gap-1 overflow-hidden whitespace-nowrap text-[0.68rem] text-muted">
            <span className="size-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
            {status}
          </p>
        </div>
        {platform && <PlatformIcon platform={platform} size="xs" />}
      </div>
      <div className="space-y-2.5 bg-[linear-gradient(180deg,#fff,#fbfaff)] p-4">{children}</div>
    </div>
  );
}

export function Bubble({
  from,
  children,
  className,
}: {
  from: "customer" | "brand";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex", from === "customer" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] px-3.5 py-2 text-[0.8rem] leading-snug",
          from === "customer"
            ? "rounded-2xl rounded-br-md bg-brand text-white"
            : "rounded-2xl rounded-bl-md bg-surface text-ink ring-1 ring-line",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function QuickReplies({ options, selected }: { options: string[]; selected?: string }) {
  return (
    <div className="flex flex-wrap gap-1.5 pl-1">
      {options.map((o) => (
        <span
          key={o}
          className={cn(
            "rounded-full px-3 py-1 text-[0.72rem] font-semibold ring-1",
            o === selected ? "bg-brand text-white ring-brand" : "bg-white text-brand ring-brand/30",
          )}
        >
          {o}
        </span>
      ))}
    </div>
  );
}

export function LinkCard({ title, subtitle, cta = "View product" }: { title: string; subtitle: string; cta?: string }) {
  return (
    <div className="w-[85%] overflow-hidden rounded-2xl bg-white ring-1 ring-line">
      <div className="relative h-16 bg-[linear-gradient(135deg,#ffe7da,#ffd0c2_45%,#e9e1ff)]">
        <span className="absolute bottom-2 left-3 h-9 w-7 rounded-b-xl rounded-t-md bg-white/80 shadow-sm" aria-hidden="true" />
        <span className="absolute bottom-2 left-12 h-6 w-6 rounded-full bg-coral/70" aria-hidden="true" />
      </div>
      <div className="px-3 py-2">
        <p className="text-[0.78rem] font-semibold text-ink">{title}</p>
        <p className="text-[0.68rem] text-muted">{subtitle}</p>
      </div>
      <div className="border-t border-line py-1.5 text-center text-[0.72rem] font-semibold text-brand">{cta}</div>
    </div>
  );
}

export function TypingDots() {
  return (
    <div className="flex">
      <div className="flex gap-1 rounded-2xl rounded-bl-md bg-surface px-3 py-2.5 ring-1 ring-line" aria-label="Typing">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 animate-bounce rounded-full bg-subtle"
            style={{ animationDelay: `${i * 140}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Workflow nodes ---------- */

export type NodeKind = "trigger" | "condition" | "message" | "delay" | "action" | "ai";

export const nodeKinds: Record<NodeKind, { label: string; icon: LucideIcon; tile: string; ring: string }> = {
  trigger: { label: "Trigger", icon: Zap, tile: "bg-coral-soft text-coral-strong", ring: "ring-coral/40" },
  condition: { label: "Condition", icon: GitBranch, tile: "bg-sun text-[#7a5300]", ring: "ring-[#f0c24b]/60" },
  message: { label: "Message", icon: MessageCircle, tile: "bg-brand-soft text-brand-strong", ring: "ring-brand/40" },
  delay: { label: "Delay", icon: Clock, tile: "bg-surface text-muted", ring: "ring-ink/20" },
  action: { label: "Action", icon: Tag, tile: "bg-mint text-mint-strong", ring: "ring-[#3fbf7f]/50" },
  ai: { label: "AI step", icon: Sparkles, tile: "bg-[linear-gradient(135deg,#efe9ff,#ffe9ec)] text-brand-strong", ring: "ring-brand/40" },
};

export function FlowNode({
  kind,
  title,
  detail,
  className,
  compact = false,
}: {
  kind: NodeKind;
  title: string;
  detail?: string;
  className?: string;
  compact?: boolean;
}) {
  const k = nodeKinds[kind];
  const Icon = k.icon;
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl bg-white ring-1 ring-line shadow-soft",
        compact ? "px-3 py-2.5" : "px-4 py-3",
        className,
      )}
    >
      <span className={cn("flex shrink-0 items-center justify-center rounded-xl", k.tile, compact ? "size-8" : "size-9")}>
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-subtle">{k.label}</p>
        <p className={cn("truncate font-semibold text-ink", compact ? "text-[0.78rem]" : "text-sm")}>{title}</p>
        {detail && <p className="truncate text-[0.72rem] text-muted">{detail}</p>}
      </div>
    </div>
  );
}

/** Vertical dashed connector, animated unless the user prefers reduced motion. */
export function Connector({ className, height = 22 }: { className?: string; height?: number }) {
  return (
    <svg
      width="2"
      height={height}
      viewBox={`0 0 2 ${height}`}
      className={cn("mx-auto block overflow-visible", className)}
      aria-hidden="true"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2={height}
        stroke="#b9a9ff"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
        className="animate-dash"
      />
    </svg>
  );
}

/** Floating status pill used in illustrations. */
export function StatusPill({
  icon: Icon,
  children,
  tone = "white",
  className,
}: {
  icon?: LucideIcon;
  children: ReactNode;
  tone?: "white" | "brand" | "mint" | "ink";
  className?: string;
}) {
  const tones = {
    white: "bg-white text-ink ring-1 ring-line",
    brand: "bg-brand text-white",
    mint: "bg-mint text-mint-strong ring-1 ring-[#3fbf7f]/30",
    ink: "bg-ink text-white",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.74rem] font-semibold shadow-float",
        tones[tone],
        className,
      )}
    >
      {Icon && <Icon className="size-3.5" aria-hidden="true" />}
      {children}
    </div>
  );
}
