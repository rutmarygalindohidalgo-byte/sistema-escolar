import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu';
import BotonesAccion from '../componentes/Formularios/BotonesAccion';

const Altas = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Lógica para enviar los datos al Backend
  const handleAgregar = async () => {
    const nuevoActivo = {
      codigo: document.getElementById('codigo').value,
      cantidad: document.getElementById('cantidad').value,
      fecha: document.getElementById('Fecha_i').value,
      hora: document.getElementById('Hora_i').value,
      doc: document.getElementById('Num_Doc').value,
      usuario: document.getElementById('Cod_Usu').value,
      observacion: document.getElementById('Observacion').value
    };

    try {
      const respuesta = await fetch('http://localhost:3001/api/altas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoActivo)
      });
      
      const resultado = await respuesta.json();
      console.log("Respuesta del servidor:", resultado);
      alert("¡Dato enviado correctamente al servidor!");
    } catch (error) {
      console.error("Error al conectar:", error);
      alert("No se pudo conectar con el servidor. ¿Está corriendo?");
    }
  };

  return (
    <div>
      <header className="main-header">
        <div className="header-content">
          <img src="img/logo.png" alt="Logo Liceo" className="logo-header" />
          <h1>Inventario de Existencia</h1>
          <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>&#9776;</button>
        </div>
        <nav className="main-menu">
          <Menu menuAbierto={menuAbierto} />
        </nav>
      </header>

      <main>
        <h2>Registro de Altas</h2>
        <form className="activo-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="codigo">Código de Activo:</label>
          <input type="text" id="codigo" name="codigo" required maxLength="10" />

          <label htmlFor="cantidad">Cantidad :</label>
          <input type="text" id="cantidad" name="cantidad" required />

          <label htmlFor="Fecha_i">Fecha de Ingreso :</label>
          <input type="date" id="Fecha_i" name="Fecha_i" />

          <label htmlFor="Hora_i">Hora de Ingreso :</label>
          <input type="time" id="Hora_i" name="Hora_i" />

          <label htmlFor="Num_Doc">Numero de Documento :</label>
          <input type="text" id="Num_Doc" name="Num_Doc" />

          <label htmlFor="Cod_Usu">Codigo de usuario :</label>
          <input type="text" id="Cod_Usu" name="Cod_Usu" />

          <label htmlFor="Observacion">Observacion :</label>
          <input type="text" id="Observacion" name="Observacion" />

          {/* Pasamos la función al componente */}
          <BotonesAccion onAgregar={handleAgregar} />
        </form>
      </main>
    </div>
  );
};

export default Altas;