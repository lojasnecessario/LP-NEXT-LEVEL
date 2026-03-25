import { motion, AnimatePresence } from 'motion/react';
import { PartyPopper } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ReleaseNotificationProps {
    isVisible: boolean;
}

const ReleaseNotification = ({ isVisible }: ReleaseNotificationProps) => {
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShouldShow(true);
            const timer = setTimeout(() => {
                setShouldShow(false);
            }, 5000); // Show for 5 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] w-full max-w-sm px-4"
                >
                    <div className="glass px-6 py-4 rounded-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 flex items-center gap-4 bg-black/60 backdrop-blur-xl">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                            <PartyPopper className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="flex-1 text-left">
                            <h4 className="text-white font-bold leading-tight text-[15px]">Acesso Completo Liberado!</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Role para baixo para conferir todas as funcionalidades.</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ReleaseNotification;
