import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { UserCheck } from 'lucide-react';
import { Button } from '../ui/components/button';

const AuthSection = () => {
  const { t } = useTranslation();

  return (
    <section id="authentication" className="mb-16 scroll-mt-20">
      <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
        <UserCheck className="w-6 h-6 mr-2 text-orange-500 dark:text-[#faa83b]"/>
        {t('docsPage.authTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.authIntro')}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t('docsPage.authContext')}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.authPlayground')}</p>
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/login" className="text-gray-700 dark:text-gray-200">Login Page</Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to="/register" className="text-gray-700 dark:text-gray-200">Register Page</Link>
        </Button>
      </div>
    </section>
  );
};

export default AuthSection;
