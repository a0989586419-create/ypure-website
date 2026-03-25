"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Wifi,
  CreditCard,
  Bell,
  ExternalLink,
  Thermometer,
  ParkingSquare,
  Accessibility,
  Wind,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreFront from "@/components/illustrations/StoreFront";
import Link from "next/link";

const stores = [
  {
    id: "s1",
    name: "悠洗自助洗衣",
    address: "嘉義市東區文雅街181號",
    city: "嘉義",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=嘉義市東區文雅街181號",
    owner: "陳老闆",
    quote: "雲管家讓我每月省下 20 小時的對帳時間",
  },
  {
    id: "s2",
    name: "吼你洗自助洗衣 玉清店",
    address: "苗栗市玉清路51號",
    city: "苗栗",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=苗栗市玉清路51號",
    owner: "林老闆",
    quote: "顧客用 LINE Pay 付款後，回頭率提升 35%",
  },
  {
    id: "s3",
    name: "吼你洗自助洗衣 農會店",
    address: "苗栗市為公路290號",
    city: "苗栗",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=苗栗市為公路290號",
    owner: "林老闆",
    quote: "兩家店的營收報表一目了然，管理輕鬆很多",
  },
  {
    id: "s4",
    name: "熊愛洗自助洗衣",
    address: "台中市西屯區福聯街22巷2號",
    city: "台中",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=台中市西屯區福聯街22巷2號",
    owner: "張老闆",
    quote: "機器故障即時通知，維修速度快了一倍",
  },
  {
    id: "s5",
    name: "上好洗自助洗衣",
    address: "高雄市鳳山區北平路214號",
    city: "高雄",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=高雄市鳳山區北平路214號",
    owner: "黃老闆",
    quote: "儲值優惠帶動了客單價，營收穩定成長",
  },
];

const tags = [
  { icon: CreditCard, label: "LINE Pay" },
  { icon: Wifi, label: "即時監控" },
  { icon: Bell, label: "推播通知" },
];

const amenities = [
  { icon: Clock, label: "24hr" },
  { icon: Wind, label: "冷氣" },
  { icon: ParkingSquare, label: "停車" },
  { icon: Accessibility, label: "無障礙" },
];

