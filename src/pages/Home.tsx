import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import NoExcusesSection from '../components/NoExcusesSection';
import RoutineSection from '../components/RoutineSection';
import BodyMindSection from '../components/BodyMindSection';
import DietSection from '../components/DietSection';
import EvolutionSection from '../components/EvolutionSection';
import PricingSection from '../components/PricingSection';
import HowIReceiveSection from '../components/HowIReceiveSection';
import FAQSection from '../components/FAQSection';
import InstagramCTA from '../components/InstagramCTA';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import FinanceSection from '../components/FinanceSection';
import RankingSection from '../components/RankingSection';
import ComparisonSection from '../components/ComparisonSection';
import StepByStepSection from '../components/StepByStepSection';
import DiscountPopup from '../components/DiscountPopup';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
            <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <HeroSection />
            <ComparisonSection />
            <ProblemSolutionSection />
            <NoExcusesSection />
            <RoutineSection />
            <BodyMindSection />
            <DietSection />
            <FinanceSection />
            <RankingSection />
            <EvolutionSection />
            <HowIReceiveSection />
            <PricingSection />
            <FAQSection />
            <InstagramCTA />
            <FinalCTASection />
            <Footer />
            <DiscountPopup />
        </div>
    );
}
