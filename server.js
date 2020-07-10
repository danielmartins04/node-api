const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true });
require('./src/models/Product');

// Rotas
app.use('/', require("./src/routes"));

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
}); 