const express = require('express');
const router = express.Router();
const VisualizarPedidos = require('../models/VisualizarPedidos')
const Cardapios = require('../models/Cardapios');

router.get('/portal-prestador', (req,res) => {
    res.render('portal-prestador');
});

router.get('/cardapio-prestador', (req, res) => {
    VisualizarPedidos.findAll().then((visualizar_pedidos) => {
      res.render('cardapio-prestador', { visualizar_pedidos: visualizar_pedidos });
    }).catch((err) => {
      console.log(err);
      res.render('error'); // Renderizar uma página de erro, se necessário
    });
  });

  router.get('/refeicaoId/:id', (req, res) => {
    const { id } = req.params;
  
    Cardapios.findOne({
      where: { id: id }
    })
      .then((cardapios_prestadors) => {
        res.render('refeicaoId', { cardapios_prestadors: cardapios_prestadors });
      })
      .catch((err) => console.log(err));
  });
   
  
router.post('/add', (req, res) => {
    let { refeicao, cliente, descricao, calorias, proteinas, carboidratos, gorduras, endereco, valorCardapio} = req.body;

    // inserindo
    VisualizarPedidos.create({
        refeicao,
        cliente,
        descricao,
        calorias,
        proteinas,
        carboidratos,
        gorduras,
        endereco,
        valorCardapio,
    })
    .then(() =>res.redirect('portal-prestador'))
    .catch((err)=> console.log(err));
});

module.exports = router;