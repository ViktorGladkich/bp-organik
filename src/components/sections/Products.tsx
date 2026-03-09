"use client";

import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";
import Translate from "@/components/Translate";

const CARD_ITEMS: iCardItem[] = [
  {
    id: "camel",
    title_en: "CAMEL HUMP OIL",
    title_ru: "ЖИР ВЕРБЛЮЖЬЕГО ГОРБА",
    title_tr: "DEVECİ HÖRGÜCÜ YAĞI",
    description_en:
      "Pure concentrated energy and natural recovery from the most resilient animals on earth.",
    description_ru:
      "Чистая концентрированная энергия и естественное восстановление от самых выносливых животных на земле.",
    description_tr:
      "Dünyanın en dayanıklı hayvanlarından saf konsantre enerji ve doğal iyileşme.",
    src: "/product/jar-product.png",
    bgSrc: "/product/camel-bg.png",
    color: "#cda558", // Exclusive Gold for titles
    benefits_en: [
      "lowers cholesterol",
      "strength when tired",
      "improves skin",
      "deeper sleep",
      "cleanses vessels",
      "cope with stress",
      "improves hair",
      "immune system",
    ],
    benefits_ru: [
      "снижает холестерин",
      "силы при усталости",
      "улучшает кожу",
      "глубокий сон",
      "очищает сосуды",
      "справиться со стрессом",
      "улучшает волосы",
      "иммунная система",
    ],
    benefits_tr: [
      "kolesterolü düşürür",
      "yorgunlukta güç",
      "cildi güzelleştirir",
      "derin uyku",
      "damarları temizler",
      "stresle başa çıkma",
      "saçı güçlendirir",
      "bağışıklık sistemi",
    ],
  },
  {
    id: "goat",
    title_en: "GOAT FAT",
    title_ru: "КОЗИЙ ЖИР",
    title_tr: "KEÇİ YAĞI",
    description_en:
      "Ancient remedy for respiratory health and natural cellular protection.",
    description_ru:
      "Древнее средство для здоровья дыхательных путей и естественной защиты клеток.",
    description_tr:
      "Solunum sağlığı ve doğal hücresel koruma için kadim bir çare.",
    src: "/product/jar-product.png",
    bgSrc: "/product/goat-bg.png",
    color: "#cda558",
    benefits_en: [
      "Immune system",
      "Reproductives",
      "Healthy skin",
      "Nails and hair",
      "Gastrointestinal tract",
      "Nervous system",
      "Vitamin replenish",
      "Mineral balance",
    ],
    benefits_ru: [
      "Иммунная система",
      "Репродукция",
      "Здоровая кожа",
      "Ногти и волосы",
      "ЖКТ и пищеварение",
      "Нервная система",
      "Восполнение витаминов",
      "Минеральный баланс",
    ],
    benefits_tr: [
      "Bağışıklık sistemi",
      "Üreme fonksiyonu",
      "Sağlıklı cilt",
      "Tırnak ve saç",
      "Sindirim sistemi",
      "Sinir sistemi",
      "Vitamin takviyesi",
      "Mineral dengesi",
    ],
  },
  {
    id: "deer",
    title_en: "DEER VISCERAL FAT",
    title_ru: "ОЛЕНИЙ НУТРЯНОЙ ЖИР",
    title_tr: "GEYİK İÇ YAĞI",
    description_en:
      "Elite support for the cardiovascular system and extreme endurance.",
    description_ru:
      "Элитная поддержка сердечно-сосудистой системы и экстремальная выносливость.",
    description_tr:
      "Kardiyovasküler sistem için elit destek ve aşırı dayanıklılık.",
    src: "/product/jar-product.png",
    bgSrc: "/product/deer-bg.png",
    color: "#cda558",
    benefits_en: [
      "Cardiovascular support",
      "Immune boost",
      "Energy and endurance",
      "Reproductive system",
      "Cancer risk reduction",
      "Heart rhythm",
      "Blood pressure",
      "Muscle recovery",
    ],
    benefits_ru: [
      "Поддержка сосудов",
      "Иммунный буст",
      "Энергия и выносливость",
      "Репродукция",
      "Снижение онко-рисков",
      "Сердечный ритм",
      "Давление",
      "Восстановление мышц",
    ],
    benefits_tr: [
      "Kalp damar desteği",
      "Bağışıklık güçlendirme",
      "Enerji ve dayanıklılık",
      "Üreme sistemi",
      "Kanser riskini azaltma",
      "Kalp ritmi",
      "Tansiyon dengesi",
      "Kas toparlanması",
    ],
  },
  {
    id: "fatty",
    title_en: "FATTY FAT (OMEGA 9)",
    title_ru: "ОВЕЧИЙ КУРДЮЧНЫЙ ЖИР",
    title_tr: "KOYUN KUYRUK YAĞI",
    description_en:
      "The missing link for skin youthfulness and biological balance.",
    description_ru:
      "Недостающее звено для молодости кожи и биологического равновесия организма.",
    description_tr: "Cilt gençliği ve biyolojik denge için eksik halka.",
    src: "/product/jar-product.png",
    bgSrc: "/product/fatty-bg.png",
    color: "#cda558",
    benefits_en: [
      "Youthful skin",
      "Collagen production",
      "Elastin and HA",
      "Biological balance",
      "Heart health",
      "Metabolic support",
      "Sugar normalization",
      "Atherosclerosis risk",
    ],
    benefits_ru: [
      "Молодость кожи",
      "Выработка коллагена",
      "Эластин и ГК",
      "Био-баланс",
      "Здоровье сердца",
      "Метаболизм",
      "Нормализация сахара",
      "Риск атеросклероза",
    ],
    benefits_tr: [
      "Genç cilt",
      "Kolajen üretimi",
      "Elastin ve Hyaluronik",
      "Biyolojik denge",
      "Kalp sağlığı",
      "Metabolizma desteği",
      "Şeker normalizasyonu",
      "Ateroskleroz riski",
    ],
  },
  {
    id: "ointment",
    title_en: "ORGANIC OINTMENT",
    title_ru: "БИО-МАЗЬ ОБЕЗБОЛИВАЮЩАЯ",
    title_tr: "ORGANİK MERHEM",
    description_en:
      "Elite natural formulation for external recovery, muscle soothing, and joint support.",
    description_ru:
      "Элитная природная формула для наружного восстановления, снятия мышечного напряжения и поддержки суставов.",
    description_tr:
      "Dış iyileşme, kas yatıştırma ve eklem desteği için elit doğal formülasyon.",
    src: "/product/jar-product.png",
    bgSrc: "/product/ointment-bg.png",
    color: "#cda558",
    benefits_en: [
      "Deep tissue recovery",
      "Joint support",
      "Muscle soothing",
      "Natural anti-inflammatory",
      "Rapid absorption",
      "Halal certified",
      "Elite protection",
      "Pure organic",
    ],
    benefits_ru: [
      "Глубокое восстановление",
      "Поддержка суставов",
      "Снятие мышечной боли",
      "Природное противовоспалительное",
      "Быстрое впитывание",
      "Сертификат Халяль",
      "Элитная защита",
      "Чистая органика",
    ],
    benefits_tr: [
      "Derin doku iyileşmesi",
      "Eklem desteği",
      "Kas yatıştırma",
      "Doğal anti-enflamatuar",
      "Hızlı emilim",
      "Helal sertifikalı",
      "Elit koruma",
      "Saf organik",
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#050505] overflow-visible border-y border-white/5"
    >
      <div className="pt-32 pb-16 px-6 text-center">
        <h2 className="text-white text-5xl md:text-[120px] leading-none tracking-tighter font-semibold opacity-10 uppercase inline-block">
          <Translate
            en="OUR COLLECTION"
            ru="НАША КОЛЛЕКЦИЯ"
            tr="KOLEKSİYONUMUZ"
          />
        </h2>
      </div>
      <CardsParallax items={CARD_ITEMS} />
    </section>
  );
}
