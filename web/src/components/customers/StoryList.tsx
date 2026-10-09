"use client";

import { useState } from "react";
import { stories, type Story } from "@/content/stories";
import { FilterChips } from "@/components/shared/FilterChips";
import { StoryCard } from "./StoryCard";

type Filter = "all" | Story["industry"];

export function StoryList() {
  const [filter, setFilter] = useState<Filter>("all");
  const industries = Array.from(new Set(stories.map((s) => s.industry)));
  const visible = stories.filter((s) => filter === "all" || s.industry === filter);

  return (
    <div>
      <FilterChips
        label="Filter stories by industry"
        value={filter}
        onChange={setFilter}
        options={[{ value: "all", label: "All industries" }, ...industries.map((i) => ({ value: i, label: i }))]}
      />
      <p className="mt-5 text-sm text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "story" : "stories"}
      </p>
      <ul className="mt-4 grid gap-5 md:grid-cols-2">
        {visible.map((s) => (
          <li key={s.slug}>
            <StoryCard story={s} />
          </li>
        ))}
      </ul>
    </div>
  );
}
