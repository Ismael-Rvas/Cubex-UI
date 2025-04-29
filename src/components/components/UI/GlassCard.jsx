import { motion } from "framer-motion";

export function GlassCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl bg-white/10 dark:bg-zinc-900/50 backdrop-blur-lg p-4 shadow-lg border border-orange-200/10 transition-all cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
