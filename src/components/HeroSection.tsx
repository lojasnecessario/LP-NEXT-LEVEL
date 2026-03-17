import { motion } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';

const HeroSection = () => (
  <>
    {/* Hero Section */}
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-20 overflow-clip">
      {/* Elemento de fundo estilo Apple (formas suaves e blur) */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight px-2">
            Pare de tentar, <span className="text-[#009966] drop-shadow-[0_0_10px_rgba(0,153,102,0.3)]">comece a executar</span>
          </h1>
          <h2 className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium px-4">
            A primeira I.A desenvolvida cientificamente capaz de transformar homens comuns em verdadeiras máquinas de produtividade e desempenho
          </h2>

          <div className="flex justify-center mt-6">
            <a
              href="#como-funciona"
              onClick={() => trackMetaEvent('InitiateCheckout')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/20 text-base md:text-lg"
            >
              Veja como
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  </>
);

export default HeroSection;
