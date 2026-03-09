"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Translate from "@/components/Translate";

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32">
      <Header />
      <div className="container mx-auto px-6 max-w-4xl py-20 pb-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 italic uppercase tracking-tighter">
          <Translate
            en="Legal Notice"
            ru="Юридическая информация"
            tr="Yasal Uyarı"
          />
        </h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-12 text-white/70 text-lg leading-relaxed">
          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight italic text-[#cda558]">
              BP ORGANIK<span className="text-[#cda558]">.</span>
            </h2>
            <div className="space-y-2">
              <p>BP Agriculture Organic</p>
              <p>Antalya, Turkey</p>
              <p>Email: bp.organika@gmail.com</p>
              <p>Phone: +90 536 591 48 20</p>
            </div>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="Exclusion of Liability"
                ru="Отказ от ответственности"
                tr="Sorumluluk Reddi"
              />
            </h2>
            <p>
              <Translate
                en="The contents of our website were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the technical data. Our products are not meant to substitute professional medical advice."
                ru="Содержимое нашего сайта разработано с максимальной тщательностью. Однако мы не можем гарантировать точность, полноту или своевременность всех технических данных. Наши продукты не являются заменой профессиональной медицинской консультации."
                tr="Web sitemizin içerikleri büyük titizlikle oluşturulmuştur. Ancak teknik verilerin doğruluğunu, bütünlüğünü veya güncelliğini garanti edemeyiz. Ürünlerimiz profesyonel tıbbi tavsiyelerin yerini tutmaz."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate en="Copyright" ru="Авторское право" tr="Telif Hakkı" />
            </h2>
            <p>
              <Translate
                en="All content on this website (text, images, and logos) is protected by copyright law and belongs to BP ORGANIK. Any reproduction or use requires written consent from the owner."
                ru="Весь контент на этом сайте (текст, изображения и логотипы) защищен законом об авторском праве и принадлежит BP ORGANIK. Любое воспроизведение или использование требует письменного согласия владельца."
                tr="Bu web sitesindeki tüm içerik (metin, görseller ve logolar) telif hakkı yasası ile korunmaktadır ve BP ORGANIK'e aittir. Her türlü çoğaltma veya kullanım mülkiyet sahibinin yazılı onayını gerektirir."
              />
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
