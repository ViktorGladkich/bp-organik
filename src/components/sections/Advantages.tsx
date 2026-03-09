import Translate from "@/components/Translate";

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center border-t border-white/5"
    >
      {/* Decorative dark elements */}
      <div className="absolute top-[10%] left-[-15%] md:left-[-5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#111] rounded-full opacity-50 flex items-center justify-center shadow-inner">
        <svg
          viewBox="0 0 24 24"
          className="w-1/2 h-1/2 text-[#cda558] fill-current drop-shadow-xl transform -rotate-12 opacity-10"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>

      <div className="absolute top-[40%] right-[-15%] md:right-[-5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#111] rounded-full opacity-50 flex items-center justify-center mb-10 shadow-inner">
        <svg
          viewBox="0 0 24 24"
          className="w-1/2 h-1/2 text-[#cda558] fill-current drop-shadow-xl transform rotate-12 opacity-10"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <h2
            className={`font-sans font-medium text-4xl md:text-6xl xl:text-[70px] tracking-tight text-[#cda558] uppercase mb-2 leading-[1.05] drop-shadow-sm`}
          >
            <Translate en="ADVANTAGES" ru="ПРЕИМУЩЕСТВА" tr="AVANTAJLAR" />
          </h2>
          <h3
            className={`font-sans font-medium text-xl md:text-[30px] tracking-tight text-white/50 uppercase leading-none drop-shadow-sm`}
          >
            <Translate en="OF THE COMPLEX" ru="КОМПЛЕКСА" tr="KOMPLEKSIN" />
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mt-16">
          {/* Left Text Box */}
          <div className="flex-1 text-white/70 text-lg md:text-2xl leading-relaxed font-sans font-medium space-y-6 max-w-lg text-center md:text-left">
            <p>
              <Translate
                en="Our natural recovery formula is built from pure organic compounds containing essential fatty acids and nutrients specifically adapted for peak physical performance."
                ru="Наша природная формула восстановления создана из чистых органических соединений, содержащих незаменимые кислоты и нутриенты, специально подобранные для пиковых физических нагрузок."
                tr="Doğal toparlanma formülümüz, en yüksek fiziksel performans için özel olarak uyarlanmış temel yağ asitleri ve besin maddeleri içeren saf organik bileşiklerden oluşturulmuştur."
              />
            </p>
            <p>
              <Translate
                en="They act as a vital class of bio-accelerators, providing multi-directional beneficial effects: repairing tissues, reducing inflammation, and replenishing extreme energy loss."
                ru="Они действуют как жизненно важный класс био-ускорителей, оказывая разнонаправленные полезные эффекты: восстановление тканей, снижение воспаления и восполнение экстремальных энергозатрат."
                tr="Dokuları onarmaya, iltihabı azaltmaya ve aşırı enerji kaybını telafi etmeye yönelik çok yönlü faydalı etkiler sağlayan hayati bir biyo-hızlandırıcı sınıfı olarak hareket ederler."
              />
            </p>
          </div>

          {/* Right Checklist */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-8">
              {[
                {
                  en: "100% natural and Halal",
                  ru: "100% натурально и Халяль",
                  tr: "100% Doğal ve Helal",
                },
                {
                  en: "Maximum bioavailability",
                  ru: "Максимальная биодоступность",
                  tr: "Maksimum biyoyararlanım",
                },
                {
                  en: "Accelerates tissue regeneration",
                  ru: "Ускоряет регенерацию мышечной ткани",
                  tr: "Doku yenilenmesini hızlandırır",
                },
                {
                  en: "Increases pain threshold & endurance",
                  ru: "Повышает болевой порог и выносливость",
                  tr: "Ağrı eşiğini ve dayanıklılığı artırır",
                },
                {
                  en: "No doping, 100% legal for sports",
                  ru: "Не является допингом, разрешено в спорте",
                  tr: "Doping içermez, spor için %100 yasal",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-white text-xl md:text-2xl font-sans font-medium"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 mr-6 text-[#cda558] shrink-0 drop-shadow-[0_0_10px_rgba(205,165,88,0.3)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <Translate en={item.en} ru={item.ru} tr={item.tr} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
