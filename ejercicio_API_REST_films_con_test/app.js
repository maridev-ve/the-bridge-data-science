require('dotenv').config();

const express = require('express');
const filmsRoutes = require("./routes/films.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/film', filmsRoutes);


/* "si nada coincidió". Va al final porque Express revisa las rutas en orden,
    y si llega hasta aquí es que ninguna ruta anterior respondió. */
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;