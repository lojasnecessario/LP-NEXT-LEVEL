import { motion } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
    
    const handleCheckout = () => {
        trackMetaEvent('InitiateCheckout', { currency: 'BRL', value: 29.90 });
        window.location.href = 'https://pay.kiwify.com.br/hC9n4uM'; // GATEWAY PLACEHOLDER
    };

    return (
        <section className="py-12 relative bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-clip flex flex-col items-center border-t border-white/5 text-center">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter leading-tight mb-8"
                >
                    AGORA SÓ DEPENDE DE <span className="text-emerald-500">VOCÊ</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-medium"
                >
                    Não perca a chance de transformar sua rotina, corpo e mente com o aplicativo definitivo para homens de alto valor. O desconto acaba logo.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <button 
                        onClick={handleCheckout}
                        className="group bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-bold text-lg md:text-2xl uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] active:scale-95 flex items-center gap-3 w-full md:w-auto justify-center"
                    >
                        Quero mudar de vida hoje
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;
