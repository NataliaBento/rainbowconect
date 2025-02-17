document.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  let animacaoElemento = document.getElementById("animacao-viagem");

  if (animacaoElemento) {
    animacaoElemento.style.transform = `translateX(${scrollPos * 0.3}px)`;
  }
});
