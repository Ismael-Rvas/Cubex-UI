import React, { useEffect, useState } from "react";
import { Github, SunMedium, MoonIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    setMounted(true);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Cambia el estado si el usuario hace scroll más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden", !menuOpen); 
  };

  if (!mounted) return null;

  return (
    <>
    {menuOpen && (
        <div className="fixed z-30 top-[64px] left-0 right-0 bottom-0 bg-white/40 dark:bg-black/40 backdrop-blur-xl transition-all duration-300"></div>
      )}
    <nav
      className={`p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-black/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/ismaelrvas/image/upload/v1745231513/solariumLogo-removebg-preview_zjdfx8.png"
              className="h-16"
              alt="Logo"
            />
            <span className="text-2xl font-semibold text-gray-900 dark:text-white ml-1">SOLARIUM</span>
          </a>
        </div>

        <div className="flex items-center flex-row w-auto">
          {/* Enlaces de navegación: visibles en md+ */}
          <ul className="hidden md:flex items-center gap-4">
            <li><a href="#" className="text-gray-900 dark:text-white hover:underline p-2">Home</a></li>
            <li><a href="#" className="text-gray-900 dark:text-white hover:underline p-2">PlayGround</a></li>
            <li><a href="#" className="text-gray-900 dark:text-white hover:underline p-2">Docs</a></li>
            <li><a href="#" className="text-gray-900 dark:text-white hover:underline p-2">Blog</a></li>
          </ul>

          {/* Botones GitHub + Theme + Menú hamburguesa */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.open("https://github.com/Ismael-Rvas/Solarium-UI", "_blank")}
              className="p-2 ml-3 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <Github className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {theme === "dark" ? <SunMedium className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú responsive cuando `menuOpen` es true */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-700 p-6 flex flex-col items-start gap-6 transition-all duration-300">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition">
            <X />
          </button>

          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/ismaelrvas/image/upload/v1745231513/solariumLogo-removebg-preview_zjdfx8.png"
              className="h-16"
              alt="Logo"
            />
            <span className="text-2xl font-semibold text-white ml-1">SOLARIUM</span>
          </div>

          <ul className="flex flex-col gap-4 w-full">
            <li><a href="#" className="block w-full text-white border-b border-white/30 pb-2 text-lg hover:text-gray-300 transition">Home</a></li>
            <li><a href="#" className="block w-full text-white border-b border-white/30 pb-2 text-lg hover:text-gray-300 transition">PlayGround</a></li>
            <li><a href="#" className="block w-full text-white border-b border-white/30 pb-2 text-lg hover:text-gray-300 transition">Docs</a></li>
            <li><a href="#" className="block w-full text-white border-b border-white/30 pb-2 text-lg hover:text-gray-300 transition">Blog</a></li>
          </ul>
        </div>
      )}
    </nav>
    </>
  );
}
