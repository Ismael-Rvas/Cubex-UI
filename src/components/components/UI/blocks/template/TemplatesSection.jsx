import { useTranslation } from "react-i18next";
import TemplateCard from "./TemplateCard";

const TemplatesSection = () => {
  const { t } = useTranslation();

  const templates = [
    { image: "https://res.cloudinary.com/ismaelrvas/image/upload/v1745936150/imagen_2025-04-29_161549277_its474.png", title: "Dashboard", description: t("home.paragraph4") },
    { image: "https://res.cloudinary.com/ismaelrvas/image/upload/v1745936158/imagen_2025-04-29_161556971_b85g5b.png", title: "Landing Page", description: "Diseño elegante para productos y servicios." },
    { image: "https://res.cloudinary.com/ismaelrvas/image/upload/v1745936126/imagen_2025-04-29_161522640_oblvfm.png", title: "Portfolio", description: "Muestra tu trabajo con estilo." },
  ];

  return (
    <section className="relative max-w-7xl mx-auto w-full gap-12 mt-16 md:mt-24 px-6 templates-container">
      {/* Fondo dinámico con before */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-20 blur-lg"></div>

      {/* Contenido */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Grid de plantillas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>
      </div>

      {/* Líneas animadas */}
      <div className="lines">
        <div className="top">{Array(30).fill(<span></span>)}</div>
        <div className="left">{Array(30).fill(<span></span>)}</div>
      </div>
    </section>
  );
};

export default TemplatesSection;
