import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      console.warn("RESEND_AUDIENCE_ID is not set. Skipping contact creation.");
      // Fallback: You could send an email to yourself here if you wanted
      return NextResponse.json(
        { success: true, message: "Subscription confirmed. We'll keep it signal, no noise." },
        { status: 200 }
      );
    }

    // Initialize Resend client at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.contacts.create({
        email: email,
        audienceId: audienceId,
      });
      
      // Optional: Send a welcome email
      // await resend.emails.send({
      //   from: 'AgentDepot <onboarding@resend.dev>',
      //   to: email,
      //   subject: 'Welcome to AgentDepot!',
      //   html: '<p>Thanks for subscribing!</p>'
      // });

    } catch (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to process subscription" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Subscription confirmed. We'll keep it signal, no noise." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
