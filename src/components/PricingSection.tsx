import { CheckCircle2, Crown, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { useRef } from 'react';

const plans = [
    {
        name: 'Básico',
        icon: Zap,
        originalPrice: '39,90',
        discountedPrice: '15,90',
        suffix: '/mês',
        badge: null,
        description: 'Organize sua rotina com a IA de alta performance.',
        features: [
            'I.A que gera rotinas e missões diárias',
            'Zona de progresso com prêmios físicos',
            '2 mensagens por dia para o mentor Romeo'
        ]
    },
    {
        name: 'Premium',
        icon: Crown,
        originalPrice: '69,90',
        discountedPrice: '23,90',
        suffix: '/mês',
        badge: 'Mais Popular',
        highlight: true,
        description: 'Acesso total para máxima performance e resultados rápidos.',
        features: [
            'I.A que gera rotinas e missões diárias',
            'Zona de progresso com prêmios físicos',
            'I.A que gera treinos e dieta',
            'Mensagens ilimitadas para o mentor Romeo',
            'Comunidade exclusiva no whatsapp'
        ]
    }
];

const PricingSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.85;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-12 relative overflow-hidden bg-[#0a0a0a]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center relative">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                    Sua Evolução tem <span className="text-emerald-400">Preço</span>.
                </h2>
                <p className="text-gray-400 text-lg mb-16 max-w-xl mx-auto font-medium">
                    Escolha o plano ideal para você e comece a executar a partir de hoje.
                </p>

                {/* Setas de navegação Mobile */}
                <div className="md:hidden flex justify-end gap-2 mb-4 pr-2">
                    <button 
                        onClick={() => scroll('left')} 
                        className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors text-white"
                        aria-label="Ver plano anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => scroll('right')} 
                        className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors text-white"
                        aria-label="Ver próximo plano"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Container com scroll horizontal em mobile, grid no desktop */}
                <div 
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto overflow-x-auto pb-8 snap-x snap-mandatory pt-4 scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0"
                >
                    {plans.map((plan, index) => (
                        <div key={plan.name} className="min-w-[85vw] md:min-w-0 snap-center relative group flex">
                            {plan.highlight && (
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 rounded-[2.5rem] blur opacity-50 transition-opacity" />
                            )}
                            <div className={`relative bg-black/80 backdrop-blur-xl p-8 rounded-[2.5rem] flex flex-col items-center border w-full text-left md:text-center ${plan.highlight ? 'border-emerald-500/50 shadow-[0_10px_40px_rgba(16,185,129,0.2)]' : 'border-white/10'}`}>
                                
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 md:mx-auto">
                                    <plan.icon className="w-8 h-8 text-emerald-400" />
                                </div>
                                
                                <p className="text-white font-black text-2xl mb-2">{plan.name}</p>
                                <p className="text-gray-400 text-sm mb-6 h-10 flex items-center">{plan.description}</p>

                                <div className="flex flex-col items-center gap-1 mb-8">
                                    <p className="text-sm text-red-500 font-bold uppercase tracking-wider">
                                        de <span className="line-through">R$ {plan.originalPrice}</span> por
                                    </p>
                                    <div className="flex items-baseline gap-1 text-emerald-400">
                                        <span className="text-xl font-bold">R$</span>
                                        <span className="text-6xl font-black tracking-tighter">{plan.discountedPrice}</span>
                                        <span className="text-gray-400 text-sm font-medium">{plan.suffix}</span>
                                    </div>
                                </div>

                                <ul className="text-left space-y-4 mb-10 w-full flex-1">
                                    {plan.features.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-base font-medium">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => { trackMetaEvent('InitiateCheckout'); window.location.href = "/redirect"; }}
                                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 ${plan.highlight
                                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]'
                                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                                        }`}
                                >
                                    Assinar Agora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Garantia incondicional de 7 dias. Risco zero.
                </p>
            </div>
        </section>
    );
};

export default PricingSection;
