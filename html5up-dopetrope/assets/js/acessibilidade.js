document.addEventListener("DOMContentLoaded", function () {
    let menuAcessibilidade = document.getElementById("acessibilidadeMenu");
    let botaoAcessibilidade = document.getElementById("acessibilidadeBtn");

    botaoAcessibilidade.addEventListener("click", function () {
        menuAcessibilidade.style.display = menuAcessibilidade.style.display === "block" ? "none" : "block";
    });
});

// Funções de acessibilidade
function aumentarFonte() {
    document.body.style.fontSize = "larger";
}

function diminuirFonte() {
    document.body.style.fontSize = "smaller";
}

function modoAltoContraste() {
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
}

function resetarAcessibilidade() {
    document.body.style.fontSize = "";
    document.body.style.background = "";
    document.body.style.color = "";
}

// Controle do Leitor de Tela
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
        speechSynthesis.cancel(); // Para a leitura
        leitorAtivo = false;
    }
}
