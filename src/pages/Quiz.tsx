import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';
import { Check, ArrowRight, Brain, AlertTriangle, Target, CheckCircle2, Sparkles, Trash2, Plus, Dumbbell, Activity, Calendar as CalendarIcon, X, Scale, Flame, UtensilsCrossed } from 'lucide-react';

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
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative">
                <div className="px-6 pt-10 pb-8">
                    <h2 className="text-[28px] font-bold tracking-tight">Visão Geral</h2>
                    <p className="text-zinc-500 mt-1 text-sm font-medium">Sábado, 21 De Março</p>
                    
                    <div className="flex items-center gap-3 mt-6">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-950/20 text-emerald-500 border border-emerald-900/40 font-bold text-sm">
                            <Target className="w-4 h-4" />
                            Ver Minha Rotina
                        </button>
                        <button className="flex-1 py-3.5 px-4 rounded-2xl bg-emerald-950/20 text-emerald-500/70 border border-emerald-900/30 font-extrabold text-[11px] tracking-wider">
                            2 DIAS SEGUIDOS
                        </button>
                    </div>

                    <div className="mt-6 p-6 rounded-3xl bg-[#0a0a0a] border border-zinc-900/80">
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

                    <div className="mt-6 p-6 rounded-3xl bg-[#0a0a0a] border border-zinc-900/80">
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
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative">
                <div className="px-5 pt-10 pb-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-[26px] font-bold tracking-tight">Planner Semanal</h2>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/20 text-emerald-500 border border-emerald-900/40 text-[13px] font-bold">
                            <Sparkles className="w-3.5 h-3.5" />
                            IA
                        </button>
                    </div>

                    {/* Week slider header */}
                    <div className="flex items-center justify-between text-zinc-600 text-[13px] font-bold mb-6 px-1 tracking-wide">
                        <button className="hover:text-emerald-500 transition-colors px-2">&lt;</button>
                        <span>16 De Mar - 22 De Mar</span>
                        <button className="hover:text-emerald-500 transition-colors px-2">&gt;</button>
                    </div>

                    {/* Days */}
                    <div className="flex gap-2.5 overflow-x-auto pb-4 mb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {[
                            { day: 'Terça', num: '17', score: '7/12', active: false },
                            { day: 'Quarta', num: '18', score: '3/8', active: false },
                            { day: 'Quinta', num: '19', score: '0/12', active: false },
                            { day: 'Sexta', num: '20', score: '0/12', active: false },
                            { day: 'Sábado', num: '21', score: '0/6', active: true },
                            { day: 'Domingo', num: '22', score: '0/6', active: false }
                        ].map((d, i) => (
                            <div key={i} className={`flex flex-col items-center justify-center min-w-[65px] h-[85px] rounded-[20px] relative transition-all ${d.active ? 'bg-emerald-500 scale-105 shadow-[0_0_25px_rgba(16,185,129,0.3)] z-10' : 'bg-[#0a0a0a] border border-zinc-900/80 opacity-60 hover:opacity-100'}`}>
                                <span className={`text-[11px] mb-1 font-bold ${d.active ? 'text-black/80' : 'text-zinc-500'}`}>{d.day}</span>
                                <span className={`text-xl font-black ${d.active ? 'text-black' : 'text-zinc-300'}`}>{d.num}</span>
                                <span className={`text-[10px] mt-1 font-bold ${d.active ? 'text-black/70' : 'text-zinc-600'}`}>{d.score}</span>
                                {d.active && <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-1 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />}
                            </div>
                        ))}
                    </div>

                    {/* Active Day Card */}
                    <div className="mt-8 p-5 rounded-3xl bg-[#0a0a0a] border border-emerald-900/40">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[20px] font-bold text-white">Sábado</h3>
                            <span className="text-emerald-500 font-bold text-[13px] tracking-wide">21 de mar</span>
                        </div>

                        <div className="flex flex-col min-h-[140px] max-h-[300px] overflow-y-auto scrollbar-hide">
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
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col pb-6">
                {/* Main View */}
                <div className="transition-opacity duration-300 opacity-100">
                    <div className="px-5 pt-10 pb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-[28px] font-bold tracking-tight">Treinos</h2>
                            <span className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-extrabold tracking-wider">PRÓ</span>
                        </div>
                        <p className="text-zinc-400 text-[13px] mb-6">Gerencie seus treinos e evolução.</p>

                        <div className="flex items-center justify-between text-emerald-500 text-[15px] font-bold mb-6 px-1 tracking-wide bg-[#0a0a0a] border border-zinc-800 rounded-xl p-3">
                            <button className="hover:text-emerald-400 transition-colors px-2">&lt;</button>
                            <span className="text-center">16 de março - 22 de<br/>março</span>
                            <button className="hover:text-emerald-400 transition-colors px-2">&gt;</button>
                        </div>

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
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col pb-6">
                <div className="p-5 pt-8">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-[22px] font-bold mb-1.5 tracking-tight">Treino B - Costas e Bíceps</h3>
                            <span className="text-zinc-500 text-xs font-bold flex items-center gap-1.5">
                                <CalendarIcon className="w-3 h-3" /> 17 de março
                            </span>
                        </div>
                        <button onClick={onBack} className="text-zinc-400 p-1 hover:text-white transition-colors">
                            {onBack && <X className="w-6 h-6" />}
                        </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#111] border border-zinc-800 flex gap-4 mb-6 relative overflow-hidden">
                        <div className="flex-1 z-10">
                            <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">ANOTAÇÕES / FOCO</h4>
                            <p className="text-[13px] text-zinc-300 leading-relaxed font-medium">Priorize a conexão mente-músculo. Execute cada repetição com amplitude total e controle. Use...</p>
                        </div>
                        <div className="w-1.5 bg-emerald-500 absolute top-0 right-0 bottom-0"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { title: "Barra Fixa", sets: 4, reps: "Até a falha" },
                            { title: "Remada Curvada com Barra", sets: 4, reps: "8 - 12" },
                            { title: "Puxada Alta", sets: 3, reps: "10" },
                            { title: "Remada Serrote", sets: 3, reps: "12" }
                        ].map((ex, i) => (
                            <div key={i} className="p-4 rounded-[20px] bg-[#111] border border-zinc-800">
                                <span className="font-bold text-white text-[15px] block mb-4">{ex.title}</span>
                                <div className="flex gap-2.5">
                                    <div className="flex-1 bg-[#050505] border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
                                        <span className="text-[9px] text-zinc-500 font-bold tracking-widest">SÉRIES</span>
                                        <span className="font-bold text-sm">{ex.sets}</span>
                                    </div>
                                    <div className="flex-1 bg-[#050505] border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
                                        <span className="text-[9px] text-zinc-500 font-bold tracking-widest">REPETIÇÕES</span>
                                        <span className="font-bold text-sm">{ex.reps}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-8 py-4 rounded-2xl bg-[#111] border border-zinc-800 text-zinc-300 font-bold text-[15px] hover:bg-zinc-900 transition-colors">
                        Reabrir Treino
                    </button>
                    <button className="w-full mt-3 py-4 text-zinc-600 font-bold text-[13px] hover:text-red-500 transition-colors">
                        Excluir Treino
                    </button>
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
            <div className="bg-[#050505] text-white rounded-[40px] border-[6px] border-zinc-900 overflow-hidden shadow-2xl relative flex flex-col pb-0">
                {/* Header fixed */}
                <div className="px-5 pt-10 pb-4 bg-[#050505] shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-[28px] font-bold tracking-tight">Dieta</h2>
                        <span className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-extrabold tracking-wider">PRÓ</span>
                    </div>
                    <p className="text-zinc-400 text-[13px] mb-6">Plano alimentar personalizado pela IA.</p>

                    <button className="w-full py-4 px-4 rounded-2xl bg-[#0a0a0a] border border-emerald-900/40 text-emerald-500 font-bold text-[15px] flex justify-center items-center gap-2 mb-2 transition-colors hover:bg-emerald-900/10">
                        <Activity className="w-4 h-4" />
                        Gerar Nova Dieta
                    </button>
                </div>

                {/* Main scrollable area mock */}
                <div className="overflow-y-auto scrollbar-hide px-5" style={{ maxHeight: '340px' }}>
                    {/* 4 Boxes Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
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
                    <div className="p-5 rounded-3xl bg-[#0a0a0a] border border-zinc-800 mb-6">
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
                    <div className="flex gap-5 overflow-x-auto scrollbar-hide mb-6 border-b border-zinc-800/80 pb-0.5 -mx-5 px-5">
                        {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta'].map(d => (
                            <div key={d} className="relative pb-3 flex-shrink-0 cursor-pointer">
                                <span className={`text-[13px] font-bold ${d === 'Terça' ? 'text-white' : 'text-zinc-500'}`}>{d}</span>
                                {d === 'Terça' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 rounded-t-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>}
                            </div>
                        ))}
                    </div>

                    {/* Meals List */}
                    <div className="flex flex-col gap-3">
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
                                        <span className="text-zinc-500 text-[11px] font-bold">{m.time}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                                </div>
                                <div className="flex gap-3 text-xs font-bold justify-between px-1">
                                    <span className="text-orange-500">{m.kcal} kcal</span>
                                    <span className="text-red-500">P: {m.p} g</span>
                                    <span className="text-blue-500">C: {m.c} g</span>
                                    <span className="text-yellow-500">G: {m.g} g</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total do Dia - FIXED below meals, always visible */}
                <div className="px-5 pb-6 pt-4 bg-[#050505] shrink-0">
                    <div className="p-4 rounded-3xl bg-[#050505] border border-emerald-900/40 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
                        <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-widest mb-3 block">TOTAL DO DIA — TERÇA</span>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="bg-[#0a0a0a] rounded-xl p-2 flex flex-col items-center justify-center border border-zinc-800/80">
                                <span className="text-orange-500 font-bold text-[15px]">1950</span>
                                <span className="text-zinc-600 text-[8px] font-bold mt-1 tracking-widest">KCAL</span>
                            </div>
                            <div className="bg-[#0a0a0a] rounded-xl p-2 flex flex-col items-center justify-center border border-zinc-800/80">
                                <span className="text-red-500 font-bold text-[15px]">142 g</span>
                                <span className="text-zinc-600 text-[8px] font-bold mt-1 tracking-widest">PROT</span>
                            </div>
                            <div className="bg-[#0a0a0a] rounded-xl p-2 flex flex-col items-center justify-center border border-zinc-800/80">
                                <span className="text-blue-500 font-bold text-[15px]">230 g</span>
                                <span className="text-zinc-600 text-[8px] font-bold mt-1 tracking-widest">CARB</span>
                            </div>
                            <div className="bg-[#0a0a0a] rounded-xl p-2 flex flex-col items-center justify-center border border-zinc-800/80">
                                <span className="text-yellow-500 font-bold text-[15px]">54 g</span>
                                <span className="text-zinc-600 text-[8px] font-bold mt-1 tracking-widest">GORD</span>
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

export default function Quiz() {
    const [step, setStep] = useState<'intro' | 'question1' | 'transition1' | 'mockup1' | 'question2' | 'transition2' | 'mockup2' | 'question3' | 'transition3' | 'mockup3' | 'mockup4' | 'question4' | 'transition4' | 'mockup5' | 'aiPresentation' | 'testimonials'>('intro');
    const [q2Value, setQ2Value] = useState(5);

    useEffect(() => {
        if (step === 'transition1') {
            const timer = setTimeout(() => {
                setStep('mockup1');
            }, 3500);
            return () => clearTimeout(timer);
        } else if (step === 'transition2') {
            const timer = setTimeout(() => {
                setStep('mockup2');
            }, 3500);
            return () => clearTimeout(timer);
        } else if (step === 'transition3') {
            const timer = setTimeout(() => {
                setStep('mockup3');
            }, 3500);
            return () => clearTimeout(timer);
        } else if (step === 'transition4') {
            const timer = setTimeout(() => {
                setStep('mockup5');
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const handleCTA = () => {
        trackMetaEvent('Lead', { source: 'quiz_completion' });
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center p-4 overflow-hidden">
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
                            className="w-full md:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] mx-auto"
                        >
                            <span>Entrar no Sistema</span>
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}

                {step === 'question1' && (
                    <motion.div
                        key="question1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-lg w-full text-center py-12"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-zinc-900 border-2 border-zinc-800 mb-10 shadow-lg">
                            <Brain className="w-12 h-12 text-emerald-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight tracking-tight text-zinc-100">
                            Você já tentou criar hábitos e rotina e desistiu depois de alguns dias?
                        </h2>
                        
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setStep('transition1')}
                                className="w-full py-5 px-6 flex items-center justify-between text-xl font-bold rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all hover:-translate-y-1 group"
                            >
                                <span className="text-white">Sim, várias vezes</span>
                                <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                            </button>
                            <button
                                onClick={() => setStep('transition1')}
                                className="w-full py-5 px-6 flex items-center justify-between text-xl font-bold rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all hover:-translate-y-1 group"
                            >
                                <span className="text-zinc-400 group-hover:text-white transition-colors">Não, tenho disciplina</span>
                                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'transition1' && (
                    <motion.div
                        key="transition1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="max-w-4xl w-full text-center flex flex-col items-center justify-center min-h-screen px-4"
                    >
                        <AlertTriangle className="w-20 h-20 text-yellow-500 mb-10 opacity-90 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
                            Você não precisa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">motivação.</span>
                        </h2>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-zinc-300 leading-tight">
                            precisa de um sistema que te <span className="text-emerald-400 border-b-4 border-emerald-500 pb-2 inline-block shadow-emerald-500/20">prende</span> no progresso.
                        </h3>
                        
                        <div className="mt-20 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-4 border-zinc-800 border-t-emerald-500 animate-spin" />
                            <span className="text-emerald-500/80 font-bold tracking-[0.25em] text-sm uppercase animate-pulse">
                                Carregando Sistema
                            </span>
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
                        className="max-w-lg w-full text-center py-12"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-zinc-900 border-2 border-zinc-800 mb-10 shadow-lg">
                            <Target className="w-12 h-12 text-emerald-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight tracking-tight text-zinc-100">
                            De 0 a 10 qual seu nível de organização?
                        </h2>
                        
                        <div className="flex flex-col gap-8 mb-12">
                            <div className="relative pt-8 pb-4">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-black text-emerald-500">
                                    {q2Value}
                                </span>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="10" 
                                    value={q2Value} 
                                    onChange={(e) => setQ2Value(Number(e.target.value))}
                                    className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between mt-5 text-zinc-500 font-bold text-sm uppercase tracking-wide">
                                    <span>0 - Um caos</span>
                                    <span>10 - Perfeito</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setStep('transition2')}
                            className="w-full py-5 px-6 flex items-center justify-center gap-3 text-xl font-bold rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
                        >
                            Confirmar
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {step === 'transition2' && (
                    <motion.div
                        key="transition2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="max-w-4xl w-full text-center flex flex-col items-center justify-center min-h-screen px-4"
                    >
                        <AlertTriangle className="w-20 h-20 text-red-500 mb-10 opacity-90 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
                            Sem organização
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-2 inline-block">
                                diária...
                            </span>
                        </h2>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 text-zinc-300 leading-tight">
                            você se <span className="text-red-500 border-b-4 border-red-500 pb-2 inline-block shadow-red-500/20">perde.</span>
                        </h3>
                        
                        <div className="mt-20 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-4 border-zinc-800 border-t-emerald-500 animate-spin" />
                            <span className="text-emerald-500/80 font-bold tracking-[0.25em] text-sm uppercase animate-pulse">
                                Carregando Planner IA
                            </span>
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
                        className="max-w-lg w-full text-center py-12"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-zinc-900 border-2 border-zinc-800 mb-10 shadow-lg">
                            <Dumbbell className="w-12 h-12 text-emerald-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight tracking-tight text-zinc-100">
                            Esse ano você prometeu que iria começar a treinar ou focar nos treinos mas ficou apenas na promessa?
                        </h2>
                        
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setStep('transition3')}
                                className="w-full py-5 px-6 flex items-center justify-between text-xl font-bold rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all hover:-translate-y-1 group"
                            >
                                <span className="text-white">Sim, só promessa</span>
                                <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                            </button>
                            <button
                                onClick={() => setStep('transition3')}
                                className="w-full py-5 px-6 flex items-center justify-between text-xl font-bold rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all hover:-translate-y-1 group"
                            >
                                <span className="text-zinc-400 group-hover:text-white transition-colors">Não, já treino bem</span>
                                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'transition3' && (
                    <motion.div
                        key="transition3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="max-w-4xl w-full text-center flex flex-col items-center justify-center min-h-screen px-4"
                    >
                        <AlertTriangle className="w-20 h-20 text-orange-500 mb-10 opacity-90 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
                            Sem um planner de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">treino</span>
                        </h2>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 text-zinc-300 leading-tight">
                            você não faz nada ou faz <span className="text-orange-500 border-b-4 border-orange-500 pb-2 inline-block shadow-orange-500/20">qualquer coisa.</span>
                        </h3>
                        
                        <div className="mt-20 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-4 border-zinc-800 border-t-emerald-500 animate-spin" />
                            <span className="text-emerald-500/80 font-bold tracking-[0.25em] text-sm uppercase animate-pulse">
                                Carregando Treinos PRO
                            </span>
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
                        className="max-w-lg w-full text-center py-12"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-zinc-900 border-2 border-zinc-800 mb-10 shadow-lg">
                            <UtensilsCrossed className="w-12 h-12 text-emerald-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold mb-12 leading-tight tracking-tight text-zinc-100">
                            Já tentou seguir dieta mas em 1 semana ou menos chutou o balde?
                        </h2>
                        
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setStep('transition4')}
                                className="w-full py-5 px-6 flex items-center justify-between text-xl font-bold rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all hover:-translate-y-1 group"
                            >
                                <span className="text-white">Sim, sempre desisto</span>
                                <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                            </button>
                            <button
                                onClick={() => setStep('transition4')}
                                className="w-full py-5 px-6 flex items-center justify-between text-xl font-bold rounded-2xl bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all hover:-translate-y-1 group"
                            >
                                <span className="text-zinc-400 group-hover:text-white transition-colors">Não, consigo manter</span>
                                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'transition4' && (
                    <motion.div
                        key="transition4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="max-w-4xl w-full text-center flex flex-col items-center justify-center min-h-screen px-4"
                    >
                        <AlertTriangle className="w-20 h-20 text-red-500 mb-10 opacity-90 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-8">
                            Sem planejamento <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">claro e visível</span>
                        </h2>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-300 leading-tight">
                            sua dieta vira apenas <span className="text-red-500 border-b-4 border-red-500 pb-2 inline-block shadow-red-500/20">promessa.</span>
                        </h3>
                        
                        <div className="mt-20 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-4 border-zinc-800 border-t-emerald-500 animate-spin" />
                            <span className="text-emerald-500/80 font-bold tracking-[0.25em] text-sm uppercase animate-pulse">
                                Carregando Dieta PRÓ
                            </span>
                        </div>
                    </motion.div>
                )}

                {step === 'mockup5' && (
                    <DietMockup onComplete={() => setStep('aiPresentation')} />
                )}

                {step === 'aiPresentation' && (
                    <motion.div
                        key="aiPresentation"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-lg w-full text-center py-10 flex flex-col items-center"
                    >
                        {/* Glow orb */}
                        <div className="relative mx-auto w-32 h-32 mb-10">
                            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl scale-150" />
                            <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full border border-emerald-500/30 bg-[#050505] flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                                <Brain className="w-14 h-14 text-emerald-400" />
                            </div>
                        </div>

                        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Inteligência Artificial</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight tracking-tight text-zinc-100 mt-6">
                            Imagine ter auxílio de uma{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                I.A especialista
                            </span>{' '}
                            em neurociência e alta performance
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                            para sugerir rotina, fazer treinos e dieta de acordo com seu objetivo. Tudo personalizado, tudo no seu ritmo.
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-12">
                            {[
                                { icon: '🧠', label: 'Neurociência' },
                                { icon: '🎯', label: 'Seus Objetivos' },
                                { icon: '🔥', label: 'Alta Performance' },
                            ].map((item) => (
                                <div key={item.label} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center gap-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-zinc-400 text-xs font-bold">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep('testimonials')}
                            className="w-full py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
                        >
                            Continuar
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {step === 'testimonials' && (
                    <motion.div
                        key="testimonials"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-lg w-full py-10"
                    >
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 mb-4">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Resultados Reais</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
                                Veja depoimentos de quem já usa
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            <img 
                                src="/depoimentoquiz.png" 
                                alt="Depoimentos" 
                                className="w-full h-auto rounded-3xl border border-zinc-800 shadow-2xl" 
                            />
                        </div>

                        <button
                            onClick={handleCTA}
                            className="w-full mt-10 py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg font-extrabold rounded-2xl transition-all duration-300 shadow-[0_4px_30px_-5px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
                        >
                            Acessar Sistema Completo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}
