import React from "react";
import { useTranslation } from "react-i18next";
import TemplateCard from "../components/TemplateCard";

const HomeTemplates = () => {
    const { i18n, t } = useTranslation();

    return (
        <section className="py-16 md:py-24 container">
            <div className="relative flex flex-col  ">
                <div className="relative mb-6 flex items-center justify-center">

                    <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746027296/logoCubo_tn2dnv.png" alt="Logo" className="relative w-24" />
                </div>

                <h1 className="text-3xl font-bold text-black dark:text-white text-center mb-3">
                    {t("homePage.callToActionTitle")}
                </h1>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4 md:mb-8">
                    {t("homePage.callToActionSubtitle")}
                </p>

                <div className="flex items-center justify-center ">
                    <TemplateCard />

                </div>
            </div>
        </section>
    );
};
export default HomeTemplates;