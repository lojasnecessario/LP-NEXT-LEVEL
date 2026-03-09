import { motion } from 'motion/react';
import { Target, Layers, Compass, BrainCircuit, AlertCircle } from 'lucide-react';

const ProblemAgitation = () => {
    return (
        <section className="py-12 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                        <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                        Não existe remédio para procrastinação
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-emerald-500">
                        Mas existe sistema
                    </h3>

                    <div className="space-y-6 text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        <p>
                            Você jura que não é preguiça, é algo <span className="text-gray-200">mais forte que você...</span> Quando não sente que está atrasado, se sente perdido...
                        </p>
                        <p>
                            Já fez métodos inimagináveis para tentar fugir da procrastinação.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-2xl font-bold text-center mb-10 text-white">
                        Mas não te falta método, <span className="text-emerald-400">te falta:</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
                            <Layers className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-lg text-white">Sistema</span>
                        </div>
                        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
                            <Compass className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-lg text-white">Organização</span>
                        </div>
                        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/30 transition-colors">
                            <Target className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-lg text-white">Estratégia</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-600/20 border border-emerald-500/30 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                            <BrainCircuit className="w-8 h-8 text-black" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-xl md:text-2xl font-black text-white leading-tight">
                                E uma <span className="text-emerald-400">Inteligência Artificial baseada em ciência</span> que faz tudo isso por você.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemAgitation;
