const express = require('express');
const router = express.Router();
const Cardapios = require('../models/Cardapios');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});


 router.get('/portal-consumidor', (req, res) => {
   Cardapios.findAll()
     .then((cardapios_prestadors) => {
      res.render('portal-consumidor', { cardapios_prestadors: cardapios_prestadors });
     })
     .catch((err) => {
       console.log(err);
       res.render('error'); // Renderizar uma página de erro, se necessário
     });
});



router.post('/add', (req, res) => {
  let { refeicao, descricao, calorias, proteinas, carboidratos, gorduras, valorCardapio } = req.body;

  // inserindo
  Cardapios.create({
    refeicao,
    descricao,
    calorias,
    proteinas,
    carboidratos,
    gorduras,
    valorCardapio,
  })
    .then(() => res.redirect('portal-consumidor'))
    .catch((err) => console.log(err));
});

module.exports = router;
