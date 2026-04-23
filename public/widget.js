// Sierra Enterprise AI Agent - Widget SDK
// Embed with: <script src="https://sierra-enterprise-ai-agent.vercel.app/widget.js"></script>
// Usage: <div data-sierra-api-key="YOUR_API_KEY"></div>

(function() {
  'use strict';

  // Config from container element
  const container = document.querySelector('[data-sierra-api-key]');
  const apiKey = container ? container.getAttribute('data-sierra-api-key') : '';
  const apiBase = window.location.origin;
  let sessionId = 'widget-' + Math.random().toString(36).substr(2, 9);

  // Inject base styles
  var widgetStyles = document.createElement('style');
  widgetStyles.textContent = [
    '.sierra-widget-launcher{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#2563EB,#3b82f6);box-shadow:0 4px 20px rgba(37,99,235,0.35);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:24px;z-index:999998;transition:all 0.3s ease;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}',
    '.sierra-widget-launcher:hover{transform:translateY(-2px);box-shadow:0 6px 28px rgba(37,99,235,0.45)}',
    '.sierra-widget-launcher.open{background:#475569;transform:rotate(90deg)}',
    '.sierra-widget-window{position:fixed;bottom:100px;right:24px;width:380px;max-height:520px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.15);z-index:999999;display:none;flex-direction:column;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;animation:sierra-in 0.3s ease}',
    '.sierra-widget-window.open{display:flex}',
    '@keyframes sierra-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',
    '.sierra-widget-header{background:linear-gradient(135deg,#2563EB,#3b82f6);padding:16px 20px;display:flex;align-items:center;gap:12px}',
    '.sierra-widget-header-icon{width:36px;height:36px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px}',
    '.sierra-widget-header-title{color:#fff;font-size:15px;font-weight:600}',
    '.sierra-widget-header-status{color:rgba(255,255,255,0.8);font-size:12px;display:flex;align-items:center;gap:6px;margin-top:2px}',
    '.sierra-widget-dot{width:6px;height:6px;border-radius:50%;background:#4ade80;animation:pulse 2s infinite}',
    '@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}',
    '.sierra-widget-messages{flex:1;overflow-y:auto;padding:16px;background:#f8fafc;min-height:300px}',
    '.sierra-widget-msg{margin-bottom:12px;display:flex;flex-direction:column}',
    '.sierra-widget-msg.user{align-items:flex-end}',
    '.sierra-widget-msg.assistant{align-items:flex-start}',
    '.sierra-widget-bubble{max-width:80%;padding:12px 16px;border-radius:16px;font-size:14px;line-height:1.5;white-space:pre-wrap}',
    '.sierra-widget-msg.user .sierra-widget-bubble{background:linear-gradient(135deg,#2563EB,#3b82f6);color:#fff;border-bottom-right-radius:4px}',
    '.sierra-widget-msg.assistant .sierra-widget-bubble{background:#fff;border:1px solid #e2e8f0;color:#334155;border-bottom-left-radius:4px}',
    '.sierra-widget-typing{margin-bottom:12px;display:flex;align-items:flex-start}',
    '.sierra-widget-typing-bubble{background:#fff;border:1px solid #e2e8f0;border-radius:16px;border-bottom-left-radius:4px;padding:12px 16px;display:flex;gap:4px;align-items:center}',
    '.sierra-widget-typing-dot{width:6px;height:6px;border-radius:50%;background:#94a3b8;animation:typo-bounce 1.2s infinite}',
    '.sierra-widget-typing-dot:nth-child(2){animation-delay:0.2s}',
    '.sierra-widget-typing-dot:nth-child(3){animation-delay:0.4s}',
    '@keyframes typo-bounce{0%,60%,100%{transform:translateY(0);opacity:0.5}30%{transform:translateY(-4px);opacity:1}}',
    '.sierra-widget-input-area{padding:12px 16px;border-top:1px solid #e2e8f0;display:flex;gap:10px}',
    '.sierra-widget-input{flex:1;padding:10px 16px;border:1px solid #e2e8f0;border-radius:24px;font-size:14px;outline:none;background:#f8fafc;font-family:inherit}',
    '.sierra-widget-input:focus{border-color:#2563EB;background:#fff}',
    '.sierra-widget-send{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#2563EB,#3b82f6);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}',
    '.sierra-widget-send:disabled{opacity:0.4;cursor:not-allowed}',
  ].join('');
  document.head.appendChild(widgetStyles);

  // Create launcher button
  var launcher = document.createElement('button');
  launcher.className = 'sierra-widget-launcher';
  launcher.innerHTML = '\uD83D\uDCAC';
  launcher.setAttribute('aria-label', '開啟 Sierra AI 客服');

  // Create chat window
  var chatWindow = document.createElement('div');
  chatWindow.className = 'sierra-widget-window';
  chatWindow.innerHTML = [
    '<div class="sierra-widget-header">',
    '<div class="sierra-widget-header-icon">\uD83E\uDD16</div>',
    '<div class="sierra-widget-header-text">',
    '<div class="sierra-widget-header-title">Sierra AI 客服</div>',
    '<div class="sierra-widget-header-status">',
    '<span class="sierra-widget-dot"></span>',
    '線上服務中',
    '</div>',
    '</div>',
    '</div>',
    '<div class="sierra-widget-messages" id="sierra-messages">',
    '<div class="sierra-widget-msg assistant">',
    '<div class="sierra-widget-bubble">\uD83D\uDC4B 您好！我是 Sierra AI 客服，現在為您服務。請輸入您的問題！</div>',
    '</div>',
    '</div>',
    '<div class="sierra-widget-input-area">',
    '<input type="text" class="sierra-widget-input" id="sierra-input" placeholder="輸入問題..." />',
    '<button class="sierra-widget-send" id="sierra-send" aria-label="送出">',
    '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>',
    '</svg>',
    '</button>',
    '</div>',
  ].join('');

  // Toggle window
  launcher.addEventListener('click', function() {
    launcher.classList.toggle('open');
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      document.getElementById('sierra-input').focus();
    }
  });

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function addMessage(role, content) {
    var messagesEl = document.getElementById('sierra-messages');
    var msg = document.createElement('div');
    msg.className = 'sierra-widget-msg ' + role;
    msg.innerHTML = '<div class="sierra-widget-bubble">' + escapeHtml(content) + '</div>';
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    var messagesEl = document.getElementById('sierra-messages');
    var typing = document.createElement('div');
    typing.className = 'sierra-widget-typing';
    typing.id = 'sierra-typing';
    typing.innerHTML = '<div class="sierra-widget-typing-bubble"><span class="sierra-widget-typing-dot"></span><span class="sierra-widget-typing-dot"></span><span class="sierra-widget-typing-dot"></span></div>';
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function removeTyping() {
    var typing = document.getElementById('sierra-typing');
    if (typing) typing.parentNode.removeChild(typing);
  }

  async function sendMessage() {
    var input = document.getElementById('sierra-input');
    var sendBtn = document.getElementById('sierra-send');
    var text = input.value.trim();
    if (!text) return;

    input.value = '';
    sendBtn.disabled = true;

    addMessage('user', text);
    showTyping();

    try {
      var res = await fetch(apiBase + '/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionId, message: text, apiKey: apiKey }),
      });
      var data = await res.json();
      removeTyping();
      addMessage('assistant', data.response || '感謝您的來訊！');
    } catch (e) {
      removeTyping();
      addMessage('assistant', '抱歉，服務目前暫時無法使用，請稍後再試。');
    } finally {
      sendBtn.disabled = false;
    }
  }

  document.getElementById('sierra-send').addEventListener('click', sendMessage);
  document.getElementById('sierra-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });

  document.body.appendChild(chatWindow);
  document.body.appendChild(launcher);

  console.log('[Sierra Widget] Loaded. API key: ' + (apiKey ? '****' : '(none)'));
})();
