// const mongoose = require('mongoose');

// const app = require("./app");
// const PORT_SERVER = process.env.PORT || 3977;
// const { IP_SERVER, PORT_DB } = require('./config/config');
// mongoose.set("useFindAndModify", false);




// mongoose.connect(
//     `mongodb://${IP_SERVER}:${PORT_DB}/fekuinhWeb`,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//      (err, res) => {
//         if (err) {
//             throw err
//         }
//         else {
//             console.log('La conexión a la base de datos es correcta');

//             app.listen(PORT_SERVER, () => {
//                 console.log('Servidor \x1b[32m%s\x1b[0m escuchando en el puerto 3000', 'ONLINE');
//                 console.log(`http://${IP_SERVER}:${PORT_SERVER}`);
//             });

//         }

//     });