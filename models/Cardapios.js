const Sequelize = require('sequelize');
const db        = require('../db/connection');

const Cardapios = db.define('cardapios_prestadors', {
    refeicao: {
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
    valorCardapio: {
        type: Sequelize.STRING
    },
});

module.exports = Cardapios;