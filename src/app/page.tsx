export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
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
          <a href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">定價</a>
          <a href="/demo" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Demo</a>
          <a href="/admin" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">後台</a>
          <a href="/login" className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">登入</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            全天候 AI 客服，降低 70% 人工成本
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            一行程式碼
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              瞬間上線 AI 客服
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Sierra 是企業級 AI 客服 Agent，專為中小型電商與 SaaS 公司設計。
            告別繁瑣的客服流程，讓 AI 替代 70% 的人工客服工作量。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              免費試用
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              查看定價
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6">
          {[
            { value: '70%', label: '人工成本降低' },
            { value: '85%+', label: '意圖識別準確率' },
            { value: '24/7', label: '全天候服務' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">核心功能</h2>
          <p className="text-slate-500 max-w-lg mx-auto">專為企業設計的 AI 客服解決方案</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🤖',
              title: '智能意圖識別',
              desc: '基於 GPT-4o mini 的意圖分類，自動識別運費、退貨、訂單等常見問題',
              tag: 'NLU',
            },
            {
              icon: '💬',
              title: '多輪對話管理',
              desc: '支援 10 輪連續對話上下文，自動記憶對話歷史，理解複雜問題',
              tag: '對話',
            },
            {
              icon: '🌏',
              title: '多語言支援',
              desc: '自動偵測繁體中文、簡體中文、英文，無縫切換多語言客服',
              tag: '多語言',
            },
            {
              icon: '📦',
              title: 'Widget 嵌入',
              desc: '一行程式碼即可嵌入任何網站，馬上擁有 AI 客服能力',
              tag: '即插即用',
            },
            {
              icon: '📊',
              title: '用量統計',
              desc: '完整的對話分析與意圖分布報告，輕鬆掌握客服效能',
              tag: 'Analytics',
            },
            {
              icon: '🔒',
              title: '企業級安全',
              desc: 'Session 管理、API Key 驗證，保障您的資料安全',
              tag: '安全',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{f.icon}</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">如何使用</h2>
            <p className="text-slate-500">三步驟，立即啟用 AI 客服</p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: '複製一行程式碼',
                desc: '將 Widget 嵌入碼複製到您的網站，無需任何後端設定',
                icon: '📋',
              },
              {
                step: '02',
                title: '設定 FAQ 知識庫',
                desc: '在管理後台新增常見問題與回答，AI 會自動學習',
                icon: '🧠',
              },
              {
                step: '03',
                title: '上線服務',
                desc: '開始接待客戶，AI 會自動回覆常見問題，複雜問題轉真人',
                icon: '🚀',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-blue-500 tracking-widest">{item.step}</span>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">準備好開始了嗎？</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            立即體驗 Sierra AI 客服，看看它如何幫您降低客服成本。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-md"
            >
              體驗 Demo
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
            >
              查看定價
            </a>
          </div>
        </div>
      </section>

      {/* Embed section */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">工程師專區</h2>
          <p className="text-slate-500 text-sm">一行程式碼，快速嵌入 AI 客服</p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
          <div className="text-slate-500 mb-3 text-xs">&lt;!-- Sierra AI 客服 Widget --&gt;</div>
          <div className="text-cyan-300">&lt;script <span className="text-yellow-300">src</span>=<span className="text-green-300">&quot;https://sierra-enterprise-ai-agent.vercel.app/widget.js&quot;</span>&gt;&lt;/script&gt;</div>
          <div className="text-cyan-300">&lt;div <span className="text-yellow-300">data-sierra-api-key</span>=<span className="text-green-300">&quot;YOUR_API_KEY&quot;</span>&gt;&lt;/div&gt;</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          Sierra Enterprise AI Agent © 2026 | 一行程式碼，瞬間上線 AI 客服
        </p>
      </footer>
    </main>
  );
}