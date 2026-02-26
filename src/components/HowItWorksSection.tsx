import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Step from './Step';

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
            </div>
          </div>
      </section>
</>
);

export default HowItWorksSection;
