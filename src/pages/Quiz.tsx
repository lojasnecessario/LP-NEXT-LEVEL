import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity, Brain, AlertTriangle, Check, DollarSign, Heart, BookOpen } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';

const RadialQuestion = ({ question, onNext }: any) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [isNone, setIsNone] = useState(false);

    const toggleOption = (id: string) => {
        if (isNone) setIsNone(false);
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleNone = () => {
        setIsNone(!isNone);
        if (!isNone) setSelected([]);
    };

    const progress = isNone ? 0 : (selected.length / question.options.length) * 100;
    const isFull = progress === 100 && !isNone;
    const strokeColor = isFull ? '#10b981' : '#ef4444'; 

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const handleSubmit = () => {
        let score = isNone ? 2 : selected.length < 4 ? 1 : 0;
        onNext(score);
    };

    return (
        <div className="flex flex-col items-center gap-8 w-full">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r={radius} className="stroke-zinc-800" strokeWidth="12" fill="none" />
                    <motion.circle 
                        cx="70" cy="70" r={radius} 
                        stroke={strokeColor} 
                        strokeWidth="12" fill="none" 
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset, stroke: strokeColor }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ strokeDasharray: circumference }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span animate={{ color: strokeColor }} className="text-3xl font-black">{Math.round(progress)}%</motion.span>
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
                {question.options.map((opt: any) => {
                    const isActive = selected.includes(opt.id);
                    return (
                        <button
                            key={opt.id}
                            onClick={() => toggleOption(opt.id)}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${isActive ? 'bg-zinc-800 border-zinc-500' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'}`}
                        >
                            <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${isActive ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-zinc-600'}`}>
                                {isActive && <Check className="w-4 h-4" />}
                            </div>
                            <span className="text-2xl">{opt.icon}</span>
                            <span className="text-lg font-medium flex-1 text-left">{opt.label}</span>
                        </button>
                    )
                })}
                <div className="h-px bg-zinc-800 my-2 w-full" />
                <button
                    onClick={toggleNone}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${isNone ? 'bg-red-500/10 border-red-500/50' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'}`}
                >
                     <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${isNone ? 'bg-red-500 border-red-500 text-black' : 'border-zinc-600'}`}>
                        {isNone && <Check className="w-4 h-4" />}
                     </div>
                     <span className="text-2xl">{question.noneOption.icon}</span>
                     <span className="text-lg font-medium flex-1 text-left">{question.noneOption.label}</span>
                </button>
            </div>

            <button
                onClick={handleSubmit}
                disabled={selected.length === 0 && !isNone}
                className={`w-full py-4 text-black text-lg font-bold rounded-xl transition-all flex justify-center items-center gap-2 ${(selected.length > 0 || isNone) ? 'bg-emerald-500 hover:bg-emerald-400 opacity-100 hover:scale-105 hover:-translate-y-1 hover:shadow-lg' : 'bg-zinc-600 cursor-not-allowed opacity-50'}`}
            >
                Confirmar
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    )
};

const ScaleQuestion = ({ question, onNext }: any) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-5 gap-2 md:grid-cols-10 md:gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                    const hue = (num - 1) * 12;
                    return (
                        <button
                            key={num}
                            onClick={() => {
                                const pts = num <= 3 ? 2 : num <= 7 ? 1 : 0;
                                onNext(pts);
                            }}
                            className="h-12 flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 rounded-lg text-lg font-bold transition-all hover:scale-110 active:scale-95 group relative overflow-hidden"
                        >
                            <span className="relative z-10">{num}</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: `hsl(${hue}, 80%, 50%)` }} />
                        </button>
                    )
                })}
            </div>
            <div className="flex justify-between px-1">
                <span className="text-xs text-zinc-400 font-medium">1 - {question.denominations[0]}</span>
                <span className="text-xs text-zinc-400 font-medium">10 - {question.denominations[9]}</span>
            </div>
            <div className="mt-4 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20 shadow-inner">
                <p className="text-sm tracking-wide text-zinc-300 leading-relaxed text-center font-medium">
                    Seja honesto. A maioria das pessoas fica entre 3 e 6.
                </p>
            </div>
        </div>
    )
}

const ChartQuestion = ({ question, onNext }: any) => {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex items-end justify-center h-64 gap-3 sm:gap-6 mt-4">
                {question.options.map((opt: any, index: number) => (
                    <motion.button
                        key={opt.id}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${opt.height}%`, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={() => onNext(opt.score)}
                        className={`relative w-28 sm:w-32 rounded-t-xl bg-gradient-to-t ${opt.color} group hover:-translate-y-2 transition-all shadow-md cursor-pointer flex flex-col items-center justify-end pb-4 font-bold text-sm sm:text-base text-center leading-tight`}
                    >
                         <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors rounded-t-xl" />
                         <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 text-2xl -translate-x-1/2 left-1/2">✨</span>
                         <span className="px-2 sm:px-3 text-white font-extrabold whitespace-pre-wrap">{opt.label}</span>
                    </motion.button>
                ))}
            </div>
            <p className="text-center text-zinc-500 text-sm italic mt-2">Toque na barra que melhor representa sua visão de futuro.</p>
        </div>
    )
}

