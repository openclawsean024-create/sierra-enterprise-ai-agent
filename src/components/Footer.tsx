import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Sierra</div>
                <div className="text-xs text-slate-500">Enterprise AI Agent</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              企業級 AI 客服 Agent，專為中小型電商與 SaaS 公司設計。
              降低 70% 人工成本，提升客戶滿意度。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">產品</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">功能特色</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-white transition-colors">定價方案</Link></li>
              <li><Link href="/demo" className="text-sm hover:text-white transition-colors">線上 Demo</Link></li>
              <li><Link href="/admin" className="text-sm hover:text-white transition-colors">管理後台</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">資源</h4>
            <ul className="space-y-2.5">
              <li><Link href="/docs" className="text-sm hover:text-white transition-colors">開發者文件</Link></li>
              <li><Link href="/widget" className="text-sm hover:text-white transition-colors">Widget 嵌入</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">聯絡我們</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">支援中心</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">法律</h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">隱私權政策</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">服務條款</Link></li>
              <li><Link href="/terms#refund" className="text-sm hover:text-white transition-colors">退款政策</Link></li>
              <li><Link href="/terms#data" className="text-sm hover:text-white transition-colors">資料安全</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            Sierra Enterprise AI Agent © {new Date().getFullYear()} | 一行程式碼，瞬間上線 AI 客服
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:support@sierra-aiagent.com" className="text-sm hover:text-white transition-colors">
              support@sierra-aiagent.com
            </a>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              <span className="text-xs">所有系統正常運行</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
