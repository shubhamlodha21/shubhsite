import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ChatPanel, Bubble, QuickReplies } from "@/components/mockups/primitives";

/**
 * Honest placeholder for authentication routes. Replace with the real
 * auth provider (e.g. sign-up / sign-in forms) when accounts launch.
 */
export function AuthPlaceholder({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-0 -top-[72px] -z-10 bg-[radial-gradient(50%_60%_at_85%_10%,#f1ebff_0%,transparent_70%),radial-gradient(40%_40%_at_0%_100%,#fff1ea_0%,transparent_70%)]"
      />
      <Container className="grid min-h-[70vh] items-center gap-12 py-16 lg:grid-cols-2">
        <div className="max-w-md">
          <Logo />
          <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-sun px-3 py-1.5 text-xs font-semibold text-[#7a5300]">
            <Lock className="size-3.5" aria-hidden="true" />
            Accounts are not available yet
          </div>
          {children}
        </div>
        <div aria-hidden="true" className="mx-auto hidden w-full max-w-sm lg:block">
          <ChatPanel name="SocialXReach" initials="SR" status="Coming soon">
            <Bubble from="customer">When can I start?</Bubble>
            <Bubble from="brand">Very soon! Leave your details and we’ll let you know as soon as accounts open.</Bubble>
            <QuickReplies options={["Notify me", "See pricing"]} selected="Notify me" />
          </ChatPanel>
        </div>
      </Container>
    </section>
  );
}
