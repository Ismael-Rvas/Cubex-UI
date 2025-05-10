import { ThemeProvider } from "../src/context/ThemeContext";
import { TranslationProvider } from "../src/context/TranslationContext";
import { MyRoutes } from "./routes/routes";
import { useState, useEffect } from "react";
import LazyLoader from "./components/ui/loader/LazyLoader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ProgressBar from "./components/ui/components/ProgresBar";
import {Toaster} from "./components/ui/toast/toaster";

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
        <div className="flex flex-col min-h-screen justify-center items-center bg-white dark:bg-[#09090b]">
          <Header />
          <main className="flex-grow">
            <MyRoutes />
          </main>
          <ProgressBar />
          <Footer />
          <Toaster/>
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
