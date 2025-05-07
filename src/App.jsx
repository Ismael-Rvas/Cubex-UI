import { ThemeProvider } from "../src/context/ThemeContext";
import { TranslationProvider } from "../src/context/TranslationContext";
import { MyRoutes } from "./routes/routes";
import { useState, useEffect } from "react";
import LazyLoader from "./components/ui/loader/LazyLoader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ProgressBar from "./components/ui/components/ProgresBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LazyLoader />;
  }

  return (
    <ThemeProvider>
      <TranslationProvider>
        <div className="bg-white dark:bg-[#09090b] pt-16 md:pt-20">
          <Header />
          <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-4 sm:px-12 ">
            <MyRoutes />
          </main>
          <ProgressBar />
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
