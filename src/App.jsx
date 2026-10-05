import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./views/Home.jsx";
import HomeCare from "./views/HomeCare.jsx";
import HospitalVisit from "./views/HospitalVisit.jsx";
import Volunteers from "./views/Volunteers.jsx";
import Donations from "./views/Donations.jsx";
import Reports from "./views/Reports.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicio-domiciliar" element={<HomeCare />} />
        <Route path="/misiones" element={<HospitalVisit />} />
        <Route path="/hospital-infantil" element={<HospitalVisit />} />
        <Route path="/voluntarios" element={<Volunteers />} />
        <Route path="/donaciones" element={<Donations />} />
        <Route path="/reportes" element={<Reports />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
