import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'name, email, and message are required' }, { status: 400 });
    }

    // In production, send email via SendGrid/Resend or save to DB
    console.log('[Contact Form]', { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: '您的訊息已收到，我們會在 1-2 個工作日內回覆。',
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
