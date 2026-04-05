import { motion } from 'motion/react';

const BodyMindSection = () => {
    return (
        <section className="py-12 relative bg-[#050505] overflow-hidden border-y border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-12 leading-tight"
                >
                    seu corpo <span className="text-indigo-500">trabalha junto</span> com a sua mente
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: "transform, opacity" }}
                    className="relative w-full aspect-[4/5] md:aspect-video bg-indigo-950/20 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.1)] border border-indigo-500/20 mb-10 mx-auto max-w-3xl flex items-center justify-center transform-gpu"
                >
                    <img 
                        src="/workout.gif" 
                        alt="Workout Demo" 
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        decoding="sync"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto"
                >
                    já treina ou quer treinar mas se sente perdido? A I.A gera seus treinos com exercicios, repetições e séries.
                </motion.p>
            </div>
        </section>
    );
};

export default BodyMindSection;
