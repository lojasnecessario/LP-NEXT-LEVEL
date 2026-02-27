import { CheckCircle, ArrowRight, Instagram } from 'lucide-react';

export default function ThankYou() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 flex flex-col">
            {/* Simple Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="font-bold text-lg">N</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">Next Level</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
                <div className="max-w-2xl w-full">
                    <div className="relative text-center">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-8 backdrop-blur-xl">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black mb-4">
                                Pagamento <span className="gradient-text">Aprovado!</span>
                            </h1>

                            <p className="text-gray-400 text-lg md:text-xl mb-8">
                                Parabéns pela decisão de elevar sua rotina para o próximo nível. O seu acesso ao Next Level chegará no seu e-mail em instantes.
                            </p>

                            {/* Video Placeholder Area */}
                            <div className="w-full aspect-video bg-black/40 rounded-2xl border border-white/10 mb-8 overflow-hidden relative group">
                                {/* Replace the iframe src with your actual YouTube embed link when ready */}
                                {/* <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe> */}

                                {/* Temporary visual before video is added */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                                        <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium opacity-50">Vídeo de boas-vindas</span>
                                    <span className="text-xs opacity-30 mt-1">(Link será inserido aqui)</span>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-6 text-left mb-8 border border-white/5">
                                <h3 className="font-bold text-lg mb-4 text-white">Próximos passos:</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold border border-indigo-500/30">1</div>
                                        <p className="text-gray-300">Verifique sua caixa de entrada (e spam) para encontrar o e-mail de acesso.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-bold border border-purple-500/30">2</div>
                                        <p className="text-gray-300">Siga as instruções para criar sua senha e baixar o aplicativo.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 font-bold border border-pink-500/30">3</div>
                                        <p className="text-gray-300">Aproveite sua nova vida organizada pela IA.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://instagram.com/nextlevel.app.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10 group"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Siga no Instagram
                                </a>
                                <a
                                    href="mailto:suporte@nextlevelapp.space"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105"
                                >
                                    Precisando de ajuda?
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simplified Footer */}
            <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl py-8 mt-auto">
                <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
                    <p>© 2024 Next Level. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
