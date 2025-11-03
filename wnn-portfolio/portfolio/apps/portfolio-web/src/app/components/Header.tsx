'use client';

import { motion } from "framer-motion";

interface HeaderProps {
  onProjectsClick: () => void;
  currentBackground: string;
}

export default function Header({ onProjectsClick, currentBackground }: HeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center text-center px-6 pt-20">
      {/* Nome no topo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90" style={{
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
        }}>
          Winnícius Moura
        </h2>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white/90"
        style={{
          fontFamily: '"Clash Display", "Space Grotesk", sans-serif',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
        }}
      >
        Frameworks mudam.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-2xl sm:text-3xl md:text-4xl">
          Fundamentos permanecem.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-4 text-base sm:text-lg md:text-xl text-white/70"
        style={{
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
        }}
      >
        Desenvolvedor Pleno •{" "}
        <span className="font-medium text-white/90">
          Founder wnn-softwares
        </span>
      </motion.p>

      {/* <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={onProjectsClick}
        className={`mt-8 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${currentBackground === 'capa.png'
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
          : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
          }`}
        style={{
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Projects
      </motion.button> */}
    </header>
  );
}