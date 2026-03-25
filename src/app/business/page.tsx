"use client";

import { useState } from "react";
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
  X,
  Minus,
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

/* ------------------------------------------------------------------ */
/*  Implementation steps                                               */
/* ------------------------------------------------------------------ */
const implSteps = [
  {
    step: 1,
    title: "需求諮詢",
    desc: "了解您的店面規模與需求，提供最適方案",
    duration: "1-2 天",
  },
  {
    step: 2,
    title: "系統安裝",
    desc: "專業團隊到店安裝 IoT 控制器與設定",
    duration: "1-2 天",
  },
  {
    step: 3,
    title: "測試驗收",
    desc: "完整功能測試，確保每台機器正常運作",
    duration: "1-3 天",
  },
  {
    step: 4,
    title: "正式上線",
    desc: "系統上線營運，持續技術支援",
    duration: "持續服務",
  },
];

/* ------------------------------------------------------------------ */
/*  Feature matrix data                                                */
/* ------------------------------------------------------------------ */
interface FeatureRow {
  feature: string;
  basic: boolean | "partial";
  pro: boolean | "partial";
  enterprise: boolean | "partial";
}

const featureMatrix: FeatureRow[] = [
  { feature: "LINE Pay 支付", basic: true, pro: true, enterprise: true },
  { feature: "即時機台監控", basic: true, pro: true, enterprise: true },
  { feature: "LINE 推播通知", basic: true, pro: true, enterprise: true },
  { feature: "優惠券系統", basic: false, pro: true, enterprise: true },
  { feature: "進階營收報表", basic: false, pro: true, enterprise: true },
  { feature: "API 整合", basic: false, pro: false, enterprise: true },
  { feature: "專屬客服經理", basic: false, pro: false, enterprise: true },
  { feature: "客製化開發", basic: false, pro: false, enterprise: true },
];

