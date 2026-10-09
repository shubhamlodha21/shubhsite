import { clsx, type ClassValue } from "clsx";
import type { Metadata } from "next";
import { site } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Consistent per-page metadata: title, description, canonical and Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `${title} · ${site.name}`, description },
  };
}
