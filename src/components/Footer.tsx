"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Camera, Send } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "關於我們" },
  { href: "/features", label: "功能特色" },
  { href: "/business", label: "店家方案" },
  { href: "/stores", label: "服務據點" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="bg-[#0a0a0a] text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Description */}
          <motion.div variants={itemVariants}>
            <Link href="/">
              <Image
                src="/cloudmonster-logo.png"
                alt="雲管家 Cloud Monster"
                width={160}
                height={56}
                className="mb-4 h-14 w-auto"
              />
            </Link>
            <p className="mb-2 text-lg font-semibold text-gray-100">
              智慧自助洗衣管理系統
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              讓洗衣更簡單、經營更輕鬆
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-base font-bold text-white">快速連結</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-base font-bold text-white">聯絡資訊</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@cloudmonster.com.tw"
                  className="group relative flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="relative">
                    contact@cloudmonster.com.tw
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0800018888"
                  className="group relative flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="relative">
                    0800-018-888
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social + Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-base font-bold text-white">關注我們</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://line.me/R/ti/p/@016kcwrh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span className="relative">
                    LINE 官方帳號
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61574187498498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span className="relative">
                    Facebook
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cloudmonster.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <Camera className="h-4 w-4 flex-shrink-0" />
                  <span className="relative">
                    Instagram
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold text-gray-200">
                訂閱最新消息
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="輸入 Email"
                  className="flex-1 min-w-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#E5B94C]/50"
                  required
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-lg bg-[#E5B94C] px-3 py-2 text-sm font-bold text-[#0a0a0a] transition-all duration-300 hover:bg-[#d4a83b]"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs text-green-400">
                  訂閱成功！感謝您的關注。
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-400">
              &copy; 2025-2026 雲管家 Cloud Monster. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link
                href="/privacy"
                className="relative transition-colors duration-300 hover:text-[#E5B94C] group"
              >
                隱私權政策
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/terms"
                className="relative transition-colors duration-300 hover:text-[#E5B94C] group"
              >
                服務條款
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/cookies"
                className="relative transition-colors duration-300 hover:text-[#E5B94C] group"
              >
                Cookie 政策
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E5B94C] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
