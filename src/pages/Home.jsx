import CopyCommand from "../components/ui/CopyCommand";
import { useAppTranslation } from "../context/TranslationContext.jsx";
import { GlassCard } from "../components/ui/GlassCard.jsx";
import { NeumorphicInput } from "../components/ui/NeumorphicInput.jsx";
import { Tabs } from "../components/ui/tabs.jsx";
import { ToggleSwitch } from "../components/ui/ToggleSwitch.jsx";
import FeaturesBlock from "../components/ui/blocks/FeaturesBlock.jsx";
import Button from "../components/ui/Button.jsx";
import TemplateCard from "../components/ui/blocks/TemplateCard.jsx";

export function Home() {
  const { t } = useAppTranslation();
  return (
    <div>
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="glow-effect"></div>
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
              {t("home.title")} <span className="text-orange-500 relative">CUBEX UI
                <span className="absolute left-full bottom-1.5 sm:top-1 text-orange-500 text-2xl sm:text-4xl font-light animate-blink">|</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              {t("home.paragraph1")} <strong className="text-orange-500">open source</strong> {t("home.paragraph2")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start ">
              <div className="flex items-center justify-center">
                <Button />
              </div>
              <CopyCommand command="npm i @cubex-ui/react" />
            </div>
          </div>

          {/* Componentes */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-lg">

            <div className="col-span-2 mb-4">
              <GlassCard variant="up">
                <h4 className="text-sm font-semibold text-orange-400">Tabs</h4>
                <div className="mt-4">
                  <Tabs tabs={["Home", "Dashboard", "Settings"]} />
                </div>
              </GlassCard>
            </div>

            {/* Input */}
            <GlassCard variant="up">
              <h4 className="text-sm font-semibold text-orange-400">Input</h4>
              <div className="mt-4">
                <NeumorphicInput placeholder="Type here..." />
              </div>
            </GlassCard>

            {/* Toggle  */}
            <GlassCard variant="down">
              <h4 className="text-sm font-semibold text-orange-400">Toggle</h4>
              <div className="mt-4 flex items-center justify-center">
                <ToggleSwitch />
              </div>
            </GlassCard>

          </div>
        </div>

        <section className="max-w-7xl w-full  gap-12 mt-24 md:mt-52 ">
          <div>
            <h1 className="mt-6 text-3xl font-bold text-black dark:text-white text-center">{t("home.title2")}</h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-center mb-4 md:mb-8">
              {t("home.paragraph3")}
            </p>
            <FeaturesBlock />
          </div>

        </section>

        <section className="relative max-w-7xl w-full gap-12 mt-24 md:mt-52 px-6 justify-center aling-center mb-48">

          <div className="relative flex flex-col  ">
            <div className="relative mb-6 flex items-center justify-center">

              <img src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746027296/logoCubo_tn2dnv.png" alt="Logo" className="relative w-24" />
            </div>

            <h1 className="text-3xl font-bold text-black dark:text-white text-center mb-3">
              {t("home.title3")}
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4 md:mb-8">
              {t("home.paragraph4")}
            </p>

            <div className="flex items-center justify-center ">
              <TemplateCard />

            </div>

          </div>
        </section>
    </div>
  );
}
