import { motion } from 'framer-motion';
import Navblock from "../components/ui/blocks/NavBlock";

export default function Header() {

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 w-full bg-transparent backdrop-blur-lg border-b border-gray-200 dark:border-[#151518]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <Navblock />
    </motion.header>
  );
}
