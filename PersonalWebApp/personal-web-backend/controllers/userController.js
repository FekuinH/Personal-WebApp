const bcrypt = require('bcrypt');
const User = require('../models/user');

// crear nuevo usuario
function signUp(req, res) {

    //destructring de lo que viene del body
    const { name, lastName, email, password, role } = req.body;

    //nuevo usuario con los datos del body
    let newUser = new User({
        name: name,
        lastName: lastName,
        email: email,
        password: bcrypt.hashSync(password, 10),
        role: role
    })

    //guardo el usuario en la base de datos
    newUser.save((err, userStored) => {

        //error
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error en la base de datos al guardar el usuario',
                errors: err
            });
        }

        //caso feliz
        res.status(201).json({
            ok: true,
            usuario: userStored
        });



    });

}

module.exports = {
    signUp
}