const MultiSelectCardsQuestion = ({ question, onNext }: any) => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleOption = (id: string) => {
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const handleSubmit = () => {
        onNext(selected.length);
    };

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {question.options.map((opt: any) => {
                    const isActive = selected.includes(opt.id);
                    return (
                        <button
                            key={opt.id}
                            onClick={() => toggleOption(opt.id)}
                            className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all cursor-pointer min-h-[140px] ${isActive ? 'bg-emerald-500/10 border-emerald-500' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'}`}
                        >
                             {opt.icon}
                             <span className={`mt-3 text-[15px] sm:text-base font-bold text-center leading-snug ${isActive ? 'text-emerald-400' : 'text-zinc-300'}`}>{opt.label}</span>
                             
                             <AnimatePresence>
                                 {isActive && (
                                    <motion.div 
                                        initial={{ scale: 0, opacity: 0 }} 
                                        animate={{ scale: 1, opacity: 1 }} 
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-lg border-[3px] border-black"
                                    >
                                         <Check className="w-4 h-4 stroke-[4]" />
                                    </motion.div>
                                 )}
                             </AnimatePresence>
                        </button>
                    )
                })}
            </div>
            <button
                onClick={handleSubmit}
                disabled={selected.length === 0}
                className={`w-full py-4 mt-2 text-black text-lg font-bold rounded-xl transition-all flex justify-center items-center gap-2 ${selected.length > 0 ? 'bg-emerald-500 hover:bg-emerald-400 opacity-100 hover:scale-105 hover:-translate-y-1 hover:shadow-lg' : 'bg-zinc-600 cursor-not-allowed opacity-50'}`}
            >
                Confirmar
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    )
}

const CardsQuestion = ({ question, onNext }: any) => {
    return (
        <div className="flex flex-col gap-4">
            {question.options.map((opt: any) => (
                <button
                    key={opt.id}
                    onClick={() => onNext(opt.score)}
                    className="w-full relative overflow-hidden p-6 bg-zinc-900 border-2 border-zinc-800 hover:border-emerald-500 rounded-2xl text-left transition-all hover:-translate-y-1 hover:shadow-lg group flex items-center gap-4 cursor-pointer"
                >
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-2xl group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                        {opt.id === 'a' ? '😇' : opt.id === 'b' ? '⚖️' : '📱'}
                    </div>
                    <span className="text-lg font-semibold text-zinc-300 group-hover:text-white flex-1 leading-snug">
                        {opt.text}
                    </span>
                </button>
            ))}
        </div>
    )
}

