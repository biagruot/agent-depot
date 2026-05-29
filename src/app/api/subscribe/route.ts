import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/emails/WelcomeEmail";
import { getResendClient, isResendConfigured, RESEND_CONFIG } from "@/lib/resend";

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
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (!isResendConfigured()) {
      console.error("Newsletter not configured: missing RESEND_API_KEY or RESEND_AUDIENCE_ID");
      return NextResponse.json(
        { error: "Newsletter service is temporarily unavailable" },
        { status: 503 },
      );
    }

    const resend = getResendClient();
    const { audienceId, fromEmail } = RESEND_CONFIG;

    // Add the subscriber to the Resend audience
    try {
      await resend.contacts.create({
        email: normalizedEmail,
        audienceId,
        unsubscribed: false,
      });
    } catch (contactError: unknown) {
      const error = contactError as ResendError;

      // Already subscribed — treat as success
      if (error?.message?.includes("already exists") || error?.statusCode === 409) {
        return NextResponse.json(
          {
            success: true,
            message: "You're already subscribed! Check your inbox for our latest updates 📬",
          },
          { status: 200 },
        );
      }

      // API key lacks the "Audiences" permission
      if (error?.name === "restricted_api_key") {
        console.error("Resend API key lacks permission to manage contacts (enable 'Audiences').");
        return NextResponse.json(
          { error: "Newsletter service configuration error" },
          { status: 503 },
        );
      }

      throw contactError;
    }

    // Send the welcome email — best-effort, never fail the request over it
    try {
      const emailHtml = await render(
        WelcomeEmail({
          previewText: "Welcome to the Weekly Drop — your curated AI coding agents digest",
        }),
      );

      await resend.emails.send({
        from: fromEmail,
        to: normalizedEmail,
        subject: "Welcome to AgentDepot! 🚀",
        html: emailHtml,
      });
    } catch (emailError) {
      // The subscriber is already added; a failed welcome email shouldn't fail the request.
      console.error("Welcome email failed to send:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Welcome aboard! Check your inbox for a surprise 🎉",
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("Subscription error:", error);

    const err = error as ResendError;
    if (err?.statusCode === 429) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a moment." },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
