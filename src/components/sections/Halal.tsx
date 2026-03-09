import Image from "next/image";
import Translate from "@/components/Translate";

export default function Halal() {
  return (
    <section className="w-full relative py-24 md:py-48 flex items-center overflow-hidden bg-[#111]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]/90 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 w-full flex flex-col">
          <h2
            className={`font-sans font-medium text-5xl md:text-7xl xl:text-[80px] tracking-tight text-[#cda558] uppercase leading-[1.05] mb-6 drop-shadow-[0_0_15px_rgba(205,165,88,0.3)]`}
          >
            <Translate
              en="NATURAL HALAL PRODUCT"
              ru="ПРИРОДНЫЙ ХАЛЯЛЬ"
              tr="DOĞAL HELAL ÜRÜN"
            />
          </h2>
          <p className="text-white/80 text-xl md:text-3xl font-medium font-sans leading-relaxed max-w-4xl tracking-wide">
            <Translate
              en="100% compliant with Halal dietary laws, free from any synthetic or forbidden substances. Pure power from nature."
              ru="100% соответствует стандартам Халяль, не содержит синтетических или запрещенных веществ. Чистая энергия природы."
              tr="%100 Helal beslenme kurallarına uygun, sentetik veya yasaklı maddeler içermez. Doğadan gelen saf güç."
            />
          </p>
        </div>

        <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] relative shrink-0 mt-10 md:mt-0 lg:ml-20">
          <Image
            src="/certifield-halal.png"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(205,165,88,0.2)]"
            alt="Halal Premium Certified"
          />
        </div>
      </div>
    </section>
  );
}
