import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 面試助理 | 你的智能面試伙伴",
  description: "在遠端面試時，AI 即時聆聽問題、分析並在側邊欄顯示專業答案建議與參考資料，幫助求職者在面試中表現得更加專業。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Global floating chat widget - visible on all pages */}
        <ChatWidget />
      </body>
    </html>
  );
}
