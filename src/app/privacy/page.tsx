"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Translate from "@/components/Translate";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32">
      <Header />
      <div className="container mx-auto px-6 max-w-4xl py-20 pb-40">
        <h1 className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter text-[#cda558]">
          <Translate
            en="Privacy Policy"
            ru="Политика конфиденциальности"
            tr="Gizlilik Politikası"
          />
        </h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-12 text-white/70 text-lg leading-relaxed">
          <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="1. Data Controller"
                ru="1. Оператор данных"
                tr="1. Veri Sorumlusu"
              />
            </h2>
            <p>
              <Translate
                en="The entity responsible for processing personal data on this website is BP Agriculture Organic, located in Antalya, Turkey. For any questions regarding your data, contact us at bp.organika@gmail.com."
                ru="Ответственным лицом за обработку персональных данных на этом сайте является BP Agriculture Organic, расположенная в Анталии, Турция. По всем вопросам обращайтесь на bp.organika@gmail.com."
                tr="Bu web sitesindeki kişisel verilerin işlenmesinden sorumlu kuruluş, Antalya, Türkiye'de bulunan BP Agriculture Organic'tir. Verilerinizle ilgili her türlü soru için bp.organika@gmail.com adresinden bizimle iletişime geçin."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="2. Scope of Data Collection"
                ru="2. Объем сбора данных"
                tr="2. Veri Toplama Kapsamı"
              />
            </h2>
            <p className="mb-4">
              <Translate
                en="We collect information through our contact form and during your interaction with our website:"
                ru="Мы собираем информацию через регистрационную форму и в процессе вашего взаимодействия с сайтом:"
                tr="İletişim formumuz aracılığıyla ve web sitemizle etkileşiminiz sırasında bilgi topluyoruz:"
              />
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Translate
                  en="Contact details: Name, Email, Phone Number."
                  ru="Контактные данные: Имя, Email, Телефон."
                  tr="İletişim bilgileri: İsim, E-posta, Telefon Numarası."
                />
              </li>
              <li>
                <Translate
                  en="Technical data: IP address, browser type, device info (collected automatically for security and performance)."
                  ru="Технические данные: IP-адрес, тип браузера, информация об устройстве (собирается автоматически)."
                  tr="Teknik veriler: IP adresi, tarayıcı türü, cihaz bilgisi (güvenlik ve performans için otomatik olarak toplanır)."
                />
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="3. Purpose of Processing"
                ru="3. Цели обработки"
                tr="3. İşleme Amaçları"
              />
            </h2>
            <p>
              <Translate
                en="We process your data to: respond to your requests, provide customer support, analyze website performance via anonymized statistics, and ensure technical security. We do not sell your data to third parties."
                ru="Мы обрабатываем ваши данные, чтобы: отвечать на запросы, оказывать поддержку, анализировать работу сайта и обеспечивать безопасность. Мы не продаем ваши данные третьим лицам."
                tr="Verilerinizi şu amaçlarla işliyoruz: taleplerinize yanıt vermek, müşteri desteği sağlamak, anonim istatistikler aracılığıyla web sitesi performansını analiz etmek ve teknik güvenliği sağlamak. Verilerinizi üçüncü taraflara satmıyoruz."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="4. Legal Compliance (GDPR, KVKK, FZ-152)"
                ru="4. Соответствие законодательству"
                tr="4. Yasal Uyumluluk"
              />
            </h2>
            <p>
              <Translate
                en="We adhere to global standards: GDPR for European users, KVKK for Turkish users, and Federal Law 152-FZ for Russian users. Data of Russian citizens is stored and processed on servers within the Russian Federation as required by local law."
                ru="Мы соблюдаем мировые стандарты: GDPR для пользователей из Европы, KVKK для Турции и ФЗ-152 для России. Данные граждан РФ обрабатываются на серверах внутри РФ, согласно закону."
                tr="Küresel standartlara uyuyoruz: Avrupalı kullanıcılar için GDPR, Türk kullanıcılar için KVKK ve Rus kullanıcılar için 152-FZ sayılı Federal Yasa. Rus vatandaşlarının verileri, yerel yasaların gerektirdiği şekilde Rusya Federasyonu içindeki sunucularda saklanır ve işlenir."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="5. Cookies & Analytics"
                ru="5. Cookies и аналитика"
                tr="5. Çerezler ve Analiz"
              />
            </h2>
            <p>
              <Translate
                en="This website uses essential cookies for technical functionality. We may use anonymized analytics tools to improve user experience. You can disable cookies in your browser settings."
                ru="Этот сайт использует необходимые файлы cookie для работы. Мы можем использовать анонимную аналитику для улучшения сайта. Вы можете отключить cookie в настройках браузера."
                tr="Bu web sitesi teknik işlevsellik için gerekli çerezleri kullanır. Kullanıcı deneyimini iyileştirmek için anonimleştirilmiş analiz araçları kullanabiliriz. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              <Translate
                en="6. Your Rights"
                ru="6. Ваши права"
                tr="6. Haklarınız"
              />
            </h2>
            <p>
              <Translate
                en="You have the right to: access your data, request its correction or deletion, withdraw consent for processing, and file a complaint with your local data protection authority."
                ru="Вы имеете право: на доступ к данным, их исправление или удаление, отзыв согласия на обработку и подачу жалоб в надзорные органы."
                tr="Şu haklara sahipsiniz: verilerinize erişim, düzeltme veya silme talebi, işleme onayını geri çekme ve yerel veri koruma makamına şikayette bulunma."
              />
            </p>
          </section>

          <section className="border-t border-white/10 pt-10 text-sm italic">
            <p>
              <Translate
                en="Last updated: March 2026. This policy may be updated periodically to reflect changes in our practices or legal obligations."
                ru="Последнее обновление: Март 2026. Политика может обновляться в связи с изменениями законодательства или наших внутренних процессов."
                tr="Son güncelleme: Mart 2026. Bu politika, uygulamalarımızdaki veya yasal yükümlülüklerimizdeki değişiklikleri yansıtmak için periyodik olarak güncellenebilir."
              />
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
