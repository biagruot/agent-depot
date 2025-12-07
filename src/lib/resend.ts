import { Resend } from "resend";

// Singleton Resend client instance
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

// Configuration constants
export const RESEND_CONFIG = {
    // The from address - must be verified in Resend dashboard
    // For development, use Resend's default domain
    fromEmail: process.env.RESEND_FROM_EMAIL || "AgentDepot <onboarding@resend.dev>",

    // Verified domain email (for production)
    productionFromEmail: "AgentDepot <hello@agentdepot.dev>",

    // Audience ID for newsletter subscribers
    audienceId: process.env.RESEND_AUDIENCE_ID || "",
} as const;

// Check if Resend is properly configured
export function isResendConfigured(): boolean {
    return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID);
}
