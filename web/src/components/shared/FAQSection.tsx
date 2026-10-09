import type { FAQ } from "@/content/types";
import { Accordion } from "@/components/ui/Accordion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";

export function FAQSection({
  faqs,
  title = "Frequently asked questions.",
  id = "faq",
  className,
}: {
  faqs: FAQ[];
  title?: string;
  id?: string;
  className?: string;
}) {
  return (
    <Section id={id} labelledBy={`${id}-title`} className={className}>
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id={`${id}-title`} align="left" eyebrow="FAQ" title={title} />
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            Can’t find what you’re looking for? We’re happy to help.
          </p>
          <ArrowLink href="/contact" className="mt-5">
            Contact us
          </ArrowLink>
        </div>
        <Accordion items={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
      </Container>
    </Section>
  );
}
