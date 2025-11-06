import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import About from "@/components/about";
import Results from "@/components/results";
import GlobalExcellence from "@/components/excellence";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GlobalExcellence />
      <Services />
      <About/>
      <Results/>
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}