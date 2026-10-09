import { stories, storiesDisclaimer } from "@/content/stories";
import { StoryCard } from "@/components/customers/StoryCard";
import { ArrowLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function CustomerStories() {
  const [featured, ...rest] = stories;
  return (
    <Section labelledBy="stories-title">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="stories-title"
            align="left"
            eyebrow="Customer stories"
            title="Better conversations create better customer experiences."
          />
          <ArrowLink href="/customers" className="shrink-0">
            All stories
          </ArrowLink>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-muted">{storiesDisclaimer}</p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <StoryCard story={featured} featured />
          </Reveal>
          {rest.slice(0, 2).map((s, i) => (
            <Reveal key={s.slug} delay={0.08 * (i + 1)}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
