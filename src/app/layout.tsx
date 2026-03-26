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
  title: "Cloud Monster | Smart Self-Service Laundry Management System",
  description:
    "Cloud Monster -- IoT smart laundry solution. LINE Pay mobile payment, real-time machine monitoring, cloud management dashboard for effortless self-service laundry operation.",
  keywords: [
    "self-service laundry",
    "smart laundry",
    "LINE Pay",
    "IoT",
    "Cloud Monster",
    "laundry management system",
    "cloud management",
    "mobile payment",
    "machine monitoring",
  ],
  openGraph: {
    title: "Cloud Monster | Smart Self-Service Laundry Management System",
    description:
      "IoT smart laundry solution -- LINE Pay payment, real-time monitoring, cloud management",
    type: "website",
    locale: "zh_TW",
    siteName: "Cloud Monster",
    images: [
      {
        url: "/cloudmonster-logo.png",
        width: 200,
        height: 109,
        alt: "Cloud Monster Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Monster | Smart Self-Service Laundry Management System",
    description:
      "IoT smart laundry solution -- LINE Pay payment, real-time monitoring, cloud management",
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
