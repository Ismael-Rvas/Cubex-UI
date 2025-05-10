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
      className="flex-grow min-w-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-full px-4 py-8 mx-auto sm:px-6 lg:px-8">
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
