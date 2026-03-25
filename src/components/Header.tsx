"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "關於我們" },
  { href: "/features", label: "功能特色" },
  { href: "/business", label: "店家方案" },
  { href: "/stores", label: "服務據點" },
  { href: "/news", label: "最新消息" },
  { href: "/faq", label: "常見問題" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/ypure-logo.png" alt="雲管家" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#E5B94C] ${
                  scrolled ? "text-gray-300" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + Mobile menu button */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <a
              href="https://liff.line.me/2009552592-xkDKSJ1Y"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#E5B94C] px-6 py-2 text-sm font-bold text-gray-900 transition-all duration-300 hover:bg-[#d4a83b] sm:inline-block"
            >
              立即使用
            </a>

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
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#0a0a0a] px-4 pb-6 pt-2 shadow-lg border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-[#E5B94C]"
            >
              {link.label}
            </Link>
          ))}
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
