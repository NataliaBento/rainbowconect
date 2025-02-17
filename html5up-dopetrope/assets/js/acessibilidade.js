document.addEventListener("DOMContentLoaded", function () {
    let menuAcessibilidade = document.getElementById("acessibilidadeMenu");
    let botaoAcessibilidade = document.getElementById("acessibilidadeBtn");

    if (menuAcessibilidade && botaoAcessibilidade) {
        botaoAcessibilidade.addEventListener("click", function () {
            
            menuAcessibilidade.classList.toggle("ativo");
        });
    }
});


function aumentarFonte() {
    let body = document.body;
    let estiloAtual = window.getComputedStyle(body).fontSize;
    let tamanhoAtual = parseFloat(estiloAtual);
    body.style.fontSize = (tamanhoAtual + 2) + "px";
}

function diminuirFonte() {
    let body = document.body;
    let estiloAtual = window.getComputedStyle(body).fontSize;
    let tamanhoAtual = parseFloat(estiloAtual);
    body.style.fontSize = (tamanhoAtual - 2) + "px";
}

function modoAltoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function resetarAcessibilidade() {
    document.body.style.fontSize = "";
    document.body.classList.remove("alto-contraste");
}

let speech = new SpeechSynthesisUtterance();
let leitorAtivo = false;

function ativarLeitorDeTela() {
    if (!leitorAtivo) {
        let textoPagina = document.body.innerText;
        speech.text = textoPagina;
        speech.lang = "pt-BR";
        speech.rate = 1;
        speechSynthesis.speak(speech);
        leitorAtivo = true;
    } else {
        speechSynthesis.cancel();
        leitorAtivo = false;
    }
}
