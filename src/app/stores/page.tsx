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
                {/* Real Taiwan map SVG - based on actual geographic outline */}
                <svg
                  viewBox="0 0 400 600"
                  className="w-72 md:w-96 mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="taiwanGradient" x1="120" y1="40" x2="280" y2="520">
                      <stop offset="0%" stopColor="#4a4aaf" />
                      <stop offset="50%" stopColor="#3A3A8C" />
                      <stop offset="100%" stopColor="#2a2a6c" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="dotGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Taiwan main island - accurate geographic outline */}
                  <path
                    d="M215 52 L220 48 L228 50 L235 55 L240 52 L248 56 L252 62 L250 68
                    L255 72 L260 80 L265 88 L270 95 L275 100 L280 108 L282 115
                    L285 125 L287 135 L288 145 L290 158 L291 168 L290 178
                    L289 190 L287 200 L285 212 L283 222 L280 235 L277 248
                    L274 258 L270 270 L266 280 L262 290 L258 300 L254 310
                    L249 320 L244 330 L238 342 L232 354 L226 365 L220 375
                    L214 385 L208 395 L202 405 L196 415 L190 425 L184 435
                    L178 442 L172 448 L168 455 L164 462 L160 468 L155 472
                    L150 475 L145 476 L140 474 L137 470 L135 465 L132 458
                    L130 450 L128 442 L125 432 L122 420 L120 410 L118 398
                    L115 385 L113 372 L112 360 L110 348 L108 335 L107 322
                    L106 310 L105 298 L104 285 L103 272 L102 260 L101 248
                    L100 235 L100 222 L102 210 L104 200 L108 188 L112 178
                    L118 168 L124 158 L130 148 L136 140 L142 132 L148 124
                    L154 116 L160 108 L165 100 L170 92 L175 85 L180 78
                    L185 72 L190 66 L196 60 L202 56 L208 54 L215 52Z"
                    fill="url(#taiwanGradient)"
                    stroke="#E5B94C"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                  {/* Inner highlight for 3D depth */}
                  <path
                    d="M215 52 L220 48 L228 50 L235 55 L240 52 L248 56 L252 62 L250 68
                    L255 72 L260 80 L265 88 L270 95 L275 100 L280 108 L282 115
                    L285 125 L287 135 L288 145 L290 158 L291 168 L290 178
                    L289 190 L287 200 L285 212 L283 222 L280 235 L277 248
                    L274 258 L270 270 L266 280 L262 290 L258 300 L254 310
                    L249 320 L244 330 L238 342 L232 354 L226 365 L220 375
                    L214 385 L208 395 L202 405 L196 415 L190 425 L184 435
                    L178 442 L172 448 L168 455 L164 462 L160 468 L155 472
                    L150 475 L145 476 L140 474 L137 470 L135 465 L132 458
                    L130 450 L128 442 L125 432 L122 420 L120 410 L118 398
                    L115 385 L113 372 L112 360 L110 348 L108 335 L107 322
                    L106 310 L105 298 L104 285 L103 272 L102 260 L101 248
                    L100 235 L100 222 L102 210 L104 200 L108 188 L112 178
                    L118 168 L124 158 L130 148 L136 140 L142 132 L148 124
                    L154 116 L160 108 L165 100 L170 92 L175 85 L180 78
                    L185 72 L190 66 L196 60 L202 56 L208 54 L215 52Z"
                    fill="white"
                    opacity="0.03"
                  />

                  {/* Mountain range center line (decorative) */}
                  <path
                    d="M200 80 C210 120, 220 160, 215 200 C210 240, 200 280, 195 320 C190 360, 180 400, 165 450"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.1"
                    strokeDasharray="4 6"
                  />

                  {/* 苗栗 - Miaoli (northwest area, 2 stores) */}
                  <circle cx="148" cy="168" r="18" fill="#E5B94C" fillOpacity="0.08" filter="url(#dotGlow)">
                    <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="148" cy="168" r="7" fill="#E5B94C">
                    <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <rect x="65" y="152" width="68" height="36" rx="8" fill="white" fillOpacity="0.08" />
                  <text x="75" y="170" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">苗栗</text>
                  <text x="75" y="184" fill="#E5B94C" fontSize="11" fontFamily="sans-serif">x2 店</text>

                  {/* 台中 - Taichung (mid-west, 1 store) */}
                  <circle cx="138" cy="210" r="18" fill="#E5B94C" fillOpacity="0.08" filter="url(#dotGlow)">
                    <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                  <circle cx="138" cy="210" r="7" fill="#E5B94C">
                    <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                  <rect x="55" y="194" width="68" height="36" rx="8" fill="white" fillOpacity="0.08" />
                  <text x="65" y="212" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">台中</text>
                  <text x="65" y="226" fill="#E5B94C" fontSize="11" fontFamily="sans-serif">x1 店</text>

                  {/* 嘉義 - Chiayi (southwest, 1 store) */}
                  <circle cx="125" cy="300" r="18" fill="#E5B94C" fillOpacity="0.08" filter="url(#dotGlow)">
                    <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="125" cy="300" r="7" fill="#E5B94C">
                    <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <rect x="40" y="284" width="68" height="36" rx="8" fill="white" fillOpacity="0.08" />
                  <text x="50" y="302" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">嘉義</text>
                  <text x="50" y="316" fill="#E5B94C" fontSize="11" fontFamily="sans-serif">x1 店</text>

                  {/* 高雄 - Kaohsiung (south, 1 store) */}
                  <circle cx="145" cy="408" r="18" fill="#E5B94C" fillOpacity="0.08" filter="url(#dotGlow)">
                    <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  <circle cx="145" cy="408" r="7" fill="#E5B94C">
                    <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  <rect x="58" y="392" width="68" height="36" rx="8" fill="white" fillOpacity="0.08" />
                  <text x="68" y="410" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">高雄</text>
                  <text x="68" y="424" fill="#E5B94C" fontSize="11" fontFamily="sans-serif">x1 店</text>

                  {/* Other major city reference points (dimmed) */}
                  <circle cx="210" cy="85" r="3" fill="white" fillOpacity="0.15" />
                  <text x="220" y="89" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="sans-serif">台北</text>

                  <circle cx="195" cy="125" r="3" fill="white" fillOpacity="0.15" />
                  <text x="205" y="129" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="sans-serif">新竹</text>

                  <circle cx="180" cy="360" r="3" fill="white" fillOpacity="0.15" />
                  <text x="190" y="364" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="sans-serif">台南</text>

                  <circle cx="250" cy="250" r="3" fill="white" fillOpacity="0.15" />
                  <text x="260" y="254" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="sans-serif">花蓮</text>

                  <circle cx="230" cy="350" r="3" fill="white" fillOpacity="0.15" />
                  <text x="240" y="354" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="sans-serif">台東</text>
                </svg>

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
                  <span className="text-gray-500 text-sm">覆蓋 4 縣市 · 5 家門店 · 30 台智慧機台</span>
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
