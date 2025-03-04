import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Planes from "./pages/Planes";
import Servicios from "./pages/Servicios";
import Testimonios from "./pages/Testimonios";
import Registrate from "./pages/Registrate";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/planes" element={<Planes />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/testimonios" element={<Testimonios />} />
      <Route path="/registrate" element={<Registrate />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
