"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, X, Wifi, Cloud, MessageCircle, Cpu } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MockupPhone from "@/components/MockupPhone";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

interface Feature {
  title: string;
  description: string;
  bullets: string[];
  phoneVariant: "payment" | "machine" | "notification" | "coupon";
}

const features: Feature[] = [
  {
    title: "LINE Pay 行動支付",
    description:
      "不用找零、不用帶錢包。打開 LINE 即可完成付款，支援儲值錢包與單次付款雙模式。搭配儲值優惠，洗衣更划算。",
    bullets: [
      "儲值錢包享額外優惠",
      "LINE Pay 安全加密付款",
      "即時交易紀錄查詢",
    ],
    phoneVariant: "payment",
  },
  {
    title: "即時機台狀態",
    description:
      "遠端查看每台機器的運轉狀態，出門前就知道有沒有空機。不再白跑一趟，節省您寶貴的時間。",
    bullets: [
      "即時顯示可用/使用中/故障狀態",
      "預估剩餘時間",
      "多店機台一覽無遺",
    ],
    phoneVariant: "machine",
  },
  {
    title: "智慧推播通知",
    description:
      "洗衣完成時，LINE 即時推播提醒您取衣。再也不用在洗衣店苦等，善用每一分鐘。",
    bullets: [
      "洗衣完成自動通知",
      "透過 LINE 訊息推播",
      "不錯過任何取衣時間",
    ],
    phoneVariant: "notification",
  },
  {
    title: "優惠券與儲值",
    description:
      "豐富的優惠活動，讓您洗衣更省錢。新會員禮、儲值加碼、限時折扣，好康不斷。",
    bullets: [
      "新會員首儲加碼",
      "定期推出限時優惠券",
      "儲值方案最高享 20% 回饋",
    ],
    phoneVariant: "coupon",
  },
];

/* ------------------------------------------------------------------ */
/*  Comparison data                                                    */
/* ------------------------------------------------------------------ */

const comparisonRows = [
  { label: "付款方式", traditional: "僅限投幣", ypure: "LINE Pay + 投幣 + 儲值" },
  { label: "機台監控", traditional: "需親自到店查看", ypure: "手機即時遠端監控" },
  { label: "顧客通知", traditional: "無法通知", ypure: "LINE 自動推播" },
  { label: "會員管理", traditional: "無會員機制", ypure: "儲值/等級/優惠券" },
  { label: "營收報表", traditional: "手動計算", ypure: "自動雲端報表" },
  { label: "遠端管理", traditional: "必須到場", ypure: "隨時隨地管理" },
];

/* ------------------------------------------------------------------ */
/*  Performance metrics data                                           */
/* ------------------------------------------------------------------ */

const metrics = [
  { value: "99.9%", label: "系統穩定度", desc: "全年無休的高可用性架構" },
  { value: "<1s", label: "平均回應時間", desc: "即時操作，零延遲體驗" },
  { value: "256-bit", label: "資料加密", desc: "銀行等級的安全防護" },
];

/* ------------------------------------------------------------------ */
/*  Tech advantages data                                               */
/* ------------------------------------------------------------------ */

const techAdvantages = [
  {
    icon: Wifi,
    title: "即時 IoT 通訊",
    desc: "MQTT 協議確保設備狀態即時同步，延遲低於 100ms",
  },
  {
    icon: Cloud,
    title: "雲端彈性架構",
    desc: "Railway + Vercel 雲端部署，自動擴展不怕流量爆增",
  },
  {
    icon: MessageCircle,
    title: "LINE 生態整合",
    desc: "LIFF 技術無需下載 APP，LINE 內直接操作一切功能",
  },
  {
    icon: Cpu,
    title: "工業級協議",
    desc: "Modbus RTU 工業通訊，穩定控制各品牌洗衣機與烘衣機",
  },
];

