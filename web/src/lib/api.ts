import { site } from "@/config/site";

/**
 * Thin client for the FastAPI backend in ../backend.
 * Swap this module out when moving to a different lead/CRM service.
 */
export type ContactPayload = { name: string; email: string; message: string };

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly kind: "network" | "validation" | "server",
  ) {
    super(message);
  }
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  let res: Response;
  try {
    res = await fetch(`${site.apiBase}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiError("Could not reach the server.", "network");
  }
  if (res.status === 422) throw new ApiError("Some fields were rejected by the server.", "validation");
  if (!res.ok) throw new ApiError(`The server responded with ${res.status}.`, "server");
}
