import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { firstName, lastName, email, subject, body } = await req.json()

  try {
    await resend.emails.send({
      from: 'contact@urbanayre.xyz',
      to: process.env.MY_EMAIL!,
      subject: `New msg: ${subject}`,
      replyTo: email,
      text: `From: ${firstName} ${lastName} (${email})\n\n${body}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}