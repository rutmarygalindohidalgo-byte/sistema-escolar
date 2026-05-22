import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu'; // Importamos el componente de navegación

const Principal = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div>
      <header className="main-header">
        <div className="header-content">
          <img src="img/logo.png" alt="Logo Liceo" className="logo-header" />
          <h1>Inventario de Existencia<br />Liceo Polivalente Lucila Godoy Alcayaga</h1>
          <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setMenuAbierto(!menuAbierto)}>
            &#9776;
          </button>
        </div>
        <nav className="main-menu">
          <Menu menuAbierto={menuAbierto} /> {/* Usamos el componente centralizado */}
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