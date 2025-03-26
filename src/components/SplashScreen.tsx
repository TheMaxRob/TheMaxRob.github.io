'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onClick={onFinish}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold cursor-pointer">
          Max Roberts
        </h1>
      </motion.div>
    </AnimatePresence>
  );
}
