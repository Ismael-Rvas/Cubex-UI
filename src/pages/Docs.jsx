
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DocsSidebar from '../components/docs/DocsSidebar';
import DocsContent from '../components/docs/DocsContent';

const Docs = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('introduction');

  const sidebarLinks = [
    { id: 'introduction', title: t('docsPage.introTitle'), href: "#introduction" },
    { id: 'installation', title: t('docsPage.installTitle'), href: "#installation" },
    { id: 'core-concepts', title: t('docsPage.conceptsTitle'), href: "#core-concepts" },
    { id: 'theming', title: t('docsPage.themingTitle'), href: "#theming" },
    { id: 'usage-guide', title: t('docsPage.usageTitle'), href: "#usage-guide" },
    { id: 'authentication', title: t('docsPage.authTitle'), href: "#authentication" },
    { id: 'favorites', title: t('docsPage.favTitle'), href: "#favorites" },
    { id: 'api-reference', title: t('docsPage.apiTitle'), href: "#api-reference" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-12 mb-11">
        <DocsSidebar sidebarLinks={sidebarLinks} activeId={activeId} />
        <DocsContent />
      </div>
    </div>
  );
};

export default Docs;
