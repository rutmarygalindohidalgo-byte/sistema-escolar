import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Stock = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // --- Lógica de la tabla de Stock adaptada a React ---
  const stockData = [
    {codigo: "A01", nombre: "Notebook HP", stock: 12},
    {codigo: "A02", nombre: "Proyector Epson", stock: 5},
    {codigo: "A03", nombre: "Silla Oficina", stock: 30},
    {codigo: "A04", nombre: "Mesa Reunión", stock: 7}
  ];

  const [codigoBusqueda, setCodigoBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const handleConsultar = (e) => {
    e.preventDefault(); // Evita que la página se recargue al presionar Enter
    const codigo = codigoBusqueda.trim().toUpperCase();
    const encontrados = stockData.filter(item => item.codigo === codigo);
    setResultados(encontrados);
    setMostrarTabla(true);
  };

  const handleMostrarTodos = () => {
    setResultados(stockData);
    setMostrarTabla(true);
  };
  // ---------------------------------------------------

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

        {/* Esta sección solo se dibuja si mostrarTabla es true */}
        {mostrarTabla && (
          <div id="resultado">
            <table id="tablaStock" style={{ width: '100%', marginTop: '1em' }}>
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