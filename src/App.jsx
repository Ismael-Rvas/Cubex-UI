import { ThemeProvider } from "../src/context/ThemeContext";
import { TranslationProvider } from "../src/context/TranslationContext";
import { MyRoutes } from "./routes/routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div className="bg-white dark:bg-black pt-36 md:pt-60">Loading...</div>}>
      <ThemeProvider>
        <TranslationProvider>
          <MyRoutes />
        </TranslationProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
