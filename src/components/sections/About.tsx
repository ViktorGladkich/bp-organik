"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Translate from "@/components/Translate";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      className="w-full bg-[#050505] py-32 md:py-48 overflow-hidden relative border-t border-white/5"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Large Decorative Background Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex flex-col justify-center gap-12 select-none">
          <motion.div
            style={{ x: x1 }}
            className="text-[15vw] font-black whitespace-nowrap leading-none"
          >
            ESTABLISHED 2011 • 14 YEARS • PURE QUALITY •
          </motion.div>
          <motion.div
            style={{ x: x2 }}
            className="text-[15vw] font-black whitespace-nowrap leading-none"
          >
            GLOBAL STANDARD • HALAL CERTIFIED • BP ORGANIK •
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Story */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#cda558] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                <Translate en="Our Legacy" ru="Наше наследие" tr="Mirasımız" />
              </span>
              <h2 className="text-4xl md:text-7xl font-semibold text-white tracking-tighter leading-none mb-10 italic">
                <Translate
                  en="14 Years of Uncompromising Excellence."
                  ru="14 лет бескомпромиссного качества."
                  tr="14 Yıllık Tavizsiz Mükemmellik."
                />
              </h2>
              <div className="space-y-6 text-white/60 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                <p>
                  <Translate
                    en="Founded in 2011, our company has grown from a local producer to a global standard-setter in organic recovery. We specialize in the most potent natural compounds adapted for high-stress performance."
                    ru="Основанная в 2011 году, наша компания прошла путь от локального производителя до глобального лидера в области органического восстановления. Мы специализируемся на мощнейших природных компонентах."
                    tr="2011 yılında kurulan şirketimiz, yerel bir üreticiden organik toparlanma alanında küresel bir standart belirleyiciye dönüşmüştür. Yüksek stresli performanslar için en güçlü doğal bileşenlerde uzmanız."
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

          {/* Right Side: Regional Entities */}
          <div className="grid grid-cols-1 gap-8 relative z-10">
            {/* Turkey Entity - Manufacturer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[40px] hover:border-[#cda558]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="px-3 py-1 bg-[#cda558]/20 rounded-full border border-[#cda558]/30">
                  <p className="text-[#cda558] text-[10px] font-bold uppercase tracking-widest leading-none">
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
                  en="Our primary production facility in Turkey specializes in the advanced extraction and organic formulation of natural energy compounds, adhering to global quality and Halal standards."
                  ru="Наш основной производственный центр в Турции специализируется на высокотехнологичной экстракции и разработке органических формул, соблюдая мировые стандарты качества и требования Халяль."
                  tr="Türkiye'deki ana üretim tesisimiz, küresel kalite ve Helal standartlarına bağlı kalarak doğal enerji bileşiklerinin ileri düzey ekstraksiyonu ve organik formülasyonu konusunda uzmanlaşmıştır."
                />
              </p>
            </motion.div>

            {/* Russia Entity - Distributor */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  en="The official strategic partner and logistics arm, responsible for large-scale distribution across the Eurasian Economic Union, ensuring availability in professional pharmacies and specialized sports centers."
                  ru="Официальный стратегический партнер и логистическое подразделение, ответственное за масштабную дистрибуцию на территории ЕАЭС, обеспечивающее доступность продукции в аптеках и спортивных центрах."
                  tr="Avrasya Ekonomik Birliği genelinde geniş ölçekli dağıtımdan sorumlu, profesyonel eczanelerde ve özel spor merkezlerinde bulunabilirliği sağlayan resmi stratejik ortak ve lojistik kanadı."
                />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
