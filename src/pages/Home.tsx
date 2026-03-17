import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AnnouncementTicker from '../components/AnnouncementTicker';
import ChallengeSection from '../components/ChallengeSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import NoDownloadInfo from '../components/NoDownloadInfo';
import MentorRomeoSection from '../components/MentorRomeoSection';
import AppShowcase from '../components/AppShowcase';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import InstagramCTA from '../components/InstagramCTA';
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
        <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
            <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <HeroSection />
            <AnnouncementTicker />
            <ProblemSolutionSection />
            <HowItWorksSection />
            <NoDownloadInfo />
            <MentorRomeoSection />
            <ChallengeSection />
            
            {/* Seção intacta: Sua vida, organizada pela IA */}
            <section id="features" className="py-12 overflow-clip">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Sua vida, <span className="gradient-text">organizada pela IA</span>.
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A primeira inteligência artificial de alta-performance que constrói sua rotina ideal e treinos personalizados.
                        </p>
                    </div>
                    <AppShowcase />
                </div>
            </section>

            <TestimonialsSection />
            <PricingSection />
            <InstagramCTA />
            <Footer />
        </div>
    );
}
