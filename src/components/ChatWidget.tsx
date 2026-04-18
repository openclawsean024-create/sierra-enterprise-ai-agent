'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        body: JSON.stringify({ sessionId: `sierra-${Date.now()}`, message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.response },
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

  const primaryColor = '#2563EB';
  const primaryGradient = `linear-gradient(135deg, ${primaryColor} 0%, #1d4ed8 100%)`;

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? '關閉客服' : '開啟客服'}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: primaryGradient,
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '380px',
            height: '520px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: primaryGradient,
              color: 'white',
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 600 }}>Sierra 客服</div>
            <div style={{ fontSize: '12px', opacity: 0.85 }}>企業客服 AI</div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflow: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {messages.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  color: '#666',
                  padding: '40px 20px',
                  fontSize: '14px',
                }}
              >
                👋 您好！我是 Sierra，有什麼可以幫您？
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: '16px',
                    background: msg.role === 'user'
                      ? primaryGradient
                      : '#f0f2f5',
                    color: msg.role === 'user' ? 'white' : '#333',
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '16px',
                    background: '#f0f2f5',
                    color: '#666',
                    fontSize: '14px',
                  }}
                >
                  思考中...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid #eee',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="輸入您的問題..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '10px 14px',
                border: '1px solid #ddd',
                borderRadius: '24px',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              style={{
                padding: '10px 16px',
                background: primaryGradient,
                border: 'none',
                borderRadius: '24px',
                color: 'white',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              送出
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
