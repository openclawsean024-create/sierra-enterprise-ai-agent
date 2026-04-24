import { NextRequest, NextResponse } from 'next/server';
import { createBillingPortalSession } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const { customerId, returnUrl } = await req.json();

  if (!customerId) {
    return NextResponse.json({ error: 'customerId is required' }, { status: 400 });
  }

  try {
    const session = await createBillingPortalSession(
      customerId,
      returnUrl ?? `${process.env.NEXT_PUBLIC_APP_URL}/admin`,
    );
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[Stripe Portal]', err);
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 });
  }
}
