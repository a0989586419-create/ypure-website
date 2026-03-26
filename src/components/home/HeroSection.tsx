"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const statStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: particles move slower, orbs move faster
  const particleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

      {/* Decorative animated orbs with parallax */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full opacity-10 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #E5B94C, transparent)",
          y: orbY,
          scale: orbScale,
        }}
      />
      <motion.div
        className="absolute top-[50%] right-[10%] w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #E5B94C, transparent)",
          animation: "float 4s ease-in-out infinite 1s",
          y: orbY,
          scale: orbScale,
        }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[30%] w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #E5B94C, transparent)",
          animation: "float 5s ease-in-out infinite 0.5s",
          y: orbY,
          scale: orbScale,
        }}
      />

      {/* Particle field with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ y: particleY }}>
        {[
          [12,8,0.3,4.2,0.5],[85,15,0.4,5.1,1.2],[45,72,0.2,3.8,2.1],[23,55,0.5,6.3,0.3],
          [67,33,0.15,4.7,3.5],[91,68,0.35,5.5,1.8],[8,42,0.25,3.2,4.2],[54,88,0.4,6.1,0.8],
          [78,22,0.3,4.5,2.7],[33,95,0.2,5.8,1.5],[95,50,0.45,3.5,3.1],[18,78,0.3,6.7,0.1],
          [62,12,0.15,4.1,4.5],[40,60,0.5,5.3,2.3],[72,85,0.25,3.9,1.1],[5,30,0.35,6.5,3.8],
          [88,45,0.2,4.8,0.7],[50,18,0.4,5.6,2.9],[28,70,0.3,3.4,4.0],[75,92,0.15,6.0,1.6],
          [15,50,0.45,4.3,3.3],[60,38,0.2,5.2,0.4],[82,75,0.35,3.7,2.5],[38,25,0.25,6.4,1.9],
          [92,58,0.3,4.6,4.3],[22,88,0.4,5.9,0.9],[55,5,0.15,3.1,3.7],[70,65,0.5,6.2,2.0],
          [10,15,0.35,4.9,1.4],[48,48,0.25,5.4,3.6],
        ].map(([x, y, op, dur, delay], i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#E5B94C]"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              opacity: op,
              animation: `particle-float ${dur}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge with pulse animation */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block mb-8"
        >
          <motion.span
            className="inline-block border border-[#E5B94C] text-[#E5B94C] text-sm px-6 py-2 rounded-full tracking-wider"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(229, 185, 76, 0)",
                "0 0 0 8px rgba(229, 185, 76, 0.15)",
                "0 0 0 0 rgba(229, 185, 76, 0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            IoT 智慧洗衣解決方案
          </motion.span>
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

        {/* CTA buttons with hover/tap micro-interactions */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://liff.line.me/2009552592-xkDKSJ1Y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E5B94C] text-[#0d0d2b] font-bold rounded-full px-8 py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            立即使用
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/business"
              className="inline-block border-2 border-white text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-white/10 transition-colors duration-300"
            >
              店家合作
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats counter row with stagger */}
        <motion.div
          variants={statStagger}
          initial="hidden"
          animate="visible"
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "合作店家" },
              { value: "30+", label: "智慧機台" },
              { value: "1,000+", label: "活躍用戶" },
              { value: "99.9%", label: "系統穩定度" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={statItem} className="text-center">
                <div className="text-3xl font-bold text-[#E5B94C]">{stat.value}</div>
                <div className="text-white text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
