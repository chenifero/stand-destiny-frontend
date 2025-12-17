// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PublicDisplay from "./PublicDisplay";
import ProtectedControlPanel from "./ProtectedControlPanel"; // Componente con la barrera de seguridad
import "./App.css"; // Opcional para estilos
import { UserCircle } from "lucide-react";

function App() {
  return (
    // 1. Envolvemos toda la aplicación en el Router
    <Router>
      <div className="App" style={{ fontFamily: "Arial, sans-serif" }}>
        {/*
          Opcional: Una simple barra de navegación para saltar
          entre las dos vistas durante el desarrollo.
        */}
        <nav style={{ 
            position: 'absolute',  
            top: '20px',           
            right: '20px',
            zIndex: 1000        
        }}>
          <Link 
            to="/admin" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)', // Color blanquecino para que se vea sobre el video
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              transition: 'color 0.3s' // Suavidad al pasar el ratón
            }}
          >
            <UserCircle size={32} /> {/* He aumentado un poco el tamaño para que sea fácil de tocar */}
          </Link>
        </nav>

        {/* 2. Definición de las Rutas */}
        <Routes>
          {/* Ruta principal: Muestra la vista del cliente en la URL raíz (/) */}
          <Route path="/" element={<PublicDisplay />} />

          {/* Ruta de administrador: Muestra la vista protegida en /admin */}
          <Route path="/admin" element={<ProtectedControlPanel />} />

          {/* Ruta de fallback: Muestra un 404 para cualquier otra ruta */}
          <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