/* ------------------------------------------------------------------ */
/*  Feature row component                                              */
/* ------------------------------------------------------------------ */

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const isEven = index % 2 === 0; // text left, phone right
  const bg = isEven ? "bg-[#0a0a0a]" : "bg-[#111]";

  const textBlock = (
    <motion.div variants={fadeUp} custom={1} className="flex-1">
      <h3 className="mb-4 text-2xl font-bold text-[#E5B94C] sm:text-3xl">
        {feature.title}
      </h3>
      <p className="mb-6 leading-relaxed text-gray-300">{feature.description}</p>
      <ul className="space-y-3">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E5B94C]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const phoneBlock = (
    <motion.div
      variants={fadeUp}
      custom={2}
      className="flex flex-1 items-center justify-center"
    >
      {/* Glow container */}
      <div className="relative">
        <div className="absolute inset-0 -m-8 rounded-full bg-[#E5B94C]/5 blur-2xl" />
        <MockupPhone variant={feature.phoneVariant} />
      </div>
    </motion.div>
  );

  return (
    <AnimatedSection className={`${bg} py-20 sm:py-28`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">
        {isEven ? (
          <>
            {textBlock}
            {phoneBlock}
          </>
        ) : (
          <>
            {phoneBlock}
            {textBlock}
          </>
        )}
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  Metric Ring SVG                                                    */
/* ------------------------------------------------------------------ */

function MetricRing() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="#E5B94C"
        strokeWidth="1"
        strokeDasharray="8 6"
        opacity="0.2"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 60 60"
          to="360 60 60"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="60"
        cy="60"
        r="46"
        stroke="#E5B94C"
        strokeWidth="0.5"
        strokeDasharray="4 8"
        opacity="0.1"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 60 60"
          to="0 60 60"
          dur="20s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* -- Hero ------------------------------------------------- */}
        <section className="relative flex min-h-[50vh] items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div
            className="pointer-events-none absolute left-[10%] top-[30%] h-72 w-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #E5B94C, transparent)" }}
          />
          <div className="relative z-10 px-4 text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto mb-6 h-1 w-16 origin-left rounded-full bg-[#E5B94C]"
            />
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-white sm:text-5xl"
            >
              功能特色
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-4 text-lg text-gray-400"
            >
              一個 APP，完整洗衣體驗
            </motion.p>
          </div>
        </section>

        {/* -- Feature Rows ----------------------------------------- */}
        {features.map((f, i) => (
          <FeatureRow key={f.title} feature={f} index={i} />
        ))}

        {/* -- Comparison Table ------------------------------------- */}
        <section className="bg-[#0a0a0a] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              雲管家 vs 傳統洗衣店
            </motion.h2>

            {/* Column headers */}
            <div className="mb-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center text-lg font-bold text-gray-500">
                傳統洗衣店
              </div>
              <div className="text-center text-lg font-bold text-[#E5B94C]">
                雲管家智慧系統
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-4">
              {comparisonRows.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="grid grid-cols-2 gap-4 sm:gap-6"
                >
                  {/* Traditional side */}
                  <div className="rounded-2xl bg-[#1a1a2e] p-4 sm:p-5">
                    <p className="mb-1 text-xs font-bold text-gray-600">
                      {row.label}
                    </p>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 flex-shrink-0 text-red-400" />
                      <span className="text-sm text-gray-400">
                        {row.traditional}
                      </span>
                    </div>
                  </div>

                  {/* YPURE side */}
                  <div className="rounded-2xl border-l-4 border-[#E5B94C] bg-[#1a1a2e] p-4 sm:p-5">
                    <p className="mb-1 text-xs font-bold text-[#E5B94C]/60">
                      {row.label}
                    </p>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-gray-200">
                        {row.ypure}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Performance Metrics ---------------------------------- */}
        <section className="bg-[#111] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              企業級效能保證
            </motion.h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative rounded-2xl bg-[#1a1a2e] p-8 text-center"
                >
                  {/* Decorative ring */}
                  <div className="pointer-events-none absolute inset-4">
                    <MetricRing />
                  </div>

                  <div className="relative z-10">
                    <p className="mb-2 text-5xl font-bold text-[#E5B94C]">
                      {m.value}
                    </p>
                    <p className="mb-1 text-lg font-bold text-white">
                      {m.label}
                    </p>
                    <p className="text-sm text-gray-400">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Technology Advantages -------------------------------- */}
        <section className="bg-[#0a0a0a] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-3xl font-bold text-white"
            >
              技術優勢
            </motion.h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {techAdvantages.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-2xl border border-white/5 bg-[#1a1a2e] p-6 transition-colors duration-300 hover:border-[#E5B94C]/30"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B94C]/10">
                      <Icon className="h-6 w-6 text-[#E5B94C]" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {tech.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {tech.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* -- Bottom CTA ------------------------------------------- */}
        <AnimatedSection className="bg-gradient-to-b from-[#111] to-[#0a0a0a] py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold text-white"
            >
              立即體驗雲管家
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://liff.line.me/2009552592-xkDKSJ1Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E5B94C] px-8 py-3 font-bold text-[#0a0a0a] transition-colors duration-300 hover:bg-[#F0D078]"
              >
                開始使用
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/business"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-white/10"
              >
                了解店家方案
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
