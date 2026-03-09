"use client";
import { FC } from "react";
import Image from "next/image";
import Translate from "@/components/Translate";

// Types
interface iCardItem {
  id: string;
  title_en: string;
  title_ru: string;
  title_tr: string;
  description_en: string;
  description_ru: string;
  description_tr: string;
  benefits_en: string[];
  benefits_ru: string[];
  benefits_tr: string[];
  src: string;
  bgSrc: string; // Background animal image
  color: string; // The "active" accent color (gold for titles)
}

interface iCardProps extends iCardItem {
  i: number;
}

// Components
const Card: FC<iCardProps> = ({
  title_en,
  title_ru,
  title_tr,
  description_en,
  description_ru,
  description_tr,
  benefits_en,
  benefits_ru,
  benefits_tr,
  color,
  src,
  bgSrc,
  i,
}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0 bg-[#050505] overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 h-screen py-20">
        {/* Animal Background Background (Very large, subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none z-0">
          <Image
            src={bgSrc}
            alt="Animal Background"
            fill
            className="object-contain contrast-125"
          />
        </div>

        {/* Left: Content */}
        <div className="flex-1 z-10 text-left">
          <span className="inline-block px-4 py-1 rounded-full border border-[#cda558]/30 bg-[#cda558]/10 text-[#cda558] text-sm font-semibold tracking-widest uppercase mb-6">
            <Translate
              en="Featured Product"
              ru="Рекомендуемый продукт"
              tr="Öne Çıkan Ürün"
            />
          </span>

          <h2
            className="text-4xl md:text-7xl font-semibold tracking-tighter mb-6 leading-none italic"
            style={{ color: color }}
          >
            <Translate en={title_en} ru={title_ru} tr={title_tr} />
          </h2>

          <div className="text-white/60 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
            <Translate
              en={description_en}
              ru={description_ru}
              tr={description_tr}
            />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {benefits_en.map((_, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center border border-[#cda558]/50">
                  <div className="w-2 h-2 rounded-full bg-[#cda558]" />
                </div>
                <span className="text-white/80 text-sm md:text-base font-medium">
                  <Translate
                    en={benefits_en[idx]}
                    ru={benefits_ru[idx]}
                    tr={benefits_tr[idx]}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center z-10">
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              src={src}
              alt={title_en}
              fill
              priority={i === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="min-h-screen">
      {items.map((project, i) => {
        return <Card key={project.id} {...project} i={i} />;
      })}
    </div>
  );
};

export { CardsParallax, type iCardItem };
