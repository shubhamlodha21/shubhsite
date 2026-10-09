import { pageMetadata } from "@/lib/utils";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description: "Placeholder privacy policy for SocialXReach.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="Draft — not yet in effect"
      sections={[
        {
          heading: "Who we are",
          body: ["This section will identify the company responsible for SocialXReach and how to contact us about privacy."],
        },
        {
          heading: "Information we collect",
          body: [
            "Contact form submissions on this website (name, email address and message) are stored by our backend so we can reply.",
            "The final policy will describe account data, connected-channel data, conversation content and usage data.",
          ],
        },
        {
          heading: "How we use information",
          body: ["This section will explain the purposes and legal bases for processing, including providing the service and support."],
        },
        {
          heading: "Data from connected platforms",
          body: [
            "This section will describe how data received through platform APIs (such as Instagram or WhatsApp) is handled in line with those platforms’ terms.",
          ],
        },
        {
          heading: "AI features",
          body: ["This section will describe what data AI features process, which providers are used and whether data is retained."],
        },
        {
          heading: "Sharing and processors",
          body: ["This section will list categories of service providers and the safeguards in place."],
        },
        {
          heading: "Retention and deletion",
          body: ["This section will explain how long data is kept and how to request deletion."],
        },
        {
          heading: "Your rights",
          body: ["This section will describe access, correction, deletion and objection rights, and how to exercise them."],
        },
        {
          heading: "Contact",
          body: ["Questions about privacy can be sent through the contact page in the meantime."],
        },
      ]}
    />
  );
}
