import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "雲管家 YPURE | 智慧自助洗衣管理系統",
  description: "雲管家 YPURE Cloud Butler — IoT 智慧洗衣解決方案。LINE Pay 行動支付、即時機台監控、雲端管理後台，讓自助洗衣店經營更輕鬆。",
  keywords: "自助洗衣, 智慧洗衣, LINE Pay, IoT, 雲管家, YPURE, 洗衣管理系統",
  openGraph: {
    title: "雲管家 YPURE | 智慧自助洗衣管理系統",
    description: "IoT 智慧洗衣解決方案 — LINE Pay 支付、即時監控、雲端管理",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
