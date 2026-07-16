import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY environment variable" }, { status: 500 });
    }

    const body = await req.json();
    const { fullName, email, phone, message } = body;

    // Validate type and presence
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0 || fullName.length > 100) {
      return NextResponse.json({ error: "Invalid name format or length" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 100) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 5 || phone.length > 30) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return NextResponse.json({ error: "Message must be between 1 and 2000 characters" }, { status: 400 });
    }

    // Sanitize values to prevent HTML injection in email client
    const cleanName = escapeHtml(fullName.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanPhone = escapeHtml(phone.trim());
    const cleanMessage = escapeHtml(message.trim());

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "BP ORGANIK <onboarding@resend.dev>", // Replace with your domain when ready
      to: ["bp.organika@gmail.com"],
      subject: `New Request from ${cleanName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ffc837;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Phone:</strong> ${cleanPhone}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; border-left: 4px solid #ffc837; background: #f9f9f9; white-space: pre-wrap;">
            ${cleanMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
