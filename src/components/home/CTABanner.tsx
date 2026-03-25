"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-12">
          {/* B2C - Left side */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              開始使用雲管家
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              下載 LINE 即可使用，無需額外安裝 APP
            </p>
            <a
              href="https://liff.line.me/2009552592-xkDKSJ1Y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E5B94C] text-[#0d0d2b] font-bold rounded-full px-8 py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300"
            >
              立即體驗
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch bg-white/20" />

          {/* B2B - Right side */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              成為合作夥伴
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              加入雲管家，讓您的洗衣店升級智慧化
            </p>
            <Link
              href="/business"
              className="inline-block border-2 border-white text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-white/10 transition-colors duration-300"
            >
              了解方案
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
