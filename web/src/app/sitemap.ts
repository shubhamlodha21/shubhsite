import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/content/products";
import { solutions } from "@/content/solutions";
import { stories } from "@/content/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/product",
    ...products.map((p) => `/product/${p.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    "/pricing",
    "/templates",
    "/integrations",
    "/customers",
    ...stories.map((s) => `/customers/${s.slug}`),
    "/about",
    "/contact",
    "/blog",
    "/help",
    "/guides",
    "/careers",
    "/privacy",
    "/terms",
  ];
  return paths.map((p) => ({ url: new URL(p, site.url).toString() }));
}
