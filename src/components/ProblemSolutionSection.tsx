import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const ProblemSolutionSection = () => (
<>
      {/* Problem vs Solution */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Por que a maioria das pessoas <span className="text-red-500">falha</span>?
              </h2>
              <div className="space-y-6">
                {[
                  "Rotinas malucas que não respeitam seu cotidiano e situação atual",
                  "Falta de clareza sobre o que fazer a seguir",
                  "Procrastinação por excesso de escolhas",
                  "Falta de motivação para manter a consistência"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center text-gray-400">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                    <p className="text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-10 rounded-[2rem] border-emerald-500/20">
              <h2 className="text-4xl font-black mb-8 leading-tight">
                A Solução <span className="text-emerald-400">Definitiva</span>.
              </h2>
              <div className="space-y-6">
                {[
                  "IA que aprende com seus hábitos e ajusta sua rotina",
                  "Gamificação real: ganhe XP por cada vitória",
                  "Rotina e treinos totalmente feitos com base no seu perfil",
                  "Ecossistema completo: Saúde, Mente e Foco"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center text-white">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                    <p className="text-lg font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
</>
);

export default ProblemSolutionSection;
