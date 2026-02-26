import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const AppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const layouts = [
    {
      id: 'dashboard',
      title: 'Visão Geral',
      description: 'Tenha o controle total da sua performance. Visualize sua meta diária, missões pendentes e ritmo de tarefas em um só lugar.',
      content: (
        <div className="bg-[#050505] h-full w-full overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20 px-4 py-4 flex justify-between items-center border-b border-white/5">
            <Menu className="w-6 h-6 text-gray-300" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-300" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-emerald-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Welcome Section */}
            <div>
              <h3 className="text-3xl font-black text-white mb-1">Visão Geral</h3>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Quarta-Feira, 25 De Fevereiro</p>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                <Zap className="w-3 h-3" /> Ver Minha Rotina
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                <span className="text-white">1</span> DIAS SEGUIDOS
              </button>
            </div>

            {/* Daily Goal Card */}
            <div className="bg-white/5 rounded-3xl p-6 border border-emerald-500/10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">META DIÁRIA</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">4/8</span>
              </div>

              <div className="flex flex-col items-center py-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                    <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="364" strokeDashoffset="182" className="text-emerald-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-white">50%</span>
                    <span className="text-[8px] font-bold text-gray-500 uppercase">CONCLUÍDO</span>
                  </div>
                </div>
                <p className="mt-6 text-[10px] text-gray-400 text-center max-w-[180px]">
                  Mantenha o foco para completar suas missões.
                </p>
              </div>
            </div>

            {/* Today's Missions */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Menu className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Missões de Hoje</h4>
                    <p className="text-[8px] text-gray-500">Organize seu dia</p>
                  </div>
                </div>
                <button className="text-gray-400"><span className="text-xl">+</span></button>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Trabalho - Bl...', time: '14:00', cat: 'Work', done: false },
                  { title: 'Estudo Acad...', time: '19:00', cat: 'Work', done: false },
                  { title: 'Leitura: Min...', time: 'Noite', cat: 'Reading', done: false },
                  { title: 'Desconexão ...', time: '22:00', cat: '', done: false },
                  { title: 'Despertar e...', time: '07:00', cat: '', done: true },
                ].map((mission, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${mission.done ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/5'} flex items-center justify-between`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${mission.done ? 'bg-emerald-500 border-emerald-500' : 'border-white/20'}`}>
                        {mission.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${mission.done ? 'text-emerald-400 line-through' : 'text-white'}`}>{mission.title}</p>
                        {mission.cat && <p className="text-[8px] text-gray-500">{mission.cat}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${mission.done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-emerald-400'}`}>
                        {mission.time}
                      </span>
                      <X className="w-3 h-3 text-gray-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Task Rhythm Chart */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
              <h4 className="text-sm font-black text-white mb-1">Ritmo de Tarefas</h4>
              <p className="text-[8px] text-gray-500 mb-6">Tarefas cumpridas nos últimos 7 dias</p>
              
              <div className="flex justify-between items-end h-32 gap-2">
                {['Q', 'S', 'S', 'D', 'S', 'T', 'Q'].map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-white/5 rounded-t-sm relative h-full">
                      <div 
                        className={`absolute bottom-0 left-0 right-0 rounded-t-sm ${i === 6 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`} 
                        style={{ height: i === 6 ? '85%' : '10%' }}
                      />
                    </div>
                    <span className="text-[8px] font-bold text-gray-500">{day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Inspiration */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">INSPIRAÇÃO DIÁRIA</span>
              </div>
              <p className="text-sm font-bold text-white italic leading-relaxed mb-4">
                "Não coloque limites em seus sonhos, coloque fé."
              </p>
              <div className="h-1 bg-emerald-500 rounded-full w-full" />
            </div>

            {/* New Workout Card */}
            <div className="bg-emerald-900/20 rounded-3xl p-6 border border-emerald-500/20 bg-gradient-to-br from-emerald-900/40 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">NOVO TREINO</span>
              </div>
              <h4 className="text-lg font-black text-white mb-1">Daily Exercise</h4>
              <p className="text-xs text-gray-400 mb-4">Complete seu treino de hoje para manter o foco.</p>
            </div>

            {/* Hydration Card */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-sm font-black text-white mb-1">Mantenha-se Hidratado</h4>
                  <p className="text-[8px] text-gray-500">Beber água melhora sua performance.</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-white">0ml</p>
                  <p className="text-[8px] font-bold text-emerald-400 uppercase">HOJE</p>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold flex items-center justify-center gap-2">
                Registrar Copo (250ml) <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'workout',
      title: 'Workouts',
      description: 'Gerencie seus treinos e evolução. Acompanhe sua frequência semanal e tenha acesso a planos personalizados de elite.',
      content: (
        <div className="bg-[#050505] h-full w-full overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20 px-4 py-4 flex justify-between items-center border-b border-white/5">
            <Menu className="w-6 h-6 text-gray-300" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-300" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-emerald-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Title Section */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-black text-white">Workouts</h3>
                <span className="bg-emerald-500 text-black text-[10px] font-black px-2 py-0.5 rounded">PRO</span>
              </div>
              <p className="text-gray-400 text-sm">Gerencie seus treinos e evolução.</p>
            </div>

            {/* Date Range Selector */}
            <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
              <ChevronRight className="w-4 h-4 text-gray-500 rotate-180" />
              <p className="text-xs font-bold text-emerald-400">23 fev — 1 mar</p>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>

            {/* Weekly Frequency Card */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  <h4 className="text-sm font-black text-white">Frequência Semanal</h4>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-white leading-none">1</p>
                  <p className="text-[8px] font-bold text-gray-500 uppercase">TOTAL</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mb-8">Seus treinos nos últimos 7 dias</p>
              
              <div className="flex justify-between px-2">
                {['SEM', 'SEM', 'SEM', 'ATU'].map((label, i) => (
                  <span key={i} className="text-[8px] font-bold text-gray-600">{label}</span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-emerald-500 rounded-3xl p-6 text-left shadow-lg shadow-emerald-500/20">
                <h4 className="text-black font-black text-lg leading-tight">Novo Treino</h4>
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-wider">Registrar</p>
              </button>
              <button className="bg-white/5 border border-white/5 rounded-3xl p-6 text-left">
                <h4 className="text-white font-black text-lg leading-tight">Personalizar</h4>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Editar Plano</p>
              </button>
            </div>

            {/* Warning Box */}
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 flex gap-4">
              <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Aviso Importante</p>
                <p className="text-[10px] text-orange-200/60 leading-relaxed">
                  Todos os treinos gerados são sugestões. Respeite sua capacidade física e consulte seu médico antes de qualquer atividade.
                </p>
              </div>
            </div>

            {/* Workout List */}
            <div className="space-y-8">
              {/* Wednesday */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">QUARTA-FEIRA, 25</p>
                </div>
                <div className="bg-white/5 border border-emerald-500/20 p-5 rounded-3xl flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 line-through">Treino C — Pernas e Ombros</p>
                      <p className="text-[10px] text-gray-600 flex items-center gap-1">
                        <Dumbbell className="w-3 h-3" /> 6 Exercícios
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Monday */}
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">SEGUNDA-FEIRA, 23</p>
                <div className="bg-white/5 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Treino A — Peito e Tríceps</p>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Dumbbell className="w-3 h-3" /> 6 Exercícios
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white/20" />
                </div>
              </div>

              {/* Tuesday */}
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">TERÇA-FEIRA, 24</p>
                <div className="bg-white/5 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Treino B — Costas e Bíceps</p>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Dumbbell className="w-3 h-3" /> 6 Exercícios
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'planner',
      title: 'Planner Semanal',
      description: 'Planeje sua semana com precisão cirúrgica. Use nossa IA para gerar rotinas otimizadas e gerencie cada bloco de tempo do seu dia.',
      content: (
        <div className="bg-[#050505] h-full w-full overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20 px-4 py-4 flex justify-between items-center border-b border-white/5">
            <Menu className="w-6 h-6 text-gray-300" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-300" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-emerald-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Title Section */}
            <div className="text-center">
              <h3 className="text-3xl font-black text-white mb-4">Planner Semanal</h3>
              
              <div className="flex items-center justify-center gap-8 mb-6">
                <ChevronRight className="w-5 h-5 text-gray-500 rotate-180" />
                <div className="text-center">
                  <p className="text-xs font-bold text-gray-400">23 De Fevereiro — 1 De</p>
                  <p className="text-xs font-bold text-gray-400">Março</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>

              <button className="inline-flex items-center gap-2 bg-emerald-900/20 border border-emerald-500/30 px-6 py-2.5 rounded-xl text-emerald-400 text-xs font-bold hover:bg-emerald-900/40 transition-colors">
                <Zap className="w-4 h-4" /> Gerar Rotina com IA
              </button>
            </div>

            {/* Day Card */}
            <div className="bg-white/5 rounded-3xl border border-white/5 overflow-hidden">
              <div className="p-5 flex justify-between items-center border-b border-white/5">
                <h4 className="text-lg font-black text-white">Segunda</h4>
                <span className="text-[10px] font-bold text-gray-500 uppercase">23 de fev</span>
              </div>

              <div className="p-4 space-y-3 relative">
                {[
                  { title: 'Despertar e Ritual Matinal', cat: '' },
                  { title: 'Treino A - Peito e Tríceps', cat: 'TREINO' },
                  { title: 'Trabalho - Bloco de Foco #1 (Deep Work)', cat: '' },
                  { title: 'Trabalho - Bloco de Foco #2', cat: '' },
                  { title: 'Tempo de Qualidade com os Filhos', cat: '' },
                  { title: 'Estudo Acadêmico - Revisão', cat: '' },
                  { title: 'Desconexão Digital e Relaxamento', cat: '' },
                  { title: 'Leitura: Mindset: A Nova Psicologia do Sucesso - Carol S. Dweck', cat: '' },
                ].map((task, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${task.cat === 'TREINO' ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/5 bg-white/5'} flex items-center justify-between`}>
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border-2 border-white/20 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">{task.title}</p>
                        {task.cat && <p className="text-[8px] font-black text-emerald-500 mt-1">{task.cat}</p>}
                      </div>
                    </div>
                    <button className="text-red-900/60 hover:text-red-500 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Add New Button */}
                <div className="p-4 rounded-2xl border border-dashed border-white/10 flex items-center justify-center gap-2 text-gray-600">
                  <span className="text-lg">+</span>
                  <span className="text-xs font-bold">Nova</span>
                </div>

                {/* Floating Next Arrow */}
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'routine',
      title: 'Leitura',
      description: 'Mantenha sua mente afiada. Registre suas sessões de leitura, acompanhe o progresso dos seus livros e nunca perca o hábito de aprender.',
      content: (
        <div className="bg-[#050505] h-full w-full overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20 px-4 py-4 flex justify-between items-center border-b border-white/5">
            <Menu className="w-6 h-6 text-gray-300" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-300" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-emerald-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Title Section */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-black text-white">Leitura</h3>
                <span className="bg-emerald-500 text-black text-[10px] font-black px-2 py-0.5 rounded">DIÁRIO</span>
              </div>
              <p className="text-gray-400 text-sm">Registre seus hábitos e páginas lidas.</p>
            </div>

            {/* Date Range Selector */}
            <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
              <ChevronRight className="w-4 h-4 text-gray-500 rotate-180" />
              <p className="text-xs font-bold text-emerald-400">23 fev — 1 mar</p>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>

            {/* Reading Frequency Card */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <h4 className="text-sm font-black text-white">Frequência de Leitura</h4>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-white leading-none">0</p>
                  <p className="text-[8px] font-bold text-gray-500 uppercase">SESSÕES</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mb-8">Sessões nos últimos 7 dias</p>
              
              <div className="flex justify-between px-2">
                {['SEM', 'SEM', 'SEM', 'ATU'].map((label, i) => (
                  <span key={i} className="text-[8px] font-bold text-gray-600">{label}</span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-emerald-500 rounded-3xl p-6 text-left shadow-lg shadow-emerald-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                <span className="text-2xl text-black font-light">+</span>
              </div>
              <div>
                <h4 className="text-black font-black text-lg leading-tight">Registrar Leitura</h4>
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-wider">Add sessão no diário</p>
              </div>
            </button>

            {/* Total Focus Card */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">FOCO TOTAL</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-black text-white">0</span>
                  <span className="text-[8px] font-bold text-gray-500 uppercase">SESSÕES</span>
                </div>
                <p className="text-[10px] text-gray-500">Mantenha a constância.</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500/20" />
              </div>
            </div>

            {/* Reading List */}
            <div className="space-y-8">
              {/* Wednesday */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">QUARTA-FEIRA, 25</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <Book className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="max-w-[180px]">
                      <p className="text-xs font-bold text-white leading-tight">Leitura: Mindset: A Nova Psicologia do Sucesso - Carol S. Dweck</p>
                      <p className="text-[8px] text-gray-500 mt-1">Toque para detalhes</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white/20" />
                </div>
              </div>

              {/* Monday */}
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">SEGUNDA-FEIRA, 23</p>
                <div className="bg-white/5 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <Book className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="max-w-[180px]">
                      <p className="text-xs font-bold text-white leading-tight">Leitura: Mindset: A Nova Psicologia do Sucesso - Carol S. Dweck</p>
                      <p className="text-[8px] text-gray-500 mt-1">Toque para detalhes</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gamification',
      title: 'Seu Progresso',
      description: 'Sua evolução visualizada. Ganhe pontos, suba de nível e torne-se a melhor versão de si mesmo com o sistema de progressão por graus.',
      content: (
        <div className="bg-[#050505] h-full w-full overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20 px-4 py-4 flex justify-between items-center border-b border-white/5">
            <Menu className="w-6 h-6 text-gray-300" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-300" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-emerald-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Title Section */}
            <div>
              <h3 className="text-3xl font-black text-white mb-1">Seu Progresso</h3>
              <p className="text-gray-400 text-sm">Acompanhe sua evolução e conquistas.</p>
            </div>

            {/* Current Level Card */}
            <div className="bg-white/5 rounded-3xl p-6 border border-emerald-500/20 relative overflow-hidden">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <Trophy className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">NÍVEL ATUAL</p>
                  <h4 className="text-3xl font-black text-white leading-tight">Aprendiz<br />Grau I</h4>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-bold text-gray-400">XP 45</span>
                  <span className="text-[10px] font-bold text-gray-400">100 XP</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[45%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
                <p className="text-[10px] font-bold text-gray-500 text-right">45% para o próximo nível</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-white">4</p>
                  <p className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">MISSÕES CUMPRIDAS</p>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-black text-white">45</p>
                  <p className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">XP TOTAL</p>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-5 h-5 text-emerald-500" />
                <h4 className="text-lg font-black text-white">Mural de Conquistas</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Level 1 - Unlocked */}
                <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-3xl p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Trophy className="w-8 h-8 text-emerald-500" />
                  </div>
                  <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mb-1">NÍVEL 1</p>
                  <p className="text-xs font-bold text-white">Aprendiz Grau I</p>
                </div>

                {/* Level 2 - Locked */}
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center opacity-40">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
                    <Lock className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">NÍVEL 2</p>
                  <p className="text-xs font-bold text-gray-500">Aprendiz Grau II</p>
                </div>

                {/* Level 3 - Locked */}
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center opacity-40">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
                    <Lock className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">NÍVEL 3</p>
                  <p className="text-xs font-bold text-gray-500">Aprendiz Grau III</p>
                </div>

                {/* Level 4 - Locked */}
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center opacity-40">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
                    <Lock className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">NÍVEL 4</p>
                  <p className="text-xs font-bold text-gray-500">Aprendiz Grau IV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % layouts.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + layouts.length) % layouts.length);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Phone Mockup */}
      <div className="relative flex justify-center items-center">
        {/* Carousel Arrows */}
        <button 
          onClick={prev}
          className="absolute left-0 md:-left-12 z-20 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 md:-right-12 z-20 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* The Phone */}
        <div className="relative w-[300px] h-[600px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#333] shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#333] rounded-b-2xl z-30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#111]" />
          </div>
          
          {/* Screen Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              {layouts[activeIndex].content}
            </motion.div>
          </AnimatePresence>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-30" />
        </div>
      </div>

      {/* Description */}
      <div className="space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block">Funcionalidade {activeIndex + 1}</span>
            <h3 className="text-4xl font-black mb-6">{layouts[activeIndex].title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {layouts[activeIndex].description}
            </p>
            
            <div className="flex gap-2">
              {layouts.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pt-8 border-t border-white/5">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
            Testar esta funcionalidade
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
