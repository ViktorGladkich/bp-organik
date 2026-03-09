import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicHero from "@/components/sections/DynamicHero";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import Advantages from "@/components/sections/Advantages";
import Certificates from "@/components/sections/Certificates";
import About from "@/components/sections/About";
import Halal from "@/components/sections/Halal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] font-sans text-white">
      <Header />
      <DynamicHero />
      <HowItWorks />
      <Products />
      <Advantages />
      <Certificates />
      <About />
      <Halal />
      <Contact />
      <Footer />
    </main>
  );
}
