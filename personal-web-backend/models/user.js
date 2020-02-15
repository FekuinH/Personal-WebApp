const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

const UserSchema = Schema({

    name: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, required: [true, 'El email es obligatorio'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    active: {type: Boolean, default : false}
})

module.exports = mongoose.model('User', UserSchema)