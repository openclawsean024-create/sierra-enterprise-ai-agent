'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  confidence?: number;
}

interface ChatWidgetProps {
  theme?: 'blue' | 'green' | 'purple';
}

export function ChatWidget({ theme = 'blue' }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const themeColors = {
    blue: { gradient: 'from-blue-600 to-blue-500', light: 'bg-blue-50', dot: 'bg-green-400' },
    green: { gradient: 'from-green-600 to-emerald-500', light: 'bg-green-50', dot: 'bg-green-400' },
    purple: { gradient: 'from-purple-600 to-indigo-500', light: 'bg-purple-50', dot: 'bg-purple-400' },
  };
  const tc = themeColors[theme];

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
        body: JSON.stringify({ sessionId: `widget-${Date.now()}`, message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      const data = await response.json();

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.response, confidence: data.confidence },
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

  return (
    <div className="font-sans">
      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? '關閉客服' : '開啟客服'}
        className={`fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 z-[9999] ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800 rotate-90'
            : `bg-gradient-to-br ${tc.gradient} hover:shadow-xl hover:-translate-y-0.5`
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
          <div className={`bg-gradient-to-r ${tc.gradient} px-5 py-4 flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">🤖</span>
              <div>
                <div className="text-white font-semibold text-sm">Sierra AI 客服</div>
                <div className="text-white/80 text-xs flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${tc.dot} animate-pulse`}></span>
                  線上服務中
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="關閉"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50"
            style={{ minHeight: '320px', maxHeight: '380px' }}
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <span className="text-4xl mb-3">👋</span>
                <p className="text-sm font-medium text-slate-700 mb-1">您好！我是 Sierra AI 客服</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  可以幫您解答運費、退貨、訂單、付款等各種問題
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {['運費怎麼算？', '如何退貨？', '訂單進度？'].map((q, i) => (
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
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed transition-all ${
                    msg.role === 'user'
                      ? `bg-gradient-to-r ${tc.gradient} text-white rounded-tr-sm shadow-sm`
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.role === 'assistant' && msg.confidence !== undefined && (
                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2">
                      <span className="text-xs text-slate-400">信心</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              msg.confidence >= 85 ? 'bg-green-400' : msg.confidence >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                            }`}
                            style={{ width: `${msg.confidence}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium ${
                          msg.confidence >= 85 ? 'text-green-600' : msg.confidence >= 70 ? 'text-yellow-600' : 'text-red-600'
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
                    <span>Sierra AI 分析中...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

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
              placeholder="輸入問題..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:border-blue-400 focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`w-10 h-10 bg-gradient-to-r ${tc.gradient} rounded-full flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md transition-shadow flex-shrink-0`}
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

export default ChatWidget;
