import { motion } from 'motion/react';

const HeroSection = () => (
  <section className="relative pt-20 pb-12 md:pt-24 md:pb-12 overflow-clip">
    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-blue-500/20 blur-[120px] rounded-full -z-10" />

    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-white uppercase px-2 max-w-4xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Pare de procrastinar e construa disciplina em 7 dias
        </h1>



      </motion.div>
    </div>
  </section>
);

export default HeroSection;
