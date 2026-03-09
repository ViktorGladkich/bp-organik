"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Translate from "@/components/Translate";
import { TranslatedTextReveal } from "@/components/ui/TranslatedTextReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function DynamicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Initial Texts (left top and right bottom)
  const initialOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15],
    [1, 0.5, 0],
  );
  const initialY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"]);

  // Background Text: stays at the bottom, fades out very late
  const bgTextOpacity = useTransform(scrollYProgress, [0.9, 2], [0.09, 0]);

  // Hand movement (moves down and disappears)
  const handY = useTransform(scrollYProgress, [0, 0.15], ["0%", "100%"]);
  const handOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15],
    [1, 0.5, 0],
  );

  // Jar movement (starts larger, moves down, then right)
  const jarY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4],
    ["-10vh", "32vh", "32vh", "0vh"],
  );
  const jarX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    ["0vw", "0vw", "25vw"],
  );

  // Responsive jarX for mobile
  const responsiveJarX = useTransform(jarX, (val) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return "0vw";
    return val;
  });

  const jarScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.4, 1],
    [1.3, 1, 1, 1.5, 1.5],
  );

  // Blurred center text (appears while jar is at the bottom, unblurs, then disappears)
  const blurFilter = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["blur(15px)", "blur(0px)"],
  );
  const blurOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.35, 0.4],
    [0, 1, 1, 0],
  );
  const blurScale = useTransform(scrollYProgress, [0.15, 0.25], [1.1, 1]);

  // Reusable card animation function
  const useCardAnim = (start: number, out: number) => {
    const y = useTransform(
      scrollYProgress,
      [start, start + 0.05, out, out + 0.05],
      ["50vh", "0vh", "0vh", "-50vh"],
    );
    const opacity = useTransform(
      scrollYProgress,
      [start, start + 0.05, out, out + 0.05],
      [0, 1, 1, 0],
    );
    return { y, opacity };
  };

  const card01 = useCardAnim(0.4, 0.5);
  const card02 = useCardAnim(0.55, 0.65);
  const card03 = useCardAnim(0.7, 0.8);
  const card04 = useCardAnim(0.85, 0.95);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(var(--vh,1vh)*600)] bg-[#050505] border-b border-white/5"
    >
      <div className="sticky top-0 w-full h-[calc(var(--vh,1vh)*100)] overflow-hidden bg-[#050505] flex justify-center items-center">
        {/* Large Background Text */}
        <motion.div
          style={{ opacity: bgTextOpacity }}
          className="absolute bottom-[-2vw] left-0 w-full text-center pointer-events-none z-0 overflow-hidden"
        >
          <span className="text-[20vw] font-semibold text-white uppercase leading-none tracking-tighter block whitespace-nowrap">
            ORGANIK
          </span>
        </motion.div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white rounded-full opacity-[0.02] blur-[150px] pointer-events-none" />

        {/* Initial Left Text */}
        <motion.div
          style={{ opacity: initialOpacity, y: initialY }}
          className="absolute top-[18%] left-[5%] md:left-[5%] w-[90vw] md:w-[60vw] max-w-[800px] z-10 pointer-events-none"
        >
          <h1
            className={`text-white tracking-tight font-medium leading-[1.1] ${
              language === "ru"
                ? "text-4xl md:text-5xl lg:text-[70px]"
                : "text-4xl md:text-6xl lg:text-[80px]"
            }`}
          >
            <Translate
              en="Your healthiest"
              ru="Максимальное"
              tr="En sağlıklı"
            />
            <br />
            <Translate
              en="recovery revealed."
              ru="восстановление."
              tr="dinlenmen ortaya."
            />
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full border border-[#050505] bg-[#222] overflow-hidden relative">
                <Image
                  src="https://i.pravatar.cc/100?img=1"
                  alt="Athlete"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#050505] bg-[#333] overflow-hidden relative">
                <Image
                  src="https://i.pravatar.cc/100?img=2"
                  alt="Athlete"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#050505] bg-[#444] overflow-hidden relative">
                <Image
                  src="https://i.pravatar.cc/100?img=3"
                  alt="Athlete"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#050505] bg-[#555] overflow-hidden relative">
                <Image
                  src="https://i.pravatar.cc/100?img=4"
                  alt="Athlete"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-white/80 text-sm font-medium leading-tight ml-2">
              <div className="flex gap-[2px] mb-[2px] text-[#cda558]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <Translate
                en="2500+ Happy Athletes"
                ru="2500+ Довольных Атлетов"
                tr="2500+ Mutlu Sporcu"
              />
            </div>
          </div>
        </motion.div>

        {/* Initial Right Text */}
        <motion.div
          style={{ opacity: initialOpacity, y: initialY }}
          className="absolute top-[40%] md:top-[50%] right-[5%] md:right-[5%] w-[90vw] md:w-[30vw] max-w-[400px] z-10 pointer-events-none md:text-right hidden md:block"
        >
          <p className="text-lg md:text-2xl text-white/90 font-medium leading-snug tracking-tight">
            <Translate
              en="We strip away the unnecessary to focus on what truly works."
              ru="Мы убираем всё лишнее, чтобы сосредоточиться на том, что действительно работает."
              tr="Gerçekten işe yarayana odaklanmak için gereksiz olanları çıkarıyoruz."
            />
          </p>
        </motion.div>

        {/* Hand Container */}
        <motion.div
          style={{ y: handY, opacity: handOpacity }}
          className="absolute bottom-0 md:bottom-[-10vh] left-[50%] -translate-x-1/2 w-[120vw] md:w-[60vw] max-w-[800px] aspect-4/3 pointer-events-none"
        >
          <Image
            src="/hand.png"
            alt="Hand"
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>

        {/* Jar Container */}
        <motion.div
          style={{ x: responsiveJarX, y: jarY, scale: jarScale }}
          className="relative bottom-[-15vh] md:bottom-0 w-[70vw] md:w-[20vw] max-w-[350px] aspect-square pointer-events-none z-20"
        >
          <Image
            src="/jar.png"
            alt="BP Organik Jar"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Blurred Center Text */}
        <motion.div
          style={{ opacity: blurOpacity, filter: blurFilter, scale: blurScale }}
          className="absolute top-[35%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10 flex flex-col items-center gap-2"
        >
          <TranslatedTextReveal
            className="text-5xl md:text-[80px] lg:text-[100px] text-white tracking-tight font-medium leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            en="Reveal your inner strength."
            ru="Открой свою внутреннюю силу."
            tr="İçsel gücünü ortaya çıkar."
            progress={scrollYProgress}
            range={[0.15, 0.22]}
          />
          <TranslatedTextReveal
            className="text-2xl md:text-5xl text-white/70 font-medium tracking-tight mt-2 md:mt-6"
            en="Accelerate your peak performance."
            ru="Ускорь свои лучшие достижения."
            tr="Zirve performansını hızlandır."
            progress={scrollYProgress}
            range={[0.2, 0.28]}
          />
        </motion.div>

        {/* Cards container */}
        <div className="absolute top-0 left-0 w-full h-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none z-30">
          <ScrollCard
            anim={card01}
            num="01"
            title_en="MAXIMUM BIOAVAILABILITY"
            title_ru="МАКСИМАЛЬНАЯ БИОДОСТУПНОСТЬ"
            title_tr="MAKSİMUM BİYOYARARLANIM"
            desc_en="Absorbs significantly faster than regular supplements, giving you immediate support exactly when you need it."
            desc_ru="Усваивается значительно быстрее обычных добавок, обеспечивая мгновенную поддержку организма."
            desc_tr="Sıradan takviyelere göre çok daha hızlı emilir, tam ihtiyacınız olduğunda anında destek verir."
          />
          <ScrollCard
            anim={card02}
            num="02"
            title_en="DEEP TISSUE REPAIR"
            title_ru="ГЛУБОКОЕ ВОССТАНОВЛЕНИЕ ТКАНЕЙ"
            title_tr="DERİN DOKU ONARIMI"
            desc_en="We strip away the unnecessary to focus on penetrating cellular repair that truly works after intense stress."
            desc_ru="Мы убираем все лишнее, чтобы сфокусироваться на клеточном восстановлении после интенсивных нагрузок."
            desc_tr="Gereksiz olanı çıkarıp yoğun stresten sonra gerçekten işe yarayan hücresel onarıma odaklanıyoruz."
          />
          <ScrollCard
            anim={card03}
            num="03"
            title_en="100% HALAL CERTIFIED"
            title_ru="100% СЕРТИФИКАТ ХАЛЯЛЬ"
            title_tr="100% HELAL SERTİFİKALI"
            desc_en="Fully ethical, pure, and compliant with all religious requirements. No synthetic fillers. No compromises."
            desc_ru="Полностью этично, чисто и соответствует всем религиозным требованиям. Без компромиссов."
            desc_tr="Tamamen etik, saf ve tüm dini gerekliliklere uygundur. Sentetik dolgu maddesi içermez. Taviz yok."
          />
          <ScrollCard
            anim={card04}
            num="04"
            title_en="ELITE PERFORMANCE"
            title_ru="ЭЛИТНАЯ ПРОИЗВОДИТЕЛЬНОСТЬ"
            title_tr="ELİT PERFORMANS"
            desc_en="Trusted by athletes. Engineered for endurance, strength, and unrivaled natural recovery."
            desc_ru="Выбор профессиональных атлетов. Создано для выносливости, силы и природного восстановления."
            desc_tr="Sporcuların güvendiği ürün. Dayanıklılık, güç ve eşsiz doğal toparlanma için özel olarak tasarlandı."
          />
        </div>
      </div>
    </div>
  );
}

