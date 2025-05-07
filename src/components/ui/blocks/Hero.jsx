
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CopyCommand from '../components/CopyCommand';
import ButtonGetStarted from '../components/ButtonGetStarted';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex flex-col items-center pt-16 pb-20 md:pt-24 md:pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 dark:from-orange-400 dark:via-red-400 dark:to-orange-300"
          initial={{ backgroundSize: '200% auto' }}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {t('hero.title')}
          
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonGetStarted link="/docs" />
          <CopyCommand command="npm i @cubex-ui/react" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
