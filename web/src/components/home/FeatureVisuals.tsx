import { ArrowRight, BookOpen, Building2, CornerDownRight, Mail, Phone, Sparkles, UserRound } from "lucide-react";
import { CommentCard } from "@/components/mockups/Conversation";
import { Avatar, Bubble, ChatPanel, QuickReplies, StatusPill } from "@/components/mockups/primitives";
import { DemoLabel } from "@/components/ui/Badge";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

/* 1 — Comment-to-DM workflow */
export function CommentToDMVisual() {
  return (
    <div className="relative grid gap-4 rounded-[32px] bg-lilac/70 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:p-8" aria-hidden="true">
      <div className="space-y-3">
        <CommentCard author="lena.k" initials="LK" text="LINK please!" post="Weekend recipe reel" className="shadow-soft" />
        <CommentCard author="dev.cooks" initials="DC" text="link" post="Weekend recipe reel" className="opacity-80 shadow-soft" />
      </div>
      <div className="flex justify-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-brand text-white shadow-float sm:rotate-0">
          <ArrowRight className="size-5 rotate-90 sm:rotate-0" />
        </span>
      </div>
      <ChatPanel name="Bake with Bea" platform="instagram" initials="BB">
        <Bubble from="brand">Here’s the full recipe and shopping list, Lena!</Bubble>
        <div className="flex">
          <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[0.76rem] font-semibold text-ink ring-1 ring-line">
            <BookOpen className="size-3.5 text-brand" />
            Lemon olive-oil cake
          </div>
        </div>
        <QuickReplies options={["Send more recipes"]} />
      </ChatPanel>
    </div>
  );
}

