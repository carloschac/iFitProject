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

$(document).ready(function(){
   
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