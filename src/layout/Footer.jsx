import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-28 px-6 transition-all border-t border-orange-200 dark:border-orange-400 shadow-[0_-5px_15px_rgba(231, 179, 82, 0.705)] text-black dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-48 gap-9" >
        {/* Branding y Licencia (Izquierda) */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Cubexus UI</h2>
          <p className="text-sm mt-2">
            Todos los componentes están publicados bajo la MIT License.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-400 ">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-orange-400 ">
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-xs mt-4">
            &copy; 2025 Cubexus UI. Todos los derechos reservados.
          </p>
        </div>

        {/* Apartados de la derecha */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-11 gap-3 text-start">
          {/* Recursos */}
          <div>
            <h3 className="text-lg font-semibold">Recursos</h3>
            <ul className="text-sm mt-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 "
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 "
                >
                  Componentes
                </a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-lg font-semibold">Información</h3>
            <ul className="text-sm mt-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 "
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400"
                >
                  Guía de uso
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="text-sm mt-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 "
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 "
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 "
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400"
                >
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
