import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex gap-6 items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center text-emerald-400 font-bold text-xl border border-emerald-500/30">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default Step;
