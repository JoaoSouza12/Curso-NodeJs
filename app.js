const express = require('express');
const rotas = require('./core'); // Importe o roteador do arquivo 'core.js'
const app = express();
const porta = process.env.PORT || 3000;

app.use('/', rotas);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});