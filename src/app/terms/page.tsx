'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
              服務條款
            </h1>
            <div className="rounded-2xl bg-white p-8 shadow-lg space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. 服務說明</h2>
                <p className="text-gray-600 leading-relaxed">
                  雲管家（Cloud Monster）為智慧自助洗衣管理系統，透過 LINE 官方帳號及 LIFF 應用程式，提供自助洗衣機台的行動支付、即時狀態查詢、洗衣完成通知等服務。使用本服務前，請詳閱以下條款。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. 使用規範</h2>
                <p className="text-gray-600 leading-relaxed">
                  使用者應依照各店家規定正確使用自助洗衣機器，包含但不限於：依照機器標示放入適當衣物量、不放入禁止清洗的物品（如皮革、含金屬配件衣物等）、使用後保持機器整潔。違反使用規範造成之損害，由使用者自行負責。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. 付款條款</h2>
                <p className="text-gray-600 leading-relaxed">
                  本系統支援 LINE Pay 行動支付。付款成功後，系統將自動啟動對應機台。若因系統異常導致付款成功但機台未啟動，請立即透過 LINE 官方帳號 @016kcwrh 或客服專線 0800-018-888 聯繫客服，我們將於確認後進行退款或重新啟動服務。退款將依 LINE Pay 退款流程處理，預計 3-7 個工作日內完成。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. 免責聲明</h2>
                <p className="text-gray-600 leading-relaxed">
                  雲管家盡力確保系統穩定運作，但不對以下情況負責：因不可抗力（停電、網路中斷、天災等）導致的服務中斷；因使用者未依規定操作造成的衣物損壞或機器故障；因第三方支付服務（LINE Pay）異常導致的交易問題。各合作店家之實體營運管理由店家自行負責。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. 智慧財產權</h2>
                <p className="text-gray-600 leading-relaxed">
                  「雲管家」、「Cloud Monster」名稱、Logo 及系統介面設計均為本公司之智慧財產，未經書面授權，不得擅自使用、複製或修改。本系統之軟體程式碼、架構設計及相關技術文件均受著作權法保護。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. 條款修改</h2>
                <p className="text-gray-600 leading-relaxed">
                  本公司保留隨時修改服務條款之權利，修改後將公告於本頁面。繼續使用本服務即視為同意修改後之條款。重大變更時，我們將透過 LINE 官方帳號發送通知。
                </p>
              </section>
              <p className="text-sm text-gray-400 pt-4 border-t border-gray-200">
                最後更新日期：2026 年 3 月
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
