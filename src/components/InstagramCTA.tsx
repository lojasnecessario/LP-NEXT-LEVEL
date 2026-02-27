import { Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const InstagramCTA = () => (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <Instagram className="w-10 h-10 text-emerald-500" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        <a
                            href="https://www.instagram.com/sociedade.nextlevel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 md:mt-0 flex-shrink-0"
                        >
                            Nos siga no <span className="text-emerald-400">Instagram</span>
                        </a>
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Acompanhe bastidores, dicas de alta performance, atualizações do app e junte-se à nossa comunidade exclusiva que não aceita a mediocridade.
                    </p>

                    <button
                        onClick={() => window.open('https://www.instagram.com/sociedade.nextlevel/', '_blank')}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 group/btn active:scale-95 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/40"
                    >
                        Seguir @sociedade.nextlevel
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

export default InstagramCTA;
