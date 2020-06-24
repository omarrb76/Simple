const express = require("express"); // Importar express
const bodyParser = require("body-parser"); // Importamos el body-parser
const cors = require("cors");

const misRutas = require("./routes/rutas");

const app = express(); // Crear el servidor
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misRutas);
app.use(express.static(__dirname + '/public/')); // Doy permiso de que use todo lo que esta en la carpeta public

app.listen(port, () => {
    console.log(`Servidor en ejecucion en http://localhost:${port}`);
});