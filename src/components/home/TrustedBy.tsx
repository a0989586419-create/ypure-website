"use client";

import { motion } from "framer-motion";

interface Partner {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: "LINE",
    color: "#06C755",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#06C755" />
        <path
          d="M7 11.5C7 8.46 9.24 6 12 6s5 2.46 5 5.5c0 2.73-2.42 5.02-5.68 5.45-.22.03-.32.1-.32.22v.83c0 .14-.12.2-.24.14C8.62 16.72 7 14.3 7 11.5z"
          fill="white"
        />
        <path
          d="M10.2 10.4h-.6v2.2h.6v-2.2zm3.2 0h-.6v1.3l-.9-1.3h-.6v2.2h.6v-1.3l.9 1.3h.6v-2.2zm-2.2 0h-.6v2.2h1.4v-.5h-.8v-1.7zm3.6 0h-.6v2.2h1.4v-.5h-.8v-.4h.8v-.5h-.8v-.3h.8v-.5h-1.4.6z"
          fill="#06C755"
        />
      </svg>
    ),
  },
  {
    name: "LINE Pay",
    color: "#06C755",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="5" width="22" height="14" rx="3" fill="#06C755" />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fill="white"
          fontSize="8"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          LP
        </text>
      </svg>
    ),
  },
  {
    name: "HiveMQ",
    color: "#E5B94C",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon
          points="12,2 21,7 21,17 12,22 3,17 3,7"
          fill="none"
          stroke="#E5B94C"
          strokeWidth="1.5"
        />
        <polygon
          points="12,6 17,9 17,15 12,18 7,15 7,9"
          fill="#E5B94C"
          opacity="0.3"
        />
        <circle cx="12" cy="12" r="2" fill="#E5B94C" />
      </svg>
    ),
  },
  {
    name: "Railway",
    color: "#A855F7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <line x1="8" y1="6" x2="8" y2="18" stroke="#A855F7" strokeWidth="1.5" />
        <line x1="16" y1="6" x2="16" y2="18" stroke="#A855F7" strokeWidth="1.5" />
        <line x1="7" y1="9" x2="17" y2="9" stroke="#A855F7" strokeWidth="1" />
        <line x1="7" y1="12" x2="17" y2="12" stroke="#A855F7" strokeWidth="1" />
        <line x1="7" y1="15" x2="17" y2="15" stroke="#A855F7" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#FFFFFF",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12,4 22,20 2,20" fill="white" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#4299E1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#4299E1" strokeWidth="1.5" />
        <path
          d="M15 8c0 0-1-1-3-1s-3 1-3 1c-1.5 1-1.5 3-1 5 .3 1.2.8 2.5 1.5 3.5.5.7 1 1 1.5 1s.8-.5 1-.8c.2.3.5.8 1 .8s1-.3 1.5-1c.7-1 1.2-2.3 1.5-3.5.5-2 .5-4-1-5z"
          fill="none"
          stroke="#4299E1"
          strokeWidth="1.2"
        />
        <path d="M15.5 13c.5 1 1 3 1 3.5s-.2 1-.5 1" stroke="#4299E1" strokeWidth="1" fill="none" />
        <circle cx="10.5" cy="10" r="0.8" fill="#4299E1" />
        <circle cx="13.5" cy="10" r="0.8" fill="#4299E1" />
      </svg>
    ),
  },
];

export default function TrustedBy() {
  const logoSet = partners.map((p, i) => (
    <div
      key={`${p.name}-${i}`}
      className="flex-shrink-0 mx-4 flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 bg-white/[0.02] backdrop-blur-sm"
    >
      <div className="w-6 h-6 flex items-center justify-center">{p.icon}</div>
      <span
        className="text-base font-bold tracking-wide whitespace-nowrap"
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

    </section>
  );
}
