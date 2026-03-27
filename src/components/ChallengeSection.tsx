import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

const ChallengeSection = () => {
    return (
        <section className="py-12 relative bg-[#050505] overflow-clip border-y border-white/5">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                >
                    <Trophy className="w-10 h-10 text-black" />
                </motion.div>
 
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-6 leading-tight"
                >
                    participe do <span className="whitespace-nowrap">desafio 30 dias</span> e concorra a <span className="text-emerald-400">150 reais</span>
                </motion.h2>
 
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-gray-400 font-medium max-w-3xl mx-auto mb-10"
                >
                    se você focar 30 dias consecutivos no app vai concorrer a 150 reais, literalmente estamos pagando pela sua disciplina
                </motion.p>
            </div>
        </section>
    );
};

export default ChallengeSection;
