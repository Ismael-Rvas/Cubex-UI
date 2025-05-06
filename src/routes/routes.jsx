import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Docs } from "../pages/Docs";
export function MyRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}
