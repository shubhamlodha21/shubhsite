import Link from "next/link";
import { Globe } from "lucide-react";
import { footerColumns } from "@/config/navigation";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_3fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 leading-relaxed text-muted">{site.tagline}</p>
            {site.social.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="text-sm font-medium text-muted hover:text-ink" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="text-sm font-semibold text-ink">{col.title}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="rounded text-[0.93rem] text-muted transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-[0.8rem] leading-relaxed text-subtle md:text-right">
            Instagram, WhatsApp, Messenger and TikTok are trademarks of their respective owners. {site.name} is an
            independent product and is not affiliated with or endorsed by them.
          </p>
          <p className="flex items-center gap-1.5">
            <Globe className="size-4" aria-hidden="true" />
            <span>{site.languages[0].label}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
