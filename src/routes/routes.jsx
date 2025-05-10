import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import Docs from "../pages/Docs";
import NotFound  from "../pages/NotFound";
export function MyRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
