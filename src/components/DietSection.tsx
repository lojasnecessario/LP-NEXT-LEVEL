import { motion } from 'motion/react';

const DietSection = () => {
    return (
        <section className="py-12 relative bg-[#0a0a0a] overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-12 leading-tight"
                >
                    Dieta feita para quem quer se <span className="text-amber-500">transformar</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full aspect-[4/5] md:aspect-video bg-amber-950/20 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.1)] border border-amber-500/20 mb-10 mx-auto max-w-3xl flex items-center justify-center"
                >
                    {/* Placeholder for GIF */}
                    <img 
                        src="/diet.gif" 
                        alt="Diet Demo" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto"
                >
                    Uma mente e um corpo forte precisam de uma alimentação correta e a nossa I.A faz tudo isso por você, controle sua dieta registrando suas refeições
                </motion.p>
            </div>
        </section>
    );
};

export default DietSection;
