import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Layout público
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Planes from "./pages/Planes";
import Servicios from "./pages/Servicios";
import Testimonios from "./pages/Testimonios";
import Registrate from "./pages/Registrate";
import Login from "./pages/Login";
import RestablecerPassword from "./pages/RestablecerPassword";
import ConfirmarPassword from "./pages/ConfirmarPassword";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/DashBoardLayout";
import Calendario from "./pages/Dashboard/Calendario";
import Programas from "./pages/Dashboard/Programas";
import Retos from "./pages/Dashboard/Retos";
import Blog from "./pages/Dashboard/Blog";
import Soporte from "./pages/Dashboard/Soporte";
import BlogPost from "./pages/Dashboard/BlogPost";
import MiPlan from "./pages/Dashboard/MiPlan";

function App() {
  return (
    <Routes>
      {/* Rutas públicas envueltas en Layout público */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="planes" element={<Planes />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="testimonios" element={<Testimonios />} />
        <Route path="registrate" element={<Registrate />} />
        <Route path="login" element={<Login />} />
        <Route path="restablacerpassword" element={<RestablecerPassword />} />
        <Route path="confirmarpassword" element={<ConfirmarPassword />} />
      </Route>

      {/* Rutas privadas envueltas en PrivateRoute y DashboardLayout */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout>
              {" "}
              {/* Asegúrate de envolver las páginas privadas con el DashboardLayout */}
              <Dashboard />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/calendario"
        element={
          <PrivateRoute>
            <DashboardLayout>
              {" "}
              <Calendario />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/programas"
        element={
          <PrivateRoute>
            <DashboardLayout>
              {" "}
              <Programas />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/retos"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <Retos />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/blog"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <Blog />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/soporte"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <Soporte />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <BlogPost />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/miplan"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <MiPlan />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
