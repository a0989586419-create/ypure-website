"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "LINE", color: "#06C755" },
  { name: "LINE Pay", color: "#06C755" },
  { name: "HiveMQ", color: "#E5B94C" },
  { name: "Railway", color: "#A855F7" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "PostgreSQL", color: "#4299E1" },
];

export default function TrustedBy() {
  const logoSet = partners.map((p, i) => (
    <div
      key={`${p.name}-${i}`}
      className="flex-shrink-0 mx-6 flex items-center justify-center rounded-xl border px-8 py-4"
      style={{ borderColor: `${p.color}33` }}
    >
      <span
        className="text-lg font-bold tracking-wide whitespace-nowrap"
        style={{ color: p.color }}
      >
        {p.name}
      </span>
    </div>
  ));

  return (
    <section className="bg-[#111] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          合作夥伴與技術支援
        </motion.h2>
        <div className="w-16 h-1 bg-[#E5B94C] mx-auto rounded-full" />
      </div>

      <div className="overflow-hidden">
        <div
          className="flex items-center"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {logoSet}
          {logoSet}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
