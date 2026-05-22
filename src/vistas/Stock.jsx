import React, { useState } from 'react';
import Menu from '../componentes/Layout/Menu'; // Importamos el componente de navegación

const Stock = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [codigoBusqueda, setCodigoBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [mostrarTabla, setMostrarTabla] = useState(false);

  // Datos simulados (en el futuro vendrán de tu base de datos)
  const stockData = [
    {codigo: "A01", nombre: "Notebook HP", stock: 12},
    {codigo: "A02", nombre: "Proyector Epson", stock: 5},
    {codigo: "A03", nombre: "Silla Oficina", stock: 30},
    {codigo: "A04", nombre: "Mesa Reunión", stock: 7}
  ];

  const handleConsultar = (e) => {
    e.preventDefault();
    const codigo = codigoBusqueda.trim().toUpperCase();
    const encontrados = stockData.filter(item => item.codigo === codigo);
    setResultados(encontrados);
    setMostrarTabla(true);
  };

  const handleMostrarTodos = () => {
    setResultados(stockData);
    setMostrarTabla(true);
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
          <Menu menuAbierto={menuAbierto} /> {/* Menú centralizado */}
        </nav>
      </header>

      <main>
        <h2>Consulta de Stock</h2>
        <form className="activo-form" onSubmit={handleConsultar}>
          <label htmlFor="codigo">Código de Activo:</label>
          <input 
            type="text" 
            id="codigo" 
            name="codigo" 
            maxLength="10" 
            placeholder="Ingrese código o deje vacío para ver todos"
            value={codigoBusqueda}
            onChange={(e) => setCodigoBusqueda(e.target.value)} 
          />
          <div className="form-buttons">
            <button type="submit">Consultar</button>
            <button type="button" onClick={handleMostrarTodos}>Mostrar Todos</button>
          </div>
        </form>

        {mostrarTabla && (
          <div id="resultado">
            <table style={{ width: '100%', marginTop: '1em' }}>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Stock Real</th>
                </tr>
              </thead>
              <tbody>
                {resultados.length > 0 ? (
                  resultados.map((item, index) => (
                    <tr key={index}>
                      <td>{item.codigo}</td>
                      <td>{item.nombre}</td>
                      <td>{item.stock}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'center' }}>No se encontró el código ingresado.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2025 Liceo Polivalente Lucila Godoy Alcayaga - San Bernardo</p>
      </footer>
    </div>
  );
};

export default Stock;