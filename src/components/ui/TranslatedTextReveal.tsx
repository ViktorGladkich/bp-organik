"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TranslatedTextRevealProps {
  en: string;
  ru: string;
  tr: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

export const TranslatedTextReveal: React.FC<TranslatedTextRevealProps> = ({
  en,
  ru,
  tr,
  progress,
  range,
  className,
}) => {
  const { language } = useLanguage();

  const text = language === "ru" ? ru : language === "tr" ? tr : en;
  const words = text.split(" ");
  const step = (range[1] - range[0]) / words.length;

  return (
    <span
      className={`inline-flex flex-wrap items-center justify-center gap-x-[0.2em] md:gap-x-[0.3em] ${className || ""}`}
    >
      {words.map((word, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Word key={i + text} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block transition-opacity duration-75"
    >
      {children}
    </motion.span>
  );
};
