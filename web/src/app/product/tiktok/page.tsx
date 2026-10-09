import { ProductPage, productMetadata } from "@/components/product/ProductPage";

export const metadata = productMetadata("tiktok");

export default function Page() {
  return <ProductPage slug="tiktok" />;
}
