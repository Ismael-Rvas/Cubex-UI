import { ThemeProvider } from "../src/context/ThemeContext";
import { TranslationProvider } from "../src/context/TranslationContext";
import { MyRoutes } from "./routes/routes";
import { useState, useEffect } from "react";
import LazyLoader from "./components/ui/loader/LazyLoader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <LazyLoader />;
  }

  return(
      <ThemeProvider>
        <div className="bg-white dark:bg-black pt-36 md:pt-60">
          <Header/>
        <TranslationProvider>
        <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-4 sm:px-12 ">
          <MyRoutes />
        </main>
        </TranslationProvider>
        <Footer />
        </div>
      </ThemeProvider>
  );
}

export default App;
