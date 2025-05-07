import { useTranslation } from "react-i18next";
import { Puzzle, Brush, Users, BookOpenText, Smartphone, Package, TrendingUp, Building } from "lucide-react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative rounded-xl p-6 bg-white/10 dark:bg-zinc-950/20 backdrop-blur-lg hover:shadow-md  flex flex-col items-center cursor-crosshair transition-all duration-300 ease-in-out group">
      <div className="p-3 rounded-full bg-orange-400/10 text-orange-500 dark:text-[#faa83b] mb-3">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-gray-700 dark:text-white text-center">{title}</h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-center">{description}</p>

      <div className="absolute inset-0 rounded-xl border border-gray-300 dark:border-[#27272a] group-hover:border-orange-500 dark:hover:border-[#e99e3a] transition-all duration-700 ease-in-out animate-border-glow"></div>
    </div>
  );
};

const FeaturesBlock = () => {
  const { i18n, t } = useTranslation();


  const features = [
    { title: t("homePage.feature1Title"), description: t("homePage.feature1Desc"), icon: <Puzzle size={28} /> },
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
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-black dark:text-white text-center">{t("homePage.whyCubexTitle")}</h2>
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
