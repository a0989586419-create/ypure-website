"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
}

const features: Feature[] = [
  {
    icon: Smartphone,
    title: "LINE Pay 支付",
    description: "手機輕鬆付款，告別零錢煩惱",
  },
  {
    icon: Monitor,
    title: "即時監控",
    description: "遠端查看機台狀態，隨時掌握",
  },
  {
    icon: Bell,
    title: "推播通知",
    description: "洗衣完成即時通知，不再空等",
  },
  {
    icon: Gift,
    title: "優惠系統",
    description: "儲值優惠、折扣券，回饋顧客",
  },
  {
    icon: Store,
    title: "多店管理",
    description: "一個帳號管理所有據點",
  },
  {
    icon: Clock,
    title: "24 小時",
    description: "全天候自動運營，無需人力",
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
    <section className="py-24 px-4 bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            為什麼選擇雲管家？
          </h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#3A3A8C]/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#3A3A8C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
