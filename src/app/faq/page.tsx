"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const consumerFaqs: FaqItem[] = [
  {
    question: "如何開始使用雲管家？",
    answer:
      "只要有 LINE 帳號即可！掃描店內 QR Code 或搜尋雲管家 LINE 官方帳號，即可開始使用。無需下載額外 APP。",
  },
  {
    question: "支援哪些付款方式？",
    answer:
      "目前支援 LINE Pay 行動支付及錢包儲值兩種方式。儲值方案享有額外優惠回饋。",
  },
  {
    question: "洗衣完成會通知我嗎？",
    answer:
      "是的！洗衣完成後，系統會透過 LINE 推播通知提醒您取衣，不用在現場等待。",
  },
  {
    question: "可以查看機台是否有空嗎？",
    answer:
      "可以！進入 APP 後即可查看每家店的機台即時狀態，包含可用、使用中、故障等資訊。",
  },
  {
    question: "儲值的錢可以退嗎？",
    answer:
      "儲值金額可於合理期間內申請退款，請聯繫客服處理。",
  },
  {
    question: "優惠券怎麼使用？",
    answer:
      "在付款頁面選擇可用的優惠券即可自動折抵，系統會顯示最優惠的組合。",
  },
];

const businessFaqs: FaqItem[] = [
  {
    question: "加入雲管家需要什麼條件？",
    answer:
      "只要您經營自助洗衣店，即可申請加入。我們會派專人評估並協助安裝。",
  },
  {
    question: "安裝需要多長時間？",
    answer:
      "一般情況下，硬體安裝約需 1-2 個工作天，系統設定當天即可完成。",
  },
  {
    question: "現有的投幣器可以保留嗎？",
    answer:
      "可以！雲管家系統可與現有投幣器並行運作，顧客可選擇投幣或行動支付。",
  },
  {
    question: "費用如何計算？",
    answer:
      "我們提供多種合作方案，詳情請至店家方案頁面查看或聯絡我們取得報價。",
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E5B94C]/20 transition-colors duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-white font-medium pr-4">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <Plus className="w-5 h-5 text-[#E5B94C]" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-gray-400 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqPage() {
  const [tab, setTab] = useState<"consumer" | "business">("consumer");

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
                常見問題
              </h1>
              <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
              <p className="text-gray-400 text-lg">
                快速找到您需要的答案
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-[#0a0a0a] px-4">
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-12">
              <button
                onClick={() => setTab("consumer")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  tab === "consumer"
                    ? "bg-[#E5B94C] text-[#0a0a0a]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                消費者常見問題
              </button>
              <button
                onClick={() => setTab("business")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  tab === "business"
                    ? "bg-[#E5B94C] text-[#0a0a0a]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                店家常見問題
              </button>
            </div>

            {/* FAQ Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <FaqAccordion
                  items={tab === "consumer" ? consumerFaqs : businessFaqs}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Still need help */}
        <section className="py-20 bg-[#111] px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              找不到答案？
            </h2>
            <p className="text-gray-400 mb-8">
              歡迎直接聯繫我們，我們很樂意為您解答
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#E5B94C] text-[#0a0a0a] font-bold rounded-full px-8 py-4 hover:bg-[#F0D078] transition-colors duration-300"
            >
              聯絡我們
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
