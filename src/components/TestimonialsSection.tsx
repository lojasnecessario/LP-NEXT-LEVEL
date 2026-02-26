import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => (
<>
      {/* Testimonials */}
      <section className="py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">Quem já está no <span className="text-emerald-400">Próximo Nível</span>.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lucas Almeida",
                role: "Empreendedor",
                text: "O Next Level mudou completamente meu jogo. Eu costumava procrastinar 4h por dia. Hoje, minha rotina é automática e viciante.",
                avatar: "https://i.pravatar.cc/150?u=lucas"
              },
              {
                name: "Mariana Costa",
                role: "Empreendedor",
                text: "O sistema de XP é genial. Eu me sinto mal se não completo minhas tarefas de leitura e treino. Finalmente a consistência veio.",
                avatar: "https://i.pravatar.cc/150?u=mariana"
              },
              {
                name: "Ricardo Silva",
                role: "Atleta Amador",
                text: "O tracker de treinos é o melhor que já usei. Simples, rápido e a IA ajusta meu descanso perfeitamente. Recomendo demais.",
                avatar: "https://i.pravatar.cc/150?u=ricardo"
              }
            ].map((t, i) => (
              <div key={i} className="glass p-8 rounded-2xl border-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                </div>
                <p className="text-gray-300 mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-emerald-500/30" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</>
);

export default TestimonialsSection;
