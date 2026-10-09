"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isGroup, primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement).closest("[data-desktop-nav]")) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [openMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled ? "bg-white/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80]"
      >
        Skip to content
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block" data-desktop-nav>
          <ul className="flex items-center gap-0.5">
            {primaryNav.map((item) => (
              <li key={item.label}>
                {isGroup(item) ? (
                  <MegaMenu
                    group={item}
                    open={openMenu === item.label}
                    onOpenChange={(o) => setOpenMenu((cur) => (o ? item.label : cur === item.label ? null : cur))}
                  />
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-3 py-2 text-[0.94rem] font-medium text-ink/80 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href={site.links.signin}
            className="hidden rounded-full px-3 py-2 text-[0.94rem] font-medium whitespace-nowrap text-ink/80 hover:text-ink xl:block"
          >
            Sign in
          </Link>
          <ButtonLink href={site.links.signup} size="sm" className="hidden px-5 sm:inline-flex">
            Get started free
          </ButtonLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