interface ScrollCardProps {
  num: string;
  title_en: string;
  title_ru: string;
  title_tr: string;
  desc_en: string;
  desc_ru: string;
  desc_tr: string;
  anim: {
    y: MotionValue<string>;
    opacity: MotionValue<number>;
  };
}

function ScrollCard({
  num,
  title_en,
  title_ru,
  title_tr,
  desc_en,
  desc_ru,
  desc_tr,
  anim,
}: ScrollCardProps) {
  return (
    <motion.div
      style={{ y: anim.y, opacity: anim.opacity }}
      className="absolute top-[12%] md:top-[30%] left-[5%] md:left-[10%] w-[90vw] md:w-[45vw] max-w-[600px]"
    >
      <div
        className={`font-sans tracking-tighter font-medium text-[150px] md:text-[250px] text-white opacity-[0.03] absolute -top-16 md:-top-32 -left-4 md:-left-12 z-0 select-none leading-none pointer-events-none`}
      >
        {num}
      </div>
      <div className="relative z-10 w-full">
        <h3
          className={`font-sans font-medium text-3xl md:text-6xl text-white uppercase mb-6 tracking-tight leading-[1.1] drop-shadow-lg`}
        >
          <Translate en={title_en} ru={title_ru} tr={title_tr} />
        </h3>
        <div className="w-16 h-1 flex bg-white/30 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-white w-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </div>
        <p className="text-white/80 text-lg md:text-2xl font-sans tracking-wide leading-relaxed drop-shadow-md">
          <Translate en={desc_en} ru={desc_ru} tr={desc_tr} />
        </p>
      </div>
    </motion.div>
  );
}
