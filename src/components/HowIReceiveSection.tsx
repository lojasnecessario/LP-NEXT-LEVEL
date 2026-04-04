import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Trophy, ArrowRight } from 'lucide-react';

const HowIReceiveSection = () => {
    return (
        <section className="py-12 relative bg-[#050505] overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">Entrega Imediata</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                        Como recebo o <span className="text-emerald-500">aplicativo?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Sparkles className="w-6 h-6" />,
                            title: "Acesso Imediato",
                            description: "O sistema ficará disponível imediatamente após a confirmação da sua compra."
                        },
                        {
                            icon: <MessageCircle className="w-6 h-6" />,
                            title: "Link no E-mail",
                            description: "Enviamos o link de acesso e as instruções de instalação para o e-mail usado na compra."
                        },
                        {
                            icon: <Trophy className="w-6 h-6" />,
                            title: "Suporte 24h",
                            description: "Conte com nosso suporte e tutoriais passo a passo disponíveis logo no pós-compra."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default HowIReceiveSection;
