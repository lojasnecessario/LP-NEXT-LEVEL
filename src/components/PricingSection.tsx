import { CheckCircle2, X as XIcon, Crown, Zap, Rocket } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { trackMetaEvent } from '../utils/metaPixel';

const plans = [
  {
    name: 'Básico',
    icon: Zap,
    originalPrice: '24,90',
    discountedPrice: '14,90',
    suffix: '/mês',
    badge: null,
    highlight: false,
    description: 'Organize sua rotina com a IA de alta performance.',
    features: [
      'Elaboração de Rotina com IA',
      'Criação de Hábitos com IA',
      'Sistema de XP e Níveis',
      'Suporte ao Usuário',
    ],
    negatives: [
      'Sem geração de treinos',
      'Sem dieta personalizada',
      'Sem acesso ao Mentor Romeo',
    ],
  },
  {
    name: 'Alto Rendimento',
    icon: Crown,
    originalPrice: '59,90',
    discountedPrice: '29,90',
    suffix: '/mês',
    badge: 'Mais Popular',
    highlight: true,
    description: 'Rotina, treinos e mentoria para resultados reais.',
    features: [
      'Tudo do plano Básico',
      'Treinos gerados pela IA',
      '2 mensagens/dia com o Mentor Romeo',
      'Relatórios de Performance IA',
    ],
    negatives: [
      'Mensagens limitadas com Romeo',
    ],
  },
  {
    name: 'Performance Máxima',
    icon: Rocket,
    originalPrice: '99,90',
    discountedPrice: '49,90',
    suffix: '/mês',
    badge: 'Acesso Total',
    highlight: false,
    description: 'Acesso ilimitado a tudo. Sem limites.',
    features: [
      'Tudo do Alto Rendimento',
      'Mensagens ilimitadas com Romeo',
      'Dieta personalizada pela IA',
      'Treinos personalizados pela IA',
      'Suporte Prioritário',
    ],
    negatives: [],
  },
];

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
      <section id="pricing" className="py-12 relative" ref={ref}>
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-lime-400/10 blur-[100px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Escolha seu <span className="gradient-text">Destino</span>.</h2>
          <p className="text-gray-400 text-lg mb-16">Invista no seu ativo mais precioso: você mesmo.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <div key={plan.name} className="relative group flex">
                {plan.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-lime-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition-opacity" />
                )}
                <div className={`relative bg-[#0a0a0a] p-8 rounded-[2.5rem] flex flex-col items-center border w-full ${plan.highlight ? 'border-emerald-500/30 scale-[1.02]' : 'border-white/5'}`}>
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${plan.highlight ? 'bg-emerald-500 animate-pulse' : 'bg-white/10'}`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Icon & Name */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 mt-2 border border-emerald-500/20">
                    <plan.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-1">{plan.name}</p>
                  <p className="text-gray-500 text-xs mb-4 max-w-[220px]">{plan.description}</p>

                  {/* Price animation */}
                  <div className="flex items-baseline gap-1 mb-1 h-[70px]">
                    <span className="text-xl font-bold mt-2">R$</span>
                    <AnimatePresence mode="popLayout">
                      {!showDiscount ? (
                        <motion.span
                          key={`original-${index}`}
                          exit={{ opacity: 0, y: -20, scale: 0.9, color: '#ef4444', textDecoration: 'line-through' }}
                          className="text-5xl font-black"
                        >
                          {plan.originalPrice}
                        </motion.span>
                      ) : (
                        <motion.span
                          key={`discount-${index}`}
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1, color: '#10b981' }}
                          transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.15 }}
                          className="text-5xl font-black text-emerald-500"
                        >
                          {plan.discountedPrice}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span className="text-gray-400 text-sm">{plan.suffix}</span>
                  </div>

                  {/* Discount label */}
                  <div className="h-7 mb-6">
                    <AnimatePresence>
                      {showDiscount && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15 + 0.2 }}
                          className="text-xs text-red-500 font-bold uppercase tracking-wider"
                        >
                          de <span className="line-through">{plan.originalPrice}</span> por {plan.discountedPrice}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Features */}
                  <ul className="text-left space-y-3 mb-6 w-full flex-1">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                    {plan.negatives.map((item, i) => (
                      <li key={`neg-${i}`} className="flex items-center gap-3 text-gray-600 text-sm">
                        <XIcon className="w-4 h-4 text-gray-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => { trackMetaEvent('InitiateCheckout'); window.location.href = "/redirect"; }}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${plan.highlight
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                      }`}
                  >
                    Assinar Agora
                  </button>
                </div>
              </div>
            ))}
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
