import { pageMetadata } from "@/lib/utils";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata = pageMetadata({
  title: "Terms of service",
  description: "Placeholder terms of service for SocialXReach.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="Draft — not yet in effect"
      sections={[
        { heading: "Acceptance of terms", body: ["This section will explain how the terms apply when you create an account or use the service."] },
        { heading: "Accounts", body: ["This section will cover eligibility, account security and responsibility for activity under your account."] },
        {
          heading: "Acceptable use",
          body: [
            "This section will prohibit spam, unsolicited messaging and any use that breaks the rules of connected platforms such as Meta or TikTok.",
          ],
        },
        {
          heading: "Third-party platforms",
          body: ["This section will explain that channel availability depends on third-party APIs, approvals and policies that may change."],
        },
        { heading: "Plans and billing", body: ["This section will describe subscriptions, renewals, cancellations and refunds."] },
        { heading: "AI-generated content", body: ["This section will explain your responsibility for reviewing automated and AI-generated messages."] },
        { heading: "Intellectual property", body: ["This section will address ownership of your content and of the SocialXReach service."] },
        { heading: "Limitation of liability", body: ["This section will set out warranties, disclaimers and limits of liability."] },
        { heading: "Changes and contact", body: ["This section will explain how we update these terms and how to reach us."] },
      ]}
    />
  );
}
