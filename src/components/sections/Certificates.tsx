import Image from "next/image";
import Translate from "@/components/Translate";

const CERT_FILES = [
  "marka-tescil.png",
  "certificat-firma.png",
  "halal-certificat.png",
  "marka-patent.png",
  "iso9001-2015.png",
  "iso2200-2018.png",
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="w-full py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Text - Simplified and Left Aligned like screenshot */}
        <div className="max-w-4xl mb-16">
          <p className="text-white/90 text-2xl md:text-3xl font-medium leading-[1.15] tracking-tight">
            <Translate
              en="The company has all the necessary quality certificates, medical reports, and documents confirming the product's safety."
              ru="Компания имеет все необходимые сертификаты качества, медицинские заключения и документы, подтверждающие безопасность продукта."
              tr="“Şirketimiz, ürün güvenliğini doğrulayan gerekli tüm kalite sertifikalarına, tıbbi raporlara ve resmi belgelere sahiptir.”"
            />
          </p>
        </div>

        {/* Certificates Grid - Single Row Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-16">
          {CERT_FILES.map((filename, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4.2] bg-transparent rounded-[2px] overflow-hidden shadow-2xl transition-transform hover:scale-105"
            >
              <Image
                src={`/certificates/${filename}`}
                fill
                alt={`Certificate ${idx + 1}`}
                className="object-contain p-2"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>

        {/* Bottom Text - Left Aligned */}
        <div className="max-w-4xl">
          <p className="text-white/80 text-2xl md:text-3xl font-medium leading-[1.15] tracking-tight">
            <Translate
              en="Our product is approved for sale in pharmacies. This is a natural product, in the production of which all sanitary standards are strictly observed."
              ru="Наш продукт допущен к реализации в аптеках. Это натуральный продукт, при производстве которого строго соблюдаются все санитарные нормы."
              tr="“Ürünümüz eczanelerde satış için onaylanmıştır ve üretim sürecinde tüm hijyen ve sağlık standartlarına titizlikle uyulmaktadır.”"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
