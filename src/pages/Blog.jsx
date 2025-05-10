
  import { motion } from 'framer-motion';
  import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/components/card';
  import { Button } from '../components/ui/components/button';
  import { ArrowRight, Calendar } from 'lucide-react';
  import { useTranslation } from 'react-i18next';

  const BlogPage = () => {
    const { t } = useTranslation();
    const postsData = [
      {
        id: "post1",
        date: "2025-04-30",
        slug: "/blog/v1-launch",
        imageSeed: "Abstract geometric shapes background",
      },
      {
        id: "post2",
        date: "2025-04-15",
        slug: "/blog/dark-mode-theming",
        imageSeed: "Light and dark color swatches side by side",
      },
      {
        id: "post3",
        date: "2025-03-28",
        slug: "/blog/data-table-spotlight",
        imageSeed: "Clean data table interface",
      },
    ];

    const posts = postsData.map(post => ({
       ...post,
       title: t(`blogPage.posts.${post.id}.title`),
       description: t(`blogPage.posts.${post.id}.description`),
    }));


    return (
      <motion.div
        className="container py-12 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('blogPage.title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          {t('blogPage.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                 <div className="h-48 w-full overflow-hidden">
                   <img  className="w-full h-full object-cover" alt={post.title} src="https://images.unsplash.com/photo-1592441306630-1902ebe76b6f" />
                 </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-xs pt-1">
                     <Calendar className="w-3 h-3 mr-1.5" /> {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    {/* In a real app, Link would go to post.slug */}
                    <a href="#">
                      {t('blogPage.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  export default BlogPage;
  