import WelcomeTemplate from "@/emails/welcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: "...",
    to: "opareprince282@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Prince" />,
  });

  return NextResponse.json({});
}
