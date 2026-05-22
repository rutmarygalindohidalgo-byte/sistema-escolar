import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu';
import BotonesAccion from '../componentes/Formularios/BotonesAccion';

const Usuarios = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Lógica para enviar los datos de Usuarios al servidor
  const handleAgregarUsuario = async () => {
    const nuevoUsuario = {
      codigo: document.getElementById('codigo').value,
      rut: document.getElementById('rut').value,
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      cargo: document.getElementById('Cargo').value,
      email: document.getElementById('Email').value,
      activo: document.getElementById('activo').checked // Capturamos si está marcado
    };

    try {
      const respuesta = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoUsuario)
      });
      
      const resultado = await respuesta.json();
      console.log("Servidor respondió:", resultado);
      alert("¡Usuario registrado correctamente!");
    } catch (error) {
      console.error("Error al conectar:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

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
          <Menu menuAbierto={menuAbierto} />
        </nav>
      </header>

      <main>
        <h2>Ingresos de Usuarios</h2>
        <form className="activo-form" onSubmit={(e) => e.preventDefault()}>
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
          <input type="text" id="Email" name="Email" required maxLength="30" />

          <label htmlFor="activo" className="checkbox-label">
            <input type="checkbox" id="activo" name="activo" />
            Usuario Activo
          </label>

          {/* Pasamos la función al componente */}
          <BotonesAccion onAgregar={handleAgregarUsuario} />
        </form>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Usuarios;