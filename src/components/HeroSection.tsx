import { motion } from 'motion/react';
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    var s = document.createElement("script");
    s.src = "https://scripts.converteai.net/d6c609ef-60e9-4618-8522-87e9909e1a21/players/69c2cde4449496c3a0aff730/v4/player.js";
    s.async = !0;
    document.head.appendChild(s);
  }, []);

  return (
    <section className="relative pt-20 pb-4 md:pt-24 md:pb-6 overflow-clip">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-blue-500/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight tracking-tight text-white uppercase px-2 max-w-4xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            assista ao video e tenha <span className="text-emerald-400 lg:whitespace-nowrap">acesso ao app</span>
          </h1>

          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-69c2cde4449496c3a0aff730" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
