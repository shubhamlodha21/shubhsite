import { SolutionPage, solutionMetadata } from "@/components/solutions/SolutionPage";

export const metadata = solutionMetadata("creators");

export default function Page() {
  return <SolutionPage slug="creators" />;
}