const quizQuestions = [
    {
        type: 'radial',
        question: "Quais dessas tarefas você cumpriu hoje?",
        options: [
            { id: 'estudou', label: 'Estudou', icon: '📚' },
            { id: 'treinou', label: 'Treinou', icon: '💪' },
            { id: 'trabalhou', label: 'Trabalhou', icon: '💼' },
            { id: 'leu', label: 'Leu 5 pág de livro', icon: '📖' },
        ],
        noneOption: { id: 'nenhuma', label: 'Nenhuma tarefa', icon: '❌' }
    },
    {
        type: 'scale',
        question: "De 1 a 10, qual o nível de organização da sua vida?",
        denominations: [
            "Um caos 🌪️", "Indisciplinado 😩", "Desorganizado 📉", "Inconstante ⚖️", "Mediano 😐",
            "Em evolução 🌱", "Organizado 📋", "Disciplinado 🎯", "Focado ⚡", "Alta Performance 🚀"
        ]
    },
    {
        type: 'chart',
        question: "Se usasse no mínimo 70% do seu potencial, aonde acha que estaria hoje?",
        options: [
            { id: 'melhor', label: "Estaria com a\nvida melhor", height: 50, color: 'from-blue-600 to-blue-400', score: 2 },
            { id: 'destaque', label: "Estaria me\ndestacando", height: 75, color: 'from-purple-600 to-purple-400', score: 1 },
            { id: 'auge', label: "Estaria no\nmeu auge", height: 100, color: 'from-emerald-600 to-emerald-400', score: 0 }
        ]
    },
    {
        type: 'multiselect',
        question: "Quais pontos da sua vida a procrastinação mais afetou?",
        options: [
            { id: 'financas', label: "Área financeira", icon: <DollarSign className="w-10 h-10 text-yellow-500" /> },
            { id: 'saude', label: "Saúde física e mental", icon: <Heart className="w-10 h-10 text-red-500" /> },
            { id: 'estudos', label: "Trabalho e estudos", icon: <BookOpen className="w-10 h-10 text-blue-500" /> }
        ]
    },
    {
        type: 'cards',
        question: "Como você descreveria sua autoimagem atual da forma mais honesta possível?",
        options: [
            { id: 'a', text: "Disciplinado na maior parte do tempo", score: 0 },
            { id: 'b', text: "Inconstante, só ajo quando sinto motivação", score: 1 },
            { id: 'c', text: "Viciado em distrações fáceis e dopamina barata", score: 2 },
        ]
    }
];

