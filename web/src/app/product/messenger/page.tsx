import { ProductPage, productMetadata } from "@/components/product/ProductPage";

export const metadata = productMetadata("messenger");

export default function Page() {
  return <ProductPage slug="messenger" />;
}
