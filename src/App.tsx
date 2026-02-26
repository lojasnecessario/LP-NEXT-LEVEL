import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import AppShowcase from './components/AppShowcase';
import OverviewSection from './components/OverviewSection';
import ScienceSection from './components/ScienceSection';
import HowItWorksSection from './components/HowItWorksSection';
import WorkoutSection from './components/WorkoutSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import PricingSection from './components/PricingSection';
import InstagramCTA from './components/InstagramCTA';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ProblemSolutionSection />

      <section id="features" className="py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Sua vida, <span className="gradient-text">organizada pela IA</span>.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Veja como o Next Level transforma sua rotina em uma jornada de alta performance com uma interface intuitiva e viciante.
            </p>
          </div>
          <AppShowcase />
        </div>
      </section>

      <OverviewSection />

      <ScienceSection />
      <HowItWorksSection />
      <WorkoutSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <InstagramCTA />
      <Footer />
    </div>
  );
}
