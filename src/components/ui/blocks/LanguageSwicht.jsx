import { Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwicht = () => {
    const { i18n, t } = useTranslation();

    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguageMenuOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleLanguageMenu}
                className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
                <Languages className="w-4 h-4" />
            </button>

            {languageMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 w-32">
                    <button
                        onClick={() => changeLanguage("es")}
                        className="block w-full text-left cursor-pointer text-gray-800 dark:text-white p-2 hover:rounded-sm hover:bg-gray-200 dark:hover:bg-slate-900"
                    >
                        <div className="flex items-center justify-start">
                            <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746435606/espana_yutwmj.png" alt="Bandera España" className="w-4 h-4 mr-1.5" />
                            <span className="text-center">{t("languages.es")}</span>
                        </div>
                    </button>
                    <button
                        onClick={() => changeLanguage("en")}
                        className="block w-full text-left cursor-pointer text-gray-800 dark:text-white p-2 hover:rounded-sm hover:bg-gray-200 dark:hover:bg-slate-900"
                    >
                        <div className="flex items-center justify-start">
                            <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746435609/reino-unido_rzwuvm.png" alt="Bandera England" className="w-4 h-4 mr-1.5" />
                            <span className="text-center">{t("languages.en")}</span>
                        </div>
                    </button>
                    <button
                        onClick={() => changeLanguage("fr")}
                        className="block w-full text-left cursor-pointer text-gray-800 dark:text-white p-2 hover:rounded-sm hover:bg-gray-200 dark:hover:bg-slate-900"
                    >
                        <div className="flex items-center justify-start">
                            <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746545055/francia_ht08so.png" alt="Bandera Francia" className="w-4 h-4 mr-1.5" />
                            <span className="text-center">{t("languages.fr")}</span>
                        </div>
                    </button>
                    <button
                        onClick={() => changeLanguage("de")}
                        className="block w-full text-left cursor-pointer text-gray-800 dark:text-white p-2 hover:rounded-sm hover:bg-gray-200 dark:hover:bg-slate-900"
                    >
                        <div className="flex items-center justify-start">
                            <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746545073/alemania_r3ej5q.png" alt="Bandera Alemania" className="w-4 h-4 mr-1.5" />
                            <span className="text-center">{t("languages.de")}</span>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}
export default LanguageSwicht;