export default function Quiz() {
    const [step, setStep] = useState<'intro' | 'questions' | 'loading' | 'result'>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [loadingText, setLoadingText] = useState("Analisando seu padrão comportamental...");

    const handleStart = () => setStep('questions');

    const nextQuestion = (points: number) => {
        setScore(s => s + points);

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
        } else {
            setStep('loading');
            simulateLoading();
        }
    };

    const simulateLoading = () => {
        setTimeout(() => setLoadingText("Cruzando informações emocionais..."), 500);
        setTimeout(() => setLoadingText("Gerando diagnóstico de perfil..."), 1000);
        setTimeout(() => setStep('result'), 1500);
    };

    const getResult = () => {
        // Max score ~ 11. Up to 60% is roughly score <= 6.
        if (score <= 6) {
            return {
                level: "Resultado Analisado",
                title: "Procrastinação avançada nivel 2",
                color: "text-yellow-400",
                bg: "bg-yellow-400/10",
                border: "border-yellow-400/30",
                description: "Não foi por falta de tentar, alguns dias você acordou e fez o que tinha que ser feito, mas em poucos dias você voltou para a estaca 0. Isso é normal quando a sua vida não segue padrões e sistemas claros de rotina.",
            };
        } else {
            return {
                level: "Resultado Analisado",
                title: "Procrastinação crônica nivel 4",
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/30",
                description: "Você está um caos e sua vida precisa de uma solução, pois a procrastinação a longo prazo se transforma em problemas psicológicos como depressão e ansiedade. Sua vida já não é conduzida por você, você vive no piloto automático",
            };
        }
    };

    const handleCTA = () => {
        trackMetaEvent('Lead', { source: 'quiz_completion' });
        window.location.href = '/';
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center p-4">
            <AnimatePresence mode="wait">

                {step === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-400 mb-6">
                            <Brain className="w-4 h-4 text-emerald-400" />
                            <span>Avaliação Interativa</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-tight">
                            Descubra o que trava a sua vida <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                com apenas 5 perguntas
                            </span>
                        </h1>

                        <button
                            onClick={handleStart}
                            className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 hover:shadow-lg mx-auto"
                        >
                            <span>Quero descobrir meu resultado</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}

                {step === 'questions' && (
                    <motion.div
                        key={`question-${currentQuestionIndex}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-screen-sm w-full"
                    >
                        <div className="mb-8">
                            <div className="flex justify-between text-xs text-zinc-500 font-bold tracking-wider mb-3 uppercase">
                                <span>Progresso</span>
                                <span>{currentQuestionIndex + 1} / {quizQuestions.length}</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-10 leading-relaxed text-center sm:text-left">
                            {currentQuestion.question}
                        </h2>

                        {currentQuestion.type === 'radial' && <RadialQuestion question={currentQuestion} onNext={nextQuestion} />}
                        {currentQuestion.type === 'scale' && <ScaleQuestion question={currentQuestion} onNext={nextQuestion} />}
                        {currentQuestion.type === 'chart' && <ChartQuestion question={currentQuestion} onNext={nextQuestion} />}
                        {currentQuestion.type === 'multiselect' && <MultiSelectCardsQuestion question={currentQuestion} onNext={nextQuestion} />}
                        {currentQuestion.type === 'cards' && <CardsQuestion question={currentQuestion} onNext={nextQuestion} />}
                    </motion.div>
                )}

                {step === 'loading' && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center max-w-sm text-center"
                    >
                        <div className="w-20 h-20 relative mb-8">
                            <div className="absolute inset-0 border-4 border-zinc-800 rounded-full" />
                            <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin" />
                            <Activity className="absolute inset-0 m-auto w-8 h-8 text-emerald-500 animate-pulse" />
                        </div>
                        <h3 className="text-xl font-medium animate-pulse text-zinc-200">{loadingText}</h3>
                        <p className="text-zinc-600 mt-3 text-sm">Validando métricas comportamentais...</p>
                    </motion.div>
                )}

                {step === 'result' && (() => {
                    const res = getResult();
                    return (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl w-full"
                        >
                            <div className={`p-8 md:p-10 rounded-2xl border-2 ${res.border} ${res.bg} mb-8 text-center shadow-lg relative overflow-hidden bg-black/50`}>
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none mix-blend-screen bg-white" style={{ backgroundColor: res.color.split('-')[1] }}></div>

                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/50 border border-white/10 mb-6 relative z-10">
                                    <AlertTriangle className={`w-8 h-8 ${res.color}`} />
                                </div>

                                <h4 className="text-xs font-bold tracking-[0.2em] text-zinc-400 mb-3 uppercase relative z-10">{res.level}</h4>
                                <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${res.color} relative z-10 tracking-tight`}>{res.title}</h2>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium relative z-10">
                                    {res.description}
                                </p>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 text-left shadow-xl">
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-emerald-400">Solução:</h3>
                                <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
                                    Planejar a semana, visualizar objetivos do dia, iniciar ou focar em treinos fisicos para estimular a dopamina, ter uma alimentação limpa e regrada para o cérebro trabalhar melhor
                                </p>

                                <div className="py-2 mb-6 text-center">
                                    <p className="text-zinc-400 font-bold text-lg">
                                        veja como é mais fácil mudar tudo isso com o next level
                                    </p>
                                </div>

                                <button
                                    onClick={handleCTA}
                                    className="w-full py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg md:text-xl font-bold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
                                >
                                    Seja melhor hoje
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })()}

            </AnimatePresence>
        </div>
    );
}
