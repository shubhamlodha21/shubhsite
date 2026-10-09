import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand", className)}>{children}</p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={cn(
          "font-semibold tracking-[-0.035em] text-ink",
          Tag === "h1" ? "text-[2.6rem] leading-[1.02] sm:text-6xl" : "text-[2.15rem] leading-[1.05] sm:text-5xl",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed text-muted", align === "center" && "mx-auto max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
