import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';
import { Check, ArrowRight, Brain, AlertTriangle, Target, CheckCircle2, Sparkles, Trash2, Plus, Dumbbell, Activity, Calendar as CalendarIcon, X, Scale, Flame, UtensilsCrossed, Trophy, Wallet, TrendingUp, TrendingDown, Send, Minus, ChevronLeft, ChevronRight, Landmark } from 'lucide-react';

const QuizProgress = ({ currentStep }: { currentStep: number }) => {
    return (
        <div className="flex items-center justify-center gap-1 md:gap-3 mb-8 md:mb-12">
            {[1, 2, 3, 4, 5, 6].map((s, idx) => (
                <React.Fragment key={idx}>
                    <div 
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 text-sm md:text-lg shrink-0 ${
                            currentStep === s 
                                ? 'bg-white border-white text-black font-black' 
                                : 'bg-transparent border-zinc-800 text-zinc-700 font-bold'
                        }`}
                    >
                        {s === 6 ? (
                            <Trophy className={`w-3 h-3 md:w-4 md:h-4 ${currentStep === 6 ? 'text-black' : 'text-zinc-700'}`} />
                        ) : (
                            s
                        )}
                    </div>
                    {idx < 5 && (
                        <div className={`w-3 md:w-10 h-[1px] shrink-0 ${currentStep > s ? 'bg-zinc-100' : 'bg-zinc-800'}`} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

const ProgressBar = ({ progress }: { progress: number }) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center my-6">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r={radius} className="stroke-zinc-900" strokeWidth="12" fill="none" />
                <motion.circle 
                    cx="80" cy="80" r={radius} 
                    stroke="#10b981" 
                    strokeWidth="12" fill="none" 
                    strokeLinecap="round"
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ strokeDasharray: circumference }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-white">{Math.round(progress)}%</span>
                <span className="text-[10px] text-zinc-500 font-bold mt-1 tracking-wider">CONCLUÍDO</span>
            </div>
        </div>
    );
};

const MockupTask = ({ title, completed, onClick, time }: { title: string, completed: boolean, onClick: () => void, time?: string, key?: number | string }) => {
    return (
        <div 
            onClick={onClick}
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50 cursor-pointer hover:bg-zinc-900 transition-all select-none"
        >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${completed ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-700 bg-zinc-900'}`}>
                {completed && <Check className="w-4 h-4 text-black" />}
            </div>
            <span className={`text-[15px] font-semibold flex-1 transition-all flex items-center gap-2 ${completed ? 'text-zinc-600 line-through' : 'text-zinc-300'}`}>
                {title}
            </span>
            {time && (
                <div className="px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-500 text-xs font-bold tracking-wide">
                    {time}
                </div>
            )}
            <button className="text-zinc-700 hover:text-zinc-500 transition-colors">
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
};

const AppMockup = ({ onComplete }: { onComplete: () => void }) => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Estudar', completed: false, time: '05:00' },
        { id: 2, title: 'Beber 2L', completed: false, time: '08:00' },
        { id: 3, title: 'Ler 5 pag', completed: false, time: '20:00' },
        { id: 4, title: 'Estudar', completed: false, time: '21:00' },
    ]);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const progress = (completedCount / tasks.length) * 100;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-[420px] mx-auto pb-10"
        >
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col font-sans">
                <div className="px-6 pb-6 flex-1">
                    <div className="pt-8 pb-8">

                        <div className="mt-6 p-6 rounded-3xl bg-[#0a0a0a] border border-zinc-800/80">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                                    <Target className="w-5 h-5 text-emerald-500" />
                                    META DIÁRIA
                                </div>
                                <div className="px-3 py-1 rounded-md bg-emerald-900/30 text-emerald-500 text-xs font-bold">
                                    {completedCount}/{tasks.length}
                                </div>
                            </div>

                            <ProgressBar progress={progress} />

                            <p className="text-center text-zinc-600 text-[13px] font-medium leading-relaxed">
                                Mantenha o foco para completar<br/>suas missões.
                            </p>
                        </div>

                        <div className="mt-6 p-6 rounded-3xl bg-[#0a0a0a] border border-zinc-800/80">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-900/20 flex items-center justify-center text-emerald-500">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-bold text-base">Missões de Hoje</h3>
                                        <p className="text-zinc-500 text-[13px] font-medium leading-tight">Organize seu dia</p>
                                    </div>
                                </div>
                                <button className="text-zinc-600 text-2xl font-light hover:text-white transition-colors mb-2">+</button>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                {tasks.map(task => (
                                    <MockupTask 
                                        key={task.id}
                                        title={task.title}
                                        completed={task.completed}
                                        time={task.time}
                                        onClick={() => toggleTask(task.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={onComplete}
                className="w-full mt-8 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const PlannerTask = ({ title, onDelete }: { title: string, onDelete: () => void, key?: number | string }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-zinc-800/80 mb-2"
        >
            <div className="w-6 h-6 rounded-full border-2 border-zinc-600 shrink-0" />
            <span className="text-[14px] font-medium text-zinc-300 flex-1 leading-snug">
                {title}
            </span>
            <button onClick={onDelete} className="text-red-500/40 hover:text-red-500 transition-colors shrink-0">
                <Trash2 className="w-5 h-5" />
            </button>
        </motion.div>
    );
};

const PlannerMockup = ({ onComplete }: { onComplete: () => void }) => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Preparar café da manhã' },
        { id: 2, title: 'Planejamento semanal' },
        { id: 3, title: 'Leitura: A Psicologia do Poder: Domine as estratégias de influência e persuasão para alcançar seus objetivos.' },
        { id: 4, title: 'Arrumar o quarto' },
        { id: 5, title: 'Correr 5km' },
        { id: 6, title: 'Estudar inglês' }
    ]);

    const addTask = () => {
        setTasks([...tasks, { id: Date.now(), title: 'Nova tarefa estratégica' }]);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-[420px] mx-auto pb-10"
        >
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col font-sans">
                <div className="px-5 pb-6 flex-1">
                    <div className="pt-8 pb-8">

                        {/* Days */}
                        <div className="flex gap-2.5 overflow-x-auto pt-2 pb-8 mb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                { day: 'Terça', num: '17', score: '7/12', active: false },
                                { day: 'Quarta', num: '18', score: '3/8', active: false },
                                { day: 'Quinta', num: '19', score: '0/12', active: true },
                                { day: 'Sexta', num: '20', score: '0/12', active: false },
                                { day: 'Sábado', num: '21', score: '0/6', active: false },
                                { day: 'Domingo', num: '22', score: '0/6', active: false }
                            ].map((d, i) => (
                                <div key={i} className={`flex flex-col items-center justify-center min-w-[65px] h-[85px] rounded-[20px] relative transition-all ${d.active ? 'bg-emerald-500 scale-105 shadow-[0_0_25px_rgba(16,185,129,0.3)] z-10' : 'bg-[#0a0a0a] border border-zinc-900/80 opacity-60 hover:opacity-100'}`}>
                                    <span className={`text-[11px] mb-1 font-bold ${d.active ? 'text-black/80' : 'text-zinc-500'}`}>{d.day}</span>
                                    <span className={`text-xl font-black ${d.active ? 'text-black' : 'text-zinc-300'}`}>{d.num}</span>
                                    <span className={`text-[10px] mt-1 font-bold ${d.active ? 'text-black/70' : 'text-zinc-600'}`}>{d.score}</span>
                                    {d.active && <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-1 bg-emerald-500 rounded-t-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />}
                                </div>
                            ))}
                        </div>

                        {/* Active Day Card */}
                        <div className="mt-8 p-5 rounded-3xl bg-[#0a0a0a] border border-emerald-900/40">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[20px] font-bold text-white">Quinta</h3>
                                <span className="text-emerald-500 font-bold text-[13px] tracking-wide">19 de mar</span>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <AnimatePresence>
                                    {tasks.map(task => (
                                        <PlannerTask key={task.id} title={task.title} onDelete={() => deleteTask(task.id)} />
                                    ))}
                                </AnimatePresence>
                            </div>

                            <button 
                                onClick={addTask}
                                className="w-full mt-4 py-4 rounded-xl border border-dashed border-zinc-800 hover:border-emerald-500/50 text-zinc-600 hover:text-emerald-500 font-medium transition-colors flex items-center justify-center gap-2 group"
                            >
                                <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Nova tarefa
                            </button>
                            <p className="text-center text-[10px] text-zinc-600 mt-3 uppercase tracking-widest font-bold">
                                clique em adicionar tarefas para definir mais tarefas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={onComplete}
                className="w-full mt-8 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const WorkoutMockup = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-[420px] mx-auto pb-10"
        >
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col font-sans">
                <div className="px-5 pb-6 flex-1">
                    <div className="pt-8 pb-8">

                        <div className="p-4 rounded-3xl bg-[#0a0a0a] border border-zinc-800/80 mb-4 h-[120px] flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-500" />
                                    <span className="font-bold text-white tracking-wide">Frequência Semanal</span>
                                </div>
                                <div className="flex flex-col items-center mt-1">
                                    <span className="text-xl font-bold leading-none">1</span>
                                    <span className="text-[9px] text-zinc-500 font-bold tracking-wider mt-1">TOTAL</span>
                                </div>
                            </div>
                            <div className="flex items-end justify-between px-2 pb-1 relative">
                                <span className="text-[10px] text-zinc-700 font-bold tracking-wider absolute -bottom-2 w-full flex justify-between">
                                    <span>SEM</span>
                                    <span>SEM</span>
                                    <span>SEM</span>
                                    <span>ATU</span>
                                </span>
                                <p className="text-[11px] text-zinc-500 font-medium mb-3">Seus treinos nos últimos 7 dias</p>
                            </div>
                        </div>

                        <div className="p-5 rounded-3xl bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-4 flex flex-col items-start gap-3">
                            <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center">
                                <Plus className="w-4 h-4 text-black" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-black font-bold text-xl">Novo Treino</span>
                                <span className="text-black/60 text-xs font-bold">Secretário</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-8 flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <div className="flex flex-col">
                                <span className="text-amber-500 text-[11px] font-bold mb-1">Aviso Importante</span>
                                <span className="text-amber-500/70 text-[10px] leading-relaxed">Todos os treinos gerados são sugestões. Respeite sua capacidade física e consulte seu médico antes de qualquer atividade.</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h4 className="text-[12px] text-zinc-400 font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    Sábado, 21
                                </h4>
                                <div className="p-4 rounded-3xl bg-[#0a0a0a] border border-zinc-800 border-dashed text-center">
                                    <span className="text-zinc-600 text-[13px] font-bold">Descanso</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[12px] text-zinc-400 font-bold tracking-widest uppercase mb-3">Segunda-feira, 16</h4>
                                <div className="p-4 rounded-3xl bg-[#0a0a0a] border border-zinc-800 relative">
                                    <div className="absolute right-4 top-[50%] -translate-y-[50%] w-6 h-6 rounded-full border-2 border-zinc-700" />
                                    <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center mb-3">
                                        <Dumbbell className="w-5 h-5 text-zinc-500" />
                                    </div>
                                    <span className="font-bold text-white block mb-1">Treino A - Peito e Tríceps</span>
                                    <span className="text-[11px] text-zinc-500 font-bold flex items-center gap-1.5">
                                        <Dumbbell className="w-3 h-3" /> 6 ou
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[12px] text-zinc-400 font-bold tracking-widest uppercase mb-3">Terça-feira, 17</h4>
                                <div 
                                    onClick={onComplete}
                                    className="p-4 rounded-3xl bg-[#0a0a0a] border border-emerald-900/50 cursor-pointer relative overflow-hidden group shadow-[0_4px_15px_-5px_rgba(16,185,129,0.1)] hover:border-emerald-500/50 transition-colors"
                                >
                                    <div className="absolute right-4 top-[50%] -translate-y-[50%]">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-emerald-900/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Dumbbell className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <span className="font-bold text-zinc-500 line-through block mb-1">Treino B - Costas e Bíceps</span>
                                    <span className="text-[11px] text-zinc-500 font-bold flex items-center gap-1.5">
                                        <Dumbbell className="w-3 h-3" /> 7
                                    </span>
                                </div>
                                <p className="text-center text-emerald-500 mt-2 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                                    clique em qualquer treino
                                </p>
                            </div>
                            
                            <div>
                                <h4 className="text-[12px] text-zinc-400 font-bold tracking-widest uppercase mb-3">Quinta-feira, 19</h4>
                                <div className="p-4 rounded-3xl bg-[#0a0a0a] border border-zinc-800 relative">
                                    <div className="absolute right-4 top-[50%] -translate-y-[50%] w-6 h-6 rounded-full border-2 border-zinc-700" />
                                    <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center mb-3">
                                        <Dumbbell className="w-5 h-5 text-zinc-500" />
                                    </div>
                                    <span className="font-bold text-white block mb-1">Treino C - Pernas e Panturrilha</span>
                                    <span className="text-[11px] text-zinc-500 font-bold flex items-center gap-1.5">
                                        <Dumbbell className="w-3 h-3" /> 6 ou
                                    </span>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-[12px] text-zinc-400 font-bold tracking-widest uppercase mb-3">Sexta-feira, 20</h4>
                                <div className="p-4 rounded-3xl bg-[#0a0a0a] border border-zinc-800 relative">
                                    <div className="absolute right-4 top-[50%] -translate-y-[50%] w-6 h-6 rounded-full border-2 border-zinc-700" />
                                    <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center mb-3">
                                        <Dumbbell className="w-5 h-5 text-zinc-500" />
                                    </div>
                                    <span className="font-bold text-white block mb-1">Treino D - Ombro e Trapézio</span>
                                    <span className="text-[11px] text-zinc-500 font-bold flex items-center gap-1.5">
                                        <Dumbbell className="w-3 h-3" /> 6 ou
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={onComplete}
                className="w-full mt-8 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const WorkoutDetailMockup = ({ onComplete, onBack }: { onComplete: () => void, onBack?: () => void }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-[420px] mx-auto pb-10"
        >
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col font-sans">
                <div className="px-6 pb-6 flex-1">
                    <div className="pt-8 pb-8">

                        <div className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800 flex gap-4 mb-8 relative overflow-hidden">
                            <div className="flex-1 z-10">
                                <h4 className="text-[9px] text-orange-500 font-black uppercase tracking-[0.2em] mb-2">ANOTAÇÕES / FOCO</h4>
                                <p className="text-[13px] text-zinc-200 leading-relaxed font-bold">Priorize a conexão mente-músculo. Execute cada repetição com amplitude total e controle.</p>
                            </div>
                            <div className="w-1.5 bg-orange-500 absolute top-0 right-0 bottom-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]"></div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {[
                                { title: "Barra Fixa", sets: 4, reps: "Até a falha" },
                                { title: "Remada Curvada com Barra", sets: 4, reps: "8 - 12" },
                                { title: "Puxada Alta", sets: 3, reps: "10" },
                                { title: "Remada Serrote", sets: 3, reps: "12" }
                            ].map((ex, i) => (
                                <div key={i} className="p-5 rounded-[24px] bg-[#0a0a0a] border border-zinc-800">
                                    <span className="font-black text-white text-[15px] block mb-5 uppercase tracking-tight">{ex.title}</span>
                                    <div className="flex gap-3">
                                        <div className="flex-1 bg-[#050505] border border-zinc-800/80 rounded-2xl p-4 flex flex-col items-center gap-1">
                                            <span className="text-[8px] text-zinc-600 font-black tracking-[0.2em] uppercase">SÉRIES</span>
                                            <span className="font-black text-lg text-emerald-500">{ex.sets}</span>
                                        </div>
                                        <div className="flex-1 bg-[#050505] border border-zinc-800/80 rounded-2xl p-4 flex flex-col items-center gap-1">
                                            <span className="text-[8px] text-zinc-600 font-black tracking-[0.2em] uppercase">REPS</span>
                                            <span className="font-black text-lg text-emerald-500">{ex.reps}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800 text-zinc-300 font-bold text-[15px] hover:bg-zinc-900 transition-colors">
                            Reabrir Treino
                        </button>
                        <button className="w-full mt-3 py-4 text-zinc-600 font-bold text-[13px] hover:text-red-500 transition-colors">
                            Excluir Treino
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={onComplete}
                className="w-full mt-8 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const DietMockup = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-[420px] mx-auto pb-10"
        >
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col font-sans">
                <div className="px-5 pb-6 flex-1">
                    <div className="pt-8 pb-8">

                        {/* 4 Boxes Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <span className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 tracking-wider mb-2">
                                    <Scale className="w-4 h-4" /> IMC
                                </span>
                                <span className="text-2xl font-bold block mb-1">18,6</span>
                                <span className="text-[10px] text-zinc-500 font-medium">Abaixo do peso</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <span className="flex items-center gap-2 text-[10px] font-bold text-orange-500 tracking-wider mb-2">
                                    <Flame className="w-4 h-4" /> CALORIAS/DIA
                                </span>
                                <span className="text-2xl font-bold block mb-1">3183</span>
                                <span className="text-[10px] text-zinc-500 font-medium">TDEE: 2683</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <span className="flex items-center gap-2 text-[10px] font-bold text-red-500 tracking-wider mb-2">
                                    <Activity className="w-4 h-4" /> PROTEÍNAS
                                </span>
                                <span className="text-2xl font-bold block mb-1">114g</span>
                                <span className="text-[10px] text-zinc-500 font-medium">14% cal</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <span className="flex items-center gap-2 text-[10px] font-bold text-blue-500 tracking-wider mb-2">
                                    <Target className="w-4 h-4" /> CARBOIDRATOS
                                </span>
                                <span className="text-2xl font-bold block mb-1">483g</span>
                                <span className="text-[10px] text-zinc-500 font-medium">61% cal</span>
                            </div>
                        </div>

                        {/* Distribuição de Macros */}
                        <div className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800 mb-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Activity className="w-5 h-5 text-emerald-500" />
                                <h3 className="text-[15px] font-bold text-white tracking-wide">Distribuição de Macros</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-[13px] font-medium">
                                    <span className="text-zinc-400 w-24">Proteínas</span>
                                    <div className="flex-1 max-w-[120px] h-2.5 bg-zinc-800 rounded-full overflow-hidden mx-3">
                                        <div className="h-full bg-red-500 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                    <span className="text-white w-10 text-right font-bold">114 g</span>
                                </div>
                                <div className="flex items-center justify-between text-[13px] font-medium">
                                    <span className="text-zinc-400 w-24">Carboidratos</span>
                                    <div className="flex-1 max-w-[120px] h-2.5 bg-zinc-800 rounded-full overflow-hidden mx-3">
                                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                    <span className="text-white w-10 text-right font-bold">483 g</span>
                                </div>
                                <div className="flex items-center justify-between text-[13px] font-medium">
                                    <span className="text-zinc-400 w-24">Gorduras</span>
                                    <div className="flex-1 max-w-[120px] h-2.5 bg-zinc-800 rounded-full overflow-hidden mx-3">
                                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                    <span className="text-white w-10 text-right font-bold">88 g</span>
                                </div>
                            </div>
                        </div>

                        {/* Days Carousel */}
                        <div className="flex gap-5 overflow-x-auto scrollbar-hide mb-8 border-b border-zinc-800/80 pb-0.5 -mx-5 px-5">
                            {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta'].map(d => (
                                <div key={d} className="relative pb-3 flex-shrink-0 cursor-pointer">
                                    <span className={`text-[13px] font-bold ${d === 'Terça' ? 'text-white' : 'text-zinc-500'}`}>{d}</span>
                                    {d === 'Terça' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 rounded-t-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>}
                                </div>
                            ))}
                        </div>

                        {/* Meals List */}
                        <div className="flex flex-col gap-4">
                            {[
                                { name: "Café da Manhã", time: "07:00", kcal: "320", p: "15", c: "45", g: "10" },
                                { name: "Lanche da Manhã", time: "10:00", kcal: "120", p: "10", c: "15", g: "3" },
                                { name: "Almoço", time: "12:30", kcal: "500", p: "40", c: "55", g: "15" },
                                { name: "Lanche da Tarde", time: "16:00", kcal: "280", p: "12", c: "40", g: "8" },
                                { name: "Jantar", time: "19:30", kcal: "580", p: "40", c: "70", g: "15" },
                                { name: "Ceia", time: "22:00", kcal: "150", p: "25", c: "5", g: "3" }
                            ].map((m, i) => (
                                <div key={i} className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                                            <UtensilsCrossed className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white text-[15px]">{m.name}</h4>
                                            <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">{m.time}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-zinc-700" />
                                    </div>
                                    <div className="flex gap-4 text-[10px] font-black justify-between px-1 tracking-tighter uppercase whitespace-nowrap">
                                        <span className="text-orange-500">{m.kcal} kcal</span>
                                        <span className="text-red-500">P: {m.p}g</span>
                                        <span className="text-blue-400">C: {m.c}g</span>
                                        <span className="text-yellow-500">G: {m.g}g</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total do Dia inside scroll */}
                        <div className="mt-10 p-5 rounded-3xl bg-[#050505] border border-emerald-900/40">
                            <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-4 block">TOTAL DO DIA — TERÇA</span>
                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    { v: "1950", l: "KCAL", c: "text-orange-500" },
                                    { v: "142g", l: "PROT", c: "text-red-500" },
                                    { v: "230g", l: "CARB", c: "text-blue-400" },
                                    { v: "54g", l: "GORD", c: "text-yellow-500" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#0a0a0a] rounded-xl p-2.5 flex flex-col items-center justify-center border border-zinc-800/80">
                                        <span className={`${item.c} font-black text-sm`}>{item.v}</span>
                                        <span className="text-zinc-600 text-[7px] font-black mt-1 tracking-widest">{item.l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={onComplete}
                className="w-full mt-4 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const FinanceMockup = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-[420px] mx-auto pb-10"
        >
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col font-sans">
                <div className="px-6 pb-6 flex-1">
                    <div className="pt-8 pb-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                <Wallet className="w-5 h-5 text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-white uppercase">Resumo Financeiro</h2>
                        </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="p-3.5 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                             <div className="flex items-center gap-1 text-emerald-500 text-[8px] font-black uppercase mb-2">
                                 <TrendingUp className="w-3 h-3" /> ENTROU
                             </div>
                             <span className="text-[12px] font-bold text-emerald-500">R$ 0,00</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                             <div className="flex items-center gap-1 text-red-500 text-[8px] font-black uppercase mb-2">
                                 <TrendingDown className="w-3 h-3" /> SAIU
                             </div>
                             <span className="text-[12px] font-bold text-red-500">R$ 50,00</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-[#0a0a0a] border border-orange-500/30 border">
                             <div className="flex items-center gap-1 text-orange-400 text-[8px] font-black uppercase mb-2">
                                 <Wallet className="w-3 h-3" /> SALDO LIVRE
                             </div>
                             <span className="text-[12px] font-bold text-orange-400">-R$ 50,00</span>
                        </div>
                    </div>

                    <div className="text-[10px] font-bold text-center text-zinc-600 mb-8 uppercase tracking-widest">
                        Saldo Total: -R$ 50,00 • Reservado em metas: R$ 200,00
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-10">
                        <button className="flex-1 py-3 px-2 rounded-xl border border-red-900/30 bg-red-950/10 text-red-500 font-bold text-[11px] flex items-center justify-center gap-1.5 tracking-wide">
                            <Minus className="w-4 h-4" /> Gasto
                        </button>
                        <button className="flex-1 py-3 px-2 rounded-xl border border-emerald-900/30 bg-emerald-950/10 text-emerald-500 font-bold text-[11px] flex items-center justify-center gap-1.5 tracking-wide">
                            <Plus className="w-4 h-4" /> Receita
                        </button>
                        <button className="flex-1 py-3 px-2 rounded-xl border border-orange-900/30 bg-orange-950/10 text-orange-400 font-bold text-[11px] flex items-center justify-center gap-1.5 tracking-wide">
                            <Target className="w-4 h-4" /> Meta
                        </button>
                    </div>

                    {/* Chat IA */}
                    <div className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800 mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-orange-400" />
                            <h3 className="text-xs font-black text-orange-400 uppercase tracking-widest">Chat IA</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Resumo do mês', 'Onde posso economizar?'].map(opt => (
                                <div key={opt} className="px-3 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 font-bold">
                                    {opt}
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <input 
                                disabled
                                placeholder="Pergunte algo sobre suas finanças..."
                                className="w-full bg-[#050505] border border-zinc-800 rounded-xl py-3 px-4 text-xs pr-10"
                            />
                            <div className="absolute right-2 top-1.5 w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                                <Send className="w-4 h-4 text-black" />
                            </div>
                        </div>
                    </div>

                    {/* Movimentações */}
                    <div className="mb-8">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-4">Movimentações</h3>
                        <div className="text-[9px] font-black text-zinc-600 uppercase tracking-tighter mb-4">Ontem</div>
                        <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                                <UtensilsCrossed className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[11px] font-black text-zinc-200">Registro de gasto em Ali...</div>
                                <div className="text-[9px] font-bold text-zinc-600 uppercase">Alimentação</div>
                            </div>
                            <div className="text-sm font-black text-red-500 shrink-0">-R$ 50,00</div>
                        </div>
                    </div>

                    {/* Gastos por Categoria */}
                    <div className="mb-8">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-4">Gastos por Categoria</h3>
                        <div className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800">
                             <div className="flex items-center justify-between mb-4">
                                <span className="text-[13px] font-black text-zinc-200">Alimentação</span>
                                <span className="text-[11px] font-black text-white">R$ 50,00</span>
                             </div>
                             <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }} />
                             </div>
                        </div>
                    </div>

                    {/* Finanças Metas */}
                    <div className="mb-4">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-4">Metas Financeiras</h3>
                        <div className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800">
                             <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-orange-400">
                                    <Target className="w-4 h-4" />
                                    <span className="text-sm font-black text-zinc-100 uppercase">5mil</span>
                                </div>
                                <div className="text-[10px] font-bold text-orange-400">R$ 200,00 / R$ 5.000,00</div>
                             </div>
                             <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.5)]" style={{ width: '4%' }} />
                             </div>
                             <div className="text-right text-[8px] font-black text-orange-400 mb-6 uppercase tracking-tighter">4%</div>
                             <button className="w-full py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center gap-2 text-zinc-100 font-bold text-xs hover:bg-zinc-800 transition-colors">
                                 <Plus className="w-3.5 h-3.5 text-orange-400" /> Guardar Valor
                             </button>
                        </div>
                    </div>
                </div>
            </div>

                {/* Bottom Nav Mock */}
                <div className="px-4 py-4 bg-[#050505] border-t border-zinc-900 grid grid-cols-6 gap-0 shrink-0">
                    {[
                        { icon: Activity, label: 'Home' }, 
                        { icon: CalendarIcon, label: 'Agenda' },
                        { icon: Activity, label: 'Saúde' },
                        { icon: Target, label: 'Metas' },
                        { icon: Wallet, label: 'Finanças', active: true },
                        { icon: Trophy, label: 'Ranking' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center flex-col gap-1.5 cursor-pointer opacity-80">
                            <item.icon className={`w-5 h-5 ${item.active ? 'text-emerald-500' : 'text-zinc-600'}`} />
                            <span className={`text-[7px] font-black uppercase tracking-tighter ${item.active ? 'text-emerald-500' : 'text-zinc-600'}`}>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={onComplete}
                className="w-full mt-6 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-black rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

export default function Quiz() {
    const [step, setStep] = useState<'intro' | 'question1' | 'mockup1' | 'question2' | 'mockup2' | 'question3' | 'mockup3' | 'mockup4' | 'question4' | 'mockup5' | 'questionFinance' | 'mockupFinance' | 'aiPresentation' | 'testimonials'>('intro');
    const [q2Value, setQ2Value] = useState(5);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const handleCTA = () => {
        trackMetaEvent('Lead', { source: 'quiz_completion' });
        window.location.href = 'https://nextlevel-app.online';
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center p-4">
            <AnimatePresence mode="wait">

                {step === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-xl mx-auto text-center pt-8 pb-12"
                    >
                        <h1 className="text-3xl md:text-[42px] font-extrabold tracking-tight mb-8 leading-[1.15]">
                            Você erra porque Disciplina não é motivação.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                É sistema
                            </span>
                        </h1>
                        
                        <div className="mb-8 relative rounded-[32px] overflow-hidden border-2 border-zinc-800 shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)]">
                            <img src="/capaquiz.png.png" alt="Sistema Next Level" className="w-full h-auto object-cover opacity-95 transition-opacity duration-500 hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                        </div>

                        <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg mx-auto font-medium">
                            Um sistema com I.A integrada que transforma hábitos, tarefas e treinos em progresso visivel - <span className="font-bold text-white">ou você faz... ou zera</span>
                        </p>

                        <button
                            onClick={() => setStep('question1')}
                            className="w-full md:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-lg rounded-2xl flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] mx-auto group"
                        >
                            <div className="flex items-center gap-3">
                                <span>Entrar no Sistema</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest opacity-70 font-black mt-1">leva menos de 30s</span>
                        </button>
                    </motion.div>
                )}

                {step === 'question1' && (
                    <motion.div
                        key="question1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={1} />
                        
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 leading-tight tracking-tight text-white text-center max-w-2xl px-4">
                            Você já tentou criar bons hábitos... e desistiu depois de alguns dias?
                        </h2>

                        <img 
                            src="/gif1.webp" 
                            alt="" 
                            width="220" 
                            height="220" 
                            decoding="async" 
                            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto rounded-2xl mb-5 sm:mb-6 aspect-square object-cover border border-zinc-900 shadow-2xl" 
                        />

                        <p className="text-zinc-500 text-center max-w-lg mb-8 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tighter px-4">
                            Se sim, você não precisa de motivação. Precisa de um sistema que te prenda no progresso.
                        </p>
                        
                        <div className="flex gap-4 w-full max-w-md px-4">
                            <button
                                onClick={() => setStep('mockup1')}
                                className="flex-1 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Sim
                            </button>
                            <button
                                onClick={() => setStep('mockup1')}
                                className="flex-1 py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Não
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'mockup1' && (
                    <AppMockup onComplete={() => setStep('question2')} />
                )}

                {step === 'question2' && (
                    <motion.div
                        key="question2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={2} />
                        
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 leading-tight tracking-tight text-white text-center max-w-2xl px-4">
                            Você se sente desorganizado e acaba perdendo muito tempo no seu dia?
                        </h2>

                        <img 
                            src="/gif2.gif" 
                            alt="" 
                            width="220" 
                            height="220" 
                            decoding="async" 
                            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto rounded-2xl mb-5 sm:mb-6 aspect-square object-cover border border-zinc-900 shadow-2xl" 
                        />

                        <p className="text-zinc-500 text-center max-w-lg mb-8 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tighter px-4">
                            Sem organização, sua mente gasta mais energia decidindo o que fazer do que fazendo.
                        </p>
                        
                        <div className="flex gap-4 w-full max-w-md px-4">
                            <button
                                onClick={() => setStep('mockup2')}
                                className="flex-1 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Sim
                            </button>
                            <button
                                onClick={() => setStep('mockup2')}
                                className="flex-1 py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Não
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'mockup2' && (
                    <PlannerMockup onComplete={() => setStep('question3')} />
                )}

                {step === 'question3' && (
                    <motion.div
                        key="question3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={3} />
                        
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 leading-tight tracking-tight text-white text-center max-w-2xl px-4">
                            Você prometeu que iria focar nos treinos mas ficou só na promessa?
                        </h2>

                        <img 
                            src="/gif3.gif" 
                            alt="" 
                            width="220" 
                            height="220" 
                            decoding="async" 
                            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto rounded-2xl mb-5 sm:mb-6 aspect-square object-cover border border-zinc-900 shadow-2xl" 
                        />

                        <p className="text-zinc-500 text-center max-w-lg mb-8 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tighter px-4">
                            Sem um planner de treino, você não faz nada ou faz qualquer coisa.
                        </p>
                        
                        <div className="flex gap-4 w-full max-w-md px-4">
                           <button
                                onClick={() => setStep('mockup3')}
                                className="flex-1 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Sim
                            </button>
                            <button
                                onClick={() => setStep('mockup3')}
                                className="flex-1 py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Não
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'mockup3' && (
                    <WorkoutMockup onComplete={() => setStep('mockup4')} />
                )}

                {step === 'mockup4' && (
                    <WorkoutDetailMockup onComplete={() => setStep('question4')} onBack={() => setStep('mockup3')} />
                )}

                {step === 'question4' && (
                    <motion.div
                        key="question4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={4} />
                        
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 leading-tight tracking-tight text-white text-center max-w-2xl px-4">
                            Já tentou seguir dieta mas em 1 semana ou menos chutou o balde?
                        </h2>

                        <img 
                            src="/gif4.gif" 
                            alt="" 
                            width="220" 
                            height="220" 
                            decoding="async" 
                            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto rounded-2xl mb-5 sm:mb-6 aspect-square object-cover border border-zinc-900 shadow-2xl" 
                        />

                        <p className="text-zinc-500 text-center max-w-lg mb-8 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tighter px-4">
                            Sem planejamento claro e visível sua dieta vira apenas promessa.
                        </p>
                        
                        <div className="flex gap-4 w-full max-w-md px-4">
                            <button
                                onClick={() => setStep('mockup5')}
                                className="flex-1 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Sim
                            </button>
                            <button
                                onClick={() => setStep('mockup5')}
                                className="flex-1 py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Não
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'mockup5' && (
                    <DietMockup onComplete={() => setStep('questionFinance')} />
                )}

                {step === 'questionFinance' && (
                    <motion.div
                        key="questionFinance"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={5} />
                        
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 leading-tight tracking-tight text-white text-center max-w-2xl px-4">
                            Você sente que seu dinheiro some e você não sabe pra onde ele vai?
                        </h2>

                        <img 
                            src="/gif5.gif" 
                            alt="" 
                            width="220" 
                            height="220" 
                            decoding="async" 
                            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto rounded-2xl mb-5 sm:mb-6 aspect-square object-cover border border-zinc-900 shadow-2xl" 
                        />

                        <p className="text-zinc-500 text-center max-w-lg mb-8 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tighter px-4">
                            Sem controle financeiro, você trabalha para pagar contas em vez de construir liberdade.
                        </p>
                        
                        <div className="flex gap-4 w-full max-w-md px-4">
                            <button
                                onClick={() => setStep('mockupFinance')}
                                className="flex-1 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Sim
                            </button>
                            <button
                                onClick={() => setStep('mockupFinance')}
                                className="flex-1 py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-black text-lg rounded-2xl transition-all duration-300 transform active:scale-95"
                            >
                                Não
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'mockupFinance' && (
                    <FinanceMockup onComplete={() => setStep('aiPresentation')} />
                )}

                {step === 'aiPresentation' && (
                    <motion.div
                        key="aiPresentation"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={6} />

                        <div className="relative w-24 h-24 mb-8">
                            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full border border-emerald-500/30 bg-[#050505] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                <Brain className="w-10 h-10 text-emerald-400" />
                            </div>
                        </div>

                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Inteligência Artificial</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 leading-tight tracking-tight text-zinc-100 text-center max-w-2xl">
                            Imagine ter auxílio de uma{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                I.A especialista
                            </span>{' '}
                            em neurociência e alta performance
                        </h2>

                        <p className="text-zinc-400 text-base leading-relaxed mb-10 text-center max-w-lg">
                            para sugerir rotina, fazer treinos e dieta de acordo com seu objetivo e te auxiliar nas finanças. Tudo personalizado, feito para o seu ritmo.
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-10 w-full max-w-md">
                            {[
                                { icon: '🧠', label: 'Neurociência' },
                                { icon: '🎯', label: 'Objetivos' },
                                { icon: '🔥', label: 'Performance' },
                            ].map((item) => (
                                <div key={item.label} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center gap-1.5">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep('testimonials')}
                            className="w-full max-w-md py-5 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-black rounded-3xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.4)]"
                        >
                            Ver Resultados Reais
                        </button>
                    </motion.div>
                )}

                {step === 'testimonials' && (
                    <motion.div
                        key="testimonials"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-[100dvh] py-8 px-4"
                    >
                        <div className="mb-6">
                             <img src="/logo.webp" alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                        
                        <QuizProgress currentStep={6} />

                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 mb-3">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Resultados Reais</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-white mb-2">
                                Veja resultados de quem já usa
                            </h2>
                        </div>

                        <div className="w-full max-w-[400px] md:max-w-[440px] rounded-[48px] overflow-hidden border border-zinc-900 shadow-2xl mb-8">
                            <img 
                                src="/depoimentoquiz.png" 
                                alt="Depoimentos" 
                                className="w-full h-auto" 
                            />
                        </div>

                        <button
                            onClick={handleCTA}
                            className="w-full max-w-md py-6 bg-emerald-500 hover:bg-emerald-400 text-black text-xl font-black rounded-3xl transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(16,185,129,0.5)] transform hover:-translate-y-1"
                        >
                            Acessar Sistema Completo
                        </button>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}
