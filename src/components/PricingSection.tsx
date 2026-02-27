import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowDiscount(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="py-8 relative" ref={ref}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-lime-400/10 blur-[100px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Escolha seu <span className="gradient-text">Destino</span>.</h2>
          <p className="text-gray-400 text-lg mb-16">Invista no seu ativo mais precioso: você mesmo.</p>

          <div className="max-w-md mx-auto">
            {/* Monthly */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-lime-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-[#0a0a0a] p-10 rounded-[2.5rem] flex flex-col items-center border border-white/5">
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Plano Mensal</p>

                <div className="flex items-baseline gap-1 mb-2 h-[80px]">
                  <span className="text-2xl font-bold mt-2">R$</span>
                  <AnimatePresence mode="popLayout">
                    {!showDiscount ? (
                      <motion.span
                        key="original"
                        exit={{ opacity: 0, y: -20, scale: 0.9, color: '#ef4444', textDecoration: 'line-through' }}
                        className="text-6xl font-black"
                      >
                        89,90
                      </motion.span>
                    ) : (
                      <motion.span
                        key="discount"
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1, color: '#10b981' }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="text-6xl font-black text-emerald-500"
                      >
                        49,90
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span className="text-gray-400">/mês</span>
                </div>

                <div className="h-8 mb-8 mt-2">
                  <AnimatePresence>
                    {showDiscount && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500 font-bold uppercase tracking-wider"
                      >
                        de <span className="line-through">89,90</span> por 49,90 HOJE
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <ul className="text-left space-y-4 mb-10 w-full">
                  {["Acesso completo ao App", "IA de Rotina Ilimitada", "Sistema de XP e Níveis", "Suporte Prioritário", "Relatórios de Performance IA"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => window.location.href = "https://pay.cakto.com.br/dj7mm52_776346"} className="w-full py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg transition-all active:scale-95 shadow-xl shadow-emerald-600/20">
                  Assinar Agora
                </button>
              </div>
            </div>
          </div>

          <p className="mt-12 text-gray-500 text-sm flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Garantia incondicional de 7 dias. Risco zero.
          </p>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
