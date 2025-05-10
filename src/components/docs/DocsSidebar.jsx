import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';

const DocsSidebar = ({ sidebarLinks, activeId }) => {
  const { t } = useTranslation();

  return (
    <motion.aside
  className="hidden md:block md:w-64 flex-shrink-0"
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>

      <div className="sticky top-24">
        <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">{t('docsPage.sidebarTitle')}</h2>
        <nav className="flex flex-col space-y-2 border-l border-gray-200 dark:border-gray-700">
          {sidebarLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "text-sm py-1 pl-4 border-l-2 transition-colors whitespace-nowrap",
                activeId === link.id
                  ? "border-orange-500 text-orange-500 dark:border-[#e99d38] dark:text-[#e99d38] font-medium"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500"
              )}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default DocsSidebar;
