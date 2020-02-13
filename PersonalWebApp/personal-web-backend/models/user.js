const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

const UserSchema = Schema({

    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    lastName: { type: String, required: [true, 'El apellido es obligatorio'] },
    email: { type: String, unique: true, required: [true, 'El email es obligatorio'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    active: Boolean
})

module.exports = mongoose.model('User', UserSchema)