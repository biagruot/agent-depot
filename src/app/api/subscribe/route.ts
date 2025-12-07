import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/emails/WelcomeEmail";

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ResendError {
  message?: string;
  statusCode?: number;
  name?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email format
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim();

    // Check for required environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    // Optional: Set this after verifying your domain in Resend
    // Example: RESEND_FROM_EMAIL="AgentDepot <hello@agentdepot.dev>"
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Newsletter service is temporarily unavailable" },
        { status: 503 }
      );
    }

    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID is not set");
      return NextResponse.json(
        { error: "Newsletter service is not configured" },
        { status: 503 }
      );
    }

    // Initialize Resend client
    const resend = new Resend(apiKey);

    // Add subscriber to Resend audience
    try {
      console.log("📧 Adding subscriber to audience:", normalizedEmail);

      const contactResult = await resend.contacts.create({
        email: normalizedEmail,
        audienceId: audienceId,
        unsubscribed: false,
      });

      console.log("📧 Contact created:", JSON.stringify(contactResult, null, 2));
    } catch (contactError: unknown) {
      const error = contactError as ResendError;

      // Handle duplicate subscriber gracefully
      if (error?.message?.includes("already exists") || error?.statusCode === 409) {
        return NextResponse.json(
          {
            success: true,
            message: "You're already subscribed! Check your inbox for our latest updates 📬"
          },
          { status: 200 }
        );
      }

      // Handle permission errors
      if (error?.name === "restricted_api_key") {
        console.error("API key lacks permission to manage contacts. Enable 'Audiences' permission in Resend.");
        return NextResponse.json(
          { error: "Newsletter service configuration error" },
          { status: 503 }
        );
      }

      console.error("Failed to add contact to audience:", error);
      throw contactError;
    }

    // Send welcome email if a verified domain is configured
    // Set RESEND_FROM_EMAIL after verifying your domain in Resend dashboard
    if (fromEmail) {
      try {
        console.log("📧 Sending welcome email to:", normalizedEmail);

        // Render email to HTML first
        const emailHtml = await render(WelcomeEmail({
          previewText: "Welcome to the Weekly Drop - your curated AI coding agents digest",
        }));

        const emailResult = await resend.emails.send({
          from: fromEmail,
          to: normalizedEmail,
          subject: "Welcome to AgentDepot! 🚀",
          html: emailHtml,
        });

        console.log("📧 Welcome email sent:", JSON.stringify(emailResult, null, 2));
      } catch (emailError) {
        // Log but don't fail - subscriber is already added to audience
        console.error("❌ Failed to send welcome email:", emailError);
      }
    } else {
      console.log("📧 RESEND_FROM_EMAIL not set - skipping welcome email");
      console.log("   To enable: verify your domain at https://resend.com/domains");
      console.log("   Then set RESEND_FROM_EMAIL='AgentDepot <hello@agentdepot.dev>'");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Welcome aboard! Check your inbox for a surprise 🎉"
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error("Subscription error:", error);

    // Check for rate limiting
    const err = error as ResendError;
    if (err?.statusCode === 429) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a moment." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
