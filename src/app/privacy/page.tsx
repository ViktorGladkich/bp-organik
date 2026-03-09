"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Translate from "@/components/Translate";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32">
      <Header />
      <div className="container mx-auto px-6 max-w-4xl py-20 pb-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 italic uppercase tracking-tighter">
          <Translate
            en="Privacy Policy"
            ru="Политика конфиденциальности"
            tr="Gizlilik Politikası"
          />
        </h1>

        <div className="prose prose-invert prose-gold max-w-none space-y-10 text-white/70 text-lg leading-relaxed">
          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              1.{" "}
              <Translate
                en="General Information"
                ru="Общие положения"
                tr="Genel Bilgiler"
              />
            </h2>
            <p>
              <Translate
                en="This Privacy Policy governs the processing of personal data by BP ORGANIK in accordance with the GDPR (EU), KVKK (Turkey), and Federal Law No. 152-FZ (Russia)."
                ru="Настоящая политика конфиденциальности регулирует обработку персональных данных компанией BP ORGANIK в соответствии с GDPR (ЕС), KVKK (Турция) и ФЗ-152 (Россия)."
                tr="Bu Gizlilik Politikası, kişisel verilerin BP ORGANIK tarafından GDPR (AB), KVKK (Türkiye) ve Federal Yasası No. 152-FZ (Rusya) uyarınca işlenmesini düzenler."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              2.{" "}
              <Translate
                en="Data Collection"
                ru="Сбор данных"
                tr="Veri Toplama"
              />
            </h2>
            <p>
              <Translate
                en="We collect only the data you provide through our contact form: name, email address, or phone number. This data is used solely to contact you regarding your request."
                ru="Мы собираем только те данные, которые вы предоставляете через форму обратной связи: имя, адрес электронной почты или номер телефона. Эти данные используются исключительно для связи с вами по вашему запросу."
                tr="Sadece iletişim formumuz aracılığıyla sağladığınız verileri topluyoruz: isim, e-posta adresi veya telefon numarası. Bu veriler yalnızca talebinizle ilgili olarak sizinle iletişime geçmek için kullanılır."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              3.{" "}
              <Translate
                en="Data Protection"
                ru="Защита данных"
                tr="Veri Güvenliği"
              />
            </h2>
            <p>
              <Translate
                en="Your data is stored securely and is not shared with third parties. In accordance with Russian Law 152-FZ, data of Russian citizens is processed on servers within the Russian Federation where applicable."
                ru="Ваши данные хранятся в безопасности и не передаются третьим лицам. В соответствии с ФЗ-152, данные граждан РФ обрабатываются на серверах, расположенных на территории РФ, где это применимо."
                tr="Verileriniz güvenli bir şekilde saklanır ve üçüncü taraflarla paylaşılmaz. Rus Yasası 152-FZ uyarınca, Rus vatandaşlarının verileri geçerli olduğunda Rusya Federasyonu içindeki sunucularda işlenir."
              />
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              4. <Translate en="Your Rights" ru="Ваши права" tr="Haklarınız" />
            </h2>
            <p>
              <Translate
                en="You have the right to request access, correction, or deletion of your personal data at any time by contacting us at bp.organika@gmail.com."
                ru="Вы имеете право в любое время запросить доступ, исправление или удаление ваших персональных данных, связавшись с нами по адресу bp.organika@gmail.com."
                tr="Verilerinize erişim, düzeltme veya silme talebinde bulunma hakkına her zaman sahipsiniz. Bizimle bp.organika@gmail.com adresinden iletişime geçebilirsiniz."
              />
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
