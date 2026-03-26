"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
  ExternalLink,
  Camera,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@cloudmonster.com.tw",
    href: "mailto:contact@cloudmonster.com.tw",
  },
  {
    icon: Phone,
    title: "電話",
    value: "0800-018-888",
    href: "tel:0800018888",
  },
  {
    icon: MessageCircle,
    title: "LINE 官方帳號",
    value: "@016kcwrh",
    href: "https://line.me/R/ti/p/@016kcwrh",
  },
  {
    icon: Clock,
    title: "營業時間",
    value: "週一至週五 09:00-18:00",
    href: null,
  },
];

const socialLinks = [
  { icon: MessageCircle, label: "LINE 官方帳號", href: "https://line.me/R/ti/p/@016kcwrh" },
  { icon: ExternalLink, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574187498498" },
  { icon: Camera, label: "Instagram", href: "https://www.instagram.com/cloudmonster.tw/" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Simulate API call (replace with real endpoint when available)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("訊息傳送失敗，請稍後再試或透過其他方式聯繫我們。");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  const inputClass =
    "w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E5B94C] transition-colors duration-300 placeholder-gray-400";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                聯絡我們
              </h1>
              <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
              <p className="text-gray-400 text-lg">
                有任何問題或合作需求，歡迎與我們聯繫
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-[#0a0a0a] px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  {/* Response Time Badge */}
                  <div className="flex items-center gap-3 bg-[#E5B94C]/10 border border-[#E5B94C]/30 rounded-xl p-4 mb-6">
                    <Clock className="w-5 h-5 text-[#E5B94C] shrink-0" />
                    <span className="text-[#E5B94C] text-sm flex-1">
                      我們承諾 24 小時內回覆您的訊息
                    </span>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    傳送訊息
                  </h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      <span className="text-green-400">
                        訊息已送出！我們會儘快回覆您。
                      </span>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6"
                    >
                      <span className="text-red-400">{error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-600 text-sm mb-2">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="您的姓名"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-600 text-sm mb-2">
                          電話
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0912-345-678"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm mb-2">
                          類別 *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        >
                          <option value="">請選擇</option>
                          <option value="consumer">消費者問題</option>
                          <option value="business">店家合作洽詢</option>
                          <option value="support">技術支援</option>
                          <option value="other">其他</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        訊息內容 *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="請輸入您的訊息..."
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#E5B94C] text-[#0a0a0a] font-bold rounded-full py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "傳送中..." : "送出訊息"}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2 space-y-4"
              >
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const cardContent = (
                    <>
                      <div className="w-12 h-12 rounded-full bg-[#E5B94C]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#E5B94C]" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-sm">
                          {info.title}
                        </div>
                        <div className="text-gray-900 font-medium">
                          {info.value}
                        </div>
                      </div>
                    </>
                  );
                  const className =
                    "flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300";
                  return info.href ? (
                    <a
                      key={info.title}
                      href={info.href}
                      className={className}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div key={info.title} className={className}>
                      {cardContent}
                    </div>
                  );
                })}

                {/* Social Media Section */}
                <div className="pt-4">
                  <h3 className="text-sm font-bold text-gray-400 mb-3">
                    關注我們
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className="bg-white/5 rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-gray-300 hover:bg-[#E5B94C]/10 hover:text-[#E5B94C] transition-colors duration-300"
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-[#111] px-4">
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                訂閱最新消息
              </h2>
              <p className="text-gray-400 mb-8">
                第一時間獲取系統更新、新店開幕與優惠資訊
              </p>

              {newsletterSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-[#E5B94C]"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>感謝訂閱！</span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    placeholder="輸入您的 Email"
                    className="bg-[#0a0a0a] border border-gray-700 rounded-l-xl px-4 py-3 flex-1 text-white focus:outline-none focus:border-[#E5B94C] transition-colors duration-300 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-[#E5B94C] text-[#0a0a0a] font-bold rounded-r-xl px-6 py-3 hover:bg-[#F0D078] transition-colors duration-300"
                  >
                    訂閱
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
