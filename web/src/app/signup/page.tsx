import { Suspense } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { AuthPlaceholder } from "@/components/auth/AuthPlaceholder";
import { SignupSelection } from "@/components/auth/SignupNotice";

export const metadata = pageMetadata({
  title: "Get started",
  description: `Register your interest in ${site.name}.`,
  path: "/signup",
});

export default function SignupPage() {
  return (
    <AuthPlaceholder
      title="You’re early — and that’s great."
      description={`${site.name} isn’t open for sign-ups yet. Register your interest and we’ll email you when your free account is ready.`}
    >
      <Suspense fallback={null}>
        <SignupSelection />
      </Suspense>
      <ol className="mt-8 space-y-3 text-[0.95rem] text-ink">
        <li className="flex gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">1</span>
          Send us a short message with the channels you use.
        </li>
        <li className="flex gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">2</span>
          We’ll invite you when early access opens.
        </li>
        <li className="flex gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">3</span>
          Connect a channel and launch your first workflow.
        </li>
      </ol>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact?topic=general" size="lg" arrow>
          Register interest
        </ButtonLink>
        <ButtonLink href="/templates" size="lg" variant="secondary">
          Explore templates
        </ButtonLink>
      </div>
      <p className="mt-6 text-sm text-muted">
        Already invited?{" "}
        <Link href={site.links.signin} className="rounded font-semibold text-brand hover:text-brand-strong">
          Sign in
        </Link>
      </p>
    </AuthPlaceholder>
  );
}
