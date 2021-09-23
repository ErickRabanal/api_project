const express = require('express');
require('dotenv').config(); //
const { dbConection } = require('./config/database') //accedemos ala bd


//importamos cors
const cors = require('cors');

//crear el servidor express
const app = express();

//configuramos cors
app.use(cors());

//Estableciendo conexion a la BD
dbConection();
//console.log(process.env);

//Rutas de la APi Proyectos
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Bienvenidos a NodeJS'
    });

});

//codigo para desplegara
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto' + process.env.PORT);
})