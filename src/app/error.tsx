'use client';

import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-8xl mb-6">⚠️</div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">發生錯誤</h1>
        <p className="text-lg text-slate-500 mb-2 max-w-md">
          抱歉，頁面載入時發生了一些問題。
        </p>
        {process.env.NODE_ENV === 'development' && error?.message && (
          <p className="text-xs text-red-400 mt-2 font-mono bg-red-50 px-3 py-2 rounded-lg max-w-lg">
            {error.message}
          </p>
        )}
        <div className="flex gap-4 mt-8">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            重新嘗試
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
