import { ProductPage, productMetadata } from "@/components/product/ProductPage";

export const metadata = productMetadata("instagram");

export default function Page() {
  return <ProductPage slug="instagram" />;
}
