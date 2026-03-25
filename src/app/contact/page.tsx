"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@ypure.com",
    href: "mailto:contact@ypure.com",
  },
  {
    icon: Phone,
    title: "電話",
    value: "0800-YPURE",
    href: "tel:0800897873",
  },
  {
    icon: MessageCircle,
    title: "LINE 官方帳號",
    value: "@ypure",
    href: "#",
  },
  {
    icon: Clock,
    title: "營業時間",
    value: "週一至週五 09:00-18:00",
    href: null,
  },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", category: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full bg-[#0d0d2b] text-white border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E5B94C] transition-colors duration-300 placeholder-gray-500";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0d0d2b] via-[#1a1a3e] to-[#0a0a0a]">
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
                <div className="bg-[#1a1a2e] rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
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

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
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
                        <label className="block text-gray-400 text-sm mb-2">
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
                        <label className="block text-gray-400 text-sm mb-2">
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
                        <label className="block text-gray-400 text-sm mb-2">
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
                      className="w-full bg-[#E5B94C] text-[#0a0a0a] font-bold rounded-full py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300"
                    >
                      送出訊息
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
                        <div className="text-gray-400 text-sm">
                          {info.title}
                        </div>
                        <div className="text-white font-medium">
                          {info.value}
                        </div>
                      </div>
                    </>
                  );
                  const className = "flex items-center gap-4 bg-[#1a1a2e] rounded-2xl p-5 hover:bg-[#1f1f3a] transition-colors duration-300";
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
