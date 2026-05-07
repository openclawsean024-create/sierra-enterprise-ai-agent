import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sierra AI 客服 — 全天候 AI 客服，降低 70% 人工成本",
    template: "%s | Sierra AI 客服",
  },
  description:
    "Sierra 是企業級 AI 客服 Agent，專為中小型電商與 SaaS 公司設計。一行程式碼，瞬間上線 AI 客服，告別繁瑣的客服流程。",
  keywords: ["AI 客服", "人工智能客服", "電商客服", "SaaS客服", "Chatbot", "GPT客服", "降低客服成本", "自動化客服"],
  authors: [{ name: "Sierra AI" }],
  creator: "Sierra AI",
  publisher: "Sierra AI",
  metadataBase: new URL("https://eliseai.vercel.app"),
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://eliseai.vercel.app",
    siteName: "Sierra AI 客服",
    title: "Sierra AI 客服 — 全天候 AI 客服，降低 70% 人工成本",
    description: "一行程式碼，瞬間上線 AI 客服。專為中小型電商與 SaaS 公司設計。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sierra AI 客服",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sierra AI 客服",
    description: "全天候 AI 客服，降低 70% 人工成本",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
