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
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center font-['Plus_Jakarta_Sans']">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl space-y-8"
            >
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
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
                    className="flex flex-col items-center justify-center space-y-4 py-8"
                >
                    <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
                    <p className="text-xl md:text-2xl font-medium text-gray-300">
                        Estamos te redirecionando para o pagamento...
                    </p>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="pt-12"
                >
                    <p className="text-lg text-gray-400 mb-8 font-medium uppercase tracking-wider">Veja quem já transformou sua vida</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 border border-white/10 group">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>

        </div>
    );
}
