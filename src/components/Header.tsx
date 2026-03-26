"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const featureSubItems = [
  { href: "/features#linepay", label: "LINE Pay 支付" },
  { href: "/features#monitor", label: "即時監控" },
  { href: "/features#notification", label: "推播通知" },
  { href: "/features#coupon", label: "優惠券系統" },
];

const navLinks = [
  { href: "/about", label: "關於我們" },
  { href: "/features", label: "功能特色", hasDropdown: true },
  { href: "/business", label: "店家方案" },
  { href: "/stores", label: "服務據點" },
  { href: "/news", label: "最新消息" },
  { href: "/faq", label: "常見問題" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#E5B94C]/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/cloudmonster-logo.png"
              alt="雲管家 Cloud Monster"
              width={160}
              height={56}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 pb-1 text-sm font-medium transition-all duration-300 hover:text-[#E5B94C] ${
                        active
                          ? "text-[#E5B94C]"
                          : scrolled
                          ? "text-gray-300"
                          : "text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {active && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#E5B94C] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-48 bg-[#0a0a0a]/95 backdrop-blur rounded-xl border border-white/10 shadow-2xl p-2"
                        >
                          {featureSubItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2.5 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:bg-[#E5B94C]/10 hover:text-[#E5B94C]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-sm font-medium transition-all duration-300 hover:text-[#E5B94C] hover:drop-shadow-[0_0_6px_rgba(229,185,76,0.4)] ${
                    active
                      ? "text-[#E5B94C]"
                      : scrolled
                      ? "text-gray-300"
                      : "text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#E5B94C] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: CTA + Mobile menu button */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <motion.a
              href="https://liff.line.me/2009552592-xkDKSJ1Y"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-full bg-[#E5B94C] px-6 py-2 text-sm font-bold text-gray-900 transition-all duration-300 hover:bg-[#d4a83b] hover:shadow-lg hover:shadow-[#E5B94C]/20 sm:inline-block"
            >
              立即使用
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={`md:hidden transition-all duration-300 ${
                scrolled ? "text-gray-300" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "關閉選單" : "開啟選單"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#0a0a0a] px-4 pb-6 pt-2 shadow-lg border-t border-white/5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/5 hover:text-[#E5B94C] ${
                    active
                      ? "text-[#E5B94C] bg-[#E5B94C]/5"
                      : "text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 border-l border-white/10 pl-2">
                    {featureSubItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-[#E5B94C]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <a
            href="https://liff.line.me/2009552592-xkDKSJ1Y"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="mt-4 block rounded-full bg-[#E5B94C] px-6 py-3 text-center text-sm font-bold text-[#0a0a0a] transition-all duration-300 hover:bg-[#F0D078]"
          >
            立即使用
          </a>
        </nav>
      </div>
    </header>
  );
}
