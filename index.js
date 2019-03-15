const express = require('express');
const app = express(); //Ejecuta express para acceder a sus métodos y funcionalidades
const port = 8080;
const chalk = require('chalk'); //Permite colorear los mensajes de la consola

//Escuchar peticiones en un puerto
app.listen(port /*8080*/, () => {
  console.log(`Escuchando en el puerto ${port}...`);
  console.log(chalk.cyan(`http://localhost:${port}`));
});

//Routes
const api = require('./api'); //Se importa el index de la carpeta api para usarlo en caso de que se haga una petición a esa ruta
app.use('/api', api)
