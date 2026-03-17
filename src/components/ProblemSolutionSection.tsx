import { motion } from 'motion/react';
import { AlertCircle, Target, Crosshair } from 'lucide-react';

const ProblemSolutionSection = () => {
    return (
        <section className="py-12 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-red-500/5 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 mb-16 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
                >
                    Seu sucesso depende das suas <span className="text-emerald-400">decisões</span>.
                </motion.h2>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row shadow-2xl items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 glass p-10 md:p-14 rounded-[2rem] border-red-500/10 text-left relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-[50px] rounded-full pointer-events-none" />
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                        <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                        Viver no automático está <span className="text-red-400">destruindo</span> seu potencial.
                    </h3>
                    
                    <div className="space-y-4 text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        <p>
                            Todo dia a mesma promessa de mudar. Todo dia o mesmo ciclo de procrastinação, culpa e insatisfação ao olhar pelo espelho.
                        </p>
                        <p>
                            Você tem ambições maiores, mas a <span className="text-gray-200">falta de sistema</span> te prende em uma rotina fraca e desorganizada.
                        </p>
                    </div>
                </motion.div>

                <div className="hidden md:flex flex-col items-center justify-center gap-4 text-gray-500">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent to-emerald-500/30" />
                    <Crosshair className="w-10 h-10 text-emerald-500/50" />
                    <div className="w-px h-16 bg-gradient-to-t from-transparent to-emerald-500/30" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 glass p-10 md:p-14 rounded-[2rem] border-emerald-500/20 text-left relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
                >
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <Target className="w-8 h-8 text-emerald-500" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-white">
                        É hora de assumir todo seu <span className="text-emerald-400">potencial e energia</span>.
                    </h3>
                    
                    <div className="space-y-6 text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
                        <p>
                            Criada para aqueles que não aceitam ter seu potencial desperdiçados por procrastinação e vícios modernos. 
                        </p>
                        <p>
                            A I.A do <span className="text-white font-bold tracking-tight">Next Level</span> assume o controle da sua rotina, faz seu treino e dieta para que você conquiste:
                        </p>
                        
                        <div className="flex items-center gap-3 md:gap-6 pt-4 overflow-x-visible">
                            {[
                                { label: 'Mente', color: 'from-emerald-400 to-teal-500' },
                                { label: 'Shape', color: 'from-blue-400 to-indigo-500' },
                                { label: 'Bolso', color: 'from-amber-400 to-yellow-500' }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ 
                                        delay: 0.4 + (i * 0.15),
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    className="relative group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
                                    <span className={`relative block bg-black/40 backdrop-blur-md border border-white/10 px-5 md:px-8 py-2.5 md:py-4 rounded-2xl md:rounded-3xl text-sm md:text-2xl font-black uppercase tracking-tighter text-white shadow-2xl transition-transform group-hover:-translate-y-1`}>
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
