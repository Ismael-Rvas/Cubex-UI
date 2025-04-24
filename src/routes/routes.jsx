import { Routes, Route } from "react-router-dom";
import {
  Home,
} from "../pages/Home";
export function MyRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/configurar" element={<Configuracion />} />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/movimientos" element={<Movimientos />} />
      <Route path="/informes" element={<Informes />} />
      <Route path="/perfil" element={<Perfil />} /> */}
    </Routes>
  );
}
