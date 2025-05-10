import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const UsageSection = () => {
  const { t } = useTranslation();

  return (
    <section id="usage-guide" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {t('docsPage.usageTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.usageIntro')}</p>
      <pre className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-lg mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-200">{`import React from 'react';
// Assuming CubexUI exports components directly
import { Button, Card, CardContent, CardHeader, CardTitle } from 'cubex-ui';
import { useTranslation } from 'react-i18next';

function MyAwesomeComponent() {
  const { t } = useTranslation();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">This is a simple card using CubexUI!</p>
        <Button onClick={() => alert('Clicked!')}>
          {t('Click Action')}
        </Button>
      </CardContent>
    </Card>
  );
}`}</code>
      </pre>
      <p className="text-gray-600 dark:text-gray-300">
        {t('docsPage.usageLink')} <Link to="/components" className="text-orange-500 dark:text-[#faa83b] hover:underline">{t('docsPage.componentsSection')}</Link>.
      </p>
    </section>
  );
};

export default UsageSection;
