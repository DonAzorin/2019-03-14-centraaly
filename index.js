const express = require('express');
const app = express(); //Ejecuta express para acceder a sus métodos y funcionalidades
const port = 8080;
const chalk = require('chalk'); //Permite colorear los mensajes de la consola
const mongoose  = require('mongoose');

mongoose.connect(process.env.ATLAS_URL);

var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //ve're connected!
  console.log('connected')
});

//Escuchar peticiones en un puerto
app.listen(port /*8080*/, () => {
  console.log(`Escuchando en el puerto ${port}...`);
  console.log(chalk.cyan(`http://localhost:${port}`));
});

//Routes
const api = require('./api'); //Se importa el index de la carpeta api para usarlo en caso de que se haga una petición a esa ruta
app.use('/api', api)

//ATLAS_URL="mongodb+srv://user:centraal123@primerabd-hfn63.gcp.mongodb.net/test?retryWrites=true" node.js 3.0 or later
//ATLAS_URL="mongodb://user:centraal123@primerabd-shard-00-00-hfn63.gcp.mongodb.net:27017,primerabd-shard-00-01-hfn63.gcp.mongodb.net:27017,primerabd-shard-00-02-hfn63.gcp.mongodb.net:27017/test?ssl=true&replicaSet=PrimeraBD-shard-0&authSource=admin&retryWrites=true" node.js 2.2.12 or later
