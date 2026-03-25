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
import FinanceSection from '../components/FinanceSection';
import DiscountPopup from '../components/DiscountPopup';
import ReleaseNotification from '../components/ReleaseNotification';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showRest, setShowRest] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        const timer = setTimeout(() => {
            setShowRest(true);
        }, 30000); // 30 seconds

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
            <ReleaseNotification isVisible={showRest} />
            {showRest && (
                <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            )}
            
            <HeroSection />

            {showRest && (
                <>
                    <AnnouncementTicker />
                    <ProblemSolutionSection />
                    <NoExcusesSection />
                    <RoutineSection />
                    <FinanceSection />
                    <BodyMindSection />
                    <DietSection />
                    <EvolutionSection />
                    <ChallengeSection />
                    <PricingSection />
                    <FAQSection />
                    <InstagramCTA />
                    <FinalCTASection />
                    <Footer />
                    <DiscountPopup />
                </>
            )}
        </div>
    );
}
