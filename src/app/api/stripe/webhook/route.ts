import { NextRequest, NextResponse } from 'next/server';
import { constructWebhookEvent } from '@/lib/stripe';
import { getServerSupabase } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  const payload = await req.text();
  let event: ReturnType<typeof constructWebhookEvent>;

  try {
    event = constructWebhookEvent(payload, signature);
  } catch (err) {
    console.error('[Stripe Webhook] Signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = getServerSupabase();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      if (session.mode === 'subscription') {
        await supabase.from('subscriptions').upsert({
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          plan: (session.metadata?.plan as 'starter' | 'pro' | 'enterprise') ?? 'starter',
          status: 'active',
          current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        }, { onConflict: 'stripe_customer_id' });
      }
      break;
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object;
      await supabase
        .from('subscriptions')
        .update({ status: sub.status === 'active' ? 'active' : 'cancelled' })
        .eq('stripe_subscription_id', sub.id);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object;
      await supabase
        .from('subscriptions')
        .update({ status: 'cancelled' })
        .eq('stripe_subscription_id', sub.id);
      break;
    }

    default:
      console.log('[Stripe Webhook] Unhandled event type:', event.type);
  }

  return NextResponse.json({ received: true });
}
