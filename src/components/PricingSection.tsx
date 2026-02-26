import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const PricingSection = () => (
  <>
    {/* Pricing Section */}
    <section id="pricing" className="py-8 relative">
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
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-6xl font-black">29,90</span>
                <span className="text-gray-400">/mês</span>
              </div>
              <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-8 -mt-6">de 59,90 por 29,90 HOJE</p>
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

export default PricingSection;
