import { Link } from 'react-router-dom';

const Menu = ({ menuAbierto }) => {
  return (
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
  );
};

export default Menu;