import { Smartphone, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

const PlatformInfoSection = () => {
    return (
        <section className="py-8 bg-emerald-900/10 border-y border-emerald-500/10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full bg-black border border-emerald-500/30 flex items-center justify-center shadow-lg relative z-10">
                            <Smartphone className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#111] border border-emerald-500/20 flex items-center justify-center shadow-lg">
                            <Monitor className="w-5 h-5 text-emerald-400/80" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-1">100% Online e Pronto para Uso</h3>
                        <p className="text-gray-400 text-sm">
                            Você não precisa baixar nenhum aplicativo. Nosso ecossistema funciona direto no navegador do seu celular, tablet ou computador, basta entrar e fazer login.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PlatformInfoSection;
