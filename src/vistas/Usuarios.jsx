import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Aquí importamos el Link

const Usuarios = () => {
  // En React no usamos la etiqueta <script>. Usamos "estados" para manejar la interactividad.
  // Esto reemplaza tu antiguo código de JavaScript para abrir y cerrar el menú móvil.
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
      <header className="main-header">
        <div className="header-content">
          {/* Las etiquetas como img o br deben cerrarse a sí mismas con una barra al final */}
          <img src="img/logo.png" alt="Logo Liceo" className="logo-header" />
          <h1>Inventario de Existencia<br />Liceo Polivalente Lucila Godoy Alcayaga</h1>
          
          {/* El evento onClick reemplaza al addEventListener de tu script original */}
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
        <h2>Ingresos de Usuarios</h2>
        <form className="activo-form">
          {/* El atributo "for" de los labels cambia a "htmlFor" en React */}
          <label htmlFor="codigo">Código de Usuario:</label>
          <input type="text" id="codigo" name="codigo" required maxLength="10" />

          <label htmlFor="rut">RUT :</label>
          <input type="text" id="rut" name="rut" required maxLength="12" placeholder="Ej: 12345678-9" />

          <label htmlFor="nombre">Nombre :</label>
          <input type="text" id="nombre" name="nombre" required maxLength="50" />

          <label htmlFor="apellido">Apellido :</label>
          <input type="text" id="apellido" name="apellido" required maxLength="50" />

          <label htmlFor="Cargo">Cargo :</label>
          <input type="text" id="Cargo" name="Cargo" required maxLength="30" />

          <label htmlFor="Email">Email :</label>
          {/* Corregí un pequeño detalle: este input tenía id y name "Cargo" en tu HTML, lo cambié a "Email" */}
          <input type="text" id="Email" name="Email" required maxLength="30" />

          <label htmlFor="activo" className="checkbox-label">
            <input type="checkbox" id="activo" name="activo" />
            Usuario Activo
          </label>

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

export default Usuarios;