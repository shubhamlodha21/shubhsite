import { site } from "@/config/site";
import { pageMetadata } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { AuthPlaceholder } from "@/components/auth/AuthPlaceholder";

export const metadata = pageMetadata({
  title: "Sign in",
  description: `Sign in to ${site.name}.`,
  path: "/signin",
});

export default function SigninPage() {
  return (
    <AuthPlaceholder
      title="Sign in is coming soon."
      description="Accounts haven’t launched yet, so there’s nothing to sign in to — and we won’t ask for a password until there is."
    >
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={site.links.signup} size="lg" arrow>
          Register interest
        </ButtonLink>
        <ButtonLink href="/" size="lg" variant="secondary">
          Back to home
        </ButtonLink>
      </div>
    </AuthPlaceholder>
  );
}
