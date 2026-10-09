import { SolutionPage, solutionMetadata } from "@/components/solutions/SolutionPage";

export const metadata = solutionMetadata("ecommerce");

export default function Page() {
  return <SolutionPage slug="ecommerce" />;
}
