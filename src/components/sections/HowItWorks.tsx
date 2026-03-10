"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Translate from "@/components/Translate";

const STEPS = [
  {
    id: "01",
    title_en: "The Ritual",
    title_ru: "Ритуал",
    title_tr: "Ritüel",
    desc_en:
      "Start your daily peak optimization with a single high-potency intake.",
    desc_ru: "Начните ежедневную оптимизацию с одного правильного приема.",
    desc_tr: "“Organik kompleksin günlük yaşam rutininize entegrasyonu.”",
    image: "/how-it-works/step1_v2.png",
  },
  {
    id: "02",
    title_en: "Absorption",
    title_ru: "Усвоение",
    title_tr: "Biyo-Emilim",
    desc_en:
      "Bio-active ingredients bypass barriers for immediate cellular repair.",
    desc_ru:
      "Биоактивные ингредиенты обходят барьеры для мгновенного восстановления.",
    desc_tr:
      "“Besinlerin ve temel asitlerin hücresel yapılara hızlı ve etkili şekilde taşınması.”",
    image: "/how-it-works/step2_v2.png",
  },
  {
    id: "03",
    title_en: "Vital Performance",
    title_ru: "Результат",
    title_tr: "Vital Performans",
    desc_en: "Experience natural resilience and vital results in your routine.",
    desc_ru: "Испытайте природную выносливость и оздоровительный результат.",
    desc_tr:
      "“Fiziksel performansın en üst seviyeye ulaşmasını ve hızlı toparlanmayı destekler.”",
    image: "/how-it-works/step3_v2.png",
  },
  {
    id: "04",
    title_en: "Continuity",
    title_ru: "Непрерывность",
    title_tr: "Süreklilik",
    desc_en:
      "Maintain peak biological state through consistent revitalisation.",
    desc_ru:
      "Поддерживайте пиковое состояние за счет постоянного восстановления.",
    desc_tr:
      "“Sistemik biyolojik dengenin korunması ve uzun vadeli adaptif destek.”",
    image: "/how-it-works/step4_v2.png",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#050505] py-24 md:py-48 px-6 border-b border-white/5 relative bg-[radial-gradient(circle_at_20%_-10%,#cda5580a,transparent_40%)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cinematic Header Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 md:mb-40 items-start text-center md:text-left">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-9xl font-extralight tracking-[-0.04em] leading-[0.85] uppercase text-white">
                <span className="block">
                  <Translate
                    en="Vital results"
                    ru="Живой результат"
                    tr="HASAT BURADA"
                  />
                </span>
                <span className="block text-[#cda558] italic font-light md:pl-32 mt-2">
                  <Translate
                    en="starts here."
                    ru="начинается здесь."
                    tr="BAŞLAR"
                  />
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="md:col-span-4 md:pt-12 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-8 items-center md:items-start"
            >
              <div className="w-12 h-px bg-[#cda558]/30" />
              <p className="text-white/30 text-base md:text-lg leading-relaxed font-light uppercase tracking-wide max-w-sm">
                <Translate
                  en="The methodology behind the bio-transformation process."
                  ru="Методология процесса био-трансформации вашего организма."
                  tr="“Geleneksel bilgeliği modern hücresel bilimle birleştiren saf ve yüksek verimli organik bileşiklerin üretim süreci.”"
                />
              </p>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {/* Card 01 - Large Top Left */}
          <div className="md:col-span-12 lg:col-span-8">
            <StepCard
              step={STEPS[0]}
              index={0}
              aspect="aspect-16/9 lg:aspect-21/9"
            />
          </div>

          {/* Card 02 - Vertical Right */}
          <div className="md:col-span-6 lg:col-span-4 lg:row-span-2">
            <StepCard
              step={STEPS[1]}
              index={1}
              aspect="h-full min-h-[500px]"
              showGlow
            />
          </div>

          {/* Card 03 - Square Bottom Left */}
          <div className="md:col-span-6 lg:col-span-4">
            <StepCard step={STEPS[2]} index={2} aspect="aspect-square" />
          </div>

          {/* Card 04 - Bottom Middle */}
          <div className="md:col-span-12 lg:col-span-4">
            <StepCard
              step={STEPS[3]}
              index={3}
              aspect="aspect-square lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  aspect,
  showGlow = false,
}: {
  step: (typeof STEPS)[0];
  index: number;
  aspect: string;
  showGlow?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group bg-[#0a0a0a] rounded-4xl md:rounded-[3rem] overflow-hidden border border-white/5 flex flex-col ${aspect}`}
    >
      {showGlow && (
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#cda558]/10 blur-[100px] pointer-events-none" />
      )}

      <div className="absolute inset-0 z-0">
        <Image
          src={step.image}
          alt={step.title_en}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
        <div className="flex items-center justify-between mb-auto">
          <span className="text-[10px] font-bold text-white/40 group-hover:text-[#cda558] transition-colors duration-500 tracking-[0.5em] uppercase">
            Step // {step.id}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#cda558]/40 group-hover:bg-[#cda558] transition-all duration-500" />
        </div>

        <div className="mt-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-extralight uppercase tracking-tighter mb-4 leading-none transform transition-transform duration-700 group-hover:-translate-y-2 italic">
            <Translate
              en={step.title_en}
              ru={step.title_ru}
              tr={step.title_tr}
            />
          </h3>
          <p className="text-white/60 text-sm md:text-lg leading-relaxed font-light max-w-sm group-hover:text-white transition-colors duration-700">
            <Translate en={step.desc_en} ru={step.desc_ru} tr={step.desc_tr} />
          </p>
        </div>
      </div>

      {/* Precision corner details */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10 group-hover:border-[#cda558]/40 transition-colors" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10 group-hover:border-[#cda558]/40 transition-colors" />
    </motion.div>
  );
}