const upcomingCities = [
  { city: "台北", stores: "3-5 家" },
  { city: "新竹", stores: "2-3 家" },
  { city: "台南", stores: "2-3 家" },
  { city: "桃園", stores: "2-3 家" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function StoresPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-50px" });
  const comingSoonRef = useRef<HTMLDivElement>(null);
  const comingSoonInView = useInView(comingSoonRef, { once: true, margin: "-50px" });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                服務據點
              </h1>
              <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
              <p className="text-gray-400 text-lg">
                全台 5 家合作店，持續擴展中
              </p>
            </motion.div>
          </div>
        </section>

        {/* Store Cards */}
        <section className="py-20 bg-[#0a0a0a] px-4">
          <div className="max-w-6xl mx-auto">
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {stores.map((store, i) => (
                <motion.div
                  key={store.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={gridInView ? "visible" : "hidden"}
                  className="bg-white rounded-2xl p-6 border-l-4 border-[#E5B94C] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 -mx-2 -mt-2">
                    <StoreFront variant={((i % 3) + 1) as 1 | 2 | 3} className="w-full h-24 opacity-30" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {store.name}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#E5B94C]" />
                    <span className="text-sm">{store.address}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E5B94C] bg-[#E5B94C]/10 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      24 小時營業
                    </span>
                    <span className="text-xs text-gray-400">
                      {store.machines} 台機器
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => {
                      const Icon = tag.icon;
                      return (
                        <span
                          key={tag.label}
                          className="inline-flex items-center gap-1 text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded-full"
                        >
                          <Icon className="w-3 h-3" />
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Amenity Icons */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {amenities.map((amenity) => {
                      const Icon = amenity.icon;
                      return (
                        <span
                          key={amenity.label}
                          className="inline-flex items-center gap-0.5 text-[10px] text-gray-500 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/5"
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {amenity.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="border-l-2 border-[#E5B94C]/50 pl-3 mb-5">
                    <p className="text-sm italic text-gray-400">
                      &ldquo;{store.quote}&rdquo;
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      -- {store.owner}
                    </p>
                  </div>

                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#E5B94C] hover:text-[#F0D078] transition-colors"
                  >
                    在 Google Maps 開啟
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Visualization */}
        <section className="py-20 bg-[#111] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0 }}
              animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12">據點分布</h2>

              <div className="relative bg-[#0a0a0a] rounded-2xl p-8 md:p-12 border border-white/5">
                {/* Simplified Taiwan map SVG */}
                <svg
                  viewBox="0 0 200 500"
                  className="w-48 md:w-56 mx-auto"
                  fill="none"
                >
                  {/* Taiwan outline */}
                  <path
                    d="M100 30 C120 30, 155 80, 160 120 C165 160, 155 200, 150 240 C145 280, 130 320, 120 360 C110 400, 105 440, 100 470 C95 440, 85 400, 80 360 C70 320, 55 280, 50 240 C45 200, 40 160, 45 120 C50 80, 80 30, 100 30Z"
                    fill="#3A3A8C"
                    stroke="#E5B94C"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />

                  {/* City dots with labels */}
                  {/* 苗栗 */}
                  <circle cx="90" cy="165" r="6" fill="#E5B94C">
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="90"
                    cy="165"
                    r="12"
                    fill="#E5B94C"
                    fillOpacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      values="12;18;12"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text
                    x="110"
                    y="170"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    苗栗 x2
                  </text>

                  {/* 台中 */}
                  <circle cx="85" cy="210" r="6" fill="#E5B94C">
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                  </circle>
                  <circle
                    cx="85"
                    cy="210"
                    r="12"
                    fill="#E5B94C"
                    fillOpacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      values="12;18;12"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                  </circle>
                  <text
                    x="105"
                    y="215"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    台中
                  </text>

                  {/* 嘉義 */}
                  <circle cx="80" cy="275" r="6" fill="#E5B94C">
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </circle>
                  <circle
                    cx="80"
                    cy="275"
                    r="12"
                    fill="#E5B94C"
                    fillOpacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      values="12;18;12"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </circle>
                  <text
                    x="100"
                    y="280"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    嘉義
                  </text>

                  {/* 高雄 */}
                  <circle cx="95" cy="370" r="6" fill="#E5B94C">
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.9s"
                    />
                  </circle>
                  <circle
                    cx="95"
                    cy="370"
                    r="12"
                    fill="#E5B94C"
                    fillOpacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      values="12;18;12"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.9s"
                    />
                  </circle>
                  <text
                    x="115"
                    y="375"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    高雄
                  </text>
                </svg>

                <p className="text-gray-500 text-sm mt-8">
                  覆蓋嘉義、苗栗、台中、高雄四縣市
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-[#0a0a0a] px-4">
          <div className="max-w-4xl mx-auto text-center" ref={comingSoonRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={comingSoonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">即將擴展</h2>
              <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-4 rounded-full" />
              <p className="text-gray-400 mb-12">
                2026 年目標：全台 20 家合作店
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {upcomingCities.map((item, i) => (
                <motion.div
                  key={item.city}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={comingSoonInView ? "visible" : "hidden"}
                  className="rounded-2xl bg-white p-6 text-center shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#E5B94C] animate-pulse" />
                    <span className="text-2xl font-bold text-gray-900">{item.city}</span>
                  </div>
                  <p className="text-sm text-[#E5B94C]">{item.stores}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              想讓您的店加入雲管家？
            </h2>
            <p className="text-gray-400 mb-8">
              我們持續尋找優質的自助洗衣店合作夥伴
            </p>
            <Link
              href="/business"
              className="inline-block bg-[#E5B94C] text-[#0d0d2b] font-bold rounded-full px-8 py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300"
            >
              了解店家方案
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
