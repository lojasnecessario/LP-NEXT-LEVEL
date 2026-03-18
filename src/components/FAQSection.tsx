import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Como a Inteligência Artificial funciona na prática?",
        answer: "O Romeo, nossa I.A, analisa seu perfil, objetivos e limitações para montar uma rotina diária inteligente, sugerindo treinos específicos e adaptando sua dieta em tempo real para maximizar seus resultados."
    },
    {
        question: "Preciso baixar algum aplicativo nas lojas (App Store/Play Store)?",
        answer: "Não! O aplicativo é web-based (PWA), o que significa que assim que o pagamento for aprovado, você receberá acesso imediato no seu e-mail e poderá adicionar um ícone na tela inicial do seu celular em segundos, sem consumir armazenamento."
    },
    {
        question: <>Como funciona o Desafio <span className="whitespace-nowrap">Sangue Verde Neon</span>?</>,
        answer: "Ao usar o app por 30 dias consecutivos sem falhar (cumprindo suas missões diárias de rotina e treino), você entra automaticamente no sorteio para concorrer a R$ 150,00 como recompensa pela sua disciplina."
    },
    {
        question: "O pagamento é realmente único?",
        answer: "Sim! Não é assinatura. Você faz o pagamento uma única vez e garante o acesso vitalício às funções atuais do aplicativo, além de receber atualizações contínuas sem custos adicionais."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 relative bg-[#050505] overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-4"
                    >
                        PERGUNTAS <span className="text-indigo-500">FREQUENTES</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass border-white/10 rounded-2xl overflow-hidden shadow-lg transition-colors hover:border-white/20"
                        >
                            <button
                                className="w-full px-6 pt-6 pb-6 text-left flex justify-between items-center bg-transparent gap-4"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-lg md:text-xl text-white pr-4">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-indigo-500/20 text-indigo-400' : 'text-gray-400'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 text-base md:text-lg leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
