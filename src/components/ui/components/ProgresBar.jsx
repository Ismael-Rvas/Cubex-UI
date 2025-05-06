import { useEffect } from "react";

const ProgressBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / windowHeight) * 100;
            const progressBar = document.getElementById("progress-bar");
            if (progressBar) {
                progressBar.style.strokeDashoffset = 282.6 - (282.6 * scrollPercent) / 100;
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        
        handleScroll(); 
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <a href="#" data-aos="fade-up" data-aos-duration="1200"
            className="fixed bottom-6 right-6 w-12 h-12 z-50 cursor-pointer hover:scale-110 transition-transform duration-200 bg-transparent rounded-full flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#a3a3a344" strokeWidth="3" fill="none"></circle>
                <circle id="progress-bar" cx="50" cy="50" r="45" stroke="#f8a100" strokeWidth="3" fill="none"
                    strokeDasharray="282.6" strokeDashoffset="282.6"></circle>
            </svg>
            <span className="absolute text-xl text-orange-400 shadow-[0_-5px_15px_rgba(231, 179, 82, 0.705)]">
                ↑
            </span>
        </a>
    );
};

export default ProgressBar;
