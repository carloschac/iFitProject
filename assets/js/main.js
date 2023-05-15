
function handleMenu() {
    const header = document.querySelector(".header");
    const container = document.querySelector(".main-container");
    const st = (window.pageYOffset || document.documentElement.scrollTop) >= 300;
  
    if (st) {
      header.classList.add("header--active");
      header.setAttribute("style", `width: ${container.clientWidth}px`);
      container.setAttribute(
        "style",
        `padding-top: ${header.clientHeight + 50}px !important`
      );
    } else {
      header.classList.remove("header--active");
      header.removeAttribute("style", `width: ${container.clientWidth}px`);
      container.removeAttribute(
        "style",
        `padding-top: ${header.clientHeight + 50}px !important`
      );
    }
  }

window.addEventListener("scroll", handleMenu, false);
window.addEventListener("resize", handleMenu, false);

function mostrarCampos() {
  var tipo = document.getElementById("tipo").value;
  
  var camposConsumidor = document.getElementById("camposConsumidor");
  var camposPrestador = document.getElementById("camposPrestador");

  document.getElementById("nome").value = ""; 
  document.getElementById("emailConsumidor").value = ""; 
  document.getElementById("senhaConsumidor").value = ""; 

  document.getElementById("cnpj").value = ""; 
  document.getElementById("emailPrestador").value = ""; 
  document.getElementById("senhaPrestador").value = ""; 
  
  if (tipo === "consumidor") {
    camposConsumidor.style.display = "block";
    camposPrestador.style.display = "none";
  } else if (tipo === "prestador") {
    camposConsumidor.style.display = "none";
    camposPrestador.style.display = "block";
  }
}

mostrarCampos();

/* FUNÇÃO PARA GERAR UM ID ALEATÓRIO PARA O CADASTRO */
function generateUUID() {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

/* FUNÇÃO PARA CRIAR UM ARQUIVO JSON QUE SALVA OS DADOS DO FORM DE CADASTRO */
$('#cadastrar').on("click",function(){
  var uuid = generateUUID();
  var tipoUsuario = document.getElementById("tipo").value;

  // Coletar os dados do formulário
  var nome = document.getElementById("nome").value;
  var emailConsumidor = document.getElementById("emailConsumidor").value;
  var senhaConsumidor = document.getElementById("senhaConsumidor").value;
  var cnpj = document.getElementById("cnpj").value;
  var emailPrestador = document.getElementById("emailPrestador").value;
  var senhaPrestador = document.getElementById("senhaPrestador").value;
 

  // Criar um novo objeto JSON com os dados do usuário, incluindo o ID
  var novoUsuario = {
    id: uuid,
    nome: nome,
    emailConsumidor: emailConsumidor,
    senhaConsumidor: senhaConsumidor,
    cnpj: 'cnpj',
    emailPrestador: 'emailPrestador',
    senhaPrestador: 'senhaPrestador',
  };

  $('#formularioCadastro').ajaxSubmit({
    url: './assets/json/usuarios.json',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(novoUsuario),
    contentType: 'application/json',
    success: function(response) {
      // Sucesso: O usuário foi cadastrado
      alert('Usuário cadastrado com sucesso!');
      window.location.href = 'index.html';
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Erro: Falha ao cadastrar o usuário
      console.error('Erro na chamada AJAX:', textStatus, errorThrown);
      alert('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.');
    }
  });
});
  
$(document).ready(function(){

  $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
   
    $(".case-multiple-cards").slick({
    prevArrow: ".banner-slider__nav--prev",
    nextArrow: ".banner-slider__nav--next",
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
});