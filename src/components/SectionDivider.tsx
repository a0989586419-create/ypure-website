'use client';
import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'gradient' }: { variant?: 'gradient' | 'gold' | 'wave' }) {
  if (variant === 'gold') {
    return (
      <div className="relative py-4">
        <motion.div
          className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#E5B94C] to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    );
  }
  // gradient variant
  return (
    <div className="h-16 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />
  );
}
