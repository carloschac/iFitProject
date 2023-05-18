const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const sequelize  = require('sequelize');


const PORT = 4000;

app.listen(PORT, function(){
  console.log(`Rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false}));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayouts: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'assets')));


// conexão com DB
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco de dados!")
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  });

// rota index
app.get('/', (req, res) => {
  res.render('index');
});  

// Definindo as rotas
  app.use('/cardapios', require('./routes/cardapios'));
  app.use('/visualizarPedidos', require('./routes/visualizarPedidos'));
