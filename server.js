const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Iniciando o DB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true });

require('./src/models/Product');

// Rotas
app.use('/', require("./src/routes"));

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
}); 