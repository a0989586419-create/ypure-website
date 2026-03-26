"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  QrCode,
  Settings,
  CreditCard,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: QrCode,
    title: "掃描 QR Code",
    description: "使用 LINE 掃描店內機台上的 QR Code，即可開始",
  },
  {
    number: 2,
    icon: Settings,
    title: "選擇機台與模式",
    description: "挑選洗衣模式、溫度、洗劑等個人化設定",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "LINE Pay 付款",
    description: "透過 LINE Pay 安全付款，快速又便利",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "完成通知",
    description: "洗衣完成後，LINE 即時推播通知提醒取衣",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const numberBounce = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15,
      delay: 0.1,
    },
  },
};

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            簡單四步驟，輕鬆洗衣
          </h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line with scaleX animation (desktop only) */}
          <motion.div
            className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#E5B94C]/20 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Number circle with bounce */}
                  <motion.div
                    variants={numberBounce}
                    className="w-[48px] h-[48px] rounded-full bg-[#E5B94C] flex items-center justify-center text-[#0d0d2b] font-bold text-lg mb-4 relative z-10"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="w-[72px] h-[72px] rounded-full bg-[#E5B94C]/10 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-[#E5B94C]" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
