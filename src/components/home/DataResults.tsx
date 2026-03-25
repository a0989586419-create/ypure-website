"use client";

import { useRef, useEffect } from "react";
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

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useTransform(springValue, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <motion.span className="text-4xl md:text-5xl font-bold text-[#E5B94C]">
      {display}
    </motion.span>
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

        {/* Results grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((result, i) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative bg-[#1a1a2e] rounded-2xl p-8 text-center border border-white/5 hover:border-[#E5B94C]/20 transition-all duration-300"
              >
                {/* Icon in top-right corner */}
                <div className="absolute top-4 right-4">
                  <Icon className="w-5 h-5 text-white/20" />
                </div>

                {/* Animated number */}
                <div className="mb-3">
                  <AnimatedCounter
                    value={result.value}
                    prefix={result.prefix}
                    suffix={result.suffix}
                    inView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm md:text-base">{result.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
