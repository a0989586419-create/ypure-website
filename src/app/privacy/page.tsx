'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
              隱私權政策
            </h1>
            <div className="rounded-2xl bg-white p-8 shadow-lg space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. 資料蒐集</h2>
                <p className="text-gray-600 leading-relaxed">
                  雲管家（Cloud Monster）透過 LINE 官方帳號及 LIFF 應用程式提供服務。當您使用本服務時，我們可能蒐集以下資訊：LINE 帳號基本資料（顯示名稱、頭像）、交易紀錄、機器使用紀錄、及您主動提供的聯絡資訊。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. 資料用途</h2>
                <p className="text-gray-600 leading-relaxed">
                  您的資料僅用於：提供及改善洗衣服務體驗、處理付款交易、發送洗衣完成通知、優惠活動推播、以及系統維護與安全防護。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. 資料保護</h2>
                <p className="text-gray-600 leading-relaxed">
                  我們採用 256 位元 SSL 加密傳輸、LINE Pay 認證安全付款機制，並將資料儲存於受保護的雲端伺服器。所有交易資料經過加密處理，確保您的個人資訊安全。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. 第三方服務</h2>
                <p className="text-gray-600 leading-relaxed">
                  本服務使用 LINE Pay 進行付款處理，相關付款資料由 LINE Pay 依其隱私政策處理。我們不會將您的個人資料出售或提供給其他無關第三方。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. 您的權利</h2>
                <p className="text-gray-600 leading-relaxed">
                  您有權要求查閱、更正或刪除您的個人資料。如需行使上述權利，請透過客服專線 0800-018-888 或 LINE 官方帳號 @016kcwrh 與我們聯繫。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. 政策更新</h2>
                <p className="text-gray-600 leading-relaxed">
                  本隱私權政策可能不定期更新，更新後將公告於本頁面。繼續使用本服務即表示您同意更新後的政策內容。
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
