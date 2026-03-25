"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsItems = [
  {
    date: "2025-03-15",
    category: "系統更新",
    title: "雲管家 v2.0 正式發布",
    content:
      "全新改版的管理後台上線，新增多店統一管理、進階營收報表等功能。支援手機版後台操作。",
  },
  {
    date: "2025-02-20",
    category: "新店開幕",
    title: "熊愛洗自助洗衣正式加入",
    content:
      "台中西屯區熊愛洗自助洗衣成為第四家合作夥伴，歡迎附近居民體驗智慧洗衣服務。",
  },
  {
    date: "2025-01-10",
    category: "優惠活動",
    title: "新春儲值回饋 20% 活動",
    content:
      "即日起至 2/28，新用戶首次儲值享 20% 回饋金。舊用戶儲值滿 500 送 50 回饋金。",
  },
  {
    date: "2024-12-01",
    category: "系統更新",
    title: "LINE 推播通知功能上線",
    content:
      "洗衣完成後自動透過 LINE 推播通知，不用在店裡等待，大幅提升使用體驗。",
  },
  {
    date: "2024-10-15",
    category: "合作消息",
    title: "與 LINE Pay 正式合作",
    content:
      "雲管家正式通過 LINE Pay 商家認證，消費者可使用 LINE Pay 輕鬆付款。",
  },
];

const categories = ["全部", "系統更新", "新店開幕", "優惠活動", "合作消息"];

const categoryColors: Record<string, string> = {
  系統更新: "bg-blue-100 text-blue-700",
  新店開幕: "bg-green-100 text-green-700",
  優惠活動: "bg-orange-100 text-orange-700",
  合作消息: "bg-purple-100 text-purple-700",
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredNews =
    activeCategory === "全部"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold sm:text-5xl"
            >
              最新消息
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 h-1 rounded-full bg-[#E5B94C]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-gray-400"
            >
              掌握雲管家最新動態與活動資訊
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 pb-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#E5B94C] text-[#0a0a0a]"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {filteredNews.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#E5B94C]/30 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#E5B94C] px-3 py-1.5 text-xs font-bold text-[#0a0a0a]">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.date}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              categoryColors[item.category] ||
                              "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            <Tag className="h-3 w-3" />
                            {item.category}
                          </span>
                        </div>
                        <h2 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-[#E5B94C] transition-colors duration-300">
                          {item.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {item.content}
                        </p>
                        <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#E5B94C] opacity-0 transition-all duration-300 group-hover:opacity-100">
                          閱讀更多
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}

                {filteredNews.length === 0 && (
                  <div className="py-16 text-center text-gray-500">
                    目前沒有此分類的消息
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
