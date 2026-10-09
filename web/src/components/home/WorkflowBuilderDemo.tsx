"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Info, MousePointerClick, Play } from "lucide-react";
import { sampleWorkflow } from "@/content/workflow";
import { Connector, nodeKinds } from "@/components/mockups/primitives";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function WorkflowBuilderDemo({ id = "builder", className }: { id?: string; className?: string }) {
  const [selectedId, setSelectedId] = useState(sampleWorkflow.nodes[0].id);
  const reduce = useReducedMotion();
  const selected = sampleWorkflow.nodes.find((n) => n.id === selectedId) ?? sampleWorkflow.nodes[0];
  const selectedKind = nodeKinds[selected.kind];
  const SelectedIcon = selectedKind.icon;

  return (
    <Section id={id} labelledBy={`${id}-title`} className={cn("bg-[#f6f3ff]", className)}>
      <Container>
        <SectionHeading
          id={`${id}-title`}
          eyebrow="Visual builder"
          title="Build powerful automations without writing code."
          description="Connect triggers, conditions, messages, and actions in a workflow that fits your business."
        />

        <div className="mt-14 overflow-hidden rounded-[32px] bg-white shadow-float ring-1 ring-line">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Play className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{sampleWorkflow.name}</p>
                <p className="text-xs text-muted">{sampleWorkflow.nodes.length} steps · Instagram</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-xs font-semibold text-[#7a5300]">
              <Info className="size-3.5" aria-hidden="true" />
              Interactive preview — nothing is sent
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px]">
            {/* Canvas */}
            <div className="canvas-dots relative px-4 py-8 sm:px-10 sm:py-12">
              <p className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-muted">
                <MousePointerClick className="size-4" aria-hidden="true" />
                Select a step to see its settings
              </p>
              <ol className="mx-auto max-w-[400px]" aria-label="Workflow steps">
                {sampleWorkflow.nodes.map((node, i) => {
                  const k = nodeKinds[node.kind];
                  const Icon = k.icon;
                  const isSelected = node.id === selectedId;
                  return (
                    <li key={node.id}>
                      {i > 0 && <Connector height={26} />}
                      <div className="relative">
                        <button
                          type="button"
                          aria-pressed={isSelected}
                          aria-controls={`${id}-panel`}
                          onClick={() => setSelectedId(node.id)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left shadow-soft ring-1 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5",
                            isSelected ? cn("ring-2 shadow-float", k.ring) : "ring-line",
                          )}
                        >
                          <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", k.tile)}>
                            <Icon className="size-[18px]" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[0.62rem] font-semibold uppercase tracking-wider text-subtle">
                              {k.label}
                            </span>
                            <span className="block truncate font-semibold text-ink">{node.title}</span>
                            <span className="block truncate text-xs text-muted">{node.summary}</span>
                          </span>
                          <span
                            className={cn(
                              "hidden shrink-0 rounded-full px-2 py-0.5 text-[0.66rem] font-semibold sm:inline",
                              isSelected ? "bg-brand text-white" : "bg-surface text-muted",
                            )}
                          >
                            {node.status}
                          </span>
                        </button>
                        {node.branch && (
                          <span className="absolute -right-2 top-1/2 hidden translate-x-full -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[0.66rem] font-semibold text-muted ring-1 ring-line xl:inline-flex">
                            <span className="h-px w-4 border-t border-dashed border-subtle" aria-hidden="true" />
                            {node.branch}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Side panel */}
            <aside
              id={`${id}-panel`}
              aria-live="polite"
              className="border-t border-line bg-surface/70 p-5 sm:p-7 lg:border-l lg:border-t-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selected.id}
                  initial={reduce ? false : { opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("flex size-11 items-center justify-center rounded-xl", selectedKind.tile)}>
                      <SelectedIcon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-subtle">{selectedKind.label}</p>
                      <h3 className="text-lg font-semibold text-ink">{selected.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{selected.description}</p>

                  <dl className="mt-6 space-y-3">
                    {selected.fields.map((f) => (
                      <div key={f.label}>
                        <dt className="text-xs font-semibold text-ink">{f.label}</dt>
                        <dd className="mt-1 break-words rounded-xl bg-white px-3 py-2.5 text-sm text-ink/85 ring-1 ring-line">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {selected.preview && (
                    <div className="mt-6">
                      <p className="text-xs font-semibold text-ink">Message preview</p>
                      <div className="mt-2 rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm leading-snug text-ink ring-1 ring-line">
                        {selected.preview}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  );
}
