import { Clock, ShieldCheck, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlatformIcon, platformLabels, type Platform } from "@/components/ui/PlatformIcon";

const platforms: Platform[] = ["instagram", "whatsapp", "messenger", "tiktok"];

const benefits = [
  { icon: Workflow, text: "One builder for every channel" },
  { icon: Clock, text: "Replies that work around the clock" },
  { icon: ShieldCheck, text: "Designed around official platform APIs" },
];

export function TrustSection() {
  return (
    <section aria-labelledby="trust-title" className="border-y border-line bg-surface">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <h2
            id="trust-title"
            className="max-w-xs text-center text-xl font-semibold leading-snug tracking-tight text-ink lg:text-left"
          >
            Built for the conversations that grow your business.
          </h2>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-5 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12" aria-label="Supported channels">
            {platforms.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <PlatformIcon platform={p} size="md" />
                <span className="text-lg font-semibold text-ink">{platformLabels[p]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 border-t border-line pt-8 lg:flex-row lg:justify-between">
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                <Icon className="size-4 text-brand" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <p className="max-w-sm text-center text-xs leading-relaxed text-subtle lg:text-right">
            Channel names indicate compatibility goals. No partnership or endorsement is implied.
          </p>
        </div>
      </Container>
    </section>
  );
}
