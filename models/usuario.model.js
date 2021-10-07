const { Schema, model } = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
});


UsuarioSchema.method('toJSON', function() {
        const { __v, _id, ...Object } = this.toObject();
        Object.uid = _id;
        return Object;
    })
    //Se exporta el modelo
    //Por defecto moongose creara en mongodb un documento en plural: usuarios
module.exports = model('Usuario', UsuarioSchema);