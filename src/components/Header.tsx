"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import Translate from "./Translate";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuItems = [
    {
      href: "#how-it-works",
      labelEn: "Science",
      labelRu: "Наука",
      labelTr: "Bilim",
    },
    {
      href: "#products",
      labelEn: "Collection",
      labelRu: "Коллекция",
      labelTr: "Koleksiyon",
    },
    {
      href: "#advantages",
      labelEn: "Advantages",
      labelRu: "Преимущества",
      labelTr: "Avantajlar",
    },
    {
      href: "#certificates",
      labelEn: "Quality",
      labelRu: "Качество",
      labelTr: "Kalite",
    },
    {
      href: "#about",
      labelEn: "About Us",
      labelRu: "О нас",
      labelTr: "Hakkımızda",
    },
    {
      href: "#contact",
      labelEn: "Contact",
      labelRu: "Контакты",
      labelTr: "İletişim",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-100 flex justify-between items-center bg-[#050505]/40 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 transition-all duration-500">
        <Link
          href="/"
          className="relative w-20 h-10 md:w-32 md:h-14 shrink-0 transition-transform hover:scale-105 active:scale-95"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="BP Organik"
            fill
            className="object-contain object-left"
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <LanguageSwitcher />

          {/* Magnificent Burger Button */}
          <label className="hamburger z-110">
            <input
              type="checkbox"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </header>

      {/* Magnificent Full Screen Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-90 bg-[#050505] flex items-center justify-center pt-24"
          >
            {/* Background animated elements */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.05 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute w-[80vw] h-[80vw] bg-[#cda558] rounded-full blur-[180px] pointer-events-none"
            />

            <nav className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                <ul className="space-y-1 md:space-y-4">
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.1,
                        duration: 0.8,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="group overflow-hidden pr-20"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-4xl md:text-6xl font-semibold text-white/90 hover:text-[#cda558] transition-all tracking-tighter uppercase italic leading-tight"
                      >
                        <span className="inline-block transition-transform group-hover:translate-x-4">
                          <Translate
                            en={item.labelEn}
                            ru={item.labelRu}
                            tr={item.labelTr}
                          />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden lg:block border-l border-white/10 pl-20"
                >
                  <div className="mb-12">
                    <p className="text-[#cda558] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                      Our Mission
                    </p>
                    <p className="text-white/40 text-2xl font-medium tracking-tight leading-relaxed max-w-sm">
                      <Translate
                        en="Pure. Biological. Performance for the modern athlete."
                        ru="Чистота. Биология. Результат для современного атлета."
                        tr="Saf. Biyolojik. Modern sporcu için performans."
                      />
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#cda558] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                      Follow Us
                    </p>
                    <div className="flex gap-8">
                      <SocialLink label="Instagram" />
                      <SocialLink label="WhatsApp" />
                      <SocialLink label="Telegram" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </nav>

            {/* Bottom Credit */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              className="absolute bottom-10 left-12 text-[10px] font-bold uppercase tracking-widest text-white"
            >
              © 2026 BP Agriculture Organic
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
    >
      {label}
    </a>
  );
}
