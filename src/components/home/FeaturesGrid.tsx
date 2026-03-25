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
      "支援儲值錢包與單次付款，搭配優惠券系統，讓每次洗衣都更划算",
  },
  {
    icon: Monitor,
    title: "即時監控",
    description: "遠端查看機台狀態，隨時掌握",
    backDescription:
      "遠端查看機台運轉狀態、剩餘時間，不用親自到店即可掌握",
  },
  {
    icon: Bell,
    title: "推播通知",
    description: "洗衣完成即時通知，不再空等",
    backDescription:
      "洗衣完成自動透過 LINE 推播，不用在店內等待，節省寶貴時間",
  },
  {
    icon: Gift,
    title: "優惠系統",
    description: "儲值優惠、折扣券，回饋顧客",
    backDescription:
      "新客優惠券、儲值回饋、限時折扣，多元行銷工具提升客單價",
  },
  {
    icon: Store,
    title: "多店管理",
    description: "一個帳號管理所有據點",
    backDescription:
      "一個後台統一管理所有店家，營收報表、機台狀態一目了然",
  },
  {
    icon: Clock,
    title: "24 小時",
    description: "全天候自動運營，無需人力",
    backDescription:
      "IoT 自動化運營，無需人力值守，系統 24/7 穩定運作",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
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
              >
                <div className="card-flip">
                  <div className="card-flip-inner">
                    {/* Front face */}
                    <div className="card-flip-front bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
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
                    <div className="card-flip-back bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                      {/* Gold gradient top bar */}
                      <div className="h-1.5 bg-gradient-to-r from-[#E5B94C] via-[#F0D078] to-[#E5B94C]" />
                      <div className="p-8 flex flex-col justify-between h-[calc(100%-6px)]">
                        <div>
                          <h3 className="text-xl font-bold text-[#E5B94C] mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-base">
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
