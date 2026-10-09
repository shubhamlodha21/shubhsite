"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Bookmark, Heart, MessageCircle, Send, UserRoundCheck, Zap } from "lucide-react";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { CommentCard } from "@/components/mockups/Conversation";
import { Avatar, Bubble, ChatPanel, Connector, FlowNode, LinkCard, StatusPill } from "@/components/mockups/primitives";

function Piece({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.25 + delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hero product illustration: a comment triggers a DM, the shopper taps
 * "Show me more", shares an email and is tagged as a qualified lead.
 * Absolutely positioned from `sm` up; stacked on small phones.
 */
export function HeroIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-[620px]"
      role="img"
      aria-label="Product illustration: a customer comments 'Can you share the details?', receives an automated direct message with a product card, taps 'Show me more', shares an email address and is tagged as a qualified lead."
    >
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[2%] top-[6%] size-[62%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#efe8ff,#e3d8ff_60%,transparent_72%)]" />
        <div className="absolute bottom-[4%] left-[6%] h-[34%] w-[44%] rounded-[46%_54%_38%_62%/55%_40%_60%_45%] bg-peach/80" />
        <div className="canvas-dots absolute left-[38%] top-[34%] h-[30%] w-[30%] rounded-3xl opacity-70" />
      </div>

      <div className="relative flex flex-col gap-4 sm:block sm:aspect-[10/11]">
        {/* 1. Social post with comment */}
        <Piece delay={0} className="relative z-10 w-[86%] sm:absolute sm:left-0 sm:top-[3%] sm:w-[52%]">
          <div className="overflow-hidden rounded-[22px] bg-white shadow-float ring-1 ring-ink/5">
            <div className="flex items-center gap-2 px-3.5 py-2.5">
              <Avatar initials="TK" tone="peach" className="size-7" />
              <p className="flex-1 text-[0.76rem] font-semibold text-ink">terraandkiln</p>
              <PlatformIcon platform="instagram" size="xs" />
            </div>
            <div className="relative h-28 bg-[linear-gradient(140deg,#ffe7da,#ffcdbd_50%,#f6c2d6)] sm:h-36">
              <span className="absolute bottom-4 left-[18%] h-[55%] w-[22%] rounded-b-[38%] rounded-t-lg bg-[#fff6ef] shadow-md" />
              <span className="absolute bottom-4 left-[36%] h-[30%] w-[7%] rounded-r-full border-[5px] border-l-0 border-[#fff6ef]" />
              <span className="absolute bottom-4 left-[52%] h-[40%] w-[26%] rounded-b-[45%] rounded-t-md bg-[#d9805f] shadow-md" />
              <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-0.5 text-[0.62rem] font-semibold text-[#9a4a1f]">
                Spring collection
              </span>
            </div>
            <div className="flex items-center gap-3 px-3.5 pb-1 pt-2.5 text-ink">
              <Heart className="size-4" aria-hidden="true" />
              <MessageCircle className="size-4" aria-hidden="true" />
              <Send className="size-4" aria-hidden="true" />
              <Bookmark className="ml-auto size-4" aria-hidden="true" />
            </div>
            <div className="p-2">
              <CommentCard
                author="maya.rose"
                initials="MR"
                text="Can you share the details?"
                post="Spring collection"
                className="bg-surface ring-0"
              />
            </div>
          </div>
        </Piece>

        {/* 2. Trigger status */}
        <Piece delay={0.35} className="relative z-30 hidden sm:absolute sm:left-[24%] sm:top-[50%] sm:block">
          <StatusPill icon={Zap} tone="ink">
            Auto-reply triggered
          </StatusPill>
        </Piece>

        {/* 3. Direct message conversation */}
        <Piece delay={0.5} className="relative z-20 ml-auto w-[90%] sm:absolute sm:right-0 sm:top-[11%] sm:w-[50%]">
          <ChatPanel name="Terra & Kiln" platform="instagram" initials="TK">
            <Bubble from="brand">Hi Maya! Here are the details on our Spring collection.</Bubble>
            <LinkCard title="Speckled Sand Mug" subtitle="Handmade stoneware · 350 ml" cta="Show me more" />
            <Bubble from="customer">Show me more</Bubble>
            <Bubble from="brand">Where should we send the full lookbook?</Bubble>
            <Bubble from="customer">maya@example.com</Bubble>
          </ChatPanel>
        </Piece>

        {/* 4. Workflow card */}
        <Piece delay={0.75} className="relative z-10 hidden sm:absolute sm:left-[2%] sm:top-[58%] sm:block sm:w-[42%]">
          <div className="rounded-[22px] bg-white/95 p-3 shadow-float ring-1 ring-ink/5 backdrop-blur">
            <div className="mb-2.5 flex items-center justify-between px-1">
              <p className="text-[0.74rem] font-semibold text-ink">Spring drop · Comment to DM</p>
              <span className="flex items-center gap-1 text-[0.64rem] font-semibold text-mint-strong">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping-soft rounded-full bg-[#22c55e]" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#22c55e]" />
                </span>
                Active
              </span>
            </div>
            <FlowNode kind="trigger" title="New comment" compact />
            <Connector height={12} />
            <FlowNode kind="message" title="Send DM + product" compact />
            <Connector height={12} />
            <FlowNode kind="action" title="Collect email" compact />
          </div>
        </Piece>

        {/* 5. Lead captured */}
        <Piece delay={1} className="relative z-30 w-[78%] sm:absolute sm:bottom-[1%] sm:right-[3%] sm:w-[46%]">
          <div className="animate-float-slow rounded-[22px] bg-white p-4 shadow-float ring-1 ring-ink/5">
            <div className="flex items-center gap-3">
              <Avatar initials="MR" tone="coral" className="size-10 text-xs" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">Maya Rose</p>
                <p className="truncate text-[0.72rem] text-muted">maya@example.com</p>
              </div>
              <span className="flex size-8 items-center justify-center rounded-full bg-mint text-mint-strong">
                <UserRoundCheck className="size-4" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-mint px-2 py-0.5 text-[0.66rem] font-semibold text-mint-strong">Qualified lead</span>
              <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[0.66rem] font-semibold text-brand-strong">Spring drop</span>
              <span className="rounded-full bg-surface px-2 py-0.5 text-[0.66rem] font-semibold text-muted ring-1 ring-line">Instagram</span>
            </div>
            <p className="mt-3 border-t border-line pt-2.5 text-[0.68rem] text-subtle">Lead captured automatically · just now</p>
          </div>
        </Piece>

        {/* 6. Channel cluster */}
        <Piece delay={1.15} className="hidden sm:absolute sm:right-[2%] sm:top-0 sm:block">
          <div className="flex items-center gap-1.5 rounded-full bg-white p-1.5 shadow-float ring-1 ring-ink/5">
            {(["instagram", "whatsapp", "messenger", "tiktok"] as const).map((p) => (
              <PlatformIcon key={p} platform={p} size="xs" />
            ))}
          </div>
        </Piece>
      </div>
    </div>
  );
}
