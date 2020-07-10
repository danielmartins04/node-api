const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Iniciando o DB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true });

require('./src/models/Product');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({ 
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'url'
    });

    res.send("<h1>asas waoarldasasa</h1>");
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
}); 