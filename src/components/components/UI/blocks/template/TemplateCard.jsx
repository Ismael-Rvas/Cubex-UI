import { useTranslation } from "react-i18next";

const TemplateCard = ({ image, title, description }) => {
  return (
    <div className="template-block rounded-xl overflow-hidden shadow-lg bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-orange-400/20 flex justify-center items-center">
      <div className="template-overlay"></div>
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />

      {/* Información */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        <a
          href="#"
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

export default TemplateCard;
