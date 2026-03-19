import { motion } from 'motion/react';

const TestimonialsSection = () => (
    <section className="py-12 bg-[#050505] overflow-hidden border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
                Quem já está no <span className="text-emerald-400">Próximo Nível</span>.
            </h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] bg-white/5"
            >
                {/* O usuário deve colocar a imagem nesta tag img */}
                <img 
                    src="/provasocial.png" 
                    alt="Depoimentos de usuários" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                        // Exibe um placeholder de estilo "Apple" caso a imagem falhe ao carregar
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'w-full aspect-video flex flex-col items-center justify-center text-gray-500 bg-gradient-to-br from-white/5 to-transparent p-10 text-center';
                            placeholder.innerHTML = '<span class="text-2xl font-bold mb-2">Imagem de Depoimentos</span><span class="text-sm">Substitua o arquivo "depoimentos.png" na pasta public</span>';
                            parent.appendChild(placeholder);
                        }
                    }}
                />
            </motion.div>
        </div>
    </section>
);

export default TestimonialsSection;
