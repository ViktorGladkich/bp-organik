"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "ru", label: "RU", flag: "🇷🇺", name: "Русский" },
  { code: "tr", label: "TR", flag: "🇹🇷", name: "Türkçe" },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative ml-4 md:ml-8 font-sans z-50 flex items-center h-full"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] px-3 py-1.5 md:py-2 rounded-full border border-white/10 transition-all shadow-md shadow-black/50 focus:outline-none"
      >
        <span className="text-sm md:text-xl leading-none">
          {activeLang.flag}
        </span>
        <span className="text-[#cda558] font-bold text-xs md:text-sm tracking-wide">
          {activeLang.label}
        </span>
        <svg
          className={`w-3 h-3 text-[#cda558] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden min-w-[140px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#222] transition-colors ${
                  language === lang.code ? "bg-[#1a1a1a]" : ""
                }`}
              >
                <span className="text-lg leading-none">{lang.flag}</span>
                <span className="text-[#cda558] font-bold text-sm">
                  {lang.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
