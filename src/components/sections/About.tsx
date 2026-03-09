"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Translate from "@/components/Translate";
import { useLanguage } from "@/context/LanguageContext";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-full bg-[#050505] py-32 md:py-48 relative border-t border-white/5"
    >
      {/* Large Decorative Background Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center gap-12 select-none overflow-hidden z-0">
        <motion.div
          style={{ x: x1 }}
          className="text-[18vw] md:text-[10vw] font-black whitespace-nowrap leading-none text-white/5"
        >
          PURE ORGANIC • ELITE PERFORMANCE • QUALITY •
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="text-[18vw] md:text-[15vw] font-black whitespace-nowrap leading-none text-white/5"
        >
          GLOBAL STANDARD • HALAL CERTIFIED • BP ORGANIK •
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Story - Sticky on desktop */}
          <div className="lg:sticky lg:top-40 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#cda558] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                <Translate en="Our Legacy" ru="Наше наследие" tr="Mirasımız" />
              </span>
              <h2
                className={`font-semibold text-white tracking-tighter leading-none mb-10 italic ${
                  language === "ru"
                    ? "text-3xl md:text-6xl"
                    : "text-4xl md:text-7xl"
                }`}
              >
                <Translate
                  en="The Standard of Uncompromising Excellence."
                  ru="Стандарт бескомпромиссного качества."
                  tr="Tavizsiz Mükemmellik Standardı."
                />
              </h2>
              <div className="space-y-6 text-white/60 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                <p>
                  <Translate
                    en="Our company is a premier Turkish-Russian Trading House that has evolved into a global standard-setter in organic recovery. We bridge continents to deliver the most potent natural compounds."
                    ru="Наша компания является ведущим турецко-российским торговым домом, ставшим мировым эталоном в области органического восстановления."
                    tr="Şirketimiz, organik toparlanma alanında küresel bir standart belirleyiciye dönüşmüş, önde gelen bir Türk-Rus Ticaret Evi'dir."
                  />
                </p>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-16 h-px bg-[#cda558]/30" />
                  <p className="text-[#cda558] italic font-semibold">
                    <Translate
                      en="Trusted by professionals worldwide."
                      ru="Доверие профессионалов по всему миру."
                      tr="Dünya çapındaki profesyonellerin güveni."
                    />
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <ContainerScroll className="min-h-[250vh] flex flex-col gap-[80vh] py-24">
            {/* Turkish-Russian Trading House Card */}
            <CardSticky
              index={0}
              incrementY={40}
              incrementYBase={100}
              incrementZ={10}
              className="p-8 md:p-12 bg-[#cda558]/10 backdrop-blur-xl border border-[#cda558]/30 rounded-2xl md:rounded-[40px] hover:border-[#cda558] transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="px-3 py-1 bg-[#cda558] rounded-full">
                  <p className="text-[#050505] text-[10px] font-bold uppercase tracking-widest leading-none">
                    <Translate
                      en="Strategic Alliance"
                      ru="Стратегический альянс"
                      tr="Stratejik İttifak"
                    />
                  </p>
                </div>
              </div>
              <h3 className="text-[#cda558] text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tight italic">
                <Translate
                  en="Turkish-Russian Trading House"
                  ru="Турецко-Российский Торговый Дом"
                  tr="Türk-Rus Ticaret Evi"
                />
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                <Translate
                  en="A premium commercial bridge facilitating seamless cooperation and elite organic distribution between the Republic of Turkey and the Russian Federation."
                  ru="Премиальный торговый мост, обеспечивающий бесперебойное сотрудничество и дистрибуцию элитных органических продуктов между Турецкой Республикой и Российской Федерацией."
                  tr="Türkiye Cumhuriyeti ile Rusya Federasyonu arasında sorunsuz iş birliği ve elit organik dağıtım sağlayan premium bir ticari köprü."
                />
              </p>
            </CardSticky>

            {/* Turkey Entity - Manufacturer */}
            <CardSticky
              index={1}
              incrementY={40}
              incrementYBase={100}
              incrementZ={10}
              className="p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[40px] hover:border-[#cda558]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-none">
                    <Translate
                      en="Manufacturing Hub"
                      ru="Производственный хаб"
                      tr="Üretim Merkezi"
                    />
                  </p>
                </div>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-tight italic">
                BP TARIM ORGANİK
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                <Translate
                  en="Our primary production facility in Turkey specializes in advanced extraction and organic formulation, adhering to global quality and Halal standards."
                  ru="Наш основной производственный центр в Турции специализируется на высокотехнологичной экстракции и разработке органических формул."
                  tr="Türkiye'deki ana üretim tesisimiz, küresel kalite ve Helal standartlarına bağlı kalarak doğal enerji bileşiklerinin ileri düzey ekstraksiyonu konusunda uzmanшаmıştır."
                />
              </p>
            </CardSticky>

            {/* Russia Entity - Distributor */}
            <CardSticky
              index={2}
              incrementY={40}
              incrementYBase={100}
              incrementZ={10}
              className="p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[40px] hover:border-[#cda558]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-none">
                    <Translate
                      en="Strategic Distribution"
                      ru="Стратегическая дистрибуция"
                      tr="Stratejik Dağıtım"
                    />
                  </p>
                </div>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-tight italic">
                OOO ABAKS
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                <Translate
                  en="The official strategic partner responsible for large-scale distribution across the EAEU, ensuring availability in professional pharmacies."
                  ru="Официальный стратегический партнер, ответственный за масштабную дистрибуцию на территории ЕАЭС и доступность в аптечных сетях."
                  tr="EAEU genelinde geniş ölçekli dağıtımdan sorumlu, profesyonel eczanelerde bulunabilirliği sağlayan resmi stratejik ortak."
                />
              </p>
            </CardSticky>
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
