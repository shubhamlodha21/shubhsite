import type { NodeKind } from "@/components/mockups/primitives";

/** A single beat in a simulated conversation (rendered by <Conversation />). */
export type ConvoStep =
  | { type: "comment"; author: string; initials: string; text: string; post: string }
  | { type: "bubble"; from: "customer" | "brand"; text: string }
  | { type: "quick"; options: string[]; selected?: string }
  | { type: "link"; title: string; subtitle: string; cta?: string }
  | { type: "event"; text: string; tone?: "brand" | "mint" | "coral" };

export type FlowStep = { kind: NodeKind; title: string; detail?: string };

export type FAQ = { question: string; answer: string };
