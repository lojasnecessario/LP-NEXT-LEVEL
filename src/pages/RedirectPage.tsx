import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function RedirectPage() {
    const gatewayUrl = "https://pay.cakto.com.br/dj7mm52_776346";
    const redirectDelayMs = 6000;

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = gatewayUrl;
        }, redirectDelayMs);

        return () => clearTimeout(timer);
    }, []);

    const testimonials = [
        {
            id: 1,
            image: "/Dep1.png",
            alt: "Depoimento 1"
        },
        {
            id: 2,
            image: "/Dep2.png",
            alt: "Depoimento 2"
        },
        {
            id: 3,
            image: "/Dep3.png",
            alt: "Depoimento 3"
        }
    ];

    return (
        <div className="h-[100dvh] w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center p-4 text-center font-['Plus_Jakarta_Sans']">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl h-full flex flex-col justify-between py-6 md:py-12"
            >
                <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-12">
                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                            Parabéns pela sua escolha,
                        </span>
                        <br />
                        bem vindo a sua nova vida!
                    </h1>

                    {/* Loading Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <Loader2 className="w-10 h-10 md:w-16 md:h-16 text-emerald-500 animate-spin mb-4" />
                        <p className="text-sm sm:text-base md:text-2xl font-medium text-gray-300">
                            Estamos te redirecionando para o pagamento...
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="w-full mt-auto pt-4"
                >
                    <p className="text-xs sm:text-sm md:text-lg text-gray-400 mb-4 font-medium uppercase tracking-wider">Veja quem já transformou sua vida</p>

                    {/* Horizontal scroll on mobile, grid on desktop */}
                    <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pb-4 snap-x snap-mandatory scrollbar-hide w-full max-w-5xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="flex-none w-[85%] md:w-full snap-center relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 group bg-white/5 border border-white/10 flex items-center justify-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.alt}
                                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>

        </div>
    );
}