/* 2 — Lead form connected to CRM-style contact card */
export function LeadCaptureVisual() {
  return (
    <div className="relative rounded-[32px] bg-peach/70 p-5 sm:p-8" aria-hidden="true">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[22px] bg-white p-4 shadow-float">
          <p className="text-[0.72rem] font-semibold uppercase tracking-wider text-subtle">In conversation</p>
          <p className="mt-2 text-sm font-semibold text-ink">Quick question before we start:</p>
          <div className="mt-3 space-y-2.5">
            {[
              { icon: UserRound, label: "Name", value: "Daniel Okafor" },
              { icon: Mail, label: "Email", value: "daniel@example.com" },
              { icon: Building2, label: "Company size", value: "11–50 people" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl bg-surface px-3 py-2 ring-1 ring-line">
                <p className="flex items-center gap-1.5 text-[0.64rem] font-semibold uppercase tracking-wide text-subtle">
                  <Icon className="size-3" />
                  {label}
                </p>
                <p className="text-[0.8rem] font-medium text-ink">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-full bg-brand py-2 text-center text-[0.78rem] font-semibold text-white">Submit</div>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <div className="rounded-[22px] bg-white p-4 shadow-float">
            <div className="flex items-center gap-3">
              <Avatar initials="DO" tone="peach" className="size-10" />
              <div>
                <p className="text-sm font-semibold text-ink">Daniel Okafor</p>
                <p className="text-[0.72rem] text-muted">Contact · via Messenger</p>
              </div>
            </div>
            <dl className="mt-3 space-y-1.5 text-[0.74rem]">
              <div className="flex justify-between">
                <dt className="text-muted">Stage</dt>
                <dd className="font-semibold text-mint-strong">Qualified</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Interest</dt>
                <dd className="font-semibold text-ink">Team plan</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Owner</dt>
                <dd className="font-semibold text-ink">Sales inbox</dd>
              </div>
            </dl>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-mint px-2 py-0.5 text-[0.64rem] font-semibold text-mint-strong">lead:qualified</span>
              <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[0.64rem] font-semibold text-brand-strong">size:11-50</span>
            </div>
          </div>
          <StatusPill icon={Phone} tone="ink" className="self-start">
            Follow-up task created
          </StatusPill>
        </div>
      </div>
    </div>
  );
}

/* 3 — AI assistant responding with approved knowledge */
export function AIVisual() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-ink p-5 sm:p-8" aria-hidden="true">
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand/40 blur-3xl" />
      <div className="absolute -bottom-20 left-10 size-48 rounded-full bg-coral/25 blur-3xl" />
      <div className="relative grid gap-4 sm:grid-cols-[1.25fr_1fr]">
        <ChatPanel name="Atlas Outdoor" platform="whatsapp" initials="AO" status="AI assistant active">
          <Bubble from="customer">Do you ship to Canada, and how long does it take?</Bubble>
          <div className="flex">
            <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-[linear-gradient(135deg,#f2eeff,#fff0f1)] px-3.5 py-2 text-[0.8rem] leading-snug text-ink ring-1 ring-brand/20">
              <p className="mb-1 flex items-center gap-1 text-[0.64rem] font-semibold uppercase tracking-wide text-brand-strong">
                <Sparkles className="size-3" /> AI reply
              </p>
              Yes! We ship to Canada. Orders usually arrive in 5–8 business days. Want the tracking link once it ships?
            </div>
          </div>
          <QuickReplies options={["Yes please", "Talk to a person"]} />
        </ChatPanel>
        <div className="space-y-3">
          <div className="rounded-[20px] bg-white/10 p-4 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="text-[0.66rem] font-semibold uppercase tracking-wider text-white/60">Answer based on</p>
            <ul className="mt-2 space-y-1.5 text-[0.8rem]">
              <li className="flex items-center gap-2"><BookOpen className="size-3.5 text-lilac" /> Shipping policy</li>
              <li className="flex items-center gap-2"><BookOpen className="size-3.5 text-lilac" /> Delivery FAQ</li>
            </ul>
          </div>
          <div className="rounded-[20px] bg-white/10 p-4 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="text-[0.66rem] font-semibold uppercase tracking-wider text-white/60">Hand-off rule</p>
            <p className="mt-2 flex items-start gap-2 text-[0.8rem]">
              <CornerDownRight className="mt-0.5 size-3.5 shrink-0 text-coral" />
              Refunds, complaints or low confidence → team inbox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4 — Analytics dashboard (demo data) */
const bars = [38, 52, 46, 61, 58, 74, 69, 83, 77, 90, 86, 96];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export function AnalyticsVisual() {
  const kpis = [
    { label: "Conversations", value: "4,812", delta: "+12%" },
    { label: "Leads captured", value: "1,036", delta: "+8%" },
    { label: "Link clicks", value: "2,290", delta: "+15%" },
    { label: "Avg. first reply", value: "Instant", delta: "Automated" },
  ];
  const top = [
    { name: "Comment → DM · Spring drop", platform: "instagram" as const, value: 82 },
    { name: "Quote qualifier", platform: "messenger" as const, value: 64 },
    { name: "Opening hours FAQ", platform: "whatsapp" as const, value: 47 },
  ];

  return (
    <div className="rounded-[32px] bg-white p-4 shadow-float ring-1 ring-line sm:p-7" aria-hidden="true">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">Performance overview</p>
          <p className="text-xs text-muted">Last 12 months · All channels</p>
        </div>
        <DemoLabel>Sample data</DemoLabel>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl bg-surface p-4 ring-1 ring-line">
            <p className="text-xs text-muted">{k.label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-ink">{k.value}</p>
            <p className="mt-0.5 text-xs font-semibold text-mint-strong">{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl p-4 ring-1 ring-line">
          <p className="text-xs font-semibold text-ink">Leads captured per month</p>
          <div className="mt-4 flex h-40 items-end gap-1.5 sm:gap-2.5">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t-md bg-[linear-gradient(180deg,#8b70ff,#6c4cf1)] opacity-90"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[0.6rem] text-subtle">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-4 ring-1 ring-line">
          <p className="text-xs font-semibold text-ink">Top automations by conversion</p>
          <ul className="mt-4 space-y-4">
            {top.map((t) => (
              <li key={t.name}>
                <div className="flex items-center gap-2">
                  <PlatformIcon platform={t.platform} size="xs" />
                  <span className="flex-1 truncate text-[0.76rem] font-medium text-ink">{t.name}</span>
                  <span className="text-[0.72rem] font-semibold text-ink">{t.value}%</span>
                </div>
                <div className="mt-1.5 h-1.5 rounded-full bg-surface">
                  <div className="h-full rounded-full bg-coral" style={{ width: `${t.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
