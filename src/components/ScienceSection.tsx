import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const ScienceSection = () => (
<>
      {/* Science Section */}
      <section className="py-8 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Metodologia Científica</span>
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  O Next Level é baseado em <span className="text-emerald-400">ciência</span>.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Não é apenas um app de produtividade. É um sistema de engenharia comportamental projetado para hackear sua neuroquímica e transformar esforço em vício positivo.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Brain className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold">Neuroplasticidade</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Utilizamos o conceito de "Habit Stacking" para criar novas conexões neurais através de gatilhos ambientais e recompensas imediatas.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Zap className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold">Loops de Dopamina</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Nosso sistema de gamificação é calibrado para liberar micro-doses de dopamina, mantendo você no estado de "Flow" por mais tempo.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative glass border-emerald-500/20 p-8 rounded-[2.5rem] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Análise Biométrica</p>
                      <p className="text-sm font-bold">Ritmo Circadiano Otimizado</p>
                    </div>
                  </div>
                  
                  <div className="h-32 flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95, 75, 100, 80, 60].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className="flex-1 bg-emerald-500/20 rounded-t-sm relative group"
                      >
                        <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[8px] font-mono text-gray-500 uppercase mb-1">Foco Médio</p>
                      <p className="text-xl font-black text-emerald-400">+24%</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[8px] font-mono text-gray-500 uppercase mb-1">Cortisol</p>
                      <p className="text-xl font-black text-red-400">-18%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
</>
);

export default ScienceSection;
