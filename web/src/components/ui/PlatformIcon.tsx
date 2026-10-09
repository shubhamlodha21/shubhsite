import { cn } from "@/lib/utils";

export type Platform = "instagram" | "whatsapp" | "messenger" | "tiktok";

export const platformLabels: Record<Platform, string> = {
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  messenger: "Messenger",
  tiktok: "TikTok",
};

const tileStyles: Record<Platform, string> = {
  instagram: "bg-[linear-gradient(135deg,#f9a03f_0%,#e1306c_45%,#833ab4_100%)]",
  whatsapp: "bg-[#1fb855]",
  messenger: "bg-[linear-gradient(135deg,#0a7cff_0%,#a033ff_70%,#ff5c87_100%)]",
  tiktok: "bg-[#111015]",
};

/**
 * Simplified, original glyphs that evoke each platform.
 * Platform names are trademarks of their owners; no affiliation is implied.
 */
function Glyph({ platform }: { platform: Platform }) {
  switch (platform) {
    case "instagram":
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="16.6" cy="7.4" r="1.1" fill="currentColor" />
        </>
      );
    case "whatsapp":
      return (
        <>
          <path
            d="M12 3.8a8.2 8.2 0 0 0-7 12.5L4 20l3.8-1a8.2 8.2 0 1 0 4.2-15.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.3 8.4c.3-.4.7-.4.9 0l.6 1.3c.1.3 0 .6-.2.8l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.2-.2.5-.3.8-.2l1.3.6c.4.2.4.6 0 .9-.6.6-1.5.9-2.3.6-2-.8-3.6-2.4-4.3-4.3-.3-.8 0-1.7.6-2.3Z"
            fill="currentColor"
          />
        </>
      );
    case "messenger":
      return (
        <>
          <path
            d="M12 3.5c-4.8 0-8.5 3.5-8.5 8.1 0 2.4 1 4.5 2.7 6v2.9l2.7-1.5c1 .3 2 .4 3.1.4 4.8 0 8.5-3.5 8.5-8S16.8 3.5 12 3.5Z"
            fill="currentColor"
          />
          <path d="m7.4 13.7 3.1-3.3 2.2 1.7 3.9-3.6" fill="none" stroke="#7a4dff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case "tiktok":
      return (
        <>
          <path
            d="M14.2 3.5h2.5c.2 1.9 1.6 3.4 3.4 3.7v2.6a6.3 6.3 0 0 1-3.4-1.1v6.1a5.3 5.3 0 1 1-5.3-5.3v2.7a2.6 2.6 0 1 0 2.8 2.6V3.5Z"
            fill="#ff2d6f"
            transform="translate(0.7 0.5)"
          />
          <path
            d="M14.2 3.5h2.5c.2 1.9 1.6 3.4 3.4 3.7v2.6a6.3 6.3 0 0 1-3.4-1.1v6.1a5.3 5.3 0 1 1-5.3-5.3v2.7a2.6 2.6 0 1 0 2.8 2.6V3.5Z"
            fill="#2de2e6"
            transform="translate(-0.5 -0.4)"
          />
          <path
            d="M14.2 3.5h2.5c.2 1.9 1.6 3.4 3.4 3.7v2.6a6.3 6.3 0 0 1-3.4-1.1v6.1a5.3 5.3 0 1 1-5.3-5.3v2.7a2.6 2.6 0 1 0 2.8 2.6V3.5Z"
            fill="currentColor"
          />
        </>
      );
  }
}

export function PlatformIcon({
  platform,
  size = "md",
  className,
  title,
}: {
  platform: Platform;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  /** Provide when the icon conveys meaning on its own; otherwise it is decorative. */
  title?: string;
}) {
  const box = { xs: "size-5 rounded-md", sm: "size-7 rounded-lg", md: "size-10 rounded-xl", lg: "size-14 rounded-2xl" }[size];
  const glyph = { xs: "size-3.5", sm: "size-4.5", md: "size-6", lg: "size-8" }[size];
  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center text-white", box, tileStyles[platform], className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <svg viewBox="0 0 24 24" className={glyph} aria-hidden="true">
        <Glyph platform={platform} />
      </svg>
    </span>
  );
}
