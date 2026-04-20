export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎤</span>
          <div>
            <div className="text-lg font-bold text-slate-900">AI 面試助理</div>
            <div className="text-xs text-slate-500">你的智能面試伙伴</div>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">功能特色</a>
          <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">使用方式</a>
          <a
            href="#demo"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            立即體驗
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
            AI 賦能面試表現
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            面試時 AI 即時幫你看答案
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              表現更專業、更從容
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            在遠端面試時，AI 即時聆聽麥克風聲音、解析面試官問題，
            側邊欄自動顯示專業答案建議與參考資料，讓你每次面試都全力以赴。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              開始面試體驗
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6">
          {[
            { value: '70%', label: '面試準備時間節省' },
            { value: '85%+', label: '答案準確率' },
            { value: '24/7', label: '即時支援' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">核心功能</h2>
          <p className="text-slate-500 max-w-lg mx-auto">專為求職者設計的面試 AI 助手，從準備到實戰全程護航</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🎙️',
              title: '麥克風即時收音',
              desc: '自動偵測麥克風輸入，即時捕捉面試官話語，零延遲語音轉文字',
              tag: '即時',
            },
            {
              icon: '🤖',
              title: 'AI 答案建議',
              desc: '智慧分析問題意圖，側邊欄即時顯示專業回答建議與參考範本',
              tag: 'AI 分析',
            },
            {
              icon: '📊',
              title: '信心指數顯示',
              desc: '每個答案建議配有信心指數，幫助你判斷哪些回答最為準確合適',
              tag: '信心評估',
            },
            {
              icon: '💡',
              title: '情境題庫',
              desc: '涵蓋行為面試、技術面試、壓力面試等各類題型，完整覆蓋面試場景',
              tag: '題庫',
            },
            {
              icon: '📝',
              title: '回答筆記',
              desc: '一鍵收藏最優回答，方便面試前快速複習，提升準備效率',
              tag: '筆記',
            },
            {
              icon: '🔒',
              title: '隱私安全',
              desc: '所有資料僅存本地，麥克風音訊不上傳，確保你的面試隱私零風險',
              tag: '隱私保障',
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
      <section id="how-it-works" className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">如何使用</h2>
            <p className="text-slate-500">三步驟，立即提升面試表現</p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: '開啟面試頁面',
                desc: '在瀏覽器開啟 AI 面試助理，點擊右下角「開始面試」按鈕',
                icon: '🚀',
              },
              {
                step: '02',
                title: '讓 AI 聆聽麥克風',
                desc: '開啟麥克風收音，AI 即時接收麥克風聲音並轉換為文字分析',
                icon: '🎤',
              },
              {
                step: '03',
                title: '參考 AI 建議回答',
                desc: '側邊欄即時顯示專業答案建議，涵蓋多個面向，協助你從容作答',
                icon: '💬',
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

      {/* Demo */}
      <section id="demo" className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">立即體驗</h2>
            <p className="text-slate-500">點擊右下角 💬 按鈕，開始 AI 面試助理對話</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
            {/* Mock chat UI preview */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Widget header mock */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎤</span>
                  <div>
                    <div className="text-white font-semibold text-sm">AI 面試助理</div>
                    <div className="text-blue-100 text-xs">麥克風已就緒</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-blue-100 text-xs">在線</span>
                  </div>
                </div>
              </div>

              {/* Messages mock */}
              <div className="p-5 space-y-4 bg-slate-50 min-h-[180px]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    🤖
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-xs">
                    <p className="text-sm text-slate-700">
                      👋 您好！我是 AI 面試助理。請問你遇到什麼面試問題想練習呢？
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs shadow-sm">
                    <p className="text-sm">請介紹你自己</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    🤖
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-xs">
                    <p className="text-sm text-slate-700 mb-2">💡 這是一道經典自我介紹題，建議結構：</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-blue-500 text-xs font-bold">1</span>
                        <span className="text-xs text-slate-600">背景簡介（學歷/經歷）</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-blue-500 text-xs font-bold">2</span>
                        <span className="text-xs text-slate-600">核心技能與優勢</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-blue-500 text-xs font-bold">3</span>
                        <span className="text-xs text-slate-600">為什麼想加入這家公司</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">✓ 信心指數 92%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input mock */}
              <div className="px-5 py-4 border-t border-slate-100 flex items-center gap-3">
                <div className="flex-1 bg-slate-50 rounded-full px-4 py-2.5 text-sm text-slate-400 border border-slate-100">
                  輸入你的面試問題...
                </div>
                <button className="w-9 h-9 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-6">
              💡 提示：輸入「自我介紹」、「優缺點」、「職涯規劃」等關鍵字開始練習
            </p>
          </div>
        </div>
      </section>

      {/* Embed section */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">工程師專區</h2>
          <p className="text-slate-500 text-sm">可嵌入任何網站，快速啟用 AI 面試助理</p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
          <div className="text-slate-500 mb-3 text-xs">&lt;!-- AI 面試助理 Widget --&gt;</div>
          <div className="text-cyan-300">&lt;script <span className="text-yellow-300">src</span>=<span className="text-green-300">&quot;https://ai-interview-assistant.com/widget.js&quot;</span>&gt;&lt;/script&gt;</div>
          <div className="text-cyan-300">&lt;div <span className="text-yellow-300">data-interview</span>=<span className="text-green-300">&quot;your-api-key&quot;</span>&gt;&lt;/div&gt;</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          AI 面試助理 © 2026 | 部署於 Vercel
        </p>
      </footer>
    </main>
  );
}
