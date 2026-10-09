"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { isGroup, primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavItemIcon } from "./MegaMenu";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("Product");
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="flex size-11 items-center justify-center rounded-full text-ink hover:bg-ink/5"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/30 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={close}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between px-4 sm:px-6">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => {
              close();
              toggleRef.current?.focus();
            }}
            className="flex size-11 items-center justify-center rounded-full text-ink hover:bg-ink/5"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6" aria-label="Mobile">
          <ul className="divide-y divide-line">
            {primaryNav.map((item) =>
              isGroup(item) ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded === item.label}
                    aria-controls={`m-${item.label}`}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-4 text-lg font-semibold text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-5 transition-transform", expanded === item.label && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  <ul id={`m-${item.label}`} hidden={expanded !== item.label} className="space-y-1 pb-4">
                    {[...item.items, ...(item.footer ? [item.footer] : [])].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={close}
                          className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-[0.98rem] font-medium text-ink/85 hover:bg-surface"
                        >
                          <NavItemIcon item={link} />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className="block py-4 text-lg font-semibold text-ink">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-line p-4 sm:p-6">
          <ButtonLink href={site.links.signup} onClick={close} size="lg" className="w-full" arrow>
            Get started free
          </ButtonLink>
          <ButtonLink href={site.links.signin} onClick={close} variant="secondary" size="lg" className="w-full">
            Sign in
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
