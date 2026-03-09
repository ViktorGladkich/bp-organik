"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Translate from "@/components/Translate";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="w-full bg-[#050505] py-32 md:py-64 relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#cda558]/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[#cda558]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#cda558] text-xs font-bold uppercase tracking-[0.5em] mb-6 block"
          >
            <Translate
              en="Direct Access"
              ru="Прямой доступ"
              tr="Doğrudan Erişim"
            />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8vw] font-black text-white tracking-tighter leading-none italic uppercase"
          >
            <Translate
              en="REACH ELITE POTENTIAL"
              ru="ДОСТИГНИ ЭЛИТНОГО УРОВНЯ"
              tr="ELİT POTANSİYELE ULAŞIN"
            />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Links & Brand Presence */}
          <div className="lg:col-span-4 space-y-12">
            <div className="relative group">
              <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                <Translate en="HEADQUARTER" ru="ШТАБ-КВАРТИРА" tr="MERKEZ" />
              </h3>
              <p className="text-white text-2xl font-medium tracking-tight leading-snug">
                Antalya, Turkey <br />
                <Translate
                  en="Turkish-Russian Trading House"
                  ru="Турецко-российский торговый дом"
                  tr="Türk-Rus Ticaret Evi"
                />
              </p>
              <div className="w-8 h-px bg-[#cda558] mt-6 group-hover:w-full transition-all duration-700" />
            </div>

            <div className="space-y-10">
              <ContactLink
                label={<Translate en="Email" ru="Почта" tr="E-posta" />}
                value="bp.organika@gmail.com"
                href="mailto:bp.organika@gmail.com"
              />
              <ContactLink
                label={
                  <Translate en="Instagram" ru="Инстаграм" tr="Instagram" />
                }
                value="@bporganika"
                href="https://www.instagram.com/bporganika/"
              />
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-1 bg-linear-to-br from-white/10 to-transparent rounded-[2.5rem] md:rounded-[4rem]"
            >
              <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl p-8 md:p-16 rounded-[2.4rem] md:rounded-[3.9rem]">
                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 bg-[#cda558] rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(205,165,88,0.3)]">
                      <svg
                        className="w-12 h-12 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-6 italic uppercase tracking-tighter">
                      <Translate
                        en="Transmission Complete"
                        ru="Сообщение отправлено"
                        tr="İletim Tamamlandı"
                      />
                    </h3>
                    <p className="text-white/40 text-xl font-medium max-w-sm">
                      <Translate
                        en="Our specialists are reviewing your request."
                        ru="Наши специалисты скоро свяжутся с вами."
                        tr="Uzmanlarımız talebinizi inceliyor."
                      />
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                      <PremiumInput
                        label={
                          <Translate
                            en="FULL NAME"
                            ru="ИМЯ И ФАМИЛИЯ"
                            tr="AD SOYAD"
                          />
                        }
                        placeholder={
                          language === "ru"
                            ? "Александр"
                            : language === "tr"
                              ? "Metehan Yıldız"
                              : "John Doe"
                        }
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text"
                        required
                      />
                      <PremiumInput
                        label={<Translate en="EMAIL" ru="EMAIL" tr="E-POSTA" />}
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                      />
                      <PremiumInput
                        className="md:col-span-2"
                        label={
                          <Translate
                            en="PHONE NUMBER"
                            ru="НОМЕР ТЕЛЕФОНА"
                            tr="TELEFON NUMARASI"
                          />
                        }
                        placeholder="+90 XXX XXX XX XX"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] ml-2">
                        <Translate en="MESSAGE" ru="СООБЩЕНИЕ" tr="MESAJ" />
                      </label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/2 border border-white/5 rounded-3xl p-8 text-white text-lg font-medium outline-none focus:border-[#cda558]/50 focus:bg-white/5 transition-all min-h-[180px] resize-none"
                        placeholder={
                          language === "ru"
                            ? "Как мы можем помочь вам?"
                            : language === "tr"
                              ? "Size nasıl yardımcı olabiliriz?"
                              : "How can we help your journey?"
                        }
                      />
                      {formState === "error" && (
                        <p className="text-red-500 text-sm ml-2">
                          <Translate
                            en="An error occurred. Please try again or contact us directly."
                            ru="Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую."
                            tr="Bir hata oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin."
                          />
                        </p>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === "loading"}
                      className="w-full md:w-auto px-12 h-14 bg-[#cda558] hover:bg-white text-black font-bold uppercase tracking-widest rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden group shadow-[0_10px_30px_rgba(205,165,88,0.1)] hover:shadow-[0_15px_40px_rgba(205,165,88,0.2)]"
                    >
                      {formState === "loading" ? (
                        <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          <Translate
                            en="Secure Connection"
                            ru="ОТПРАВИТЬ ЗАЯВКУ"
                            tr="GÜVENLİ BAĞLANTI"
                          />
                          <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: React.ReactNode;
  value: string;
  href: string;
}) {
  return (
    <div className="group block">
      <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
        {label}
      </p>
      <a
        href={href}
        className="text-white hover:text-[#cda558] text-xl md:text-2xl font-semibold tracking-tighter transition-all flex items-center gap-4"
      >
        <span className="relative pb-1">
          {value}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cda558] group-hover:w-full transition-all duration-500" />
        </span>
      </a>
    </div>
  );
}

function PremiumInput({
  label,
  className = "",
  ...props
}: { label: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`space-y-4 w-full group ${className}`}>
      <label className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] ml-2 group-focus-within:text-[#cda558] transition-colors">
        {label}
      </label>
      <input
        {...props}
        className="w-full h-18 bg-white/2 border border-white/5 rounded-3xl px-8 text-white text-lg font-medium outline-none focus:border-[#cda558]/50 focus:bg-white/5 transition-all"
      />
    </div>
  );
}
