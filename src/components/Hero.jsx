
  import React from 'react';
  import { Link } from 'react-router-dom';
  import { motion } from 'framer-motion';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import { ArrowRight, Code, Zap, Palette, Layers } from 'lucide-react';
  import { useTranslation } from 'react-i18next';

  // New component examples inspired by modern UI trends
  const ComponentExample1 = () => (
    <Card className="bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 dark:from-orange-900/50 dark:via-red-900/50 dark:to-yellow-900/50 border-primary/20 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Zap className="w-5 h-5 mr-2 text-primary" /> Interactive Button
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-24">
        <motion.button
          className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all"
          whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Click Me!
        </motion.button>
      </CardContent>
    </Card>
  );

  const ComponentExample2 = () => (
    <Card className="border-border hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-background/80 dark:bg-background/60">
       <CardHeader>
        <CardTitle className="flex items-center text-lg">
           <Layers className="w-5 h-5 mr-2 text-primary" /> Glassmorphic Card
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-24 text-center">
         <p className="text-sm text-muted-foreground">Subtle transparency effect.</p>
         <span className="mt-1 text-xs font-mono px-2 py-0.5 bg-muted rounded">backdrop-blur-sm</span>
      </CardContent>
    </Card>
  );

   const ComponentExample3 = () => (
     <Card className="border-border hover:shadow-lg transition-shadow duration-300">
       <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Palette className="w-5 h-5 mr-2 text-primary" /> Themed Input
         </CardTitle>
       </CardHeader>
       <CardContent className="flex justify-center items-center h-24">
         <input
           type="text"
           placeholder="Type something..."
           className="px-4 py-2 w-full rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
         />
       </CardContent>
     </Card>
   );

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
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link to="/docs">
                  {t('hero.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                 <Link to="/components">
                    <Code className="mr-2 h-5 w-5" />
                    {t('hero.browseComponents')}
                 </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Component Showcase */}
         <div className="w-full max-w-5xl mt-16">
           <h2 className="text-2xl font-semibold mb-6">{t('hero.componentsTitle')}</h2>
           <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              },
              hidden: { opacity: 0 }
            }}
          >
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}>
              <ComponentExample1 />
            </motion.div>
            <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}>
              <ComponentExample2 />
            </motion.div>
             <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}>
               <ComponentExample3 />
             </motion.div>
          </motion.div>
         </div>
      </section>
    );
  };

  export default Hero;
  