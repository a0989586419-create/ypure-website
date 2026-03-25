"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MockupPhone from "@/components/MockupPhone";
import SystemDiagram from "@/components/SystemDiagram";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Coins,
  WifiOff,
  UserX,
  TrendingDown,
  Monitor,
  Cpu,
  Headphones,
  Check,
  Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const painPoints = [
  {
    icon: Coins,
    title: "現金管理困擾",
    desc: "找零、收款、對帳耗時費力",
    color: "text-red-400",
  },
  {
    icon: WifiOff,
    title: "無法遠端監控",
    desc: "必須親自到店查看機台狀態",
    color: "text-orange-400",
  },
  {
    icon: UserX,
    title: "顧客留不住",
    desc: "缺乏會員機制與回訪動力",
    color: "text-red-400",
  },
  {
    icon: TrendingDown,
    title: "營收難以分析",
    desc: "沒有數據支持經營決策",
    color: "text-orange-400",
  },
];

const advantages = [
  {
    icon: Monitor,
    title: "軟體系統",
    desc: "LINE LIFF APP、雲端管理後台、數據分析報表",
  },
  {
    icon: Cpu,
    title: "硬體設備",
    desc: "IoT 控制器、Modbus RTU 通訊、投幣器整合",
  },
  {
    icon: Headphones,
    title: "營運支援",
    desc: "系統安裝、教育訓練、持續技術支援",
  },
];

const dashboardFeatures = [
  "即時營收數據與趨勢圖表",
  "機台狀態遠端監控",
  "會員管理與消費分析",
  "優惠券發放與效果追蹤",
  "多店統一管理介面",
];

const plans = [
  {
    name: "基礎方案",
    price: "NT$15,000",
    period: "/月",
    features: ["6 台機器", "LINE Pay 支付", "基本報表", "Email 支援"],
    recommended: false,
  },
  {
    name: "專業方案",
    price: "NT$25,000",
    period: "/月",
    features: [
      "12 台機器",
      "全功能開放",
      "進階分析",
      "優先客服",
      "優惠券系統",
    ],
    recommended: true,
  },
  {
    name: "企業方案",
    price: "客製報價",
    period: "",
    features: [
      "不限機器數",
      "API 整合",
      "專屬客服",
      "客製化開發",
      "多店管理",
    ],
    recommended: false,
  },
];

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-[#0d0d2b] to-[#1a1a3e] pt-16">
          <div className="mx-auto max-w-4xl px-4 py-24 text-center">
            <motion.h1
              {...fadeUp}
              className="mb-4 text-4xl font-bold text-white sm:text-5xl"
            >
              店家智慧升級方案
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 sm:text-xl"
            >
              讓您的自助洗衣店邁入智慧時代
            </motion.p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              {...fadeUp}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              傳統洗衣店的挑戰
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {painPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-2xl border border-white/5 bg-[#1a1a2e] p-6"
                  >
                    <Icon className={`mb-4 h-10 w-10 ${item.color}`} />
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="bg-[#111] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              {...fadeUp}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              雲管家一站式解決
            </motion.h2>
            <SystemDiagram />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {advantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="rounded-2xl border border-[#E5B94C]/20 bg-[#0d0d2b] p-6"
                  >
                    <Icon className="mb-4 h-8 w-8 text-[#E5B94C]" />
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              {...fadeUp}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              強大的管理後台
            </motion.h2>
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <MockupPhone variant="dashboard" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 space-y-4"
              >
                {dashboardFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#E5B94C]/20">
                      <Check className="h-3.5 w-3.5 text-[#E5B94C]" />
                    </div>
                    <span className="text-base text-gray-200">{feat}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-[#111] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              {...fadeUp}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              合作方案
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative overflow-hidden rounded-2xl border bg-[#1a1a2e] p-8 ${
                    plan.recommended
                      ? "border-[#E5B94C]"
                      : "border-white/5"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-[#E5B94C] px-4 py-1.5">
                      <Star className="h-3.5 w-3.5 text-[#0a0a0a]" />
                      <span className="text-xs font-bold text-[#0a0a0a]">
                        推薦
                      </span>
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#E5B94C]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="h-4 w-4 flex-shrink-0 text-[#E5B94C]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block rounded-full py-3 text-center text-sm font-bold transition-all duration-300 ${
                      plan.recommended
                        ? "bg-[#E5B94C] text-[#0a0a0a] hover:bg-[#d4a83b]"
                        : "border border-[#E5B94C]/40 text-[#E5B94C] hover:bg-[#E5B94C]/10"
                    }`}
                  >
                    聯絡我們
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0d0d2b] to-[#1a1a3e] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <motion.h2
              {...fadeUp}
              className="mb-6 text-3xl font-bold text-white sm:text-4xl"
            >
              準備好升級了嗎？
            </motion.h2>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#E5B94C] px-10 py-4 text-lg font-bold text-[#0a0a0a] transition-all duration-300 hover:bg-[#d4a83b]"
              >
                聯絡我們
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
