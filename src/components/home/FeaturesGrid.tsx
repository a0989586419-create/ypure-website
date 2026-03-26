"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Bell,
  Gift,
  Store,
  Clock,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  backDescription: string;
}

const features: Feature[] = [
  {
    icon: Smartphone,
    title: "LINE Pay 支付",
    description: "手機輕鬆付款，告別零錢煩惱",
    backDescription:
      "支援儲值錢包與單次付款雙模式，搭配優惠券系統，平均為顧客省下 15% 洗衣費用。付款成功即自動啟動機台，全程不到 10 秒完成。",
  },
  {
    icon: Monitor,
    title: "即時監控",
    description: "遠端查看機台狀態，隨時掌握",
    backDescription:
      "透過 IoT 感測器即時回傳機台運轉狀態與剩餘時間，店主不用親自到店，手機即可監控所有據點，平均減少 60% 巡店次數。",
  },
  {
    icon: Bell,
    title: "推播通知",
    description: "洗衣完成即時通知，不再空等",
    backDescription:
      "洗衣完成自動透過 LINE 推播通知，顧客滿意度提升 40%。機台異常也會即時告警，維修回應時間縮短至 30 分鐘內。",
  },
  {
    icon: Gift,
    title: "優惠系統",
    description: "儲值優惠、折扣券，回饋顧客",
    backDescription:
      "新客首次儲值送 NT$50、滿額贈洗劑券、限時折扣等多元行銷工具，實測合作店客單價平均提升 25%，回頭率增加 35%。",
  },
  {
    icon: Store,
    title: "多店管理",
    description: "一個帳號管理所有據點",
    backDescription:
      "一個後台統一管理所有分店，營收報表、機台狀態、會員數據一目了然。目前已服務全台 5 家店、30 台機器，持續擴展中。",
  },
  {
    icon: Clock,
    title: "24 小時",
    description: "全天候自動運營，無需人力",
    backDescription:
      "IoT 自動化運營搭配雲端管理，無需人力值守即可 24/7 穩定運作。系統上線以來穩定率達 99.5%，年省人力成本超過 NT$36 萬。",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            為什麼選擇雲管家？
          </h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            整合 IoT 物聯網與行動支付，打造全新自助洗衣體驗
          </p>
        </div>

        {/* Feature cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                tabIndex={0}
                role="button"
                aria-label={`${feature.title}: ${feature.description}`}
                className="focus-visible:outline-2 focus-visible:outline-[#E5B94C] focus-visible:outline-offset-2 rounded-2xl"
              >
                <div className="card-flip">
                  <div className="card-flip-inner">
                    {/* Front face */}
                    <div className="card-flip-front bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#E5B94C]/10 flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-[#E5B94C]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Back face */}
                    <div className="card-flip-back bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                      {/* Gold gradient top bar */}
                      <div className="h-1.5 bg-gradient-to-r from-[#E5B94C] via-[#F0D078] to-[#E5B94C]" />
                      <div className="p-8 flex flex-col justify-between h-[calc(100%-6px)]">
                        <div>
                          <h3 className="text-xl font-bold text-[#E5B94C] mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {feature.backDescription}
                          </p>
                        </div>
                        <Link
                          href="/features"
                          className="inline-flex items-center text-[#E5B94C] font-medium mt-6 hover:text-[#F0D078] transition-colors"
                        >
                          了解更多 &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
