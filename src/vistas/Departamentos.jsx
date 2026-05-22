import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu';
import BotonesAccion from '../componentes/Formularios/BotonesAccion';

const Departamentos = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Lógica para enviar los datos de Departamentos al servidor
  const handleAgregarDepartamento = async () => {
    const nuevoDepto = {
      codigo: document.getElementById('codigo').value,
      nombre: document.getElementById('nombre').value
    };

    try {
      const respuesta = await fetch('http://localhost:3001/api/departamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoDepto)
      });
      
      const resultado = await respuesta.json();
      console.log("Servidor respondió:", resultado);
      alert("¡Departamento registrado correctamente!");
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
        <h2>Ingreso de Departamentos</h2>
        <form className="activo-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="codigo">Código de Departamento:</label>
          <input type="text" id="codigo" name="codigo" required />

          <label htmlFor="nombre">Nombre de Departamento:</label>
          <input type="text" id="nombre" name="nombre" required />

          {/* Pasamos la función al componente */}
          <BotonesAccion onAgregar={handleAgregarDepartamento} />
        </form>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Departamentos;