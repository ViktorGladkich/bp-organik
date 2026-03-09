import Image from "next/image";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="w-full py-24 bg-[#0a0a0a] flex relative overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center gap-16">
        <div className="w-full mb-8 text-center text-white/80 text-xl md:text-[26px] max-w-5xl mx-auto font-medium font-sans leading-relaxed">
          The company has all the necessary quality certificates, medical
          reports, and documents confirming the product&apos;s safety.
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left text with gold rounded line */}
          <div className="w-full lg:w-1/3 flex items-start gap-6">
            <span className="w-4 h-36 md:h-48 bg-[#cda558] rounded-full shrink-0" />
            <p className="text-2xl md:text-[32px] leading-snug text-white/90 font-sans font-medium mt-2">
              Certificates of conformity and test reports were received in
              Russia, as well as a declaration of conformity from the Eurasian
              Economic Union.
            </p>
          </div>

          {/* Right 3x3 grid of certificates */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[1/1.4] bg-[#111] shadow-2xl border border-white/5 hover:border-[#cda558]/30 transition-all cursor-pointer p-1 rounded-sm"
              >
                <Image
                  src={`/cert-${idx}.jpg`}
                  fill
                  alt={`Certificate ${idx}`}
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-center text-xl md:text-[28px] font-medium font-sans leading-relaxed text-white/70 mt-10 max-w-4xl">
          Our product is approved for sale in pharmacies.
          <br className="hidden md:block" />
          This is a natural product, in the production of which all sanitary
          standards are strictly observed.
        </div>
      </div>
    </section>
  );
}
