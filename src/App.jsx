import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos todas tus vistas
import Principal from './vistas/Principal';
import Usuarios from './vistas/Usuarios';
import Departamentos from './vistas/Departamentos';
import Activos from './vistas/Activos';
import Altas from './vistas/Altas';
import Bajas from './vistas/Bajas';
import Traslados from './vistas/Traslados';
import Stock from './vistas/Stock';

function App() {
  return (
    <Router>
      <Routes>
        {/* Definimos todas las rutas de tu sistema */}
        <Route path="/" element={<Principal />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/departamentos" element={<Departamentos />} />
        <Route path="/activos" element={<Activos />} />
        <Route path="/altas" element={<Altas />} />
        <Route path="/bajas" element={<Bajas />} />
        <Route path="/traslados" element={<Traslados />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;