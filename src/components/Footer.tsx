"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Translate from "./Translate";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-4xl font-semibold mb-8 tracking-tighter italic">
              BP ORGANIK<span className="text-[#cda558]">.</span>
            </h2>
            <p className="text-white/50 text-xl font-medium max-w-sm leading-relaxed mb-10 italic">
              <Translate
                en="Dedicated to the athletic pursuit of natural excellence."
                ru="Помогаем атлетам достигать природных вершин."
                tr="Doğal mükemmelliğin atletik arayışına adanmıştır."
              />
            </p>
            <div className="flex gap-6">
              <SocialLink href="#" label="Instagram" />
              <SocialLink href="#" label="Telegram" />
              <SocialLink href="#" label="WhatsApp" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#cda558] text-xs font-bold uppercase tracking-[0.3em] mb-10">
              <Translate en="Navigation" ru="Навигация" tr="Navigasyon" />
            </h4>
            <ul className="space-y-4">
              <FooterLink href="#products">
                <Translate en="The Collection" ru="Коллекция" tr="Koleksiyon" />
              </FooterLink>
              <FooterLink href="#about">
                <Translate en="Company" ru="О компании" tr="Şirket" />
              </FooterLink>
              <FooterLink href="#advantages">
                <Translate en="Advantages" ru="Преимущества" tr="Avantajlar" />
              </FooterLink>
              <FooterLink href="#certificates">
                <Translate
                  en="Quality Control"
                  ru="Контроль качества"
                  tr="Kalite Kontrol"
                />
              </FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#cda558] text-xs font-bold uppercase tracking-[0.3em] mb-10">
              <Translate
                en="Direct Connect"
                ru="Прямая связь"
                tr="Doğrudan Bağlantı"
              />
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">
                  EMAIL
                </p>
                <a
                  href="mailto:info@bporganik.com.tr"
                  className="text-white/80 hover:text-[#cda558] transition-colors font-semibold tracking-tight"
                >
                  info@bporganik.com.tr
                </a>
              </div>
              <div>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">
                  PHONE
                </p>
                <a
                  href="tel:+905365914820"
                  className="text-white/80 hover:text-[#cda558] transition-colors font-semibold tracking-tight"
                >
                  +90 536 591 48 20
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Background Text */}
        <div className="relative mb-20 pointer-events-none select-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[13vw] font-black text-[#cda558] leading-none tracking-tighter text-center uppercase whitespace-nowrap"
          >
            BP ORGANIK
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8 text-center md:text-left">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em]">
            © {currentYear} BP Agriculture Organic.
            <Translate
              en=" All Rights Reserved."
              ru=" Все права защищены."
              tr=" Tüm hakları saklıdır."
            />
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#cda558] shadow-[0_0_10px_#cda558]" />
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
              <Translate en="Website by" ru="Сайт разработан" tr="Web sitesi" />{" "}
              <a
                href="https://invertadigital.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#cda558] transition-colors"
              >
                INVERTA DIGITAL
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-white/30 hover:text-[#cda558] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px] block"
    >
      {label}
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/60 hover:text-white transition-colors text-lg font-medium tracking-tight group flex items-center gap-3"
      >
        <div className="w-0 h-[2px] bg-[#cda558] group-hover:w-4 transition-all duration-300" />
        {children}
      </Link>
    </li>
  );
}
