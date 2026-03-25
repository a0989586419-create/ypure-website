"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-[50vh] items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a3e]">
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

        {/* ── Feature Rows ─────────────────────────────────────── */}
        {features.map((f, i) => (
          <FeatureRow key={f.title} feature={f} index={i} />
        ))}

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <AnimatedSection className="bg-gradient-to-b from-[#111] to-[#1a1a3e] py-24">
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
