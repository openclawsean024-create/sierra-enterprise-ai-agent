'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('請填寫所有欄位');
      return;
    }

    setIsLoading(true);

    // Mock auth - just redirect to /admin
    setTimeout(() => {
      router.push('/admin');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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
          <a href="/demo" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Demo</a>
        </nav>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">登入管理後台</h1>
            <p className="text-slate-500">使用您的帳戶登入 Sierra</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  密碼
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  記住我
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700">忘記密碼？</a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '登入中...' : '登入'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                還沒有帳戶？{' '}
                <a href="/pricing" className="text-blue-600 hover:text-blue-700 font-medium">
                  申請試用
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            登入即表示您同意我們的 <a href="#" className="underline">服務條款</a> 與 <a href="#" className="underline">隱私權政策</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          Sierra Enterprise AI Agent © 2026 | 一行程式碼，瞬間上線 AI 客服
        </p>
      </footer>
    </div>
  );
}