import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Step from './Step';
import { trackMetaEvent } from '../utils/metaPixel';

const HowItWorksSection = () => (
  <>
    {/* How it Works */}
    <section id="how-it-works" className="py-8 bg-emerald-600/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">3 Passos para a <span className="text-emerald-400">Excelência</span>.</h2>
            <p className="text-gray-400 text-lg">Simples, direto e brutalmente eficiente.</p>
          </div>

          <div className="space-y-10 text-left">
            <Step
              number="01"
              title="O Quiz de Onboarding"
              description="Responda perguntas sobre seus horários, metas e dificuldades. Nossa IA começa a mapear seu perfil de performance."
            />
            <Step
              number="02"
              title="A IA Constrói seu Dia"
              description="Receba uma rotina milimetricamente calculada para maximizar seu foco e garantir que você descanse o suficiente."
            />
            <Step
              number="03"
              title="Execute e Evolua"
              description="Cumpra as tarefas, ganhe XP, suba de nível e veja sua vida mudar em tempo real. A consistência nunca foi tão viciante."
            />
          </div>

          <div className="mt-16 pt-8 border-t border-emerald-500/10 text-center">
            <button
              onClick={() => { trackMetaEvent('InitiateCheckout'); window.location.href = "https://pay.cakto.com.br/dj7mm52_776346"; }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 md:px-12 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Desbloquear minha nova rotina agora
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HowItWorksSection;
