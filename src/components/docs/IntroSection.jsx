import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/components/card';
import { BookOpen, Feather } from 'lucide-react';

const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="introduction" className="mb-16 scroll-mt-20">
      <span className="text-sm font-semibold uppercase text-orange-500 dark:text-[#faa83b] tracking-wider">
        {t('docsPage.metaTitle')}
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-6 text-gray-900 dark:text-white">
        {t('docsPage.mainTitle')}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        {t('docsPage.mainSubtitle')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <Card className="hover:border-orange-500/50 transition-colors bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
              <BookOpen className="w-5 h-5 mr-2 text-orange-500 dark:text-[#faa83b]" />
              {t('docsPage.whatIsTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('docsPage.whatIsDesc')}
            </p>
          </CardContent>
        </Card>
        <Card className="hover:border-orange-500/50 transition-colors bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
              <Feather className="w-5 h-5 mr-2 text-orange-500 dark:text-[#faa83b]" />
              {t('docsPage.featuresTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('docsPage.featuresDesc')}
            </p>
          </CardContent>
        </Card>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        CubexUI aims to provide the building blocks for creating modern, performant, and accessible web applications with React and Tailwind CSS, without compromising on design flexibility.
      </p>
    </section>
  );
};

export default IntroSection;
