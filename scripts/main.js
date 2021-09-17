// Interatividade com side-menu
let UlContainer = document.getElementById("side-menu__bar");

let listSelected = UlContainer.getElementsByClassName("side-menu__item");

for (let i = 0; i < listSelected.length; i++) {
  listSelected[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("side-menu__item--active");
    current[0].className = current[0].className.replace(" side-menu__item--active", "");
    this.className += " side-menu__item--active";
  });
}

// botão ver mais/ver menos
function verMais() {
  let pontos = document.getElementById("pontos");
  let maisTexto = document.getElementById("mais");
  let btnTexto = document.getElementById("meuBtn");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    btnTexto.innerHTML = "Ver mais"; 
    maisTexto.style.display = "none";
  } else {
    pontos.style.display = "none";
    btnTexto.innerHTML = "Ver menos"; 
    maisTexto.style.display = "inline";
  }
}

// Funções para alternar as divs
function toggle() {
  let discussoesDiv = document.getElementById("discussoes");
  let criarTopico = document.getElementById("criar-topico");

  if (discussoesDiv.style.display === "none") {
    discussoesDiv.style.display = "flex";
    criarTopico.style.display = "none";
  } else {
    discussoesDiv.style.display = "none";
    criarTopico.style.display = "flex";
  }
}

function ocultarDiv() {
  let discussoesEnviado = document.getElementById("discussoes-enviado");
  let criarTopico = document.getElementById("criar-topico");

  discussoesEnviado.style.display = "flex"
  criarTopico.style.display = "none"
}

function criarTopico() {
  let discussoesEnviado = document.getElementById("discussoes-enviado");
  let criarTopico = document.getElementById("criar-topico");

  discussoesEnviado.style.display = "none"
  criarTopico.style.display = "flex"
}
