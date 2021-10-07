const express = require('express');
require('dotenv').config(); //
const { dbConection } = require('./config/database') //accedemos ala bd


//importamos cors
const cors = require('cors');

//crear el servidor express
const app = express();

//configuramos cors
app.use(cors());

app.use(express.json());
//Estableciendo conexion a la BD
dbConection();
//console.log(process.env);

//Rutas de la APi Proyectos
app.use('/api/usuarios', require('./routes/usuarios.routes'))
app.use('/api/login', require('./routes/auth.routes'));

//codigo para desplegara
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto' + process.env.PORT);
})