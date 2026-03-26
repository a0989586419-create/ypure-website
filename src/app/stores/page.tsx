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
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:flex-none pb-4 md:pb-0"
            >
              {stores.map((store, i) => (
                <motion.div
                  key={store.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={gridInView ? "visible" : "hidden"}
                  className="bg-white rounded-2xl p-6 border-l-4 border-[#E5B94C] shadow-lg hover:shadow-xl transition-all duration-300 min-w-[85vw] snap-center md:min-w-0"
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
                          className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
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
                          className="inline-flex items-center gap-0.5 text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200"
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {amenity.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="border-l-2 border-[#E5B94C]/50 pl-3 mb-5">
                    <p className="text-sm italic text-gray-500">
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
                {/* Taiwan map with geographically accurate outline + CSS overlay markers */}
                <div className="relative w-64 md:w-80 mx-auto" style={{ aspectRatio: '300 / 830' }}>
                  <svg
                    viewBox="0 0 300 830"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="taiwanGrad" x1="80" y1="0" x2="220" y2="830">
                        <stop offset="0%" stopColor="#4a4aaf" />
                        <stop offset="50%" stopColor="#3A3A8C" />
                        <stop offset="100%" stopColor="#2a2a6c" />
                      </linearGradient>
                      <filter id="mapGlow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Taiwan main island - derived from real geographic coordinates
                        Lon 120.0-122.1 -> x 0-300, Lat 25.35-21.85 -> y 0-830 */}
                    <path
                      d="M216,12 L221,14 L226,16 L231,23 L240,35 L246,45 L251,52 L256,59 L260,70 L264,82 L269,94 L271,110 L269,124 L264,138 L260,152 L254,171 L246,194 L237,218 L231,241 L226,265 L221,288 L217,312 L211,335 L206,358 L200,382 L194,405 L189,429 L183,452 L174,476 L169,499 L160,527 L151,555 L143,579 L136,602 L129,626 L121,656 L114,679 L111,703 L109,726 L106,750 L103,773 L104,794 L109,804 L114,808 L121,804 L126,797 L123,773 L120,750 L117,726 L111,703 L104,686 L97,668 L86,644 L74,626 L60,602 L51,579 L46,555 L40,532 L34,508 L31,485 L29,462 L31,438 L40,415 L46,391 L51,368 L57,344 L63,321 L69,305 L74,281 L80,265 L86,241 L94,218 L100,194 L103,176 L106,157 L111,134 L117,117 L126,101 L136,87 L146,73 L157,63 L169,54 L177,45 L186,40 L194,30 L203,23 L211,16 Z"
                      fill="url(#taiwanGrad)"
                      stroke="#E5B94C"
                      strokeWidth="1.2"
                      strokeOpacity="0.35"
                      filter="url(#mapGlow)"
                    />
                    {/* Subtle inner highlight for depth */}
                    <path
                      d="M216,12 L221,14 L226,16 L231,23 L240,35 L246,45 L251,52 L256,59 L260,70 L264,82 L269,94 L271,110 L269,124 L264,138 L260,152 L254,171 L246,194 L237,218 L231,241 L226,265 L221,288 L217,312 L211,335 L206,358 L200,382 L194,405 L189,429 L183,452 L174,476 L169,499 L160,527 L151,555 L143,579 L136,602 L129,626 L121,656 L114,679 L111,703 L109,726 L106,750 L103,773 L104,794 L109,804 L114,808 L121,804 L126,797 L123,773 L120,750 L117,726 L111,703 L104,686 L97,668 L86,644 L74,626 L60,602 L51,579 L46,555 L40,532 L34,508 L31,485 L29,462 L31,438 L40,415 L46,391 L51,368 L57,344 L63,321 L69,305 L74,281 L80,265 L86,241 L94,218 L100,194 L103,176 L106,157 L111,134 L117,117 L126,101 L136,87 L146,73 L157,63 L169,54 L177,45 L186,40 L194,30 L203,23 L211,16 Z"
                      fill="white"
                      opacity="0.03"
                    />

                    {/* Central mountain range (decorative) */}
                    <path
                      d="M200,60 C210,150 220,250 210,370 C200,480 180,580 130,720"
                      stroke="white"
                      strokeWidth="0.6"
                      strokeOpacity="0.08"
                      strokeDasharray="6 8"
                    />
                  </svg>

                  {/* CSS Overlay Markers - positions from real lat/lon projection */}

                  {/* === Active stores (gold pulsing markers) === */}

                  {/* Miaoli - 2 stores (39%, 22.6%) */}
                  <div className="absolute" style={{ top: '22%', left: '38%' }}>
                    <div className="relative">
                      <span className="absolute -inset-3 rounded-full bg-[#E5B94C]/10 animate-ping" />
                      <span className="relative block w-4 h-4 rounded-full bg-[#E5B94C] shadow-[0_0_12px_rgba(229,185,76,0.6)]" />
                    </div>
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <span className="block text-white text-sm font-bold leading-tight">苗栗</span>
                      <span className="block text-[#E5B94C] text-xs">x2 店</span>
                    </div>
                  </div>

                  {/* Taichung - 1 store (32.4%, 34.3%) */}
                  <div className="absolute" style={{ top: '33%', left: '31%' }}>
                    <div className="relative">
                      <span className="absolute -inset-3 rounded-full bg-[#E5B94C]/10 animate-ping" style={{ animationDelay: '0.5s' }} />
                      <span className="relative block w-4 h-4 rounded-full bg-[#E5B94C] shadow-[0_0_12px_rgba(229,185,76,0.6)]" />
                    </div>
                    <div className="absolute right-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <span className="block text-white text-sm font-bold leading-tight">台中</span>
                      <span className="block text-[#E5B94C] text-xs">x1 店</span>
                    </div>
                  </div>

                  {/* Chiayi - 1 store (21.4%, 53.4%) */}
                  <div className="absolute" style={{ top: '52%', left: '20%' }}>
                    <div className="relative">
                      <span className="absolute -inset-3 rounded-full bg-[#E5B94C]/10 animate-ping" style={{ animationDelay: '1s' }} />
                      <span className="relative block w-4 h-4 rounded-full bg-[#E5B94C] shadow-[0_0_12px_rgba(229,185,76,0.6)]" />
                    </div>
                    <div className="absolute right-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <span className="block text-white text-sm font-bold leading-tight">嘉義</span>
                      <span className="block text-[#E5B94C] text-xs">x1 店</span>
                    </div>
                  </div>

                  {/* Kaohsiung - 1 store (14.3%, 77.7%) */}
                  <div className="absolute" style={{ top: '76%', left: '14%' }}>
                    <div className="relative">
                      <span className="absolute -inset-3 rounded-full bg-[#E5B94C]/10 animate-ping" style={{ animationDelay: '1.5s' }} />
                      <span className="relative block w-4 h-4 rounded-full bg-[#E5B94C] shadow-[0_0_12px_rgba(229,185,76,0.6)]" />
                    </div>
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <span className="block text-white text-sm font-bold leading-tight">高雄</span>
                      <span className="block text-[#E5B94C] text-xs">x1 店</span>
                    </div>
                  </div>

                  {/* === Reference cities (dimmed markers) === */}

                  {/* Taipei (72.4%, 8.6%) */}
                  <div className="absolute flex items-center gap-1.5" style={{ top: '8%', left: '71%' }}>
                    <span className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[11px]">台北</span>
                  </div>

                  {/* Hsinchu (46.2%, 15.7%) */}
                  <div className="absolute flex items-center gap-1.5" style={{ top: '15%', left: '45%' }}>
                    <span className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[11px]">新竹</span>
                  </div>

                  {/* Tainan (9.5%, 67.1%) */}
                  <div className="absolute flex items-center gap-1.5" style={{ top: '66%', left: '9%' }}>
                    <span className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[11px]">台南</span>
                  </div>

                  {/* Hualien (76.2%, 38.9%) */}
                  <div className="absolute flex items-center gap-1.5" style={{ top: '38%', left: '75%' }}>
                    <span className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[11px]">花蓮</span>
                  </div>

                  {/* Taitung (54.8%, 74.3%) */}
                  <div className="absolute flex items-center gap-1.5" style={{ top: '73%', left: '54%' }}>
                    <span className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[11px]">台東</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E5B94C] animate-pulse" />
                    <span className="text-gray-400 text-sm">營運中據點</span>
                  </div>
                  <span className="text-gray-600 hidden sm:inline">|</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/15" />
                    <span className="text-gray-500 text-sm">規劃擴展城市</span>
                  </div>
                  <span className="text-gray-600 hidden sm:inline">|</span>
                  <span className="text-gray-500 text-sm">覆蓋 4 縣市 . 5 家門店 . 30 台智慧機台</span>
                </div>
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
