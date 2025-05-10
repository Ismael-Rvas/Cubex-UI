import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../ui/components/button';

const ApiSection = () => {
  const { t } = useTranslation();

  return (
    <section id="api-reference" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {t('docsPage.apiTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.apiIntro')}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t('docsPage.apiDesc')}
      </p>
      <Button asChild variant="default" size="lg" className="mt-4">
        <Link to="/components" className="text-white dark:text-gray-900">
          {t('docsPage.browseApiButton')}
        </Link>
      </Button>
    </section>
  );
};

export default ApiSection;
