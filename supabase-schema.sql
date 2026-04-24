-- Sierra Enterprise AI Agent — Supabase Schema
-- Run this in your Supabase SQL Editor to set up the database.

-- ── Conversations ───────────────────────────────────────────────
create table if not exists conversations (
  id          uuid default gen_random_uuid() primary key,
  session_id  text not null,
  user_message text not null,
  bot_response text not null,
  intent      text default 'keyword',
  confidence  real default 1.0,
  created_at  timestamptz default now() not null
);

create index if not exists conversations_session_id_idx on conversations(session_id);
create index if not exists conversations_created_at_idx on conversations(created_at);

-- ── FAQs ────────────────────────────────────────────────────────
create table if not exists faqs (
  id          uuid default gen_random_uuid() primary key,
  question    text not null,
  answer      text not null,
  tags        text[] default '{}',
  created_at  timestamptz default now() not null,
  updated_at  timestamptz default now() not null
);

alter table faqs enable row level security;

create policy "Allow anon read" on faqs for select using (true);
create policy "Allow anon insert" on faqs for insert with check (true);
create policy "Allow anon update" on faqs for update using (true);
create policy "Allow anon delete" on faqs for delete using (true);

-- Seed default FAQs
insert into faqs (question, answer, tags) values
  ('運費怎麼算？', '滿 $1,000 免運，未達 NT$1,000，運費 NT$80，離島 NT$150', array['運費', '配送']),
  ('如何申請退貨？', '收到商品後 7 天內可申請退貨，請保持原包裝完整，我們安排黑貓取件', array['退貨', '售後']),
  ('支援哪些付款方式？', '支援信用卡（VISA/MasterCard/JCB）、LINE Pay、街口支付、ATM轉帳', array['付款']),
  ('發票可以打統編嗎？', '可以，請至「我的訂單」修改為三聯式發票並填寫統編與抬頭', array['發票', '報帳']),
  ('優惠碼哪裡拿？', '可關注我們的 Facebook 與 LINE 官方帳號，時常發放獨家優惠碼', array['優惠'])
on conflict do nothing;

-- ── Subscriptions ──────────────────────────────────────────────
create table if not exists subscriptions (
  id                    uuid default gen_random_uuid() primary key,
  stripe_customer_id    text unique not null,
  stripe_subscription_id text,
  plan                  text check (plan in ('starter', 'pro', 'enterprise')) default 'starter',
  status                text check (status in ('active', 'cancelled', 'past_due')) default 'active',
  current_period_end    timestamptz,
  created_at            timestamptz default now() not null
);

alter table subscriptions enable row level security;

create policy "Allow anon read" on subscriptions for select using (true);
create policy "Allow anon insert" on subscriptions for insert with check (true);
create policy "Allow anon update" on subscriptions for update using (true);
