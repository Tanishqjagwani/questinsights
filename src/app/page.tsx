import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Integrations from "@/components/Integrations";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Comparison />
      <Team />
      <Integrations />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
