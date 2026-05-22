const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// --- Rutas ---

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor del Sistema Escolar funcionando');
});

// Ruta para Altas
app.post('/api/altas', (req, res) => {
    console.log("Altas recibidas:", req.body);
    res.status(201).json({ mensaje: "Alta registrada" });
});

// Ruta para Activos
app.post('/api/activos', (req, res) => {
    console.log("Activo recibido:", req.body);
    res.status(201).json({ mensaje: "Activo registrado" });
});

// Ruta para Bajas
app.post('/api/bajas', (req, res) => {
    console.log("Baja recibida:", req.body);
    res.status(201).json({ mensaje: "Baja registrada" });
});

// Ruta para Departamentos
app.post('/api/departamentos', (req, res) => {
    console.log("Departamento recibido:", req.body);
    res.status(201).json({ mensaje: "Depto registrado" });
});

// Ruta para Traslados
app.post('/api/traslados', (req, res) => {
    console.log("Traslado recibido:", req.body);
    res.status(201).json({ mensaje: "Traslado registrado" });
});

// Ruta para Usuarios
app.post('/api/usuarios', (req, res) => {
    console.log("Usuario recibido:", req.body);
    res.status(201).json({ mensaje: "Usuario registrado" });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});