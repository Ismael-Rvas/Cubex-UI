import { motion } from 'framer-motion';
import IntroSection from './IntroSection';
import InstallSection from './InstallSection';
import ConceptsSection from './ConceptsSection';
import UsageSection from './UsageSection';
import AuthSection from './AuthSection';
import FavoritesSection from './FavoritesSection';
import ApiSection from './ApiSection';

const DocsContent = () => {
  return (
    <motion.main
      className="flex-1 min-w-0 md:w-2/3 lg:w-3/4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-3xl">
        <IntroSection />
        <InstallSection />
        <ConceptsSection />
        <UsageSection />
        <AuthSection />
        <FavoritesSection />
        <ApiSection />
      </div>
    </motion.main>
  );
};

export default DocsContent;
