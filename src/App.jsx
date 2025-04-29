import { ThemeProvider } from "../src/context/ThemeContext";
import { TranslationProvider } from "../src/context/TranslationContext";
import { MyRoutes } from "./routes/routes";
import { useState, useEffect } from "react";
import LazyLoader from "./components/components/UI/loader/LazyLoader";

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
        <TranslationProvider>
          <MyRoutes />
        </TranslationProvider>
      </ThemeProvider>
  );
}

export default App;
