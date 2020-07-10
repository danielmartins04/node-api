const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Iniciando o DB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send("<h1>asas waoarldasasa</h1>");
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
}); 