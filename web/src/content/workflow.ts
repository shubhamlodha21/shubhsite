import type { NodeKind } from "@/components/mockups/primitives";

export type BuilderNode = {
  id: string;
  kind: NodeKind;
  title: string;
  summary: string;
  status: string;
  description: string;
  fields: { label: string; value: string }[];
  preview?: string;
  branch?: string;
};

/** Sample workflow shown in the builder demo. Purely illustrative. */
export const sampleWorkflow: { name: string; nodes: BuilderNode[] } = {
  name: "Spring drop · Comment to DM",
  nodes: [
    {
      id: "trigger",
      kind: "trigger",
      title: "New comment",
      summary: "On any post in “Spring drop”",
      status: "Listening",
      description: "Starts the workflow whenever someone comments on a selected post or reel.",
      fields: [
        { label: "Channel", value: "Instagram" },
        { label: "Posts", value: "Spring drop collection (3 posts)" },
        { label: "Run once per person", value: "On" },
      ],
    },
    {
      id: "condition",
      kind: "condition",
      title: "Check keyword",
      summary: "price, details, link",
      status: "2 paths",
      description: "Continues only when the comment contains one of your keywords. Other comments are left for you.",
      fields: [
        { label: "Match", value: "Contains any of" },
        { label: "Keywords", value: "price, details, link, how much" },
        { label: "Case sensitive", value: "Off" },
      ],
      branch: "No match → end",
    },
    {
      id: "message",
      kind: "message",
      title: "Send direct message",
      summary: "Product card + quick reply",
      status: "Message",
      description: "Replies publicly to the comment, then opens a private conversation with the details.",
      fields: [
        { label: "Public reply", value: "Thanks! Check your DMs" },
        { label: "Quick reply", value: "Show me more" },
      ],
      preview: "Hi {first_name}! Here are the details on our Spring collection. Tap below to see more.",
    },
    {
      id: "delay",
      kind: "delay",
      title: "Wait for response",
      summary: "Up to 24 hours",
      status: "Smart delay",
      description: "Pauses until the person replies or taps a button. If they don’t, the workflow can follow up once.",
      fields: [
        { label: "Wait for", value: "Reply or button tap" },
        { label: "Timeout", value: "24 hours" },
        { label: "On timeout", value: "Send one gentle reminder" },
      ],
    },
    {
      id: "action",
      kind: "action",
      title: "Add lead tag",
      summary: "lead:spring-drop",
      status: "Action",
      description: "Tags the contact and saves their answer so you can segment, broadcast or sync them later.",
      fields: [
        { label: "Add tag", value: "lead:spring-drop" },
        { label: "Save field", value: "email ← last reply" },
        { label: "Notify", value: "Team inbox" },
      ],
    },
    {
      id: "link",
      kind: "message",
      title: "Send product link",
      summary: "Button → product page",
      status: "Message",
      description: "Shares the product link with tracking, so you can see which conversations lead to visits.",
      fields: [
        { label: "Button label", value: "View product" },
        { label: "URL", value: "yourstore.com/spring?utm_source=socialxreach" },
      ],
      preview: "Thanks, {first_name}! Here’s the full collection — free shipping this week.",
    },
  ],
};
