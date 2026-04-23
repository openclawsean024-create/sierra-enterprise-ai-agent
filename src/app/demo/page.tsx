'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '👋 您好！我是 Sierra AI 客服。\n\n我可以幫您解答以下問題：\n• 運費與配送\n• 退貨與售後服務\n• 訂單查詢\n• 付款方式\n• 發票問題\n• 優惠碼\n\n請問有什麼需要幫忙的？' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: 'demo-session', message: userMessage }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '抱歉，目前服務暫時無法使用，請稍後再試。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = ['運費怎麼算？', '如何退貨？', '訂單進度？', '付款方式有哪些？'];

  return (
    <div className="min-h-screen bg-slate-50">
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
          <a href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">首頁</a>
          <a href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">定價</a>
          <a href="/demo" className="text-sm font-medium text-blue-600">Demo</a>
          <a href="/admin" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">後台</a>
          <a href="/login" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">登入</a>
        </nav>
      </header>

      {/* Demo Hero */}
      <section className="px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            試用 Sierra AI 客服
          </h1>
          <p className="text-lg text-slate-600">
            體驗 AI 客服如何即時回覆客戶問題。試試輸入運費、退貨、訂單等關鍵字！
          </p>
        </div>
      </section>

      {/* Chat Demo */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* Demo Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 flex items-center gap-3">
            <span className="text-xl">🤖</span>
            <div>
              <div className="text-white font-semibold">FAQ 客服 Bot（範例）</div>
              <div className="text-blue-100 text-xs">模擬電商常見問題回覆</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-blue-100 text-xs">線上</span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-6 bg-slate-50 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] px-5 py-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-sm'
                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span>Sierra AI 分析中...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-3 bg-white border-t border-slate-100 flex gap-2 flex-wrap">
            <span className="text-xs text-slate-400 self-center">試試：</span>
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => { setInput(q); }}
                className="text-xs px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 hover:bg-blue-100 transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="輸入您的問題..."
              disabled={isLoading}
              className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:border-blue-400 focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md transition-shadow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>

        {/* Embed Code */}
        <div className="mt-8 bg-slate-900 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-slate-300 font-medium">嵌入程式碼</span>
          </div>
          <div className="font-mono text-sm overflow-x-auto">
            <pre className="text-cyan-300">{`<!-- Sierra AI 客服 Widget -->`}</pre>
            <pre className="text-cyan-300 mt-1">{`<script src="https://sierra-enterprise-ai-agent.vercel.app/widget.js"></script>`}</pre>
            <pre className="text-cyan-300 mt-1">{`<div data-sierra-api-key="YOUR_API_KEY"></div>`}</pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          Sierra Enterprise AI Agent © 2026 | 一行程式碼，瞬間上線 AI 客服
        </p>
      </footer>
    </div>
  );
}