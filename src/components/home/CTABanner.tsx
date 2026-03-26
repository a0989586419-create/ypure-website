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
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 overflow-hidden">
          {/* Animated gradient border glow */}
          <div className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none" style={{ background: "linear-gradient(135deg, transparent 20%, rgba(229,185,76,0.15) 50%, transparent 80%)" }} />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-center gap-12">
            {/* B2C - Left side */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                用 LINE 就能洗衣付款
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                免下載 APP、免投幣，打開 LINE 掃碼即用。<br className="hidden md:block" />
                全台 5 家店、超過 10,000 位用戶的選擇。
              </p>
              <motion.a
                href="https://liff.line.me/2009552592-xkDKSJ1Y"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[#E5B94C] text-[#0d0d2b] font-bold rounded-full px-8 py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300 shadow-lg shadow-[#E5B94C]/20"
              >
                立即體驗
              </motion.a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-white/20" />

            {/* B2B - Right side */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                讓您的洗衣店營收翻倍
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                IoT + 行動支付全套解決方案，最快 7 天上線。<br className="hidden md:block" />
                合作店平均營收成長 30%，立即免費諮詢。
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  href="/business"
                  className="inline-block border-2 border-white text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-white/10 transition-colors duration-300"
                >
                  了解方案
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
