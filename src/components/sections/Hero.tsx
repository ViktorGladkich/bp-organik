"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Translate from "@/components/Translate";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full h-[150vh]">
      <section
        id="hero"
        className="sticky top-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Dark textured background placeholder */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-tr from-[#050505] via-black to-[#111] opacity-90" />
            <div className="absolute inset-0 bg-[url('/sheep-herd-bg.jpg')] bg-cover bg-center grayscale opacity-10 mix-blend-overlay" />
          </div>

          <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center mt-[-5vh]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 md:mb-12 flex flex-col items-center"
            >
              {/* Logo text instead of image for cleaner dark mode, or keep using logo if it's transparent */}
              <h4
                className={`font-sans font-medium text-2xl tracking-tight text-[#cda558] mb-1 uppercase`}
              >
                BP ORGANIK
              </h4>
              <p className="text-white/60 font-black tracking-[0.4em] text-xs md:text-sm uppercase">
                <Translate
                  en="Natural Recovery"
                  ru="Природное Восстановление"
                  tr="Doğal Toparlanma"
                />
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className={`font-sans font-medium text-6xl md:text-[120px] leading-[1.05] tracking-tight text-[#cda558] uppercase z-10 w-full text-center drop-shadow-2xl`}
              style={{
                textShadow: "0px 10px 40px rgba(205, 165, 88, 0.2)",
              }}
            >
              CHAMPION
            </motion.h1>

            {/* Small status cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-12 z-20"
            >
              <StatCard
                title={
                  <Translate
                    en="ENDURANCE"
                    ru="ВЫНОСЛИВОСТЬ"
                    tr="DAYANIKLILIK"
                  />
                }
              />
              <StatCard
                title={<Translate en="STRENGTH" ru="СИЛА" tr="GÜÇ" />}
              />
              <StatCard
                title={
                  <Translate
                    en="RECOVERY"
                    ru="ВОССТАНОВЛЕНИЕ"
                    tr="TOPARLANMA"
                  />
                }
              />
              <StatCard
                title={<Translate en="POWER" ru="МОЩЬ" tr="KUVVET" />}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function StatCard({ title }: { title: React.ReactNode }) {
  return (
    <div className="px-6 py-3 border border-[#cda558]/30 bg-black/40 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(205,165,88,0.1)] hover:border-[#cda558]/80 hover:shadow-[0_0_20px_rgba(205,165,88,0.3)] transition-all cursor-default">
      <span className="text-white text-xs md:text-sm font-bold tracking-widest">
        {title}
      </span>
    </div>
  );
}
