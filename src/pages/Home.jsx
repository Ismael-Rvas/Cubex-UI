import CopyCommand from "../components/animations/CopyCommand";
import Navbar from "../layout/Navbar.jsx";
import {useAppTranslation } from "../context/TranslationContext.jsx";

export function Home() {
  const { t } = useAppTranslation();
  return (
    <div className="bg-white dark:bg-black pt-36 md:pt-60">
      <Navbar />
      <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-4 sm:px-12 ">
        {/* Background con ::before para diseño animado o estático */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="glow-effect"></div>
          {/* Texto principal */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
            {t("home.subtitle")} <span className="text-orange-500 relative">SOLARIUM UI  
                <span className="absolute left-full bottom-1.5 sm:top-1 text-orange-500 text-2xl sm:text-4xl font-light animate-blink">|</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            {t("home.paragraph1")} <strong className="text-orange-500">open source</strong> {t("home.paragraph2")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/docs" className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              {t("home.started")} →
              </a>
              <CopyCommand command="npm i @solarium-ui/react" />
            </div>
          </div>

          {/* Muestra visual con componentes mockeados */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
            <div className="rounded-2xl bg-white/10 dark:bg-zinc-900/50 backdrop-blur-lg p-4 shadow-lg border border-orange-200/10">
              <h4 className="text-sm font-semibold text-orange-400">Button</h4>
              <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full w-full">Click me</button>
            </div>
            <div className="rounded-2xl bg-white/10 dark:bg-zinc-900/50 backdrop-blur-lg p-4 shadow-lg border border-orange-200/10">
              <h4 className="text-sm font-semibold text-orange-400">Input</h4>
              <input type="text" placeholder="Type here..." className="mt-2 w-full px-3 py-2 bg-zinc-800 text-white rounded-md border border-orange-500 focus:outline-none" />
            </div>
            <div className="col-span-2 rounded-2xl bg-white/10 dark:bg-zinc-900/50 backdrop-blur-lg p-4 shadow-lg border border-orange-200/10">
              <h4 className="text-sm font-semibold text-orange-400">Card</h4>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-black dark:text-white">Premium UI Kit</p>
                <span className="text-orange-300">$29</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
        <div className="mt-96 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis rerum perspiciatis saepe repudiandae? Laborum consectetur tempore minus dolores cupiditate dolorem nobis provident officiis, obcaecati animi rem optio ipsa eaque?</div>
      </main>

    </div>
  );
}
