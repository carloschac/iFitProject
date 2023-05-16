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


var usuarios = [
  {
    "tipo": "consumidor",
    "nome": "admin",
    "email": "admin@admin.com",
    "senha": "admin"
  },
  {
    "tipo": "prestador",
    "cnpj": "99.999.999/0001-99",
    "email": "admin@admin.com",
    "senha": "admin"
  }
];

$(document).ready(function(){

  if($('.form-cadastro').length > 0)
{
  mostrarCampos();
};

if($('.form-login').length > 0)
{
  $('#login').click(function(e) {
    e.preventDefault(); // Impede o envio do formulário (recarregar a página)

    // Obtém os valores dos campos
    const tipo = $('#tipo').val();
    const email = $('#emailLogin').val();
    const senha = $('#senhaLogin').val();

    // Validação dos campos
    if (email === 'admin@admin.com' && senha === 'admin') {
      if (tipo === 'consumidor') {
        // Redireciona para a página do consumidor
        window.location.href = '/pages/portal-consumidor.html';
      } else if (tipo === 'prestador') {
        // Redireciona para a página do prestador
        window.location.href = '/pages/portal-prestador.html';
      }
    } else {
      // Exibe uma mensagem de erro ou toma outra ação, caso os campos não sejam válidos
      console.log('Credenciais inválidas!');
    }
  });
};


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