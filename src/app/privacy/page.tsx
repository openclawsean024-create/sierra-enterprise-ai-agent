import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">隱私權政策</h1>
        <p className="text-sm text-slate-500 mb-10">最後更新：2026 年 5 月 7 日</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. 資料收集</h2>
            <p className="text-slate-600 leading-relaxed">
              Sierra AI 客服（以下簡稱「本服務」）承諾保護您的隱私。當您使用本服務時，
              我們可能會收集以下資訊：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
              <li><strong>對話內容：</strong>您與 AI 客服的對話文字，以提供客服回覆服務</li>
              <li><strong>帳戶資訊：</strong>Email、姓名、密碼（加密儲存）</li>
              <li><strong>用量資料：</strong>對話次數、使用時間、功能使用記錄</li>
              <li><strong>技術資料：</strong>IP 位址、瀏覽器類型、設備資訊</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. 資料使用</h2>
            <p className="text-slate-600 leading-relaxed">
              我們使用收集的資料用於：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
              <li>提供、維護並改善本服務</li>
              <li>處理您的帳戶申請與客戶支援</li>
              <li>分析用量數據以優化 AI 回覆品質</li>
              <li>發送服務相關通知（如用量提醒、帳單通知）</li>
              <li>預防欺詐與確保系統安全</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. 資料儲存與安全</h2>
            <p className="text-slate-600 leading-relaxed">
              您的資料安全是我們的首要任務。我們採用業界標準的加密技術（TLS/SSL）
              保護資料傳輸安全，並使用 bcrypt 雜湊演算法加密儲存密碼。
              對話資料存放於 Supabase（AWS 基礎設施），並遵守 SOC 2 Type II 標準。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. 第三方服務</h2>
            <p className="text-slate-600 leading-relaxed">
              我們使用以下第三方服務協助提供本服務：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
              <li><strong>OpenAI：</strong>用於 AI 對話處理。OpenAI 的資料處理依據其隱私權政策</li>
              <li><strong>Supabase：</strong>資料庫與認證服務</li>
              <li><strong>Stripe：</strong>付款處理服務</li>
              <li><strong>Vercel：</strong>網站代管服務</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cookie 使用</h2>
            <p className="text-slate-600 leading-relaxed">
              本服務使用 Cookie 來維持您的登入狀態與個人化體驗。我們使用以下類型的 Cookie：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
              <li><strong>必要 Cookie：</strong>用於認證與安全性，無法關閉</li>
              <li><strong>功能 Cookie：</strong>記住您的偏好設定</li>
              <li><strong>分析 Cookie：</strong>幫助我們了解服務使用情形（可選）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. 您的權利</h2>
            <p className="text-slate-600 leading-relaxed">
              根據適用法律，您擁有以下權利：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
              <li>查閱您的個人資料</li>
              <li>更正不正確的個人資料</li>
              <li>刪除您的帳戶及相關資料</li>
              <li>撤回同意（不影響已進行的處理）</li>
              <li>資料可攜權（以機器可讀格式提供您的資料）</li>
            </ul>
            <p className="mt-3 text-slate-600">
              如欲行使上述權利，請聯絡：<a href="mailto:support@sierra-aiagent.com" className="text-blue-600 hover:underline">support@sierra-aiagent.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. 資料保留</h2>
            <p className="text-slate-600 leading-relaxed">
              我們會在必要期限內保留您的資料：帳戶資料保留至帳戶刪除後 30 天；
              對話記錄保留 90 天；用量統計資料在去除個人識別資訊後永久保留。
              刪除帳戶後，個人資料將於 30 天內從所有備份中移除。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. 兒童隱私</h2>
            <p className="text-slate-600 leading-relaxed">
              本服務不針對 13 歲以下兒童。我們不會故意收集未成年人的個人資訊。
              若您發現孩子已向我們提供個資，請聯絡我們刪除該資料。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. 政策變更</h2>
            <p className="text-slate-600 leading-relaxed">
              我們可能不時更新本隱私權政策。重大變更將透過 Email 或本網站公告通知。
              繼續使用本服務即表示您接受更新後的政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. 聯絡我們</h2>
            <p className="text-slate-600 leading-relaxed">
              如對本隱私權政策有任何疑問，請聯絡我們：
            </p>
            <ul className="list-none mt-3 space-y-2 text-slate-600">
              <li>Email：<a href="mailto:support@sierra-aiagent.com" className="text-blue-600 hover:underline">support@sierra-aiagent.com</a></li>
              <li>地址：待補（可視需求填入真實地址）</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
