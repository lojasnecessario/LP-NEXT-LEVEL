import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity, Brain, AlertTriangle } from 'lucide-react';

const yesNoQuestions = [
    "Você tem a sensação constante de que está sempre 'atrasado' na vida em relação aos outros?",
    "Você costuma começar novos projetos com empolgação, mas abandona tudo no meio do caminho?",
    "Você se sente culpado no fim do dia por não ter feito o que deveria (mesmo tendo passado o dia todo com a cabeça cheia)?",
    "Você consome dezenas de horas de conteúdo útil, mas raramente aplica o que aprendeu na vida real?",
    "Você evita se comparar com outras pessoas da sua idade porque isso te frustra profundamente?",
    "Você sabe exatamente o que precisa fazer, mas simplesmente não consegue entrar em ação?"
];

const multipleChoiceQuestions = [
    {
        question: "Se você continuar exatamente como está por mais 3 anos, o que acontece com a sua vida?",
        options: [
            { id: 'a', text: "Melhora um pouco (no ritmo lento atual)", score: 0 },
            { id: 'b', text: "Fica exatamente igual, estagnada", score: 1 },
            { id: 'c', text: "Piora drasticamente, perdendo oportunidades cruciais", score: 2 },
        ]
    },
    {
        question: "Qual área da sua vida está sendo mais destruída pela procrastinação neste exato momento?",
        options: [
            { id: 'a', text: "Dinheiro e Carreira", score: 1 },
            { id: 'b', text: "Saúde e Corpo", score: 1 },
            { id: 'c', text: "Estudos e Foco", score: 1 },
            { id: 'd', text: "Autoestima e Confiança", score: 1 },
        ]
    },
    {
        question: "Como você descreveria sua autoimagem atual da forma mais honesta possível?",
        options: [
            { id: 'a', text: "Disciplinado na maior parte do tempo", score: 0 },
            { id: 'b', text: "Inconstante, só ajo quando sinto motivação", score: 1 },
            { id: 'c', text: "Viciado em distrações fáceis e dopamina barata", score: 2 },
        ]
    }
];

