import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const HeroSection = () => (
  <>
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-emerald-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
            O Futuro da Performance Humana
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Você sabe que tem algo errado<br />
            <span className="gradient-text">Mas não sabe como mudar.</span>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Pare de viver no automático e comece a viver a vida que você sabe que pode alcançar. Veja como:
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => window.location.href = "https://pay.cakto.com.br/dj7mm52_776346"} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-lg shadow-emerald-600/20">
              Desbloqueie seu Próximo Nível
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default HeroSection;
