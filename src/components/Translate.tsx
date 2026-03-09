"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TranslateProps {
  en: React.ReactNode;
  ru: React.ReactNode;
  tr: React.ReactNode;
}

export default function Translate({ en, ru, tr }: TranslateProps) {
  const { language } = useLanguage();

  if (language === "ru") {
    return <>{ru}</>;
  }

  if (language === "tr") {
    return <>{tr}</>;
  }

  return <>{en}</>;
}