export default function Quiz() {
    const [step, setStep] = useState<'intro' | 'yesno' | 'multiple' | 'loading' | 'result'>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [loadingText, setLoadingText] = useState("Analisando seu padrão comportamental...");

    const handleStart = () => setStep('yesno');

    const handleYesNo = (answerYes: boolean) => {
        if (answerYes) setScore(s => s + 1);

        if (currentQuestionIndex < yesNoQuestions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
        } else {
            setCurrentQuestionIndex(0);
            setStep('multiple');
        }
    };

    const handleMultipleChoice = (points: number) => {
        setScore(s => s + points);

        if (currentQuestionIndex < multipleChoiceQuestions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
        } else {
            setStep('loading');
            simulateLoading();
        }
    };

    const simulateLoading = () => {
        setTimeout(() => setLoadingText("Cruzando informações emocionais..."), 1500);
        setTimeout(() => setLoadingText("Gerando diagnóstico de perfil..."), 3000);
        setTimeout(() => setStep('result'), 4500);
    };

    const getResult = () => {
        if (score <= 3) {
            return {
                level: "Nível 1",
                title: "Procrastinação Leve",
                color: "text-yellow-400",
                bg: "bg-yellow-400/10",
                border: "border-yellow-400/30",
                description: "Você tem momentos de foco e vontade de crescer, mas a falta de consistência está sugando seu potencial aos poucos. O problema ainda não é grave o suficiente para destruir sua vida, mas vai escalar mais rápido do que você pensa.",
            };
        } else if (score <= 7) {
            return {
                level: "Nível 2",
                title: "Procrastinação Crônica",
                color: "text-orange-500",
                bg: "bg-orange-500/10",
                border: "border-orange-500/30",
                description: "Você está vivendo no ciclo da autossabotagem: Motivação -> Distração -> Culpa. Você tem plena consciência do que precisa fazer, mas seu cérebro prefere buscar dopamina barata em vez de focar no seu futuro.",
            };
        } else {
            return {
                level: "Nível 3",
                title: "Autossabotagem Avançada",
                color: "text-red-500",
                bg: "bg-red-500/10",
                border: "border-red-500/30",
                description: "ALERTA CRÍTICO: Seu padrão comportamental não é apenas 'preguiça', é um sistema interno de fuga avançado. Você está desperdiçando seu potencial e se contentando em viver uma vida infinitamente menor do que deveria.",
            };
        }
    };

    const handleCTA = () => {
        window.location.href = '/';
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
                        className="max-w-xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-400 mb-6">
                            <Brain className="w-4 h-4 text-emerald-400" />
                            <span>Avaliação Comportamental Avançada</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Você sabe que é capaz de mais. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                Por que você continua travando?
                            </span>
                        </h1>

                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed md:px-4">
                            Responda a este teste rápido e desconfortável de 2 minutos para descobrir o padrão psicológico exato que está sabotando seu progresso.
                        </p>

                        <button
                            onClick={handleStart}
                            className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] mx-auto"
                        >
                            <span>Quero descobrir meu resultado</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}

                {step === 'yesno' && (
                    <motion.div
                        key={`yesno-${currentQuestionIndex}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-lg w-full"
                    >
                        <div className="mb-8">
                            <div className="flex justify-between text-xs text-zinc-500 font-bold tracking-wider mb-3">
                                <span>FASE 1</span>
                                <span>{currentQuestionIndex + 1} / {yesNoQuestions.length}</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentQuestionIndex) / yesNoQuestions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-10 leading-relaxed">
                            {yesNoQuestions[currentQuestionIndex]}
                        </h2>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => handleYesNo(true)}
                                className="w-full py-5 px-6 bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-800 hover:border-emerald-500 text-left rounded-xl text-lg font-medium transition-colors flex justify-between items-center group"
                            >
                                <span>Sim, me identifico</span>
                                <span className="text-zinc-600 group-hover:text-emerald-500 transition-colors">→</span>
                            </button>

                            <button
                                onClick={() => handleYesNo(false)}
                                className="w-full py-5 px-6 bg-transparent border-2 border-zinc-900 text-left rounded-xl text-lg font-medium text-zinc-500 hover:text-white hover:border-zinc-800 transition-colors"
                            >
                                <span>Não</span>
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 'multiple' && (
                    <motion.div
                        key={`multiple-${currentQuestionIndex}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-lg w-full"
                    >
                        <div className="mb-8">
                            <div className="flex justify-between text-xs text-zinc-500 font-bold tracking-wider mb-3">
                                <span>FASE 2: IMPACTO</span>
                                <span>{currentQuestionIndex + 1} / {multipleChoiceQuestions.length}</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-cyan-500 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentQuestionIndex) / multipleChoiceQuestions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-8 leading-relaxed">
                            {multipleChoiceQuestions[currentQuestionIndex].question}
                        </h2>

                        <div className="flex flex-col gap-4">
                            {multipleChoiceQuestions[currentQuestionIndex].options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleMultipleChoice(opt.score)}
                                    className="w-full py-5 px-6 bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-800 hover:border-cyan-500 text-left rounded-xl text-md sm:text-lg font-medium transition-colors group flex items-center justify-between shadow-sm"
                                >
                                    <span className="pr-4">{opt.text}</span>
                                    <div className="w-5 h-5 rounded-full border-2 border-zinc-600 group-hover:border-cyan-500 flex-shrink-0" />
                                </button>
                            ))}
                        </div>
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
                            <div className={`p-8 md:p-10 rounded-2xl border-2 ${res.border} ${res.bg} backdrop-blur-sm mb-8 text-center shadow-lg relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-20 pointer-events-none mix-blend-screen" style={{ backgroundColor: res.color.split('-')[1] }}></div>

                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/50 border border-white/10 mb-6 relative z-10">
                                    <AlertTriangle className={`w-8 h-8 ${res.color}`} />
                                </div>

                                <h4 className="text-xs font-bold tracking-[0.2em] text-zinc-400 mb-3 uppercase relative z-10">{res.level}</h4>
                                <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${res.color} relative z-10 tracking-tight`}>{res.title}</h2>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium relative z-10">
                                    {res.description}
                                </p>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 text-center shadow-xl">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">A verdade desconfortável:</h3>
                                <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                                    Não confunda esse resultado com falta de capacidade ou "preguiça".
                                    <br /><br />
                                    A culpa <strong className="text-zinc-200 font-semibold">não é só sua</strong>. O problema é estrutural: você precisa de um sistema porque hoje o seu cérebro busca o caminho de menor resistência para lidar com a ansiedade e as distrações infinitas.
                                </p>

                                <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-8">
                                    <p className="text-emerald-400 font-bold text-lg">
                                        Existe uma solução prática para interromper esse ciclo hoje.
                                    </p>
                                </div>

                                <button
                                    onClick={handleCTA}
                                    className="w-full py-5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black text-lg md:text-xl font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
                                >
                                    Veja a solução para este problema que atinge milhares de jovens
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
