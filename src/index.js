import express from 'express'

const app = express();

// Ruta GET
app.get('/saludo', (req, res) => {
  res.send('Hola, bienvenido a mi servidor Express!');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