function FeatureIcon({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return <Check className="mx-auto h-5 w-5 text-green-400" />;
  if (value === "partial")
    return <Minus className="mx-auto h-5 w-5 text-gray-500" />;
  return <X className="mx-auto h-5 w-5 text-gray-600" />;
}

/* ------------------------------------------------------------------ */
/*  Before / After data                                                */
/* ------------------------------------------------------------------ */
const beforeItems = ["人工收款對帳", "每日巡店", "紙本記錄", "無會員機制"];
const afterItems = [
  "LINE Pay 自動收款",
  "遠端即時監控",
  "雲端數據報表",
  "會員儲值優惠",
];

/* ------------------------------------------------------------------ */
/*  ROI Calculator component                                           */
/* ------------------------------------------------------------------ */
function ROICalculator() {
  const [machineCount, setMachineCount] = useState(6);

  const monthlyRevenue = machineCount * 8000;
  const monthlySaving = machineCount * 1500;

  return (
    <section className="bg-[#111] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          {...fadeUp}
          className="mb-4 text-center text-3xl font-bold text-white"
        >
          投資回報試算
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center text-gray-400"
        >
          拖動滑桿，查看不同規模的預估收益
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          {/* Slider */}
          <div className="mb-12 text-center">
            <label className="mb-2 block text-sm text-gray-400">
              機台數量
            </label>
            <div className="text-6xl font-bold text-[#E5B94C]">
              {machineCount}
            </div>
            <p className="mb-6 text-sm text-gray-500">台</p>
            <input
              type="range"
              min={4}
              max={50}
              step={1}
              value={machineCount}
              onChange={(e) => setMachineCount(Number(e.target.value))}
              className="roi-slider w-full max-w-md cursor-pointer"
            />
            <div className="mt-2 flex justify-between text-xs text-gray-500 max-w-md mx-auto">
              <span>4 台</span>
              <span>50 台</span>
            </div>
          </div>

          {/* Result cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center">
              <p className="mb-2 text-sm text-gray-400">預估月營收</p>
              <p className="text-3xl font-bold text-[#E5B94C]">
                NT${monthlyRevenue.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center">
              <p className="mb-2 text-sm text-gray-400">每月節省人力成本</p>
              <p className="text-3xl font-bold text-[#E5B94C]">
                NT${monthlySaving.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center">
              <p className="mb-2 text-sm text-gray-400">年投資報酬率</p>
              <p className="text-3xl font-bold text-[#E5B94C]">320%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider custom styles */}
      <style jsx>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(
            to right,
            #e5b94c 0%,
            #e5b94c ${((machineCount - 4) / 46) * 100}%,
            #333 ${((machineCount - 4) / 46) * 100}%,
            #333 100%
          );
          outline: none;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e5b94c;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(229, 185, 76, 0.4);
        }
        .roi-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e5b94c;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 12px rgba(229, 185, 76, 0.4);
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function BusinessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#111] pt-16">
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
                    className="rounded-2xl border border-[#E5B94C]/20 bg-[#0a0a0a] p-6"
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

        {/* ── ROI Calculator ─────────────────────────────────────── */}
        <ROICalculator />

        {/* ── Success Story ──────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              {...fadeUp}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              成功案例
            </motion.h2>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: story content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-4 inline-block rounded-full bg-[#E5B94C]/10 px-4 py-1.5 text-sm font-bold text-[#E5B94C]">
                  悠洗自助洗衣 -- 嘉義市
                </span>
                <blockquote className="my-6 border-l-4 border-[#E5B94C] pl-4 text-xl font-bold leading-relaxed text-white">
                  導入雲管家三個月，營收成長 40%，人力成本降低 60%
                </blockquote>

                {/* Before / After grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Before
                    </p>
                    <div className="space-y-2">
                      {beforeItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-lg bg-[#1a1a2e] px-3 py-2 text-sm text-gray-400"
                        >
                          <X className="h-3.5 w-3.5 flex-shrink-0 text-red-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#E5B94C]">
                      After
                    </p>
                    <div className="space-y-2">
                      {afterItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-lg border border-[#E5B94C]/20 bg-[#1a1a2e] px-3 py-2 text-sm text-gray-200"
                        >
                          <Check className="h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm italic text-gray-500">
                  -- 陳老闆，悠洗自助洗衣
                </p>
              </motion.div>

              {/* Right: phone mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 -m-8 rounded-full bg-[#E5B94C]/5 blur-2xl" />
                  <MockupPhone variant="dashboard" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Implementation Timeline ────────────────────────────── */}
        <section className="bg-[#111] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              {...fadeUp}
              className="mb-16 text-center text-3xl font-bold text-white"
            >
              四步輕鬆導入
            </motion.h2>
            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
              {/* Connecting dashed line (desktop only) */}
              <div className="pointer-events-none absolute left-0 right-0 top-[24px] hidden md:block">
                <div className="mx-auto h-0 w-[calc(100%-120px)] border-t-2 border-dashed border-[#E5B94C]/30" />
              </div>

              {implSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Numbered circle */}
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B94C] text-lg font-bold text-[#0a0a0a]">
                    {s.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-400">
                    {s.desc}
                  </p>
                  <span className="rounded-full bg-[#E5B94C]/10 px-3 py-1 text-xs font-bold text-[#E5B94C]">
                    {s.duration}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-[#0a0a0a] py-20">
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

            {/* ── Pricing Feature Matrix ─────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 overflow-hidden rounded-2xl bg-[#1a1a2e]"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px]">
                  <thead>
                    <tr className="bg-[#0a0a0a]">
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">
                        功能比較
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-bold text-gray-300">
                        基礎版
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-bold text-[#E5B94C]">
                        專業版
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-bold text-gray-300">
                        企業版
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureMatrix.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0 ? "bg-[#1a1a2e]" : "bg-[#151528]"
                        }
                      >
                        <td className="px-6 py-3.5 text-sm text-gray-300">
                          {row.feature}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <FeatureIcon value={row.basic} />
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <FeatureIcon value={row.pro} />
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <FeatureIcon value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0a0a0a] to-[#111] py-20">
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
