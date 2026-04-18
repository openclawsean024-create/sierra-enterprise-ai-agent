import { NextRequest, NextResponse } from 'next/server';

const FAQ_DATA = [
  { keywords: ['運費', 'shipping', '配送'], response: '您好！我們的運費計算方式如下：\n• 滿 NT$1,000 免運\n• 未達 NT$1,000，運費 NT$80\n• 離島地區運費 NT$150\n\n如有其他問題，歡迎繼續詢問！' },
  { keywords: ['退貨', '退款', 'return'], response: '您好！關於退貨流程：\n1. 收到商品後 7 天內可申請退貨\n2. 請至「我的訂單」填寫退貨申請\n3. 我們會安排黑貓取件\n4. 退款將於收到商品後 3-5 工作日完成\n\n需要我幫您處理嗎？' },
  { keywords: ['訂單', 'order', '查詢'], response: '您好！查詢訂單，請提供以下資訊：\n• 訂單編號\n• 收件人手機末三碼\n\n或者您也可以至「我的訂單」頁面直接查看喔！' },
  { keywords: ['付款', 'payment', '刷卡'], response: '您好！我們支援以下付款方式：\n• 信用卡（VISA/MasterCard/JCB）\n• LINE Pay\n• 街口支付\n• ATM 轉帳\n• 貨到付款\n\n需要更多說明嗎？' },
  { keywords: ['發票', '發票開立', '統編'], response: '您好！關於發票：\n• 個人戶：開立雲端發票，email 通知\n• 公司戶：請填寫統編與抬頭，開立三聯式發票\n\n如需索取發票，請於訂單成立後至「發票管理」填寫資料！' },
];

function findResponse(message: string): string {
  const lower = message.toLowerCase();
  for (const item of FAQ_DATA) {
    for (const kw of item.keywords) {
      if (lower.includes(kw.toLowerCase())) {
        return item.response;
      }
    }
  }
  return '您好！感謝您的來訊。我會盡力協助您解決問題。如需更詳細的說明，請描述您的問題，我會第一時間為您處理！';
}

export async function POST(req: NextRequest) {
  try {
    const { sessionId, message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = findResponse(message);

    return NextResponse.json({ response, intent: 'faq' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
