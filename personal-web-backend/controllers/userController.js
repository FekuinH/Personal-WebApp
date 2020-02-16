const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");
const User = require("../models/user");

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
  });

  //guardo el usuario en la base de datos
  newUser.save((err, userStored) => {
    //error
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "Error en la base de datos al guardar el usuario",
        errors: err
      });
    }

    //caso feliz
    res.status(201).json({
      ok: true,
      message: `Usuario creado correctamente`,
      usuario: userStored
    });
  });
}

function logIn(req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({email: email}, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al obtener el usuario en la Base de datos",
        errors: err
      }); 
    }
    if (!userDB) {
      return res.status(400).json({
        ok: false,
        message: "Error en el login - mail",
        errors: "No existe usuario con ese mail"
      });
    }
    // comparo contraseña del usuario con la del reqBody.
    if (!bcrypt.compareSync(password, userDB.password)) {
      return res.status(400).json({
        ok: false,
        message: "Error de credenciales - password",
        errors: { message: "No se pudo encontrar el usuario o contraseña" }
      });
    }
    if(!userDB.active){
        return res.status(200).json({
            ok: false,
            message: 'El usuario no esta activo. Solicite permisos al administrador para activar su cuenta'
        })
    }

    
     res.status(200).json({
        ok: true,
        message: 'Ha iniciado sesión correctamente',
        accesToken: jwt.createAccesToken(userDB),
        refreshToken: jwt.createRefreshToken(userDB),
        usuario: userDB
    });


  });
}

module.exports = {
  signUp,
  logIn
};
