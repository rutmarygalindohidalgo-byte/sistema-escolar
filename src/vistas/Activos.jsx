import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu';
import BotonesAccion from '../componentes/Formularios/BotonesAccion';

const Activos = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para enviar los datos de Activos al servidor
  const handleAgregarActivo = async () => {
    const nuevoActivo = {
      codigo: document.getElementById('codigo').value,
      nombre: document.getElementById('nombre').value
    };

    try {
      const respuesta = await fetch('http://localhost:3001/api/activos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoActivo)
      });
      
      const resultado = await respuesta.json();
      console.log("Servidor respondió:", resultado);
      alert("¡Activo agregado correctamente!");
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
          <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>&#9776;</button>
        </div>
        <nav className="main-menu">
          <Menu menuAbierto={menuAbierto} />
        </nav>
      </header>

      <main>
        <h2>Ingreso de Activo</h2>
        {/* Usamos onSubmit para prevenir recarga y manejar el envío */}
        <form className="activo-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="codigo">Código de Activo:</label>
          <input type="text" id="codigo" name="codigo" required />

          <label htmlFor="nombre">Nombre de Activo:</label>
          <input type="text" id="nombre" name="nombre" required />

          {/* Pasamos la función al componente de botones */}
          <BotonesAccion onAgregar={handleAgregarActivo} />
        </form>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Activos;