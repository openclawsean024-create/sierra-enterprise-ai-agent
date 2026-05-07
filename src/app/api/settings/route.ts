import { NextRequest, NextResponse } from 'next/server';

// Mock user settings store
const mockUserSettings = {
  apiKey: 'sierra_mock_api_key_12345',
  plan: 'starter',
  websiteUrl: 'https://example.com',
  greetingMessage: '您好！有任何需要幫忙的嗎？',
  theme: 'blue',
  email: 'demo@sierra-aiagent.com',
  companyName: '我的商店',
};

export async function GET() {
  return NextResponse.json({ settings: mockUserSettings });
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    // In production, verify auth token and update Supabase
    const updated = { ...mockUserSettings, ...body };
    return NextResponse.json({ settings: updated });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
