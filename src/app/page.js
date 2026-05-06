import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import Portfolio from "@/components/Portfolio";
import QuoteEstimator from "@/components/QuoteEstimator";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import BeyondPainting from "@/components/BeyondPainting";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Credibility />
        <Portfolio />
        <QuoteEstimator />
        <Process />
        <Testimonials />
        <BeyondPainting />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
