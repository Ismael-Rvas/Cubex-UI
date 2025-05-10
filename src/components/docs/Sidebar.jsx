import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ links }) => {
  const { t } = useTranslation();

  return (
    <motion.aside
      className="w-full md:w-64 flex-shrink-0"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="md:fixed md:w-64">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {t('docsPage.sidebarTitle')}
        </h2>
        <nav className="flex flex-col space-y-2">
          {links.map(link => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
