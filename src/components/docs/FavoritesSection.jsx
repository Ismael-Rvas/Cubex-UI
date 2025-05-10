import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const FavoritesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="favorites" className="mb-16 scroll-mt-20">
      <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
        <Heart className="w-6 h-6 mr-2 text-orange-500 dark:text-[#faa83b]"/>
        {t('docsPage.favTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.favIntro')}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t('docsPage.favComponents')} <Link to="/components" className="text-orange-500 dark:text-[#faa83b] hover:underline">{t('docsPage.componentsLink')}</Link> {t('docsPage.favComponentsDesc')}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        {t('docsPage.favTables')}
      </p>
    </section>
  );
};

export default FavoritesSection;
