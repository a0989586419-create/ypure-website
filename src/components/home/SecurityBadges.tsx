"use client";

import { motion } from "framer-motion";
import { Shield, CreditCard, Monitor, Lock } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const badges = [
  {
    icon: Shield,
    title: "256-bit SSL 加密",
    desc: "所有資料傳輸採用銀行級加密標準",
  },
  {
    icon: CreditCard,
    title: "LINE Pay 官方認證",
    desc: "通過 LINE Pay 商家安全認證",
  },
  {
    icon: Monitor,
    title: "24/7 系統監控",
    desc: "全天候自動化監控，確保服務不中斷",
  },
  {
    icon: Lock,
    title: "隱私資料保護",
    desc: "嚴格遵守個資法，用戶資料安全存放",
  },
];

export default function SecurityBadges() {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            企業級安全防護
          </h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(229, 185, 76, 0.4)",
                  boxShadow: "0 0 20px 0 rgba(229, 185, 76, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 text-center cursor-default"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-[#E5B94C]/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-[#E5B94C]" />
                </motion.div>
                <h3 className="text-white font-bold mb-2">{badge.title}</h3>
                <p className="text-gray-400 text-sm">{badge.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
