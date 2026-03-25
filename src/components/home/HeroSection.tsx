"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

      {/* Decorative animated orbs */}
      <div
        className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full opacity-10 blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, #E5B94C, transparent)" }}
      />
      <div
        className="absolute top-[50%] right-[10%] w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #E5B94C, transparent)",
          animation: "float 4s ease-in-out infinite 1s",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[30%] w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #E5B94C, transparent)",
          animation: "float 5s ease-in-out infinite 0.5s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block mb-8"
        >
          <span className="border border-[#E5B94C] text-[#E5B94C] text-sm px-6 py-2 rounded-full tracking-wider">
            IoT 智慧洗衣解決方案
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          智慧洗衣
          <br />
          <span className="text-gradient">雲端管理</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gray-300 text-lg md:text-xl mb-10 tracking-wide"
        >
          LINE Pay 行動支付 | 即時機台監控 | 智慧經營管理
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://liff.line.me/2009552592-xkDKSJ1Y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E5B94C] text-[#0d0d2b] font-bold rounded-full px-8 py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300"
          >
            立即使用
          </a>
          <Link
            href="/business"
            className="inline-block border-2 border-white text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-white/10 transition-colors duration-300"
          >
            店家合作
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/50"
        >
          <span className="text-xs mb-2 tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
