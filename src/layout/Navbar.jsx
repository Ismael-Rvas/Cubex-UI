import React, { useEffect, useState } from "react";
import { Github, SunMedium, MoonIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    setMounted(true);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (!mounted) return null;

  return (
    <nav className="p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/ismaelrvas/image/upload/v1745231513/solariumLogo-removebg-preview_zjdfx8.png"
            className="h-16"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-gray-900 dark:text-white ml-1">Solarium</span>
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
          <button onClick={() => window.open("https://github.com/Ismael-Rvas/Solarium-UI", "_blank")} className="p-2 ml-3 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
            <Github className="w-4 h-4" />
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
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

      {/* Menú hamburguesa responsive: aparece debajo */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-start gap-2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <li><a href="#" className="block w-full text-gray-900 dark:text-white hover:underline">Home</a></li>
            <li><a href="#" className="block w-full text-gray-900 dark:text-white hover:underline">PlayGround</a></li>
            <li><a href="#" className="block w-full text-gray-900 dark:text-white hover:underline">Docs</a></li>
            <li><a href="#" className="block w-full text-gray-900 dark:text-white hover:underline">Blog</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
