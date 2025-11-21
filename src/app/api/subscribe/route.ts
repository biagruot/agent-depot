import { NextRequest, NextResponse } from "next/server";

// TODO: Integrate with your email service provider
// Examples: Resend, SendGrid, Mailchimp, ConvertKit, etc.

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

    // TODO: Add email to your database/email service
    // For now, just log it (replace with actual service integration)
    console.log("New subscription:", email);
    
    // Example integration with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.contacts.create({
    //   email: email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID!,
    // });

    // Example integration with Mailchimp:
    // const mailchimp = require('@mailchimp/mailchimp_marketing');
    // mailchimp.setConfig({
    //   apiKey: process.env.MAILCHIMP_API_KEY,
    //   server: process.env.MAILCHIMP_SERVER_PREFIX,
    // });
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    // });

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
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
