import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu';
import BotonesAccion from '../componentes/Formularios/BotonesAccion';

const Bajas = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para enviar los datos de Bajas al servidor
  const handleAgregarBaja = async () => {
    const nuevaBaja = {
      codigo: document.getElementById('codigo').value,
      cantidad: document.getElementById('cantidad').value,
      fecha: document.getElementById('Fecha_b').value,
      hora: document.getElementById('Hora_b').value,
      doc: document.getElementById('Num_Doc').value,
      usuario: document.getElementById('Cod_Usu').value,
      observacion: document.getElementById('Observacion').value
    };

    try {
      const respuesta = await fetch('http://localhost:3001/api/bajas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaBaja)
      });
      
      const resultado = await respuesta.json();
      console.log("Servidor respondió:", resultado);
      alert("¡Baja registrada correctamente!");
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

          {/* Pasamos la función al componente */}
          <BotonesAccion onAgregar={handleAgregarBaja} />
        </form>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Bajas;