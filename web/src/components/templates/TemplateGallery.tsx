"use client";

import { useMemo, useState } from "react";
import { templateCategories, templates, type TemplateCategory } from "@/content/templates";
import { platformLabels, type Platform } from "@/components/ui/PlatformIcon";
import { FilterChips } from "@/components/shared/FilterChips";
import { SearchInput } from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/Button";
import { TemplateCard } from "./TemplateCard";

type CategoryFilter = "all" | TemplateCategory;
type ChannelFilter = "all" | Platform;

export function TemplateGallery() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [channel, setChannel] = useState<ChannelFilter>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter(
      (t) =>
        (category === "all" || t.category === category) &&
        (channel === "all" || t.channels.includes(channel)) &&
        (!q || `${t.name} ${t.description}`.toLowerCase().includes(q)),
    );
  }, [category, channel, query]);

  const reset = () => {
    setCategory("all");
    setChannel("all");
    setQuery("");
  };

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-[28px] bg-surface p-5 ring-1 ring-line sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <FilterChips
            label="Filter by goal"
            value={category}
            onChange={setCategory}
            options={[{ value: "all", label: "All goals" }, ...templateCategories.map((c) => ({ value: c, label: c }))]}
          />
          <SearchInput id="template-search" label="Search templates" value={query} onChange={setQuery} placeholder="Search templates" />
        </div>
        <FilterChips
          label="Filter by channel"
          value={channel}
          onChange={setChannel}
          options={[
            { value: "all", label: "All channels" },
            ...(Object.keys(platformLabels) as Platform[]).map((p) => ({ value: p, label: platformLabels[p] })),
          ]}
        />
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {results.length} of {templates.length} templates
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((t) => (
            <li key={t.id}>
              <TemplateCard template={t} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-[28px] border border-dashed border-line p-12 text-center">
          <p className="text-lg font-semibold text-ink">No templates match those filters.</p>
          <p className="mt-1 text-muted">Try a different channel or search term.</p>
          <Button variant="secondary" className="mt-6" onClick={reset}>
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
