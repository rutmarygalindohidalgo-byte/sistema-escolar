import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bajas = () => {
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
        <h2>Registro de Bajas</h2>
        <form className="activo-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="codigo">Código de Activo:</label>
          <input type="text" id="codigo" name="codigo" required maxLength="10" />

          <label htmlFor="cantidad">Cantidad :</label>
          <input type="text" id="cantidad" name="cantidad" required />

          <label htmlFor="Fecha_b">Fecha de Baja :</label>
          <input type="date" id="Fecha_b" name="Fecha_b" />

          <label htmlFor="Hora_b">Hora de Baja :</label>
          <input type="time" id="Hora_b" name="Hora_b" />

          <label htmlFor="Num_Doc">Numero de Documento :</label>
          <input type="text" id="Num_Doc" name="Num_Doc" />

          <label htmlFor="Cod_Usu">Codigo de usuario :</label>
          <input type="text" id="Cod_Usu" name="Cod_Usu" />

          <label htmlFor="Observacion">Observacion :</label>
          <input type="text" id="Observacion" name="Observacion" />

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

export default Bajas;