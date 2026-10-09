import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/** Standard hero for interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[72px] -z-10 h-[calc(100%+72px)] bg-[radial-gradient(50%_60%_at_80%_0%,#f1ebff_0%,transparent_70%),radial-gradient(35%_45%_at_5%_100%,#fff1ea_0%,transparent_70%)]"
      />
      <Container className="pb-16 pt-12 text-center sm:pb-20 sm:pt-20">
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <h1 className="mx-auto max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{description}</p>}
        {children && <div className="mt-9">{children}</div>}
      </Container>
    </section>
  );
}
