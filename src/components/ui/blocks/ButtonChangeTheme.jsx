import { SunMedium, MoonIcon} from "lucide-react";
import { useState, useEffect } from "react";

const ButtonChangeTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [mounted, setMounted] = useState(false);

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
    
    if (!mounted) return null;
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {theme === "dark" ? <SunMedium className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
        </button>
    );
}
export default ButtonChangeTheme;