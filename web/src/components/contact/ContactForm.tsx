"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { ApiError, submitContact } from "@/lib/api";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const topics = [
  { value: "general", label: "General question" },
  { value: "sales", label: "Sales & Business plan" },
  { value: "integration", label: "Integration request" },
  { value: "support", label: "Product support" },
  { value: "press", label: "Press & partnerships" },
] as const;

type Topic = (typeof topics)[number]["value"];
type Fields = { name: string; email: string; topic: Topic; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.message.trim().length < 10) e.message = "Please write at least 10 characters.";
  else if (f.message.length > 2000) e.message = "Please keep your message under 2,000 characters.";
  return e;
}

function isTopic(v: string | null): v is Topic {
  return topics.some((t) => t.value === v);
}

const inputBase =
  "mt-2 w-full rounded-2xl bg-white px-4 text-[0.98rem] text-ink ring-1 placeholder:text-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand";

export function ContactForm() {
  const params = useSearchParams();
  const initialTopic = params.get("topic");
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    topic: isTopic(initialTopic) ? initialTopic : "general",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    const topicLabel = topics.find((t) => t.value === fields.topic)?.label ?? "General";
    try {
      await submitContact({
        name: fields.name.trim(),
        email: fields.email.trim(),
        message: `[${topicLabel}] ${fields.message.trim()}`,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      if (err instanceof ApiError && err.kind === "network") {
        setServerError(
          process.env.NODE_ENV === "development"
            ? `Couldn’t reach the contact API at ${site.apiBase}. Is the FastAPI backend running?`
            : "We couldn’t reach our server. Please check your connection and try again.",
        );
      } else if (err instanceof ApiError && err.kind === "validation") {
        setServerError("The server couldn’t accept one of the fields. Please check your email address and try again.");
      } else {
        setServerError("Something went wrong on our side. Please try again in a moment.");
      }
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-[28px] bg-mint/60 p-8 ring-1 ring-[#3fbf7f]/30 sm:p-10">
        <CircleCheck className="size-10 text-mint-strong" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">Thanks, {fields.name.split(" ")[0]}!</h2>
        <p className="mt-3 leading-relaxed text-ink/80">
          Your message has been saved. Email notifications aren’t set up yet, so a reply may take a little while — we’ll
          respond to <strong className="font-semibold">{fields.email}</strong>.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setFields((f) => ({ ...f, message: "" }));
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const fieldError = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-coral-strong">
        <CircleAlert className="size-4" aria-hidden="true" />
        {errors[key]}
      </p>
    ) : null;

  const ring = (key: keyof Fields) => (errors[key] ? "ring-coral-strong" : "ring-line");

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      className="rounded-[28px] bg-white p-6 shadow-float ring-1 ring-line sm:p-10"
      aria-describedby="form-note"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputBase, "h-12", ring("name"))}
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputBase, "h-12", ring("email"))}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="topic" className="text-sm font-semibold text-ink">
          What can we help with?
        </label>
        <div className="relative">
          <select
            id="topic"
            name="topic"
            value={fields.topic}
            onChange={(e) => update("topic", e.target.value as Topic)}
            className={cn(inputBase, "h-12 appearance-none pr-10 ring-line")}
          >
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={cn(inputBase, "resize-y py-3", ring("message"))}
        />
        {fieldError("message") ?? (
          <p id="message-hint" className="mt-1.5 text-sm text-subtle">
            {fields.message.length}/2000
          </p>
        )}
      </div>

      {status === "error" && (
        <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl bg-coral-soft p-4 text-sm text-coral-strong">
          <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p>{serverError}</p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="max-w-sm text-sm text-muted">
          We’ll only use your details to reply to this message.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}
