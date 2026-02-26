import {
  AlertTriangle, Activity, Play, ShieldCheck, Brain, Zap, Trophy, Dumbbell,
  BookOpen, Calendar, Bell, Droplets, ChevronRight, CheckCircle2, Star,
  ArrowRight, Lock, Book, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen }: any) => (
  <>
    {/* Navigation */}
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="Next Level Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#pricing" className="hover:text-white transition-colors">Preços</a>
          <button onClick={() => window.location.href = "https://pay.cakto.com.br/dj7mm52_776346"} className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-emerald-50 transition-all active:scale-95">
            Começar Agora
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
    {/* Mobile Menu */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-xl font-bold">
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Preços</a>
            <button onClick={() => window.location.href = "https://pay.cakto.com.br/dj7mm52_776346"} className="bg-emerald-600 text-white py-4 rounded-2xl">Começar Agora</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

export default Navbar;
