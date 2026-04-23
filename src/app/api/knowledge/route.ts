import { NextResponse } from 'next/server';

const mockFaqs = [
  { id: '1', question: '運費怎麼算？', answer: '滿 $500 免運，標準運費 $60，急速配送 $120', tags: ['運費', '配送'], createdAt: '2026-04-20T10:00:00Z' },
  { id: '2', question: '如何申請退貨？', answer: '收到商品後 7 天內可申請退貨，請保持原包裝完整', tags: ['退貨', '售後'], createdAt: '2026-04-19T09:00:00Z' },
  { id: '3', question: '支援哪些付款方式？', answer: '支援信用卡、LINE Pay、街口支付、超商代碼繳費', tags: ['付款'], createdAt: '2026-04-18T08:00:00Z' },
  { id: '4', question: '發票可以打統編嗎？', answer: '可以，請在收到發票後至「我的訂單」修改為三聯式發票', tags: ['發票', '報帳'], createdAt: '2026-04-15T07:00:00Z' },
  { id: '5', question: '優惠碼哪裡拿？', answer: '可關注我們的 Facebook 與 LINE 官方帳號，時常發放獨家優惠碼', tags: ['優惠'], createdAt: '2026-04-10T06:00:00Z' },
];

export async function GET() {
  return NextResponse.json({ faqs: mockFaqs });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, answer, tags } = body;

    if (!question || !answer) {
      return NextResponse.json({ error: 'question and answer are required' }, { status: 400 });
    }

    const newFaq = {
      id: String(mockFaqs.length + 1),
      question,
      answer,
      tags: tags || [],
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ faq: newFaq }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}