import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Importación agregada

const Activos = () => {
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
        <h2>Ingreso de Activo</h2>
        <form className="activo-form">
          <label htmlFor="codigo">Código de Activo:</label>
          <input type="text" id="codigo" name="codigo" required />

          <label htmlFor="nombre">Nombre de Activo:</label>
          <input type="text" id="nombre" name="nombre" required />

          <div className="form-buttons">
            <button type="submit">Agregar</button>
            <button type="button">Modificar</button>
            <button type="button">Eliminar</button>
          </div>
        </form>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Activos;