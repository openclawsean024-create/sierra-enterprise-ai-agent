import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sierra Enterprise AI Agent",
  description: "全天候 AI 客服，降低 70% 人工成本。一行程式碼，瞬間上線 AI 客服。",
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