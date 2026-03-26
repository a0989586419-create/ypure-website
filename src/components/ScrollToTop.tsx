"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isBusinessPage = pathname === "/business";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            bottom: isBusinessPage ? 96 : 24,
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            opacity: { duration: 0.3, ease: "easeOut" },
            scale: { duration: 0.3, ease: "easeOut" },
            y: { duration: 0.3, ease: "easeOut" },
            bottom: { duration: 0.4, ease: "easeInOut" },
          }}
          onClick={scrollToTop}
          className="fixed right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B94C] shadow-lg transition-transform duration-200 hover:scale-110"
          style={{ bottom: isBusinessPage ? 96 : 24 }}
          aria-label="回到頂部"
        >
          <ArrowUp className="h-5 w-5 text-[#0a0a0a]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
