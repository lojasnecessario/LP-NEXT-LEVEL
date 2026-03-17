import { motion } from 'motion/react';
import { Trophy, ShieldCheck, Zap } from 'lucide-react';

const ChallengeSection = () => {
    return (
        <section id="desafio" className="py-12 bg-[#050505] relative overflow-clip border-y border-white/5">
            {/* Background elements apple-style blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-14 rounded-[2rem] border-emerald-500/20 shadow-[0_8px_32px_rgba(34,197,94,0.05)] relative overflow-hidden"
                >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[50px] rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full" />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-emerald-400 font-bold text-sm mb-8 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <Zap className="w-4 h-4" /> NOVIDADE IMPERDÍVEL
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight">
                        Seja disciplinado e concorra a <span className="text-emerald-400">R$150</span>
                    </h2>

                    <div className="space-y-6 text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                        <p>
                            Durante 30 dias você precisa executar suas missões todos os dias.
                        </p>
                        <p className="text-white font-black text-2xl md:text-3xl tracking-tight">
                            Sem falhar. Sem desculpas.
                        </p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl mx-auto max-w-2xl text-left">
                        <p className="text-lg md:text-xl font-bold text-white mb-6 text-center">
                            Se você completar 30 dias ofensivos, você:
                        </p>
                        <ul className="space-y-6 max-w-md mx-auto">
                            <li className="flex items-center gap-4 text-lg text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                                    <Trophy className="w-5 h-5 text-emerald-500" />
                                </div>
                                <span className="font-medium">entra no ranking da comunidade</span>
                            </li>
                            <li className="flex items-center gap-4 text-lg text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                                </div>
                                <span className="font-medium">prova sua disciplina</span>
                            </li>
                            <li className="flex items-center gap-4 text-lg text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20 font-black text-emerald-500 text-lg">
                                    R$
                                </div>
                                <span className="font-medium">concorre a R$150 via Pix</span>
                            </li>
                        </ul>
                        <div className="pt-8 flex flex-col items-center">
                            <motion.a
                                href="#pricing"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] border border-emerald-400/20"
                            >
                                Começar Desafio 30 Dias
                            </motion.a>
                            <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest font-black">
                                Vagas limitadas para o ranking atual
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ChallengeSection;
