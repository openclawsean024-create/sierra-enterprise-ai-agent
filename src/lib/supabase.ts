import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _client: SupabaseClient | null = null;
let _serverClient: SupabaseClient | null = null;

function getUrl() { return process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''; }
function getAnonKey() { return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''; }
function getServiceKey() { return process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''; }

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = getUrl();
    const key = getAnonKey();
    if (!url || !key) throw new Error('NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY not set');
    _client = createClient(url, key);
  }
  return _client;
}

export function getServerSupabase(): SupabaseClient {
  if (!_serverClient) {
    const url = getUrl();
    const key = getServiceKey();
    if (!url || !key) throw new Error('SUPABASE_SERVICE_ROLE_KEY not set');
    _serverClient = createClient(url, key, { auth: { persistSession: false } });
  }
  return _serverClient;
}

// Backwards compat — only valid if env vars are set at runtime
export const supabase = {
  from: (table: string) => ({
    insert: async (row: Record<string, unknown>) => {
      if (!getUrl() || !getAnonKey()) return { data: null, error: { message: 'Supabase not configured' } };
      return getSupabase().from(table).insert(row as never);
    },
    select: (cols?: string) => ({
      select: (columns?: string) => {
        if (!getUrl() || !getAnonKey()) return Promise.resolve({ data: null, error: { message: 'Supabase not configured' }, count: 0 });
        return getSupabase().from(table).select(columns ?? cols);
      },
    }),
    update: (row: Record<string, unknown>) => ({
      eq: (col: string, val: unknown) => {
        if (!getUrl() || !getAnonKey()) return Promise.resolve({ data: null, error: { message: 'Supabase not configured' } });
        return getSupabase().from(table).update(row as never).eq(col, val);
      },
    }),
    delete: () => ({
      eq: (col: string, val: unknown) => {
        if (!getUrl() || !getAnonKey()) return Promise.resolve({ error: { message: 'Supabase not configured' } });
        return getSupabase().from(table).delete().eq(col, val);
      },
    }),
  }),
};

export const createServerSupabase = getServerSupabase;

// ─── Types ─────────────────────────────────────────────────────
export interface Conversation {
  id: string;
  session_id: string;
  user_message: string;
  bot_response: string;
  intent: string;
  confidence: number;
  created_at: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  tags: string[];
  created_at: string;
}

export interface UserSubscription {
  id: string;
  user_id: string;
  plan: 'starter' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'past_due';
  stripe_customer_id: string;
  stripe_subscription_id: string;
  current_period_end: string;
  created_at: string;
}

// ─── CRUD helpers ───────────────────────────────────────────────
export async function logConversation(params: {
  sessionId: string;
  userMessage: string;
  botResponse: string;
  intent: string;
  confidence: number;
}) {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('conversations').insert({
      session_id: params.sessionId,
      user_message: params.userMessage,
      bot_response: params.botResponse,
      intent: params.intent,
      confidence: params.confidence,
    });
    return { data, error };
  } catch (err) {
    console.error('[Supabase] logConversation error:', err);
    return { data: null, error: err };
  }
}

export async function listFaqs() {
  const supabase = getSupabase();
  return supabase.from('faqs').select('*').order('created_at', { ascending: false });
}

export async function createFaq(params: { question: string; answer: string; tags?: string[] }) {
  const supabase = getSupabase();
  return supabase.from('faqs').insert({ question: params.question, answer: params.answer, tags: params.tags ?? [] }).select().single();
}

export async function updateFaq(id: string, params: { question?: string; answer?: string; tags?: string[] }) {
  const supabase = getSupabase();
  return supabase.from('faqs').update(params).eq('id', id).select().single();
}

export async function deleteFaq(id: string) {
  const supabase = getSupabase();
  return supabase.from('faqs').delete().eq('id', id);
}

export async function getConversationStats(days = 30) {
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const supabase = getSupabase();

  const [total, today, byIntent] = await Promise.all([
    supabase.from('conversations').select('id', { count: 'exact', head: true }).gte('created_at', since),
    supabase.from('conversations').select('id', { count: 'exact', head: true }).gte('created_at', new Date().toISOString().split('T')[0]),
    supabase.from('conversations').select('intent').gte('created_at', since),
  ]);

  const intentCounts: Record<string, number> = {};
  if (byIntent.data) {
    for (const row of byIntent.data as { intent: string }[]) {
      intentCounts[row.intent] = (intentCounts[row.intent] || 0) + 1;
    }
  }

  return {
    totalCount: total.count ?? 0,
    todayCount: today.count ?? 0,
    intentDistribution: intentCounts,
  };
}
