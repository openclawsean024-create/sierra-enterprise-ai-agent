'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  confidence?: number;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: `interview-${Date.now()}`, message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      const data = await response.json();

      // Determine confidence based on keyword matching
      const confidentKeywords = ['自我介紹', '優勢', '劣勢', '團隊', '領導', '壓力', '成就', '目標', '價值觀'];
      const confidence = confidentKeywords.some(k => userMessage.includes(k)) ? 88 : 72;

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.response, confidence },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '抱歉，發生錯誤。請稍後再試。' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleListening = () => {
    setIsListening(prev => !prev);
  };

  return (
    <div className="font-sans">
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? '關閉面試助理' : '開啟面試助理'}
        className={`fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 z-[9999] ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800 rotate-90'
            : 'bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          '💬'
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-5 w-[370px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-300"
          style={{ maxHeight: '540px' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎤</span>
              <div>
                <div className="text-white font-semibold text-sm">AI 面試助理</div>
                <div className="text-blue-100 text-xs flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                  </span>
                  就緒
                </div>
              </div>
            </div>
            {/* Listening indicator */}
            <button
              onClick={handleToggleListening}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isListening
                  ? 'bg-red-500/20 text-red-100 border border-red-400/30'
                  : 'bg-white/20 text-blue-100 border border-white/20 hover:bg-white/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isListening ? 'bg-red-400 animate-pulse' : 'bg-green-400'}`}></span>
              {isListening ? '錄音中' : '開始錄音'}
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50"
            style={{ minHeight: '320px', maxHeight: '380px' }}
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <span className="text-4xl mb-3">🎤</span>
                <p className="text-sm font-medium text-slate-700 mb-1">AI 面試助理</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  輸入任何面試問題，我會給你專業建議與回答方向
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {['自我介紹', '優缺點', '離職原因'].map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed transition-all ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-sm shadow-sm'
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>

                  {/* Confidence indicator for assistant messages */}
                  {msg.role === 'assistant' && msg.confidence !== undefined && (
                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2">
                      <span className="text-xs text-slate-400">信心指數</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              msg.confidence >= 85
                                ? 'bg-green-400'
                                : msg.confidence >= 70
                                ? 'bg-yellow-400'
                                : 'bg-red-400'
                            }`}
                            style={{ width: `${msg.confidence}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium ${
                          msg.confidence >= 85
                            ? 'text-green-600'
                            : msg.confidence >= 70
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}>
                          {msg.confidence}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span>AI 分析中...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestion chips */}
          {messages.length === 0 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {['💼 專案經驗', '🚀 為何想加入', '🎯 職涯規劃'].map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInput(s.replace(/^[^\s]+\s/, ''))}
                  className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 hover:border-blue-200 hover:text-blue-600 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-slate-100 bg-white flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="輸入面試問題..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:border-blue-400 focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md transition-shadow flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
