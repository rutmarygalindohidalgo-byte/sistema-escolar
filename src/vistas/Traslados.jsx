import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu';
import BotonesAccion from '../componentes/Formularios/BotonesAccion';

const Traslados = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para enviar los datos de Traslados al servidor
  const handleAgregarTraslado = async () => {
    const nuevoTraslado = {
      codigo: document.getElementById('codigo').value,
      cantidad: document.getElementById('cantidad').value,
      origen: document.getElementById('Nombre_o').value,
      destino: document.getElementById('Nombre_d').value,
      horaIngreso: document.getElementById('Hora_b').value,
      fechaTraslado: document.getElementById('Fecha_t').value,
      horaTraslado: document.getElementById('Hora_t').value,
      usuario: document.getElementById('Cod_Usu').value,
      observacion: document.getElementById('Observacion').value
    };

    try {
      const respuesta = await fetch('http://localhost:3001/api/traslados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoTraslado)
      });
      
      const resultado = await respuesta.json();
      console.log("Servidor respondió:", resultado);
      alert("¡Traslado registrado correctamente!");
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
        <h2>Registro de Traslado</h2>
        <form className="activo-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="codigo">Código de Activo:</label>
          <input type="text" id="codigo" name="codigo" required maxLength="10" />

          <label htmlFor="cantidad">Cantidad :</label>
          <input type="text" id="cantidad" name="cantidad" required />

          <label htmlFor="Nombre_o">Nombre de Origen :</label>
          <input type="text" id="Nombre_o" name="Nombre_o" />

          <label htmlFor="Nombre_d">Nombre de Destino :</label>
          <input type="text" id="Nombre_d" name="Nombre_d" />

          <label htmlFor="Hora_b">Hora de Ingreso :</label>
          <input type="text" id="Hora_b" name="Hora_b" />

          <label htmlFor="Fecha_t">Fecha Traslado :</label>
          <input type="date" id="Fecha_t" name="Fecha_t" />

          <label htmlFor="Hora_t">Hora Traslado :</label>
          <input type="time" id="Hora_t" name="Hora_t" />

          <label htmlFor="Cod_Usu">Codigo de usuario :</label>
          <input type="text" id="Cod_Usu" name="Cod_Usu" />

          <label htmlFor="Observacion">Observacion :</label>
          <input type="text" id="Observacion" name="Observacion" />

          {/* Pasamos la función al componente */}
          <BotonesAccion onAgregar={handleAgregarTraslado} />
        </form>
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Traslados;