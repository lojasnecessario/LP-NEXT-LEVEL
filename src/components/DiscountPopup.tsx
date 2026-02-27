import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tag, X } from 'lucide-react';

const DiscountPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Find elements to base scroll position on
            const featuresEl = document.getElementById('features');
            const pricingEl = document.getElementById('pricing');

            const featuresBottom = featuresEl ? featuresEl.offsetTop + featuresEl.offsetHeight : 1500;
            const pricingTop = pricingEl ? pricingEl.offsetTop : Infinity;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Show popup after scrolling past the AppShowcase/features section
            // and hide it when getting close to the pricing section.
            if (scrollY > featuresBottom - windowHeight / 2 && scrollY < pricingTop - windowHeight && !isDismissed) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Check initially
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed bottom-8 right-8 z-[100] max-w-sm w-[calc(100%-2rem)]"
                >
                    <div
                        onClick={() => {
                            const pricing = document.getElementById('pricing');
                            pricing?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="glass p-5 rounded-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 flex items-start gap-4 relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                            <Tag className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="flex-1 pt-1 pr-4">
                            <h4 className="text-white font-bold mb-1 leading-tight text-[15px]">Você ganhou 44% de desconto!</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">De R$89,90 por apenas R$49,90 mensais. Clique para resgatar agora.</p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDismissed(true);
                            }}
                            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white transition-colors"
                            aria-label="Fechar"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DiscountPopup;
