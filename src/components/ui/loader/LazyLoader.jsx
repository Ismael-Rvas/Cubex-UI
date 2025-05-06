import { useState, useEffect } from "react";
import Loader from "./Loader";
import { ThemeProvider } from "../../../context/ThemeContext";

const LazyLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 5000);
        }, 1700);

        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <ThemeProvider>
            <div className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-[#070707] transition-opacity duration-500 ease-in-out`}>
                <Loader />
            </div>
        </ThemeProvider>
        ) : (
        children
    );
};

export default LazyLoader;
