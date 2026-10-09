import { ProductPage, productMetadata } from "@/components/product/ProductPage";

export const metadata = productMetadata("ai");

export default function Page() {
  return <ProductPage slug="ai" />;
}
