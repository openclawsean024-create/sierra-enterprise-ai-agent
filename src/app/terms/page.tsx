import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsPage() {
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

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">服務條款</h1>
        <p className="text-sm text-slate-500 mb-10">最後更新：2026 年 5 月 7 日</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. 服務說明</h2>
            <p className="text-slate-600 leading-relaxed">
              Sierra AI 客服（以下簡稱「本服務」）是由 Sierra AI（以下簡稱「我們」）
              提供的 AI 對話客服解決方案。我們的服務透過 GPT-4o mini 模型為電子商務網站
              提供自動化的客戶服務回覆。
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              本服務以軟體即服務（SaaS）模式提供，您需要自行確保使用本服務符合您所在地區
              及行業的法規要求。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. 帳戶註冊與責任</h2>
            <p className="text-slate-600 leading-relaxed">申請帳戶時，您同意：</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
              <li>提供真實、準確且完整的個人或公司資訊</li>
              <li>維護並即時更新您的帳戶資訊</li>
              <li>對帳戶密碼保密並承擔所有帳戶活動的責任</li>
              <li>立即通知我們任何未經授權的帳戶使用</li>
              <li>不使用本服務從事任何非法活動</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. 訂閱與付費</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Starter 方案：</strong>免費使用，每月 100 次對話額度</li>
              <li><strong>Pro 方案：</strong>月費 $19 USD，無限對話，單一網站</li>
              <li><strong>Enterprise 方案：</strong>月費 $99 USD，無限制使用</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              訂閱將自動按月續期，直至您取消為止。所有費用已包含適用稅金。
              我們接受信用卡（VISA、MasterCard、JCB）透過 Stripe 付款。
            </p>
          </section>

          <section id="refund">
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. 退款政策</h2>
            <p className="text-slate-600 leading-relaxed">
              我們提供 7 天無條件退款保證。如果您對本服務不滿意，可在訂閱後 7 天內
              聯絡我們申請全額退款。超過 7 天後將不接受退款申請，但您可隨時取消
              未來的訂閱，確保下一個帳單週期不再收費。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. 取消政策</h2>
            <p className="text-slate-600 leading-relaxed">
              您可隨時在管理後台取消訂閱。取消後您的付費方案將持續至當期帳單週期結束，
              之後帳戶將降級為 Starter（免費）方案。您的資料將在取消後保留 30 天。
            </p>
          </section>

          <section id="data">
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. 資料安全與責任</h2>
            <p className="text-slate-600 leading-relaxed">
              我們採用合理的技術與組織措施保護您的資料安全，具體措施請參閱我們的
              <a href="/privacy" className="text-blue-600 hover:underline">隱私權政策</a>。
              然而，網際網路傳輸無法保證 100% 安全。
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              <strong>您的責任：</strong>您應確保嵌入本服務的網站內容合法，
              不利用本服務收集或處理他人的個人資料（除非您有適當的法律依據），
              並對您透過本服務傳送的內容負責。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. AI 回覆的局限性</h2>
            <p className="text-slate-600 leading-relaxed">
              本服務的 AI 回覆基於 GPT-4o mini 模型與您設定的 FAQ 知識庫。
              我們不保證 AI 回覆的完全準確性、完整性或適用性。AI 回覆僅供參考，
              涉及重大決策時建議仍由人工確認。對於因 AI 回覆造成的任何損失，
              我們不承擔直接責任。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. 服務可用性</h2>
            <p className="text-slate-600 leading-relaxed">
              我們目標提供 99.9% 的服務可用性，但不對此作保證。
              例行維護、緊急維護或不可抗力因素可能導致服務暫時中斷。
              如因我們的過失導致服務中斷連續超過 24 小時，將按比例補償您受影響的服務時間。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. 知識產權</h2>
            <p className="text-slate-600 leading-relaxed">
              本服務的名稱、標誌、設計及所有相關內容均為 Sierra AI 的財產。
              您在使用本服務時所創建的 FAQ 知識庫內容歸您所有。
              我們有權使用匿名化的用量數據來改進服務。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. 終止服務</h2>
            <p className="text-slate-600 leading-relaxed">
              如您嚴重違反本服務條款，我們有權立即終止您的帳戶。
              同時，我們保留隨時以合理通知終止或更改本服務（或任何部分）的權利。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. 適用法律與爭議</h2>
            <p className="text-slate-600 leading-relaxed">
              本服務條款受台灣法律管轄。如因本服務產生任何爭議，雙方應本於誠信
              先行協商解決；協商不成時，同意以台灣台北地方法院為第一審管轄法院。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. 聯絡我們</h2>
            <p className="text-slate-600 leading-relaxed">
              如對本服務條款有任何疑問，請聯絡：
            </p>
            <ul className="list-none mt-3 space-y-2 text-slate-600">
              <li>Email：<a href="mailto:support@sierra-aiagent.com" className="text-blue-600 hover:underline">support@sierra-aiagent.com</a></li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
