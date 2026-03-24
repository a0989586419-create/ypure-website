import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "關於我們" },
  { href: "/features", label: "功能特色" },
  { href: "/business", label: "店家方案" },
  { href: "/stores", label: "服務據點" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a3e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/">
              <img src="/ypure-logo.png" alt="雲管家" className="mb-4 h-10" />
            </Link>
            <p className="mb-2 text-lg font-semibold text-gray-100">
              智慧自助洗衣管理系統
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              讓洗衣更簡單、經營更輕鬆
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">快速連結</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">聯絡資訊</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@ypure.com"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>contact@ypure.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0800-YPURE"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>0800-YPURE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">關注我們</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>LINE 官方帳號</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-[#E5B94C]"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 雲管家 YPURE Cloud Butler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
