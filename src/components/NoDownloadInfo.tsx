import { motion } from 'motion/react';
import { Smartphone, Globe, Monitor } from 'lucide-react';

const NoDownloadInfo = () => {
    return (
        <section className="py-8 bg-[#0a0a0a] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
                >
                    <div className="flex items-center gap-4 text-emerald-400">
                        <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
                        <Globe className="w-5 h-5 md:w-6 md:h-6" />
                        <Monitor className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    <p className="text-gray-300 font-bold text-base md:text-xl tracking-tight">
                        Não precisa fazer download, o app roda em <span className="text-white">qualquer navegador</span> de <span className="text-white">qualquer dispositivo</span>.
                    </p>
                    
                    <div className="hidden md:block w-32 h-px bg-gradient-to-r from-emerald-500/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default NoDownloadInfo;
