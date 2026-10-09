import { homeFaqs } from "@/content/faq";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { AutomationDemo } from "@/components/home/AutomationDemo";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { WorkflowBuilderDemo } from "@/components/home/WorkflowBuilderDemo";
import { AudienceSection } from "@/components/home/AudienceSection";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { CustomerStories } from "@/components/home/CustomerStories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FAQSection } from "@/components/shared/FAQSection";
import { FinalCTA } from "@/components/shared/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AutomationDemo />
      <BeforeAfter />
      <FeatureShowcase />
      <WorkflowBuilderDemo />
      <AudienceSection />
      <IntegrationsSection />
      <CustomerStories />
      <HowItWorks />
      <PricingPreview />
      <FAQSection faqs={homeFaqs} />
      <FinalCTA />
    </>
  );
}
