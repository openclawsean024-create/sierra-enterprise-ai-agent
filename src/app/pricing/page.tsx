'use client';

import { useState } from 'react';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    description: '適合個人開發者或小型專案測試',
    features: [
      '100 次對話/月',
      '1 個 AI Agent',
      '繁體中文/英文',
      'Widget 嵌入',
      'Email 支援',
    ],
    cta: '免費開始',
    highlight: false,
    planKey: 'starter',
  },
  {
    name: 'Pro',
    price: 19,
    description: '適合中小型電商與 SaaS 公司',
    features: [
      '無限對話',
      'Widget 嵌入',
      '1 個網站',
      'Basic Analytics',
      '對話歷史',
      '優先 Email 支援',
    ],
    cta: '立即升級',
    highlight: true,
    planKey: 'pro',
  },
  {
    name: 'Enterprise',
    price: 99,
    description: '適合大型企業與多站點管理',
    features: [
      '無限制',
      '多網站管理',
      '多租戶支援',
      'SSO（SAML）',
      'API Key 管理',
      '專屬客服經理',
    ],
    cta: '聯絡銷售',
    highlight: false,
    planKey: 'enterprise',
  },
];

const comparisonFeatures = [
  { feature: '對話次數', starter: '100 次/月', pro: '無限', enterprise: '無限制' },
  { feature: 'AI Agent', starter: '1 個', pro: '1 個', enterprise: '無限' },
  { feature: '網站數量', starter: '1 個', pro: '1 個', enterprise: '無限' },
  { feature: 'Widget 嵌入', starter: true, pro: true, enterprise: true },
  { feature: 'Analytics', starter: false, pro: true, enterprise: true },
  { feature: '多語言支援', starter: true, pro: true, enterprise: true },
  { feature: 'API Key 管理', starter: false, pro: true, enterprise: true },
  { feature: '對話歷史', starter: false, pro: true, enterprise: true },
  { feature: '優先支援', starter: false, pro: true, enterprise: true },
  { feature: 'SSO', starter: false, pro: false, enterprise: true },
  { feature: '多租戶', starter: false, pro: false, enterprise: true },
  { feature: '專屬客服經理', starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    q: '可以試用嗎？',
    a: '是的，Starter 方案完全免費，您可以立即開始使用。如果需要更高階功能，我們也提供 7 天退款保證。',
  },
  {
    q: '如何取消？',
    a: '您可以隨時在管理後台取消訂閱，取消後您的資料會保留至下個帳單週期。我們不收取任何取消費用。',
  },
  {
    q: '超出用量怎麼辦？',
    a: 'Starter 方案每月 100 次對話用完後，系統會提示您升級。Pro 及 Enterprise 方案為無限對話，不會有用量限制。',
  },
  {
    q: '如何申請 Enterprise 方案？',
    a: 'Enterprise 方案支援自定義功能與 SSO，請點擊「聯絡銷售」，我們的客服團隊會在 24 小時內與您聯繫。',
  },
];

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubscribe = async (planKey: string) => {
    if (planKey === 'starter') {
      window.location.href = '/register';
      return;
    }
    if (planKey === 'enterprise') {
      window.location.href = '/contact';
      return;
    }

    setError('');
    setLoadingPlan(planKey);

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: planKey,
          successUrl: `${window.location.origin}/admin?billing=success`,
          cancelUrl: `${window.location.origin}/pricing`,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('無法連接到付款系統，請稍後再試。');
      }
    } catch {
      setError('網路錯誤，請稍後再試。');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">Sierra</div>
            <div className="text-xs text-slate-500">Enterprise AI Agent</div>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">首頁</Link>
          <a href="/pricing" className="text-sm font-medium text-blue-600">定價</a>
          <a href="/demo" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Demo</a>
          <a href="/admin" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">後台</a>
          <a href="/login" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">登入</a>
        </nav>
      </header>

      {/* Pricing Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            簡單透明的定價
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            選擇適合你的方案
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              立即開始 AI 客服
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            三種方案，滿足不同規模需求。低價切入市場，讓每個企業都能負擔 AI 客服的成本。
          </p>
        </div>
      </section>

      {/* Error message */}
      {error && (
        <div className="max-w-5xl mx-auto px-6 -mt-8 mb-4">
          <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-xl text-center">
            {error}
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 shadow-sm transition-all duration-200 ${
                plan.highlight
                  ? 'border-2 border-blue-500 shadow-blue-100 shadow-lg ring-2 ring-blue-500/20'
                  : 'border border-slate-200 hover:border-slate-300'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                  {plan.price > 0 && <span className="text-slate-400">/月</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.planKey)}
                disabled={loadingPlan !== null}
                className={`block w-full py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {loadingPlan === plan.planKey ? '處理中...' : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">功能比較</h2>
          <p className="text-slate-500">各方案功能一覽</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">功能</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">Starter</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-blue-600 bg-blue-50/50">Pro</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-slate-600">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">{row.feature}</td>
                  {(['starter', 'pro', 'enterprise'] as const).map((plan) => (
                    <td key={plan} className={`px-6 py-4 text-center text-sm ${plan === 'pro' ? 'bg-blue-50/30' : ''}`}>
                      {typeof row[plan] === 'boolean' ? (
                        row[plan] ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className={`text-sm ${plan === 'pro' ? 'text-blue-600 font-medium' : 'text-slate-600'}`}>
                          {row[plan]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">常見問題</h2>
          <p className="text-slate-500">有其他問題？歡迎聯繫我們</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">準備好開始了嗎？</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            立即開始使用 Sierra AI 客服，降低 70% 人工成本，讓您的客戶服務提升到下一個層次。
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
          >
            免費開始
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto px-6 py-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          Sierra Enterprise AI Agent © 2026 |{" "}
          <a href="/privacy" className="hover:text-slate-600 transition-colors">隱私權政策</a>
          {"|"}{" "}
          <a href="/terms" className="hover:text-slate-600 transition-colors">服務條款</a>
          {"|"}{" "}
          <a href="/contact" className="hover:text-slate-600 transition-colors">聯絡我們</a>
        </p>
      </footer>
    </div>
  );
}
