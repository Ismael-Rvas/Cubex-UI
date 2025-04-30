import { useTranslation } from "react-i18next";

const TemplateCard = () => {
  const { t } = useTranslation();
  return (
    <div className="relative h-80 w-64 overflow-hidden rounded-xl bg-[#3d3c3d] drop-shadow-xl group cursor-progress">
      <div className="absolute inset-0.5 z-[1] flex flex-col items-start justify-evenly gap-6 rounded-lg bg-[#323132] p-4 text-white opacity-90">
        <div className="h-full w-full overflow-hidden rounded-md bg-white flex justify-center items-center relative before:absolute before:top-1/2 before:-left-48 before:-translate-x-12 before:-translate-y-12 before:w-full before:h-24 before:bg-neutral-100 before:z-10 group-hover:before:left-12 before:transition-all before:duration-700 before:border-y before:border-neutral-200">
          <div className="flex z-20 gap-2.5 translate-x-32 group-hover:-translate-x-40 duration-1000 transition-all">
            <button className="flex z-10 w-32 items-center justify-center gap-4 rounded-md border-2 bg-neutral-800 border-neutral-800 p-2 text-white group-hover:opacity-0 duration-1000 transition-all">
              <div className="h-0.5 w-20 shrink-0 rounded-full bg-white" />
              <svg className="shrink-0 stroke-white" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
            <button className="flex z-10 w-32 items-center justify-center gap-4 rounded-md border-2 bg-neutral-600 border-neutral-800 p-2 text-white group-hover:opacity-0 duration-1000 transition-all">
              <div className="h-0.5 w-20 shrink-0 rounded-full bg-white" />
              <svg className="shrink-0 stroke-white" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex z-10 w-32 items-center justify-center gap-4 rounded-md border-2 bg-neutral-400 group-hover:bg-sky-700 border-neutral-800 p-2 text-white group-hover:scale-125 duration-1000 transition-all">
                <div className="h-0.5 w-20 shrink-0 rounded-full bg-white" />
                <svg className="shrink-0 stroke-white" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </button>
              <div className="absolute top-4 left-24 duration-700 group-hover:delay-700 transition-all translate-y-28 translate-x-20 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg className="w-12 h-12 stroke-amber-300 duration-1000 transition-all group-hover:translate-0 group-hover:delay-1000 group-hover:scale-75" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12l3 0" />
                  <path d="M12 3l0 3" />
                  <path d="M7.8 7.8l-2.2 -2.2" />
                  <path d="M16.2 7.8l2.2 -2.2" />
                  <path d="M7.8 16.2l-2.2 2.2" />
                  <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
              </div>
            </div>
            <button className="flex z-10 w-32 items-center justify-center gap-4 rounded-md border-2 bg-neutral-600 border-neutral-800 p-2 text-white group-hover:translate-x-4 duration-1000 transition-all">
              <div className="h-0.5 w-20 shrink-0 rounded-full bg-white" />
              <svg className="shrink-0 stroke-white" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <div>
            <p className="text-xl font-bold">{t("home.title4")}</p>
            <p className="text-xs">{t("home.paragraph5")}</p>
          </div>
          <svg className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z" stroke="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </div>
      </div>
      <div className="absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-amber-800 blur-[50px]" />
    </div>
  );
};

export default TemplateCard;
