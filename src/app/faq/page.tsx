"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, ThumbsUp, ThumbsDown } from "lucide-react";
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
      "支援多種行動支付方式，包含 LINE Pay、Apple Pay、街口支付等主流行動支付，以及錢包儲值付款。儲值方案享有額外優惠回饋，未來將持續擴充更多支付管道。",
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
  {
    question: "可以同時在多家店使用嗎？",
    answer:
      "可以！您的帳號可在所有合作店家使用，錢包餘額和優惠券全通用。",
  },
  {
    question: "洗衣機故障怎麼辦？",
    answer:
      "如遇機台故障，系統會自動通知店家維修。若已付款未啟動，款項會自動退回您的錢包。",
  },
  {
    question: "如何刪除帳號？",
    answer:
      "請透過 LINE 官方帳號聯繫客服，我們會在 3 個工作天內處理帳號刪除及相關資料清除。",
  },
  {
    question: "有哪些洗衣模式可以選擇？",
    answer:
      "系統會根據每台機器本身支援的通訊協議，自動偵測並列出該機台可用的洗程選項，例如標準洗、快洗、強力洗、柔洗、棉被洗、烘乾等。不同品牌與型號的機器可能提供不同的洗程組合，雲管家會即時同步機台資訊，讓您選擇最適合的模式。",
  },
  {
    question: "我的個人資料安全嗎？",
    answer:
      "所有資料均以 256-bit SSL 加密傳輸，儲存於通過安全認證的雲端資料庫，嚴格遵守個資法規範。",
  },
  {
    question: "新用戶有什麼優惠？",
    answer:
      "新用戶首次儲值享 10% 回饋金，另有新手專屬優惠券，詳情請查看 APP 內優惠頁面。",
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
  {
    question: "合約期間多長？",
    answer:
      "標準合約為一年期，到期可續約。我們也提供彈性的月租方案供評估試用。",
  },
  {
    question: "營收分潤如何計算？",
    answer:
      "依方案不同有不同的分潤機制。基礎版收取固定月費，專業版以上可洽談交易抽成模式。",
  },
  {
    question: "硬體故障誰負責維修？",
    answer:
      "合約期間內，IoT 控制器的維修與更換由雲管家負責。洗衣機本體維修則由店家自行處理或委託設備商。",
  },
  {
    question: "可以查看哪些數據報表？",
    answer:
      "提供每日/週/月營收報表、機台使用率、熱門時段分析、會員消費統計、優惠券兌換率等完整報表。",
  },
  {
    question: "多家店可以統一管理嗎？",
    answer:
      "可以！專業版以上支援多店統一管理後台，所有店家數據在同一個介面查看，方便連鎖經營。",
  },
  {
    question: "系統更新需要額外費用嗎？",
    answer:
      "不需要。合約期間所有軟體更新皆免費，包含新功能上線與安全性更新。",
  },
];

const techFaqs: FaqItem[] = [
  {
    question: "雲管家支援哪些瀏覽器？",
    answer:
      "雲管家基於 LINE LIFF 技術，支援 LINE APP 內建瀏覽器（iOS/Android）。管理後台支援 Chrome、Safari、Firefox 等主流瀏覽器。",
  },
  {
    question: "IoT 控制器如何連網？",
    answer:
      "IoT 控制器透過 Wi-Fi 連接網際網路，使用 MQTT 協議與雲端平台進行即時通訊。支援 2.4GHz Wi-Fi，建議使用穩定的寬頻網路。",
  },
  {
    question: "系統斷網時機器還能運作嗎？",
    answer:
      "投幣功能不受網路影響，可持續正常運作。網路恢復後，系統會自動同步離線期間的投幣數據。LINE Pay 支付需要網路連線。",
  },
  {
    question: "Modbus RTU 通訊支援哪些設備？",
    answer:
      "目前支援市面上主流品牌的商用洗衣機與烘衣機，透過 RS485 介面進行 Modbus RTU 通訊控制。新設備整合約需 1-2 週。",
  },
  {
    question: "資料備份機制為何？",
    answer:
      "所有數據存儲於 PostgreSQL 雲端資料庫，每日自動備份。交易資料保留至少 2 年，確保完整的營運記錄。",
  },
  {
    question: "API 整合如何申請？",
    answer:
      "企業版方案提供完整 REST API 文件。可串接您的 POS 系統、ERP 或自有 APP。申請後由技術團隊協助對接。",
  },
  {
    question: "行動支付的手續費是多少？",
    answer:
      "各支付管道手續費依照官方公告費率，LINE Pay 約 2.5%-3%、Apple Pay 及街口支付等依各平台規定。雲管家統一整合多元支付，詳細費率可於合約洽談時確認。",
  },
  {
    question: "系統更新會影響營運嗎？",
    answer:
      "系統更新採用零停機部署（Blue-Green Deployment），更新過程不影響任何店家的正常營運。",
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [votedItems, setVotedItems] = useState<Record<number, boolean>>({});

  const handleVote = (index: number) => {
    setVotedItems((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const hasVoted = votedItems[i] === true;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#E5B94C]/40 transition-colors duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-gray-900 font-medium pr-4">
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
                  <div className="px-5 pb-5">
                    <div className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      {hasVoted ? (
                        <p className="text-xs text-[#E5B94C]">
                          感謝您的回饋！
                        </p>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400">
                            這個回答有幫助嗎？
                          </span>
                          <button
                            onClick={() => handleVote(i)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-[#E5B94C]/20 transition-colors"
                          >
                            <ThumbsUp className="w-4 h-4 text-gray-500" />
                          </button>
                          <button
                            onClick={() => handleVote(i)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-[#E5B94C]/20 transition-colors"
                          >
                            <ThumbsDown className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      )}
                    </div>
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
  const [tab, setTab] = useState<"consumer" | "business" | "technical">(
    "consumer"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const currentFaqs =
    tab === "consumer"
      ? consumerFaqs
      : tab === "business"
        ? businessFaqs
        : techFaqs;

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return currentFaqs;
    const term = searchTerm.toLowerCase();
    return currentFaqs.filter(
      (item) =>
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term)
    );
  }, [currentFaqs, searchTerm]);

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
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜尋常見問題..."
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 w-full focus:outline-none focus:border-[#E5B94C] transition-colors duration-300 placeholder-gray-400"
              />
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
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
              <button
                onClick={() => setTab("technical")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  tab === "technical"
                    ? "bg-[#E5B94C] text-[#0a0a0a]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                技術問題
              </button>
            </div>

            {/* FAQ Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab + searchTerm}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {filteredFaqs.length > 0 ? (
                  <FaqAccordion items={filteredFaqs} />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      找不到符合「{searchTerm}」的問題
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      請嘗試其他關鍵字，或切換分類查看
                    </p>
                  </div>
                )}
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
