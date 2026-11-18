import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Services from "@/components/portfolio/Services";
import About from "@/components/portfolio/About";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] overflow-hidden">
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Portfolio />

      <Contact />

      <Footer />
    </main>
  );
}