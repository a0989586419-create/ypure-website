"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface StoreInfo {
  id: string;
  name: string;
  address: string;
}

const stores: StoreInfo[] = [
  { id: "s1", name: "悠洗自助洗衣", address: "嘉義市東區文雅街181號" },
  { id: "s2", name: "吼你洗自助洗衣 玉清店", address: "苗栗市玉清路51號" },
  { id: "s3", name: "吼你洗自助洗衣 農會店", address: "苗栗市為公路290號" },
  { id: "s4", name: "熊愛洗自助洗衣", address: "台中市西屯區福聯街22巷2號" },
  { id: "s5", name: "上好洗自助洗衣", address: "高雄市鳳山區北平路214號" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function StorePreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            全台服務據點
          </h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg">
            目前已有 5 家合作店，持續擴展中
          </p>
        </div>

        {/* Store cards */}
        <div
          ref={ref}
          className="flex overflow-x-auto gap-6 pb-4 md:pb-0 md:grid md:grid-cols-5 md:overflow-x-visible scrollbar-hide"
        >
          {stores.map((store, i) => (
            <motion.div
              key={store.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-shrink-0 w-[240px] md:w-auto bg-[#1a1a2e] rounded-2xl p-6 border border-white/5 hover:border-[#E5B94C]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5B94C]/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#E5B94C]" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm leading-snug">
                {store.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {store.address}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <Link
            href="/stores"
            className="inline-block border-2 border-[#E5B94C] text-[#E5B94C] font-bold rounded-full px-8 py-3 hover:bg-[#E5B94C] hover:text-[#0d0d2b] transition-colors duration-300"
          >
            查看所有據點
          </Link>
        </div>
      </div>
    </section>
  );
}
