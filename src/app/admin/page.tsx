'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

const mockFaqs = [
  { id: '1', question: '運費怎麼算？', answer: '滿 $500 免運，標準運費 $60，急速配送 $120', tags: ['運費', '配送'], updatedAt: '2026-04-20' },
  { id: '2', question: '如何申請退貨？', answer: '收到商品後 7 天內可申請退貨，請保持原包裝', tags: ['退貨', '售後'], updatedAt: '2026-04-19' },
  { id: '3', question: '支援哪些付款方式？', answer: '支援信用卡、LINE Pay、街口支付、超商代碼繳費', tags: ['付款'], updatedAt: '2026-04-18' },
  { id: '4', question: '發票可以打統編嗎？', answer: '可以，請在收到發票後至「我的訂單」修改為三聯式發票', tags: ['發票', '報帳'], updatedAt: '2026-04-15' },
  { id: '5', question: '優惠碼哪裡拿？', answer: '可關注我們的 Facebook 與 LINE 官方帳號，時常發放獨家優惠碼', tags: ['優惠'], updatedAt: '2026-04-10' },
];

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<'faqs' | 'stats'>('faqs');

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
        <nav className="flex items-center gap-4">
          <span className="text-sm text-slate-500">管理後台</span>
          <a href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">返回首頁</a>
          <a href="/login" className="text-sm text-red-600 hover:text-red-700 transition-colors">登出</a>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 flex-1">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">管理後台</h1>
          <p className="text-slate-500 mt-1">管理 FAQ 知識庫與查看用量統計</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">💬</span>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+12% vs 上月</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">1,284</div>
            <div className="text-sm text-slate-500 mt-1">總對話次數</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">📅</span>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">今日</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">47</div>
            <div className="text-sm text-slate-500 mt-1">今日對話</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">🤖</span>
              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">活躍</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">5</div>
            <div className="text-sm text-slate-500 mt-1">FAQ 條目</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedTab('faqs')}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
              selectedTab === 'faqs'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            FAQ 知識庫
          </button>
          <button
            onClick={() => setSelectedTab('stats')}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
              selectedTab === 'stats'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            用量統計
          </button>
        </div>

        {/* FAQ List */}
        {selectedTab === 'faqs' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">FAQ 列表</h2>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                + 新增 FAQ
              </button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">問題</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">標籤</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">更新時間</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">操作</th>
                </tr>
              </thead>
              <tbody>
                {mockFaqs.map((faq, i) => (
                  <tr key={faq.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-slate-900">{faq.question}</div>
                      <div className="text-xs text-slate-500 mt-1 truncate max-w-md">{faq.answer}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {faq.tags.map((tag, j) => (
                          <span key={j} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{faq.updatedAt}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 justify-end">
                        <button className="text-xs px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">編輯</button>
                        <button className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors">刪除</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Stats Panel */}
        {selectedTab === 'stats' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900 mb-6">用量概覽</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Intent distribution */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">意圖分布</h3>
                <div className="space-y-3">
                  {[
                    { label: '運費查詢', percent: 35, color: 'bg-blue-500' },
                    { label: '退貨申請', percent: 25, color: 'bg-green-500' },
                    { label: '訂單查詢', percent: 20, color: 'bg-purple-500' },
                    { label: '付款問題', percent: 12, color: 'bg-yellow-500' },
                    { label: '其他', percent: 8, color: 'bg-slate-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 w-24">{item.label}</span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }}></div>
                      </div>
                      <span className="text-xs text-slate-500 w-10 text-right">{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly trend */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">本週趨勢</h3>
                <div className="flex items-end gap-2 h-32">
                  {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => {
                    const heights = [40, 65, 45, 80, 55, 30, 47];
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-blue-100 rounded-t-md" style={{ height: `${heights[i]}%` }}>
                          <div className="w-full bg-blue-500 rounded-t-md h-full"></div>
                        </div>
                        <span className="text-xs text-slate-400">{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
