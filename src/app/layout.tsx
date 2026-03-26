import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudmonster.tw"),
  title: "雲管家 Cloud Monster | 智慧自助洗衣管理系統",
  description:
    "雲管家 Cloud Monster — IoT 智慧洗衣解決方案。LINE Pay 行動支付、即時機台監控、雲端管理後台，讓自助洗衣經營更輕鬆。",
  keywords: [
    "自助洗衣",
    "智慧洗衣",
    "LINE Pay",
    "IoT",
    "雲管家",
    "Cloud Monster",
    "洗衣管理系統",
    "雲端管理",
    "行動支付",
    "機台監控",
  ],
  openGraph: {
    title: "雲管家 Cloud Monster | 智慧自助洗衣管理系統",
    description:
      "IoT 智慧洗衣解決方案 — LINE Pay 行動支付、即時機台監控、雲端管理後台",
    type: "website",
    locale: "zh_TW",
    siteName: "雲管家 Cloud Monster",
    images: [
      {
        url: "/cloudmonster-logo.png",
        width: 200,
        height: 109,
        alt: "雲管家 Cloud Monster Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "雲管家 Cloud Monster | 智慧自助洗衣管理系統",
    description:
      "IoT 智慧洗衣解決方案 — LINE Pay 行動支付、即時機台監控、雲端管理後台",
    images: ["/cloudmonster-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`h-full antialiased ${notoSansTC.variable}`}>
      <body className={`min-h-full flex flex-col ${notoSansTC.className}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
