import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ButtonGetStarted = ({ link }) => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <Link to={link}>
        <button className="overflow-hidden relative w-32 p-1 h-11 bg-orange-500 text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
          {t("hero.getStarted")}

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left" />

          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3.5 left-8 z-10">
            {t("hero.browseComponents")}
          </span>
          
        </button>
      </Link>
    </div>
  );
}

export default ButtonGetStarted;

