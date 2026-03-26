"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const testimonials = [
  {
    name: "陳老闆",
    store: "悠洗自助洗衣",
    city: "嘉義",
    months: 12,
    quote:
      "導入雲管家後，不用每天跑店裡收錢對帳，手機就能掌握所有營收狀況，真的省下非常多時間。",
  },
  {
    name: "林老闆",
    store: "吼你洗自助洗衣",
    city: "苗栗",
    months: 10,
    quote:
      "顧客反應很好，用 LINE Pay 付款比投幣方便多了，回頭客明顯增加。儲值優惠也讓客單價提升不少。",
  },
  {
    name: "張老闆",
    store: "熊愛洗自助洗衣",
    city: "台中",
    months: 8,
    quote:
      "最滿意的是即時監控功能，機器故障馬上收到通知，維修效率大幅提升，客訴也減少了。",
  },
  {
    name: "王老闆",
    store: "熊愛洗自助洗衣 二店",
    city: "台中",
    months: 6,
    quote:
      "多店管理功能超實用，兩家店的營收、機台狀態一個後台就能看完，擴店完全沒負擔。",
  },
  {
    name: "黃老闆",
    store: "上好洗自助洗衣",
    city: "高雄",
    months: 5,
    quote:
      "以前最怕半夜機器故障沒人處理，現在系統會自動推播告警，隔天一早就能安排維修，客訴幾乎歸零。",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            店家真實回饋
          </h2>
          <div className="w-16 h-1 bg-[#E5B94C] mx-auto rounded-full" />
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-x-visible md:snap-none md:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + t.store}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-shrink-0 w-[280px] md:w-auto snap-center bg-white rounded-2xl p-8 border-l-4 border-[#E5B94C] shadow-lg flex flex-col"
            >
              {/* Star rating */}
              <div className="text-[#E5B94C] text-lg mb-3 tracking-wider">
                ★★★★★
              </div>

              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-[#E5B94C] mb-4 flex-shrink-0"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <text x="0" y="34" fontSize="40" fontFamily="serif">
                  {"\u300C"}
                </text>
              </svg>

              {/* Quote text */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E5B94C] flex items-center justify-center text-[#0a0a0a] font-bold text-lg flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-gray-900 font-bold">{t.name}</div>
                  <div className="text-[#E5B94C] text-sm">
                    {t.store} - {t.city}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">
                    使用雲管家 {t.months} 個月
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
