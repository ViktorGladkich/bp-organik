"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Translate from "@/components/Translate";

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32">
      <Header />
      <div className="container mx-auto px-6 max-w-4xl py-20 pb-40">
        <h1 className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter text-[#cda558]">
          <Translate
            en="Legal Notice"
            ru="Юридическая информация"
            tr="Yasal Uyarı"
          />
        </h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-12 text-white/70 text-lg leading-relaxed">
          {/* Company Identity */}
          <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-[#cda558] text-2xl font-bold mb-6 uppercase tracking-tight italic">
              BP ORGANIK<span className="text-[#cda558]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Translate
                    en="Company Name"
                    ru="Название компании"
                    tr="Şirket Adı"
                  />
                </p>
                <p className="text-white font-semibold">
                  BP Agriculture Organic Ltd.
                </p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Translate en="Headquarters" ru="Штаб-квартира" tr="Merkez" />
                </p>
                <p className="text-white">Antalya, Turkey</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Translate
                    en="Authorized Representative"
                    ru="Уполномоченный представитель"
                    tr="Yetkili Temsilci"
                  />
                </p>
                <p className="text-white">Management Board</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Translate en="Contact" ru="Контакты" tr="İletişim" />
                </p>
                <p className="text-white">Email: bp.organika@gmail.com</p>
                <p className="text-white">Phone: +90 536 591 48 20</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Translate
                    en="Register / Tax ID"
                    ru="Реестр / ИНН"
                    tr="Kayıt / Vergi No"
                  />
                </p>
                <p className="text-white">Antalya Chamber of Commerce</p>
                <p className="text-white">
                  Tax ID: [Enter your Turkish Tax ID here]
                </p>
              </div>
            </div>
          </section>

          {/* Legal Disclaimers */}
          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="Disclaimer for Content"
                ru="Отказ от ответственности за контент"
                tr="İçerik Sorumluluk Reddi"
              />
            </h2>
            <p>
              <Translate
                en="The contents of our website have been compiled with the utmost care. However, we cannot accept any liability for the accuracy, completeness, or timeliness of the information. Our products and their descriptions are not a substitute for medical consultation."
                ru="Содержимое нашего веб-сайта было составлено с максимальной тщательностью. Однако мы не несем ответственности за точность, полноту или актуальность информации. Информация на сайте не заменяет медицинскую консультацию."
                tr="Web sitemizin içerikleri büyük bir titizlikle derlenmiştir. Ancak bilgilerin doğruluğu, bütünlüğü veya güncelliği konusunda herhangi bir sorumluluk kabul edemeyiz. Ürünlerimiz ve açıklamaları tıbbi danışmanlık yerine geçmez."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="External Links Responsibility"
                ru="Ответственность за внешние ссылки"
                tr="Dış Bağlantı Sorumluluğu"
              />
            </h2>
            <p>
              <Translate
                en="Our website contains links to external, third-party websites. We have no influence over the contents of those websites. Therefore, we cannot accept any liability for their content. The respective providers or operators are responsible."
                ru="Наш веб-сайт содержит ссылки на внешние сторонние сайты. Мы не имеем влияния на их содержимое и не несем за него ответственности. За содержание таких сайтов всегда отвечает их провайдер или оператор."
                tr="Web sitemiz harici, üçüncü taraf web sitelerine bağlantılar içermektedir. Bu web sitelerinin içerikleri üzerinde hiçbir etkimiz yoktur. Bu nedenle, içeriklerinden dolayı herhangi bir sorumluluk kabul edemeyiz. Sorumluluk ilgili sağlayıcı veya işletmecilere aittir."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="Intellectual Property Rights"
                ru="Интеллектуальная собственность"
                tr="Fikri Mülkiyet Hakları"
              />
            </h2>
            <p>
              <Translate
                en="All materials published on this website, including texts, photographs, graphics, and layouts, are subject to copyright law. Any reproduction, processing, or distribution requires written permission from BP Agriculture Organic."
                ru="Все материалы, опубликованные на сайте, включая тексты, фотографии и графику, защищены законом об авторском праве. Любое воспроизведение или распространение требует письменного разрешения BP Agriculture Organic."
                tr="Bu web sitesinde yayınlanan metinler, fotoğraflar, grafikler ve mizanpajlar dahil tüm materyaller telif hakkı yasasına tabidir. Her türlü çoğaltma, işleme veya dağıtım BP Agriculture Organic'in yazılı iznini gerektirir."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="Dispute Resolution"
                ru="Разрешение споров"
                tr="Uyuşmazlık Çözümü"
              />
            </h2>
            <p>
              <Translate
                en="We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board. For European users, the online platform of the EU Commission for out-of-court dispute resolution is available."
                ru="Мы не обязаны участвовать в процедурах разрешения споров в потребительских арбитражных советах. Для пользователей из ЕС доступна онлайн-платформа Еврокомиссии по разрешению споров."
                tr="Tüketici hakem heyetleri nezdindeki uyuşmazlık çözüm prosedürlerine katılma yükümlülüğümüz veya niyetimiz yoktur. Avrupalı kullanıcılar için AB Komisyonu'nun mahkeme dışı uyuşmazlık çözümü platformu mevcuttur."
              />
            </p>
          </section>

          <section className="border-t border-white/10 pt-10 text-sm italic">
            <p>
              <Translate
                en="The legal validity of this notice is interpreted based on the laws of the Republic of Turkey, complemented by EU regulations where applicable."
                ru="Юридическая сила данного уведомления интерпретируется на основе законов Турецкой Республики и норм ЕС, где это применимо."
                tr="Bu bildirimin hukuki geçerliliği, varsa AB mevzuatıyla tamamlanan Türkiye Cumhuriyeti yasalarına göre yorumlanır."
              />
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
