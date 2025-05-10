import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import Docs from "../pages/Docs";
import Blog from "../pages/Blog";
import NotFound  from "../pages/NotFound";
export function MyRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
