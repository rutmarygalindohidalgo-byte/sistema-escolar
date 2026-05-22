import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Aquí agregamos la importación

const Principal = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
      <header className="main-header">
        <div className="header-content">
          <img src="img/logo.png" alt="Logo Liceo" className="logo-header" />
          <h1>Inventario de Existencia<br />Liceo Polivalente Lucila Godoy Alcayaga</h1>
          <button className="menu-toggle" aria-label="Abrir menú" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        <nav className="main-menu">
        <ul className={menuAbierto ? 'open' : ''}>
                    <li><Link to="/activos">Activos</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                    <li><Link to="/departamentos">Departamentos</Link></li>
                    <li><Link to="/altas">Altas</Link></li>
                    <li><Link to="/bajas">Bajas</Link></li>
                    <li><Link to="/traslados">Traslados</Link></li>
                    <li><Link to="/stock">Stock</Link></li>
                  </ul>
        </nav>
      </header>

      <main>
        <h2>Bienvenido al sistema de inventario</h2>
        <p>Seleccione una opción del menú para comenzar.</p>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Principal;