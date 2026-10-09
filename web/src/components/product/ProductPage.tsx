import type { Metadata } from "next";
import { getProduct, type Product } from "@/content/products";
import { pageMetadata } from "@/lib/utils";
import { FAQSection } from "@/components/shared/FAQSection";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ProductHero } from "./ProductHero";
import { ProductFeatures, ProductSetup, ProductUseCases, ProductWorkflow, RelatedIntegrations } from "./ProductSections";

export function productMetadata(slug: Product["slug"]): Metadata {
  const p = getProduct(slug);
  return pageMetadata({ title: p.name, description: p.metaDescription, path: `/product/${p.slug}` });
}

/** Shared template for every channel / capability page. */
export function ProductPage({ slug }: { slug: Product["slug"] }) {
  const product = getProduct(slug);
  return (
    <>
      <ProductHero product={product} />
      <ProductUseCases product={product} />
      <ProductWorkflow product={product} />
      <ProductFeatures product={product} />
      <ProductSetup product={product} />
      <RelatedIntegrations ids={product.integrations} />
      <FAQSection faqs={product.faqs} title={`${product.shortName} questions.`} />
      <FinalCTA
        title={`Start automating ${product.slug === "ai" ? "with AI" : `on ${product.shortName}`}.`}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
