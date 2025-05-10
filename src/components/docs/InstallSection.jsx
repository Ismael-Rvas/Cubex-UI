import { useTranslation } from 'react-i18next';
import { Terminal } from 'lucide-react';

const InstallSection = () => {
  const { t } = useTranslation();

  return (
    <section id="installation" className="mb-16 scroll-mt-20">
      <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
        <Terminal className="w-6 h-6 mr-2 text-orange-500 dark:text-[#faa83b]"/>
        {t('docsPage.installTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.installSteps')}</p>
      <pre className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-lg mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-200">npm install cubex-ui</code>
      </pre>
      <pre className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-lg mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-200">yarn add cubex-ui</code>
      </pre>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('docsPage.installTailwind')}</p>
      <pre className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-lg mb-4 overflow-x-auto">
        <code className="text-gray-800 dark:text-gray-200">{`// tailwind.config.js
module.exports = {
  darkMode: ["class"], // Ensure dark mode is enabled
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include your project source files
    "./node_modules/cubex-ui/**/*.{js,ts,jsx,tsx}", // Include CubexUI components
    // Ensure your auth context/pages are included if needed
    "./src/context/**/*.jsx",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Your custom theme extensions...
    },
  },
  plugins: [require("tailwindcss-animate")],
}`}</code>
      </pre>
      <p className="text-gray-600 dark:text-gray-300">
        {t('docsPage.installAuthContext')}
      </p>
    </section>
  );
};

export default InstallSection;
