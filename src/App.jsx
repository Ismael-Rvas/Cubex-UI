import { ThemeProvider } from "../src/context/ThemeContext";
import {MyRoutes} from "./routes/routes";

function App() {
  return (
    <ThemeProvider>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
