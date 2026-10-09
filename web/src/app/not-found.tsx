import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Bubble } from "@/components/mockups/primitives";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div aria-hidden="true" className="w-full max-w-xs space-y-2">
        <Bubble from="customer">Is this page still available?</Bubble>
        <Bubble from="brand">Sorry — we couldn’t find it. Let’s get you back on track.</Bubble>
      </div>
      <h1 className="mt-10 text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-muted">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" arrow>
          Go to homepage
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
