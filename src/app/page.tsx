export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <header style={{
        background: 'white',
        borderBottom: '1px solid #eee',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '28px' }}>💬</span>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a2e' }}>Sierra</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Enterprise AI Agent</div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="#features" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>功能特色</a>
          <a href="#demo" style={{ color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>線上體驗 →</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#1a1a2e', marginBottom: '16px', lineHeight: 1.2 }}>
          企業客服再進化
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            AI 智能客服上線
          </span>
        </h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
          全天候處理客戶問題、智慧意圖識別、多輪對話理解，
          有效降低 70% 人工客服成本
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="#demo" style={{
            padding: '14px 28px',
            background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
          }}>
            立即體驗 →
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '48px', color: '#1a1a2e' }}>
          核心功能
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            {
              icon: '🎯',
              title: '智能意圖識別',
              desc: 'NLU 引擎精準識別客戶意圖（查詢、退貨、投訴等），目標準確率 >85%',
            },
            {
              icon: '💬',
              title: '多輪對話管理',
              desc: '支援 10 輪以內連續對話上下文記憶，維持上下文理解不中断',
            },
            {
              icon: '🌏',
              title: '多語言支援',
              desc: '自動偵測繁體中文、簡體中文、英文並智慧切換，語音辨識準確率 >92%',
            },
          ].map((f, i) => (
            <div key={i} style={{
              padding: '24px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '12px' }}>{f.icon}</span>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#1a1a2e' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section id="demo" style={{
        padding: '60px 24px',
        background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
          線上體驗
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
          試用 Sierra 客服機器人，即時感受智能對話體驗
        </p>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        }}>
          <div style={{ marginBottom: '16px', padding: '12px', background: '#f8fafc', borderRadius: '8px', fontSize: '14px', color: '#666' }}>
            💡 範例問題：「運費多少？」、「如何退貨？」
          </div>
          {/* Chat widget renders globally via layout.tsx — floating button visible on all pages */}
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', fontSize: '14px' }}>
            💬 客服 widget 已載入，請點擊右下角按鈕開始對話
          </div>
        </div>
      </section>

      {/* Embed section */}
      <section style={{ padding: '60px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '32px', color: '#1a1a2e' }}>
          一行程式碼，快速嵌入網站
        </h2>
        <div style={{
          background: '#1a1a2e',
          borderRadius: '12px',
          padding: '24px',
          fontFamily: 'monospace',
          fontSize: '13px',
          color: '#a5f3fc',
          overflow: 'auto',
        }}>
          <div style={{ color: '#666', marginBottom: '8px' }}>&lt;!-- Sierra 客服 Widget --&gt;</div>
          <div>&lt;script <span style={{ color: '#fbbf24' }}>src</span>=<span style={{ color: '#86efac' }}>&quot;https://your-site.vercel.app/widget.js&quot;</span>&gt;&lt;/script&gt;</div>
          <div>&lt;div <span style={{ color: '#fbbf24' }}>data-sierra</span>=<span style={{ color: '#86efac' }}>&quot;your-api-key&quot;</span>&gt;&lt;/div&gt;</div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '24px',
        textAlign: 'center',
        color: '#999',
        fontSize: '13px',
        borderTop: '1px solid #eee',
      }}>
        <p>Sierra Enterprise AI Agent © 2026 | 部署於 Vercel</p>
      </footer>
    </main>
  );
}
