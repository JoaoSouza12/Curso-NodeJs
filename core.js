const express = require('express');
const rotas = express.Router();
const path = require('path');

let cursosinfo = [
    {'curso':'nodejs','info':'curso de nodejs'},
    {'curso':'angular','info':'curso de angular'},
    {'curso':'mongodb','info':'curso de mongodb'},
    {'curso':'express','info':'curso de express'}
];

rotas.get('/cursos', (req, res, next) => {
    res.json(cursosinfo);
});

rotas.get('/cursos/:id', (req, res, next) => {
    const curso = req.params.id;
    const cursoI = cursosinfo.find(i => i.curso == curso);
    if (!cursoI) {
        res.status(404).json({'error': 'curso não encontrado'}); 
    } else {
        res.status(200).json(cursoI);
    }
});

// Servir arquivos estáticos na pasta "public"
rotas.use(express.static(path.join(__dirname, 'Curso Node Js')));

module.exports = rotas;
