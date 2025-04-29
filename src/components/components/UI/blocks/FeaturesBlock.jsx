import { useTranslation } from "react-i18next";
import { Puzzle, Brush, Users, BookOpenText, Smartphone, Package, TrendingUp, Building } from "lucide-react";
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-xl p-6 bg-white/10 dark:bg-black/20 backdrop-blur-lg shadow-lg border border-orange-400/20 flex flex-col items-start cursor-crosshair hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="text-orange-400 text-2xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-600 dark:text-white">{title}</h3>
      <p className="text-secondary text-gray-600  dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
};

const FeaturesBlock = () => {
  const { t } = useTranslation();

  const features = [
    { title: t("home.featuresTitle1"), description: t("home.featuresParagraph1"), icon: <Puzzle size={24}  /> },
    { title: t("home.featuresTitle2"), description: t("home.featuresParagraph2"), icon: <Brush size={24} /> },
    { title: t("home.featuresTitle3"), description: t("home.featuresParagraph3"), icon: <Users size={24} /> },
    { title: t("home.featuresTitle4"), description: t("home.featuresParagraph4"), icon: <BookOpenText size={24} /> },
    { title: t("home.featuresTitle5"), description: t("home.featuresParagraph5"), icon: <Building size={24} /> },
    { title: t("home.featuresTitle6"), description: t("home.featuresParagraph6"), icon: <TrendingUp size={24} /> },
    { title: t("home.featuresTitle7"), description: t("home.featuresParagraph7"), icon: <Package size={24} /> },
    { title: t("home.featuresTitle8"), description: t("home.featuresParagraph8"), icon: <Smartphone size={24} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto p-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesBlock;
