import { Suspense } from "react";
import { BookOpen, LifeBuoy, Plug } from "lucide-react";
import { pageMetadata } from "@/lib/utils";
import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with the SocialXReach team about sales, integrations, partnerships or support.",
  path: "/contact",
});

const shortcuts = [
  { icon: LifeBuoy, title: "Help center", text: "Answers to common questions.", href: "/help" },
  { icon: Plug, title: "Integrations", text: "See what’s on the roadmap.", href: "/integrations" },
  { icon: BookOpen, title: "Guides", text: "Playbooks to get started.", href: "/guides" },
];

export default function ContactPage() {
  return (
    <section className="relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[72px] -z-10 h-[620px] bg-[radial-gradient(50%_60%_at_85%_0%,#f1ebff_0%,transparent_70%)]"
      />
      <Container className="grid gap-12 pb-24 pt-12 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl">
            Let’s talk.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Questions about plans, integrations or partnerships? Send us a message and we’ll get back to you.
          </p>
          <ul className="mt-10 space-y-3">
            {shortcuts.map(({ icon: Icon, title, text, href }) => (
              <li key={href} className="flex items-center gap-4 rounded-2xl bg-surface p-4 ring-1 ring-line">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white text-brand ring-1 ring-line">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="text-sm text-muted">{text}</p>
                </div>
                <ArrowLink href={href} className="text-sm">
                  Visit<span className="sr-only"> {title}</span>
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>
        <Suspense fallback={<div className="h-[560px] animate-pulse rounded-[28px] bg-surface" aria-hidden="true" />}>
          <ContactForm />
        </Suspense>
      </Container>
    </section>
  );
}
