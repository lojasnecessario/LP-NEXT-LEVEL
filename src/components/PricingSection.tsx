import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';
import { ShieldCheck, Check, Lock, CheckCircle2 } from 'lucide-react';

const PricingSection = () => {
    // Timer Logic 10 minutes (600 seconds)
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const valueStack = [
        { name: "I.A que gera rotinas, treinos e dietas", value: "99,00" },
        { name: "Dashboard com missões diárias, dias vencidos", value: "49,90" },
        { name: "Planner de Treinos personalizados", value: "99,90" },
        { name: "Controle da dieta", value: "29,90" },
        { name: "Controle financeiro com assistente I.A", value: "0,00" },
        { name: "Protocolo de Energia e Foco", value: "0,00" },
        { name: "Controle de livros lidos", value: "19,90" },
        { name: "Recompensas fisicas", value: "19,90" },
        { name: "Atualizações do app", value: "79,90" },
    ];

    const handleCheckout = () => {
        trackMetaEvent('InitiateCheckout', { currency: 'BRL', value: 29.99 });
        window.location.href = 'https://pay.cakto.com.br/dj7mm52_776346'; // GATEWAY PLACEHOLDER (Use original gateway if known, I'll use a placeholder or generic # for now)
    };

    return (
        <section id="pricing" className="py-12 relative bg-[#050505] overflow-clip">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-emerald-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-4"
                >
                    A pergunta não é: <span className="text-gray-500">Quanto custa o app</span>
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-bold text-emerald-400 uppercase tracking-tighter mb-16"
                >
                    A pergunta é: Quanto custa mudar minha vida hoje
                </motion.h3>

                <div className="glass max-w-2xl mx-auto border-emerald-500/20 rounded-[2rem] p-8 md:p-12 relative overflow-hidden text-left shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />
                    
                    <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">O que você recebe:</h4>
                    
                    <ul className="space-y-4 mb-8">
                        {valueStack.map((item, idx) => (
                            <li key={idx} className="flex justify-between items-center text-gray-400 group hover:text-gray-200 transition-colors">
                                <span className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm md:text-base">{item.name}</span>
                                </span>
                                <span className={`text-sm md:text-base font-medium ${item.value === "0,00" ? "text-emerald-400 font-bold" : "line-through decoration-red-500/50 decoration-2"}`}>
                                    {item.value === "0,00" ? "BÔNUS" : `R$ ${item.value}`}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-white/10 pt-8 text-center">
                        <p className="text-gray-400 text-lg mb-2">de <span className="line-through decoration-red-500 text-gray-500">R$ 398,40</span> por apenas:</p>
                        
                        <div className="flex justify-center items-baseline gap-2 mb-4">
                            <span className="text-5xl md:text-7xl font-black text-white">29,99</span>
                        </div>

                        {/* Neon Bonus Badge */}
                        <div className="mb-6">
                            <div className="inline-block px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse">
                                <p className="text-[10px] md:text-xs font-black text-emerald-400 uppercase tracking-[0.2em]">
                                    receba o bonus exclusivo: <span className="text-white">protocolo de energia e foco</span>
                                </p>
                            </div>
                        </div>

                        <p className="text-emerald-400 font-bold mb-8">ou 6x de R$ 5,89</p>

                        {/* Timer */}
                        <div className="mb-8">
                            <p className="text-sm text-red-400 font-bold uppercase tracking-wider mb-2">Oferta expira em:</p>
                            <div className="flex justify-center gap-2">
                                <div className="bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-2xl font-bold px-4 py-2 rounded-lg">
                                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handleCheckout}
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-full font-bold text-xl uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] active:scale-95 mb-4"
                        >
                            garantir acesso vitálicio
                        </button>
                        
                        <div className="flex flex-col items-center gap-2 text-sm text-gray-400 font-medium mb-8">
                            <span className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" /> pagamento unico • nunca mais pague novamente
                            </span>
                        </div>

                        {/* 7-Day Guarantee */}
                        <div className="flex items-center justify-center gap-4 py-4 px-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl mb-8">
                            <div className="bg-emerald-500/10 p-2.5 rounded-full flex-shrink-0">
                                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-lg leading-tight uppercase tracking-tight">Garantia Incondicional de 7 Dias</p>
                                <p className="text-gray-400 text-sm">Teste o app completo por 7 dias. Se não gostar, devolvemos 100% do seu dinheiro direto na sua conta.</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center gap-2 text-sm text-gray-400 font-medium">
                            <span className="text-emerald-400 font-black text-lg md:text-xl uppercase tracking-wider drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] mb-2">
                                mudar de vida custa menos que um lanche
                            </span>
                            
                            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5 w-full justify-center">
                                <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                    <Lock className="w-3.5 h-3.5 text-emerald-500" /> Compra Segura
                                </span>
                                <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Site Verificado
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
