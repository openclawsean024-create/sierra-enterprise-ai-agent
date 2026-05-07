import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-3">404</h1>
        <h2 className="text-xl font-semibold text-slate-700 mb-4">頁面不存在</h2>
        <p className="text-slate-500 mb-8 max-w-md">
          抱歉，您尋找的頁面不存在或已被移除。
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            返回首頁
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </div>
  );
}
