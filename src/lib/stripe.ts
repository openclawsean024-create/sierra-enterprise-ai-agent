import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error('STRIPE_SECRET_KEY not set');
    _stripe = new Stripe(key);
  }
  return _stripe;
}

// Backwards compat — lazily initialized
export const stripe = {
  checkout: {
    sessions: {
      create: (params: Parameters<Stripe['checkout']['sessions']['create']>[0]) =>
        getStripe().checkout.sessions.create(params),
    },
  },
  customers: {
    create: (params: Parameters<Stripe['customers']['create']>[0]) =>
      getStripe().customers.create(params),
    retrieve: (id: string) => getStripe().customers.retrieve(id),
  },
  billingPortal: {
    sessions: {
      create: (params: Parameters<Stripe['billingPortal']['sessions']['create']>[0]) =>
        getStripe().billingPortal.sessions.create(params),
    },
  },
  subscriptions: {
    retrieve: (id: string) => getStripe().subscriptions.retrieve(id),
    update: (id: string, params: Parameters<Stripe['subscriptions']['update']>[1]) =>
      getStripe().subscriptions.update(id, params),
    cancel: (id: string) => getStripe().subscriptions.cancel(id),
  },
  webhooks: {
    constructEvent: (
      payload: string | Buffer,
      signature: string,
      secret: string,
    ) =>
      getStripe().webhooks.constructEvent(payload, signature, secret),
  },
};

// ─── Prices (configure in Stripe dashboard) ─────────────────────
export const PRICE_STARTER = process.env.STRIPE_PRICE_STARTER ?? 'price_starter';
export const PRICE_PRO = process.env.STRIPE_PRICE_PRO ?? 'price_pro';
export const PRICE_ENTERPRISE = process.env.STRIPE_PRICE_ENTERPRISE ?? 'price_enterprise';

// ─── Checkout sessions ──────────────────────────────────────────
export async function createCheckoutSession(params: {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  customerId?: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
}) {
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: params.priceId, quantity: 1 }],
    ...(params.customerId
      ? { customer: params.customerId }
      : params.customerEmail
      ? { customer_email: params.customerEmail }
      : {}),
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: params.metadata ?? {},
  });
}

// ─── Customer management ────────────────────────────────────────
export async function createCustomer(params: { email: string; name?: string }) {
  return stripe.customers.create({ email: params.email, name: params.name ?? '' });
}

export async function getCustomer(customerId: string) {
  return stripe.customers.retrieve(customerId);
}

// ─── Portal ─────────────────────────────────────────────────────
export async function createBillingPortalSession(customerId: string, returnUrl: string) {
  return stripe.billingPortal.sessions.create({ customer: customerId, return_url: returnUrl });
}

// ─── Webhook signature verification ────────────────────────────
export function constructWebhookEvent(payload: string | Buffer, signature: string) {
  return stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET!);
}

// ─── Subscription helpers ────────────────────────────────────────
export async function getSubscription(subscriptionId: string) {
  return stripe.subscriptions.retrieve(subscriptionId);
}

export async function cancelSubscription(subscriptionId: string, atPeriodEnd = true) {
  if (atPeriodEnd) {
    return stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: true });
  }
  return stripe.subscriptions.cancel(subscriptionId);
}
