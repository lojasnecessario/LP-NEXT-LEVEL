import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const GuaranteeSection = () => (
<>
      {/* Guarantee Block */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass py-6 px-8 rounded-3xl border-emerald-500/20 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">7 Dias de Garantia Incondicional</h3>
              <p className="text-gray-400 text-sm">Experimente o Next Level sem riscos. Se não sentir a evolução, devolvemos 100% do seu investimento.</p>
            </div>
          </motion.div>
        </div>
      </section>
</>
);

export default GuaranteeSection;
