import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession, PRICE_STARTER, PRICE_PRO, PRICE_ENTERPRISE } from '@/lib/stripe';

const PLAN_PRICES: Record<string, string> = {
  starter: PRICE_STARTER,
  pro: PRICE_PRO,
  enterprise: PRICE_ENTERPRISE,
};

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const { plan, email, successUrl, cancelUrl } = await req.json();

  if (!plan || !PLAN_PRICES[plan]) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
  }

  try {
    const session = await createCheckoutSession({
      priceId: PLAN_PRICES[plan],
      successUrl: successUrl ?? `${process.env.NEXT_PUBLIC_APP_URL}/admin?billing=success`,
      cancelUrl: cancelUrl ?? `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      customerEmail: email,
      metadata: { plan },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[Stripe Checkout]', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
