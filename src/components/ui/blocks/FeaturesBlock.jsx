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
  const { i18n, t } = useTranslation();


  const features = [
    { title: t("homePage.feature1Title"), description: t("homePage.feature1Desc"), icon: <Puzzle size={24} /> },
    { title: t("homePage.feature2Title"), description: t("homePage.feature2Desc"), icon: <Brush size={24} /> },
    { title: t("homePage.feature3Title"), description: t("homePage.feature3Desc"), icon: <Users size={24} /> },
    { title: t("homePage.feature4Title"), description: t("homePage.feature4Desc"), icon: <BookOpenText size={24} /> },
    { title: t("homePage.feature5Title"), description: t("homePage.feature5Desc"), icon: <Building size={24} /> },
    { title: t("homePage.feature6Title"), description: t("homePage.feature6Desc"), icon: <TrendingUp size={24} /> },
    { title: t("homePage.feature7Title"), description: t("homePage.feature7Desc"), icon: <Package size={24} /> },
    { title: t("homePage.feature8Title"), description: t("homePage.feature8Desc"), icon: <Smartphone size={24} /> },
  ];

  return (
    <section className="max-w-7xl w-full  gap-12 mt-24 md:mt-24 ">
      <div>
        <h1 className="mt-6 text-3xl font-bold text-black dark:text-white text-center">{t("homePage.whyCubexTitle")}</h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-center mb-4 md:mb-8">
          {t("homePage.whyCubexSubtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto p-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;
