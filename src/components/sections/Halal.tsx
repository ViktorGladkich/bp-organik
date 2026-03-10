"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Translate from "@/components/Translate";

export default function Halal() {
  return (
    <section className="w-full relative py-24 md:py-48 flex items-center overflow-hidden bg-[#111]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]/90 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="flex-1 w-full flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-sans font-medium text-5xl md:text-7xl xl:text-[80px] tracking-tight text-[#cda558] uppercase leading-[1.05] drop-shadow-[0_0_15px_rgba(205,165,88,0.3)]`}
          >
            <Translate
              en="NATURAL HALAL PRODUCT"
              ru="ПРИРОДНЫЙ ХАЛЯЛЬ"
              tr="DOĞAL HELAL ÜRÜN"
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl md:text-3xl font-medium font-sans leading-relaxed max-w-4xl tracking-wide mx-auto md:mx-0"
          >
            <Translate
              en="100% compliant with Halal dietary laws, free from any synthetic or forbidden substances. Pure power from nature."
              ru="100% соответствует стандартам Халяль, не содержит синтетических или запрещенных веществ. Чистая энергия природы."
              tr="“%100 Helal beslenme kurallarına uygun olarak üretilmiştir. Sentetik veya yasaklı maddeler içermez. Doğadan gelen saf güç.”"
            />
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] relative shrink-0 mt-10 md:mt-0 lg:ml-20"
        >
          <Image
            src="/certifield-halal.png"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(205,165,88,0.2)]"
            alt="Halal Quality Certified"
          />
        </motion.div>
      </div>
    </section>
  );
}
