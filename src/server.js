const express = require('express');
const server = express();
const routes = require('./routes');

// Usando template engine
server.set('view engine', 'ejs');

// Habilitar arquivos estáticos, tudo dentro de public cria uma rota
server.use(express.static("public"));
server.use(routes); 

server.listen(3333, () => console.log('rodando'));