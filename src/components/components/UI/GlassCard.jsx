import { motion } from "framer-motion";

export function GlassCard({ children, variant}) {
  return (
    <motion.div
    whileHover={{ scale: 1.02 }}
    initial={{ y: variant === "up" ? -10 : 10, opacity: 0.9 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      className="rounded-2xl bg-white/10 dark:bg-zinc-900/50 backdrop-blur-lg p-4 shadow-lg border border-orange-200/10 transition-all cursor-pointer "
    >
      {children}
    </motion.div>
  );
}
