// Recibimos 'onAgregar' como una propiedad (prop)
const BotonesAccion = ({ onAgregar }) => {
  return (
    <div className="form-buttons">
      {/* type="button" evita que la página se recargue */}
      <button type="button" onClick={onAgregar}>Agregar</button>
      <button type="button">Modificar</button>
      <button type="button">Eliminar</button>
    </div>
  );
};

export default BotonesAccion;