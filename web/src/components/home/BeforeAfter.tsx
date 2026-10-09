import { ArrowRight, Check, CircleCheck, Clock, Tag, X, Zap } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/mockups/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const before = [
  "Repeating the same replies manually",
  "Losing potential customers in the inbox",
  "Missing messages outside business hours",
  "Forgetting to follow up with interested leads",
];

const after = [
  "Automated replies to common questions",
  "Organised conversations and tagged leads",
  "Consistent messaging around the clock",
  "Structured follow-ups and clearer lead journeys",
];

const messyInbox = [
  { who: "AL", text: "price??", time: "11:48 PM", rot: "-rotate-2", offset: "ml-0" },
  { who: "JK", text: "is this still available", time: "11:52 PM", rot: "rotate-1", offset: "ml-6" },
  { who: "SM", text: "hello? anyone there", time: "12:07 AM", rot: "-rotate-1", offset: "ml-2" },
  { who: "RT", text: "how much is shipping to…", time: "12:31 AM", rot: "rotate-2", offset: "ml-8" },
  { who: "PN", text: "link pls", time: "1:15 AM", rot: "-rotate-1", offset: "ml-3" },
];

const organised = [
  { who: "AL", name: "Alex L.", status: "Answered automatically", icon: Zap, tag: "Pricing", tone: "brand" as const },
  { who: "JK", name: "Jamie K.", status: "Product link sent", icon: CircleCheck, tag: "Interested", tone: "mint" as const },
  { who: "SM", name: "Sana M.", status: "Lead captured", icon: Tag, tag: "Qualified", tone: "mint" as const },
  { who: "RT", name: "Ravi T.", status: "Follow-up scheduled", icon: Clock, tag: "Shipping", tone: "brand" as const },
];

export function BeforeAfter() {
  return (
    <Section labelledBy="ba-title" className="bg-surface">
      <Container>
        <SectionHeading
          id="ba-title"
          eyebrow="Why automate"
          title={
            <>
              Less manual work.
              <br />
              More meaningful growth.
            </>
          }
        />

        <div className="relative mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Before */}
          <Reveal>
            <div className="h-full rounded-[32px] bg-[#efedf3] p-6 ring-1 ring-line sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">Before</h3>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">
                  Manual inbox
                </span>
              </div>

              <div aria-hidden="true" className="mt-8 space-y-2.5 overflow-hidden rounded-[24px] bg-white/60 p-4 sm:p-5">
                {messyInbox.map((m) => (
                  <div
                    key={m.text}
                    className={cn("flex w-[88%] items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-soft", m.rot, m.offset)}
                  >
                    <Avatar initials={m.who} tone="ink" className="size-7 opacity-70" />
                    <p className="flex-1 truncate text-sm text-ink/80">{m.text}</p>
                    <span className="text-[0.68rem] text-subtle">{m.time}</span>
                    <span className="size-2 rounded-full bg-coral" />
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink/60">
                      <X className="size-3" aria-hidden="true" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Divider arrow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-float ring-8 ring-surface lg:flex"
          >
            <ArrowRight className="size-6" />
          </div>

          {/* After */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-[32px] bg-white p-6 shadow-float ring-1 ring-brand/15 sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">After</h3>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-strong">
                  With SocialXReach
                </span>
              </div>

              <div aria-hidden="true" className="mt-8 overflow-hidden rounded-[24px] ring-1 ring-line">
                <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-2.5 text-[0.72rem] font-semibold text-muted">
                  <span>Inbox · All channels</span>
                  <span className="flex gap-3">
                    <span className="text-brand">Leads</span>
                    <span>Needs reply</span>
                  </span>
                </div>
                {organised.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.name} className="flex items-center gap-3 border-b border-line bg-white px-4 py-3 last:border-0">
                      <Avatar initials={m.who} tone={m.tone === "mint" ? "mint" : "brand"} className="size-7" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-ink">{m.name}</p>
                        <p className="flex items-center gap-1 truncate text-[0.72rem] text-muted">
                          <Icon className="size-3" />
                          {m.status}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[0.66rem] font-semibold",
                          m.tone === "mint" ? "bg-mint text-mint-strong" : "bg-brand-soft text-brand-strong",
                        )}
                      >
                        {m.tag}
                      </span>
                    </div>
                  );
                })}
              </div>

              <ul className="mt-8 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="size-3" aria-hidden="true" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
