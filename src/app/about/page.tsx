"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        {/* ── Hero ─────────────────────────────────────────────── */}
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

        {/* ── Vision ───────────────────────────────────────────── */}
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
                雲管家致力於將傳統自助洗衣店轉型為智慧化服務。透過 IoT
                物聯網技術、LINE 生態系整合，以及雲端管理平台，我們讓消費者享受更便利的洗衣體驗，也讓店家經營更加輕鬆高效。
              </p>
            </motion.div>

            {/* Decorative orb */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="relative flex flex-shrink-0 items-center justify-center"
            >
              <div className="h-56 w-56 rounded-full bg-gradient-to-br from-[#E5B94C]/30 to-[#F0D078]/10 blur-2xl sm:h-72 sm:w-72" />
              <div className="absolute h-36 w-36 rounded-full bg-gradient-to-br from-[#E5B94C] to-[#F0D078] opacity-60 sm:h-44 sm:w-44" />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ── Core Values ──────────────────────────────────────── */}
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
                  className="group rounded-2xl border-t-2 border-[#E5B94C] bg-[#0a0a0a] p-8 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(229,185,76,0.15)]"
                >
                  <div className="mb-4">{v.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-white">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Milestones Timeline ──────────────────────────────── */}
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

        {/* ── Stats / Numbers ──────────────────────────────────── */}
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

        {/* ── CTA ──────────────────────────────────────────────── */}
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
