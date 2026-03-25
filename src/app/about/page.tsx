"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaundryScene from "@/components/illustrations/LaundryScene";

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
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  if (inView) {
    motionVal.set(target);
  }

  return (
    <motion.span ref={ref} className="text-5xl font-bold text-[#E5B94C] sm:text-6xl">
      {display}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const coreValues = [
  {
    title: "智慧科技",
    desc: "IoT 物聯網 + 雲端運算，打造智慧洗衣生態系統",
    icon: (
      <svg className="h-8 w-8 text-[#E5B94C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-1.591.659H9.061a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0V5.846a2.25 2.25 0 0 0-1.272-2.028" />
      </svg>
    ),
  },
  {
    title: "用戶至上",
    desc: "從消費者到店家，每個功能都以使用者體驗為核心",
    icon: (
      <svg className="h-8 w-8 text-[#E5B94C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "持續創新",
    desc: "不斷優化系統功能，與合作夥伴共同成長",
    icon: (
      <svg className="h-8 w-8 text-[#E5B94C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "陳致遠",
    title: "創辦人暨執行長",
    bio: "深耕物聯網產業十年，曾任職於工業自動化領域。致力於將 IoT 技術應用於傳統產業轉型。",
  },
  {
    name: "林子翔",
    title: "技術長",
    bio: "全端工程師，專精 Node.js 與 React 開發。負責雲管家系統架構設計、LINE LIFF 與 MQTT 通訊整合。",
  },
  {
    name: "王雅琪",
    title: "營運長",
    bio: "擁有連鎖零售業管理經驗，負責合作店家拓展、客戶成功與營運支援策略。",
  },
];

const techStack = [
  { name: "LINE LIFF", category: "前端介面" },
  { name: "React", category: "前端框架" },
  { name: "Node.js", category: "後端服務" },
  { name: "PostgreSQL", category: "資料庫" },
  { name: "MQTT", category: "IoT 通訊" },
  { name: "Modbus RTU", category: "設備控制" },
  { name: "LINE Pay", category: "支付整合" },
  { name: "Railway", category: "雲端部署" },
];

const milestones = [
  {
    year: "2024 Q1",
    title: "系統開發啟動",
    desc: "雲管家核心系統開發，整合 LINE LIFF 與 IoT 技術",
  },
  {
    year: "2024 Q2",
    title: "首家店上線",
    desc: "悠洗自助洗衣成為首家合作夥伴，系統正式運營",
  },
  {
    year: "2024 Q3",
    title: "快速擴展",
    desc: "合作店家擴展至 5 家，服務覆蓋嘉義、苗栗、台中、高雄",
  },
  {
    year: "2025",
    title: "持續進化",
    desc: "推出會員等級、推薦碼系統，持續優化用戶體驗",
  },
  {
    year: "2025 Q2",
    title: "會員系統升級",
    desc: "推出會員等級制度與推薦碼系統，提升顧客黏著度",
  },
  {
    year: "2025 Q4",
    title: "全台 10 家店",
    desc: "擴展合作版圖至台北、新竹、台南，覆蓋更多縣市",
  },
  {
    year: "2026",
    title: "全台 20 家店",
    desc: "建立完整的全台服務網絡，成為自助洗衣智慧化的領導品牌",
  },
];

const stats = [
  { value: 5, suffix: "", label: "合作店家" },
  { value: 30, suffix: "+", label: "台機器" },
  { value: 1000, suffix: "+", label: "用戶" },
  { value: 24, suffix: "/7", label: "服務" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* -- Hero -------------------------------------------------- */}
        <section className="relative flex min-h-[50vh] items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div
            className="pointer-events-none absolute right-[10%] top-[20%] h-80 w-80 rounded-full opacity-10 blur-3xl"
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
              關於雲管家
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-4 text-lg text-gray-400"
            >
              以科技重新定義自助洗衣體驗
            </motion.p>
          </div>
        </section>

        {/* -- Vision ------------------------------------------------ */}
        <AnimatedSection className="bg-[#0a0a0a] py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex-1"
            >
              <h2 className="mb-6 text-3xl font-bold text-white">我們的願景</h2>
              <p className="leading-relaxed text-gray-300">
                雲管家誕生於一個簡單的觀察：傳統自助洗衣店的經營方式，已經跟不上消費者的數位生活習慣。我們看到店主每天花費大量時間在收款對帳、機器巡檢、客訴處理上，而消費者則苦於找不到零錢、不知道機器何時洗好。
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                2024 年，我們組建了一支結合 IoT 硬體、雲端軟體與商業營運的跨領域團隊，打造出雲管家 — 一套從手機到洗衣機、從付款到通知、從單店到多店的完整智慧洗衣解決方案。我們的目標不只是讓洗衣更方便，更要讓每一位店主都能輕鬆經營、用數據做決策。
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="relative flex flex-shrink-0 items-center justify-center"
            >
              <LaundryScene className="w-64 sm:w-80 opacity-60" />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* -- Core Values ------------------------------------------- */}
        <AnimatedSection className="bg-[#111] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-14 text-center text-3xl font-bold text-white"
            >
              核心價值
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3">
              {coreValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  custom={i + 1}
                  className="group rounded-2xl border-t-2 border-[#E5B94C] bg-white shadow-lg p-8 transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="mb-4">{v.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* -- Team -------------------------------------------------- */}
        <AnimatedSection className="bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-14 text-center text-3xl font-bold text-white"
            >
              核心團隊
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  custom={i + 1}
                  className="rounded-2xl bg-white p-8 text-center shadow-lg"
                >
                  {/* Avatar */}
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#E5B94C] to-[#F0D078]">
                    <span className="text-2xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-4 text-sm font-semibold text-[#3A3A8C]">{member.title}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* -- Tech Stack -------------------------------------------- */}
        <AnimatedSection className="bg-[#111] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-14 text-center text-3xl font-bold text-white"
            >
              技術架構
            </motion.h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  variants={fadeUp}
                  custom={i + 1}
                  className="rounded-2xl border border-gray-200 bg-white shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl"
                >
                  <p className="text-lg font-bold text-gray-900">{tech.name}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-[#3A3A8C]">
                    {tech.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* -- Milestones Timeline ----------------------------------- */}
        <AnimatedSection className="bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-16 text-center text-3xl font-bold text-white"
            >
              發展歷程
            </motion.h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#E5B94C] to-[#E5B94C]/20 sm:left-1/2 sm:-translate-x-1/2" />

              <div className="space-y-16">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    variants={fadeUp}
                    custom={i + 1}
                    className="relative pl-12 sm:pl-0"
                  >
                    {/* Dot */}
                    <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-[#E5B94C] bg-[#0a0a0a] sm:left-1/2 sm:-translate-x-1/2" />

                    {/* Content - alternate sides on desktop */}
                    <div
                      className={`sm:w-[45%] ${
                        i % 2 === 0
                          ? "sm:mr-auto sm:pr-8 sm:text-right"
                          : "sm:ml-auto sm:pl-8 sm:text-left"
                      }`}
                    >
                      <span className="text-sm font-bold text-[#E5B94C]">{m.year}</span>
                      <h3 className="mt-1 text-lg font-bold text-white">{m.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* -- Stats / Numbers --------------------------------------- */}
        <AnimatedSection className="bg-[#111] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter target={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-sm font-medium text-gray-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* -- CTA --------------------------------------------------- */}
        <AnimatedSection className="bg-gradient-to-b from-[#0a0a0a] to-[#111] py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold text-white"
            >
              想了解更多？
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E5B94C] px-8 py-3 font-bold text-[#0a0a0a] transition-colors duration-300 hover:bg-[#F0D078]"
              >
                聯絡我們
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
