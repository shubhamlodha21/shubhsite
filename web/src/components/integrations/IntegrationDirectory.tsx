"use client";

import { useMemo, useState } from "react";
import {
  integrationCategories,
  integrations,
  statusLabels,
  type IntegrationCategory,
  type IntegrationStatus,
} from "@/content/integrations";
import { FilterChips } from "@/components/shared/FilterChips";
import { SearchInput } from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/Button";
import { Monogram, StatusBadge } from "./IntegrationTile";

type CategoryFilter = "all" | IntegrationCategory;
type StatusFilter = "all" | IntegrationStatus;

export function IntegrationDirectory() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return integrations.filter(
      (i) =>
        (category === "all" || i.category === category) &&
        (status === "all" || i.status === status) &&
        (!q || `${i.name} ${i.description} ${i.category}`.toLowerCase().includes(q)),
    );
  }, [category, status, query]);

  const statuses = (Object.keys(statusLabels) as IntegrationStatus[]).filter((s) => integrations.some((i) => i.status === s));

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <SearchInput id="integration-search" label="Search integrations" value={query} onChange={setQuery} placeholder="Search integrations" />
        <div>
          <p className="mb-3 text-sm font-semibold text-ink" id="cat-label">
            Category
          </p>
          <FilterChips
            label="Filter by category"
            value={category}
            onChange={setCategory}
            options={[{ value: "all", label: "All" }, ...integrationCategories.map((c) => ({ value: c, label: c }))]}
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink">Status</p>
          <FilterChips
            label="Filter by status"
            value={status}
            onChange={setStatus}
            options={[{ value: "all", label: "Any status" }, ...statuses.map((s) => ({ value: s, label: statusLabels[s] }))]}
          />
        </div>
        <div className="rounded-2xl bg-sun/60 p-4 text-sm leading-relaxed text-[#5c4000]">
          <strong className="font-semibold">Nothing is live yet.</strong> “Planned” integrations are on our roadmap;
          “Exploring” means we’re assessing demand and feasibility.
        </div>
      </div>

      <div>
        <p className="text-sm text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? "integration" : "integrations"}
        </p>
        {results.length > 0 ? (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((it) => (
              <li key={it.id} className="flex h-full flex-col rounded-[22px] bg-white p-5 ring-1 ring-line">
                <div className="flex items-center justify-between gap-3">
                  <Monogram integration={it} />
                  <StatusBadge status={it.status} />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{it.name}</h3>
                <p className="text-xs font-medium text-subtle">{it.category}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-[28px] border border-dashed border-line p-12 text-center">
            <p className="text-lg font-semibold text-ink">No integrations found.</p>
            <p className="mt-1 text-muted">Can’t see the tool you need? Let us know.</p>
            <Button
              variant="secondary"
              className="mt-6"
              onClick={() => {
                setCategory("all");
                setStatus("all");
                setQuery("");
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
