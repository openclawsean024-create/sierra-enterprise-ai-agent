'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
          <a href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">定價</a>
          <a href="/demo" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Demo</a>
          <a href="/login" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">登入</a>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">聯絡我們</h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            有任何問題或需要客製化方案？我們很樂意幫助您找到最適合的解決方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-900 mb-5">聯絡資訊</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-0.5">Email</div>
                    <a href="mailto:support@sierra-aiagent.com" className="text-blue-600 hover:underline text-sm">
                      support@sierra-aiagent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">⏰</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-0.5">回覆時間</div>
                    <p className="text-sm text-slate-500">一般於 1-2 個工作日內回覆</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🌏</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-0.5">服務地區</div>
                    <p className="text-sm text-slate-500">台灣、香港、馬來西亞、新加坡及全球</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">常見問題</h2>
              <ul className="space-y-3">
                {[
                  '如何申請 Enterprise 方案？',
                  '可以試用 Pro 方案嗎？',
                  '超出用量會怎麼樣？',
                  '如何取消訂閱？',
                ].map((q, i) => (
                  <li key={i}>
                    <a href="/pricing" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      <span className="text-blue-500">→</span>
                      {q}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">傳送訊息</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
                <input
                  id="name"
                  type="text"
                  placeholder="王大明"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">主題</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition-all text-slate-500"
                >
                  <option value="">請選擇...</option>
                  <option value="sales">銷售諮詢</option>
                  <option value="technical">技術支援</option>
                  <option value="billing">帳務問題</option>
                  <option value="enterprise">Enterprise 方案</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">訊息內容</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="請描述您的問題或需求..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
