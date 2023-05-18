const Sequelize = require('sequelize');
const db        = require('../db/connection');

const VisualizarPedidos =  db.define('visualizar_pedidos', {
    refeicao: {
        type: Sequelize.STRING
    },
    cliente: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    },
    calorias: {
        type: Sequelize.STRING
    },
    proteinas: {
        type: Sequelize.STRING
    },
    carboidratos: {
        type: Sequelize.STRING
    },
    gorduras: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    valorCardapio: {
        type: Sequelize.STRING
    },
});

module.exports = VisualizarPedidos;