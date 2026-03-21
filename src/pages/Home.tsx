import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AnnouncementTicker from '../components/AnnouncementTicker';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import NoExcusesSection from '../components/NoExcusesSection';
import RoutineSection from '../components/RoutineSection';
import BodyMindSection from '../components/BodyMindSection';
import DietSection from '../components/DietSection';
import EvolutionSection from '../components/EvolutionSection';
import PricingSection from '../components/PricingSection';
import ChallengeSection from '../components/ChallengeSection';
import FAQSection from '../components/FAQSection';
import InstagramCTA from '../components/InstagramCTA';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
            <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <HeroSection />
            <AnnouncementTicker />
            <ProblemSolutionSection />
            <NoExcusesSection />
            <RoutineSection />
            <BodyMindSection />
            <DietSection />
            <EvolutionSection />
            <ChallengeSection />
            <PricingSection />
            <FAQSection />
            <InstagramCTA />
            <FinalCTASection />
            <Footer />
        </div>
    );
}
