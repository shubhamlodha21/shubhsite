"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { Sparkles } from "lucide-react";
import { scenarios } from "@/content/scenarios";
import { ChatPanel, Connector, FlowNode } from "@/components/mockups/primitives";
import { ConvoStepView } from "@/components/mockups/Conversation";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function AutomationDemo() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const scenario = scenarios[active];

  const select = (i: number) => {
    const next = (i + scenarios.length) % scenarios.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") select(active + 1);
    else if (e.key === "ArrowLeft") select(active - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(scenarios.length - 1);
    else return;
    e.preventDefault();
  };

  const summary = [
    { label: "Trigger", value: scenario.trigger },
    { label: "Customer action", value: scenario.customerAction },
    { label: "Automation decision", value: scenario.decision },
    { label: "Outgoing message", value: scenario.outgoing },
  ];

  return (
    <Section id="demo" labelledBy="demo-title" className="bg-white">
      <Container>
        <SectionHeading
          id="demo-title"
          eyebrow="See it in action"
          title={<>From a simple comment to a meaningful conversation.</>}
          description="Turn everyday social engagement into an automated customer journey."
        />

        <div
          role="tablist"
          aria-label="Automation scenarios"
          onKeyDown={onKey}
          className="no-scrollbar mx-auto mt-12 flex max-w-full gap-2 overflow-x-auto rounded-full bg-surface p-1.5 ring-1 ring-line sm:w-fit"
        >
          {scenarios.map((s, i) => {
            const Icon = s.icon;
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`tab-${s.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5",
                  selected ? "text-white" : "text-ink/75 hover:text-ink",
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="demo-tab"
                    className="absolute inset-0 -z-0 rounded-full bg-ink"
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <Icon className="relative size-4" aria-hidden="true" />
                <span className="relative">{s.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${scenario.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${scenario.id}`}
          className="mt-10 grid gap-6 rounded-[32px] bg-[linear-gradient(140deg,#f5f1ff,#fff4ef)] p-4 ring-1 ring-line sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:p-12"
        >
          {/* Simulated conversation */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={scenario.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ChatPanel
                  name={scenario.channelName}
                  platform={scenario.platform}
                  initials={scenario.channelName
                    .split(/[\s&]+/)
                    .filter(Boolean)
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                  className="min-h-[430px]"
                >
                  {scenario.conversation.map((step, i) => (
                    <motion.div
                      key={`${scenario.id}-${i}`}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduce ? 0 : 0.15 + i * 0.32, duration: 0.3 }}
                    >
                      <ConvoStepView step={step} />
                    </motion.div>
                  ))}
                </ChatPanel>
              </motion.div>
            </AnimatePresence>
            <p className="mt-3 text-center text-xs text-subtle">Simulated conversation for demonstration.</p>
          </div>

          {/* Workflow + explanation */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={scenario.id}
              initial={reduce ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-[24px] bg-white/80 p-4 ring-1 ring-line backdrop-blur sm:p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-subtle">Workflow</p>
                {scenario.flow.map((step, i) => (
                  <div key={step.title}>
                    {i > 0 && <Connector height={14} />}
                    <FlowNode kind={step.kind} title={step.title} detail={step.detail} compact />
                  </div>
                ))}
              </div>

              <dl className="grid gap-4 sm:grid-cols-2">
                {summary.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-brand">{row.label}</dt>
                    <dd className="mt-1 text-[0.95rem] leading-snug text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex items-start gap-3 rounded-2xl bg-ink p-4 text-white">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Sparkles className="size-4" aria-hidden="true" />
                </span>
                <p className="text-[0.95rem] leading-snug">
                  <span className="font-semibold">The result: </span>
                  {scenario.benefit}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
