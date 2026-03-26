"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { TrendingUp, ShieldAlert, Users, Clock, type LucideIcon } from "lucide-react";

interface Result {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  icon: LucideIcon;
}

const results: Result[] = [
  { value: 40, suffix: "%", prefix: "+", label: "平均營收提升", icon: TrendingUp },
  { value: 60, suffix: "%", prefix: "-", label: "客訴率降低", icon: ShieldAlert },
  { value: 35, suffix: "%", prefix: "+", label: "回頭率增加", icon: Users },
  { value: 20, suffix: "hr", prefix: "-", label: "每月省下時間", icon: Clock },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
  onComplete,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
  onComplete: () => void;
}) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useTransform(springValue, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
      // Trigger completion callback after spring settles
      const timeout = setTimeout(onComplete, 1200);
      return () => clearTimeout(timeout);
    }
  }, [inView, value, motionValue, onComplete]);

  return (
    <motion.span className="text-4xl md:text-5xl font-bold text-[#E5B94C]">
      {display}
    </motion.span>
  );
}

function ResultCard({ result, inView }: { result: Result; inView: boolean }) {
  const Icon = result.icon;
  const [counted, setCounted] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="relative bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg hover:border-[#E5B94C]/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Icon with hover rotation */}
      <motion.div
        className="absolute top-4 right-4"
        whileHover={{ rotate: 20, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-5 h-5 text-gray-300" />
      </motion.div>

      {/* Animated number with scale bounce on completion */}
      <motion.div
        className="mb-3"
        animate={counted ? { scale: [1, 1.15, 1] } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <AnimatedCounter
          value={result.value}
          prefix={result.prefix}
          suffix={result.suffix}
          inView={inView}
          onComplete={() => setCounted(true)}
        />
      </motion.div>

      {/* Label */}
      <p className="text-gray-600 text-sm md:text-base">{result.label}</p>
    </motion.div>
  );
}

export default function DataResults() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            合作店家實際成效
          </motion.h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            導入雲管家系統後，合作店家的實際經營數據
          </p>
        </div>

        {/* Results grid with stagger */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {results.map((result) => (
            <ResultCard key={result.label} result={result} inView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
