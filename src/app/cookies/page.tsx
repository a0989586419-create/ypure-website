'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiesPage() {
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
              Cookie 政策
            </h1>
            <div className="rounded-2xl bg-white p-8 shadow-lg space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. 什麼是 Cookie</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookie 是網站儲存在您瀏覽器中的小型文字檔案，用於記錄您的偏好設定與使用行為，以提供更好的瀏覽體驗。Cookie 不會對您的裝置造成損害，也不包含病毒或惡意程式。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. 我們使用的 Cookie 類型</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">必要性 Cookie</h3>
                    <p className="text-gray-600 leading-relaxed">
                      這些 Cookie 是網站正常運作所必需的，包含使用者登入狀態維持、安全驗證等功能。停用這些 Cookie 可能導致部分功能無法使用。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">分析 Cookie</h3>
                    <p className="text-gray-600 leading-relaxed">
                      我們使用分析工具（如 Google Analytics）來了解訪客如何使用本網站，包含頁面瀏覽量、停留時間、訪客來源等匿名統計資料。這些資訊有助於我們改善網站內容與使用體驗。
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. LINE LIFF 相關技術</h2>
                <p className="text-gray-600 leading-relaxed">
                  當您透過 LINE 使用雲管家服務時，LINE LIFF（LINE Front-end Framework）會使用其自身的技術來維持登入狀態與使用者驗證。這些資料由 LINE 平台管理，詳情請參閱 LINE 的隱私權政策。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. 如何管理 Cookie</h2>
                <p className="text-gray-600 leading-relaxed">
                  您可以透過瀏覽器設定來管理或刪除 Cookie。大多數瀏覽器允許您拒絕所有 Cookie，或在接收 Cookie 時收到通知。請注意，停用 Cookie 可能會影響本網站的部分功能。各瀏覽器的 Cookie 管理方式如下：Chrome 設定 &gt; 隱私權和安全性 &gt; Cookie；Safari 偏好設定 &gt; 隱私權；Firefox 設定 &gt; 隱私權與安全性。
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. 聯絡方式</h2>
                <p className="text-gray-600 leading-relaxed">
                  如對本 Cookie 政策有任何疑問，請透過以下方式聯繫我們：客服專線 0800-018-888、Email: contact@cloudmonster.com.tw、LINE 官方帳號 @016kcwrh。
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
