$(document).ready(function() {

    
        $('#tabs').tabs();
      

    $('.gerenciarCardapio').click(function() {
      $('.content').empty(); // Limpa o conteúdo atual da div content
      var novoConteudo = `<section class="form-cardapio">
      <div class="container">
        <h1 class="text-center">Gerenciar Cardápio</h1>
        <div id="tabs">
          <ul class="tabsUl d-flex gap-2 p-0 pt-3">
            <li>
              <a href="#tabs-1"
                ><button class="btn btn-primary">Cadastrar Cardapios</button>
              </a>
            </li>
            <li>
              <a href="#tabs-2"
                ><button class="btn btn-primary">
                  Visualizar Cardapios
                </button></a
              >
            </li>
          </ul>

          <div id="tabs-1">
            <form id="formCardapio">
              <div class="mb-3">
                <label for="refeicao" class="form-label">Refeição</label>
                <input
                  type="text"
                  class="form-control"
                  id="refeicao"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <textarea
                  class="form-control"
                  id="descricao"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="calorias" class="form-label">Calorias</label>
                <input
                  type="number"
                  class="form-control"
                  id="calorias"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="proteinas" class="form-label">Proteínas</label>
                <input
                  type="number"
                  class="form-control"
                  id="proteinas"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="carboidratos" class="form-label"
                  >Carboidratos</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="carboidratos"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="gorduras" class="form-label">Gorduras</label>
                <input
                  type="number"
                  class="form-control"
                  id="gorduras"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="valorCardapio" class="form-label">Valor</label>
                <input
                  type="text"
                  class="form-control"
                  id="valorCardapio"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
          </div>
          <div id="tabs-2">
            <div class="container">
              <table class="table">
                <thead>
                  <tr>
                    <th>Refeição</th>
                    <th>Descrição</th>
                    <th>Calorias</th>
                    <th>Proteínas</th>
                    <th>Carboidratos</th>
                    <th>Gorduras</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody id="tabelaCardapio"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>`; // Conteúdo a ser inserido
      $('.content').append(novoConteudo); // Insere o novo conteúdo na div content
    });
  
    $('.gerenciarAssinaturas').click(function() {
      $('.content').empty(); // Limpa o conteúdo atual da div content
      var novoConteudo = '<h2>Gerenciar Assinaturas</h2>'; // Conteúdo a ser inserido
      $('.content').append(novoConteudo); // Insere o novo conteúdo na div content
    });
  
    $('.calculadoraDeMacro').click(function() {
      $('.content').empty(); // Limpa o conteúdo atual da div content
      var novoConteudo = '<h2>Calculadora de Macro</h2>'; // Conteúdo a ser inserido
      $('.content').append(novoConteudo); // Insere o novo conteúdo na div content
    });

    function populaTabelaCardapio() {
        $('#tabelaCardapio').empty(); // Limpa a tabela
        var cardapiosSalvos = JSON.parse(localStorage.getItem('cardapios'));
        if (cardapiosSalvos) {
          cardapiosSalvos.forEach(function(cardapio) {
            var refeicao = cardapio.refeicao;
            var descricao = cardapio.descricao;
            var calorias = cardapio.calorias;
            var proteinas = cardapio.proteinas;
            var carboidratos = cardapio.carboidratos;
            var gorduras = cardapio.gorduras;
            var valor = cardapio.valor;
      
            // Cria uma nova linha na tabela
            var newRow = $('<tr>');
            newRow.append('<td>' + refeicao + '</td>');
            newRow.append('<td>' + descricao + '</td>');
            newRow.append('<td>' + calorias + '</td>');
            newRow.append('<td>' + proteinas + '</td>');
            newRow.append('<td>' + carboidratos + '</td>');
            newRow.append('<td>' + gorduras + '</td>');
            newRow.append('<td>' + valor + '</td>');
      
            // Adiciona a linha à tabela
            $('#tabelaCardapio').append(newRow);
          });
        }
      }
      
      if ($('.form-cardapio').length > 0) {
        // Captura o evento de submit do formulário
        $('#formCardapio').submit(function(event) {
          event.preventDefault(); // Impede o comportamento padrão do formulário
      
          // Captura os valores dos campos
          var refeicao = $('#refeicao').val();
          var descricao = $('#descricao').val();
          var calorias = $('#calorias').val();
          var proteinas = $('#proteinas').val();
          var carboidratos = $('#carboidratos').val();
          var gorduras = $('#gorduras').val();
          var valor = $('#valorCardapio').val();
      
          // Cria um objeto com os valores capturados
          var cardapio = {
            refeicao: refeicao,
            descricao: descricao,
            calorias: calorias,
            proteinas: proteinas,
            carboidratos: carboidratos,
            gorduras: gorduras,
            valor: valor
          };
      
          // Verifica se já existem itens de cardápio no localStorage
          var cardapiosSalvos = JSON.parse(localStorage.getItem('cardapios')) || [];
      
          // Adiciona o novo cardápio ao array
          cardapiosSalvos.push(cardapio);
      
          // Salva o array atualizado no localStorage
          localStorage.setItem('cardapios', JSON.stringify(cardapiosSalvos));
      
          // Exibe uma mensagem de sucesso
          alert('Cardápio salvo com sucesso!');
      
          // Limpa os campos do formulário
          $('#formCardapio')[0].reset();
      
          console.log('Cadastro realizado:', cardapio);
          populaTabelaCardapio(); // Atualiza a tabela
        });
      
        populaTabelaCardapio(); // Popula a tabela inicialmente
      
        $('#valorCardapio').mask('000.000.000.000.000,00', { reverse: true });
      
      }
  });
  