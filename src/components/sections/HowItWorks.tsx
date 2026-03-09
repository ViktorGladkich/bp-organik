"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Translate from "@/components/Translate";

const STEPS = [
  {
    id: "01",
    title_en: "Phase I: Dose",
    title_ru: "Фаза I: Прием",
    title_tr: "Faz I: Doz",
    desc_en:
      "Start your daily peak optimization with a single premium dose. Clean and ethical.",
    desc_ru:
      "Начните ежедневную оптимизацию с одной премиальной дозы. Чисто и этично.",
    desc_tr:
      "Günlük zirve optimizasyonunuza tek bir premium dozla başlayın. Saf ve etik.",
    image: "/how-it-works/step1_v2.png",
  },
  {
    id: "02",
    title_en: "Phase II: Absorption",
    title_ru: "Фаза II: Усвоение",
    title_tr: "Faz II: Emilim",
    desc_en:
      "Bio-active ingredients bypass digestional barriers for immediate cellular repair.",
    desc_ru:
      "Биоактивные ингредиенты обходят барьеры пищеварения для мгновенного восстановления клеток.",
    desc_tr:
      "Biyo-aktif bileşenler, anında hücresel onarım için sindirim engellerini aşar.",
    image: "/how-it-works/step2_v2.png",
  },
  {
    id: "03",
    title_en: "Phase III: Performance",
    title_ru: "Фаза III: Результат",
    title_tr: "Faz III: Performans",
    desc_en:
      "Experience natural resilience and elite performance. Your routine is simple.",
    desc_ru:
      "Испытайте природную выносливость и элитные результаты. Ваш режим прост.",
    desc_tr:
      "Doğal dayanıklılığı ve elit performansı deneyimleyin. Rutininiz çok basit.",
    image: "/how-it-works/step3_v2.png",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative w-full bg-[#050505] min-h-[calc(var(--vh,1vh)*400)] border-b border-white/5"
    >
      <div className="sticky top-0 h-[calc(var(--vh,1vh)*100)] w-full flex items-center overflow-hidden px-6 md:px-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side: Reveal on Scroll Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-[70px] text-white font-medium tracking-tight leading-[1.1] mb-8">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="block"
                >
                  <Translate
                    en="Elite performance"
                    ru="Элитная работа"
                    tr="Elit performans"
                  />
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="block text-white/40 italic"
                >
                  <Translate
                    en="starts with us."
                    ru="начинается с нас."
                    tr="bizimle başlar."
                  />
                </motion.span>
              </div>
            </h2>
            <div className="hidden lg:block w-24 h-px bg-[#cda558]/30 mb-8" />
            <p className="text-white/50 text-lg max-w-md hidden lg:block leading-relaxed">
              <Translate
                en="We removed the unnecessary so you can focus on pure result. No fluff, just peak state."
                ru="Мы убрали все лишнее, чтобы вы могли сосредоточиться на результате. Только пиковая форма."
                tr="Gereksiz her şeyi çıkardık, böylece sonuca odaklanabilirsiniz. Sadece zirve performans."
              />
            </p>
          </div>

          {/* Right Side: Stacked Card Deck */}
          <div className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center">
            {STEPS.map((step, index) => (
              <StackedImage
                key={step.id}
                step={step}
                index={index}
                total={STEPS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackedImage({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof STEPS)[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  // Responsive check
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  // y animation:
  // Desktop: index*30 -> 0 -> 0 -> -120% (fly away)
  // Mobile: 100vh -> 0 -> 0 (stay and be covered)
  const y = useTransform(
    progress,
    isMobile ? [start - 0.25, start] : [0, start, end - 0.05, end],
    isMobile ? ["100%", "0px"] : [`${index * 30}px`, "0px", "0px", "-120%"],
  );

  // x: Move to 0 only on desktop
  const x = useTransform(
    progress,
    [0, start],
    isMobile ? ["0px", "0px"] : [`${index * 30}px`, "0px"],
  );

  const scale = useTransform(
    progress,
    isMobile ? [start - 0.25, start, start + 0.25] : [0, start],
    isMobile ? [0.9, 1, 0.95] : [1 - index * 0.05, 1],
  );

  // Opacity: fade in and out for mobile/desktop
  const opacity = useTransform(
    progress,
    isMobile ? [start - 0.25, start] : [end - 0.05, end],
    isMobile ? [0, 1] : [1, 0],
  );

  // zIndex: Inverted for desktop (0 on top), Normal for mobile (last on top)
  const z = isMobile ? 30 + index : 30 - index;

  // Dimming for previous cards on mobile
  const dimOpacity = useTransform(
    progress,
    [(index + 1) / total - 0.1, (index + 1) / total],
    [0, 0.6],
  );

  // Content opacity
  const contentOpacity = useTransform(
    progress,
    isMobile ? [start - 0.15, start, 1] : [start - 0.1, start, end - 0.1, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{
        y,
        x,
        scale,
        opacity,
        zIndex: z,
      }}
      className="absolute w-full max-w-[85vw] md:max-w-[380px] aspect-4/5 mx-auto bg-[#111] rounded-3xl md:rounded-4xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-white/10 mt-8 md:mt-0"
    >
      <Image
        src={step.image}
        alt={step.title_en}
        fill
        sizes="(max-width: 1024px) 90vw, 420px"
        className="object-cover"
        priority={index === 0}
      />

      {/* Dim overlay for covered cards (Mobile only) */}
      {isMobile && index < total - 1 && (
        <motion.div
          style={{
            opacity: dimOpacity,
          }}
          className="absolute inset-0 bg-black z-20 pointer-events-none"
        />
      )}

      {/* Overlay: Only clear when it's the active card */}
      <motion.div
        style={{
          opacity: contentOpacity,
        }}
        className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10 z-30"
      >
        <div className="px-3 py-1 bg-[#cda558]/20 backdrop-blur-md rounded-full border border-[#cda558]/30 w-fit mb-4">
          <p className="text-[#cda558] text-[10px] font-semibold tracking-[0.2em] uppercase">
            {step.id}
          </p>
        </div>
        <h3 className="text-3xl md:text-4xl text-white font-semibold mb-3 tracking-tight italic uppercase leading-none">
          <Translate en={step.title_en} ru={step.title_ru} tr={step.title_tr} />
        </h3>
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-[90%] font-medium">
          <Translate en={step.desc_en} ru={step.desc_ru} tr={step.desc_tr} />
        </p>
      </motion.div>
    </motion.div>
  );
}
