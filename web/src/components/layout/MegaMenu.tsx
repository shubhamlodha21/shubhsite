"use client";

import Link from "next/link";
import { useRef, type KeyboardEvent } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { NavGroup, NavLink } from "@/config/navigation";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { cn } from "@/lib/utils";

export function NavItemIcon({ item, className }: { item: NavLink; className?: string }) {
  if (item.platform) return <PlatformIcon platform={item.platform} size="sm" className={className} />;
  if (item.icon) {
    const Icon = item.icon;
    return (
      <span className={cn("flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand", className)}>
        <Icon className="size-4" aria-hidden="true" />
      </span>
    );
  }
  return null;
}

/**
 * Click-to-open dropdown (hover also opens on pointer devices).
 * Keyboard: Enter/Space/ArrowDown open, arrows move, Escape closes.
 */
export function MegaMenu({
  group,
  open,
  onOpenChange,
}: {
  group: NavGroup;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = `menu-${group.label.toLowerCase()}`;
  const wide = group.items.length > 4;

  const focusItem = (index: number) => {
    const links = panelRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (!links?.length) return;
    links[(index + links.length) % links.length].focus();
  };

  const openAndFocus = (index: number) => {
    onOpenChange(true);
    requestAnimationFrame(() => focusItem(index));
  };

  const onTriggerKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openAndFocus(0);
    } else if (e.key === "Escape") {
      onOpenChange(false);
    }
  };

  const onPanelKey = (e: KeyboardEvent) => {
    const links = Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      focusItem(current + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      focusItem(current - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusItem(links.length - 1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onOpenChange(false);
      triggerRef.current?.focus();
    }
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <div
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        onOpenChange(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        closeTimer.current = setTimeout(() => onOpenChange(false), 140);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onOpenChange(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onOpenChange(!open)}
        onKeyDown={onTriggerKey}
        className={cn(
          "flex items-center gap-1 rounded-full px-3 py-2 text-[0.94rem] font-medium transition-colors",
          open ? "bg-ink/5 text-ink" : "text-ink/80 hover:text-ink",
        )}
      >
        {group.label}
        <ChevronDown className={cn("size-4 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
      </button>

      <div
        id={panelId}
        ref={panelRef}
        onKeyDown={onPanelKey}
        hidden={!open}
        className={cn("absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3", wide ? "w-[600px]" : "w-[340px]")}
      >
        <div className="origin-top animate-[menu-in_160ms_ease-out] rounded-[22px] bg-white p-3 shadow-float ring-1 ring-line">
          <ul className={cn("grid gap-1", wide && "grid-cols-2")}>
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-surface focus-visible:bg-surface"
                >
                  <NavItemIcon item={item} className="mt-0.5" />
                  <span>
                    <span className="block text-[0.92rem] font-semibold text-ink">{item.label}</span>
                    {item.description && <span className="block text-[0.82rem] text-muted">{item.description}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {group.footer && (
            <Link
              href={group.footer.href}
              onClick={() => onOpenChange(false)}
              className="mt-2 flex items-center justify-between rounded-2xl bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-strong transition-colors hover:bg-lilac"
            >
              {group.footer.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
