import { SolutionPage, solutionMetadata } from "@/components/solutions/SolutionPage";

export const metadata = solutionMetadata("agencies");

export default function Page() {
  return <SolutionPage slug="agencies" />;
}
