// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//inicializar variables
var app= express();

//CORS
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
     next();
   });



//Body Parser
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Importo rutas

const userRoutes = require('./routes/user');


// Conexion a la BD
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connection.openUri('mongodb://localhost:27017/fekuinhDB', (err, res)=>{
    if (err) throw err;
    console.log('Base de datos \x1b[32m%s\x1b[0m escuchando en el puerto 27017', 'ONLINE');
});

//Rutas
app.use(userRoutes);


//escuchar peticiones
app.listen(3001, ()=>{
    console.log('Servidor \x1b[32m%s\x1b[0m escuchando en el puerto 3001', 'ONLINE');
})