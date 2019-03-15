const express = require('express');
const app = express(); //Ejecuta express para acceder a sus métodos y funcionalidades
const port = 8080;
const chalk = require('chalk'); //Permite colorear los mensajes de la consola

//Rutas
app.get('/', (req,res) => {
  res.send('estoy respondiendo algo :3');
});

//Escuchar peticiones en un puerto
app.listen(port /*8080*/, () => {
  console.log(`Escuchando en el puerto ${port}...`);
  console.log(chalk.cyan(`http://localhost:${port}`));
});