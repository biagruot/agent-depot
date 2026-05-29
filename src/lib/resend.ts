import { Resend } from "resend";

// Lazily-instantiated singleton Resend client.
let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export const RESEND_CONFIG = {
  // From address — must be a verified domain in Resend. Defaults to Resend's sandbox domain.
  fromEmail: process.env.RESEND_FROM_EMAIL || "AgentDepot <onboarding@resend.dev>",
  // Audience ID for newsletter subscribers.
  audienceId: process.env.RESEND_AUDIENCE_ID || "",
} as const;

// Whether Resend is fully configured (API key + audience).
export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID);
}
