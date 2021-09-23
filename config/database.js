const mongoose = require('mongoose');
const dbConection = async() => {
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass   
        //mongodb+srv://adminproject:e4iioBKogDcvT0Td@cluster0.in6ra.mongodb.net/BDproyectos
        //await mongoose.connect('mongodb+srv://adminproject:e4iioBKogDcvT0Td@cluster0.in6ra.mongodb.net/BDproyectos');
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}
module.exports = {
    dbConection
}