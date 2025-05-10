import { useTranslation } from 'react-i18next';
import { Settings, Link as LinkIcon, ShieldCheck, Palette, Zap } from 'lucide-react';

const ConceptsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="core-concepts" className="mb-16 scroll-mt-20">
      <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
        <Settings className="w-6 h-6 mr-2 text-orange-500 dark:text-[#faa83b]"/>
        {t('docsPage.conceptsTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{t('docsPage.conceptsIntro')}</p>
      <ul className="space-y-3">
        <li className="flex items-start">
          <LinkIcon className="w-4 h-4 mr-2 mt-1 text-orange-500 dark:text-[#faa83b] flex-shrink-0" />
          <span className="text-gray-700 dark:text-gray-200">
          <strong className="text-gray-900 dark:text-white">{t('docsPage.concept1').split(':')[0]}:</strong> 
            {t('docsPage.concept1').split(':')[1]}
          </span>
        </li>
        <li className="flex items-start">
          <ShieldCheck className="w-4 h-4 mr-2 mt-1 text-orange-500 dark:text-[#faa83b] flex-shrink-0" />
          <span className="text-gray-700 dark:text-gray-200">
            <strong className="text-gray-900 dark:text-white">{t('docsPage.concept2').split(':')[0]}:</strong> 
            {t('docsPage.concept2').split(':')[1]}
          </span>
        </li>
        <li className="flex items-start">
          <Palette className="w-4 h-4 mr-2 mt-1 text-orange-500 dark:text-[#faa83b] flex-shrink-0" />
          <span className="text-gray-700 dark:text-gray-200">
            <strong className="text-gray-900 dark:text-white">{t('docsPage.concept3').split(':')[0]}:</strong> 
            {t('docsPage.concept3').split(':')[1]}
          </span>
        </li>
        <li className="flex items-start">
          <Zap className="w-4 h-4 mr-2 mt-1 text-orange-500 dark:text-[#faa83b] flex-shrink-0" />
          <span className="text-gray-700 dark:text-gray-200">
            <strong className="text-gray-900 dark:text-white">{t('docsPage.concept4').split(':')[0]}:</strong> 
            {t('docsPage.concept4').split(':')[1]}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default ConceptsSection;
