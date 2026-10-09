import { ProductPage, productMetadata } from "@/components/product/ProductPage";

export const metadata = productMetadata("whatsapp");

export default function Page() {
  return <ProductPage slug="whatsapp" />;
}
