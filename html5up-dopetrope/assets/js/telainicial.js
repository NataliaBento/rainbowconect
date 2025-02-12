document.addEventListener("DOMContentLoaded", function () {
  let toggleBtn = document.getElementById("toggleBtn");
  let loginTitle = document.getElementById("loginTitle");
  let identifierLabel = document.getElementById("identifierLabel");
  let identifierInput = document.getElementById("identifier");
  let googleLogin = document.getElementById("googleLogin");
  let toggleContainer = document.getElementById("toggleContainer");

  toggleContainer.addEventListener("click", function () {
    if (toggleBtn.innerText === "Viajante") {
      // Mudar para Empreendedor
      toggleBtn.style.transform = "translateX(100%)";
      toggleBtn.innerText = "Empreendedor";
      toggleBtn.style.backgroundColor = "#2E3192";
      loginTitle.innerText = "Login - Empreendedor";

      // Trocar Email por CNPJ
      identifierLabel.innerText = "CNPJ";
      identifierInput.setAttribute("placeholder", "Digite seu CNPJ");
      identifierInput.setAttribute("type", "text");

      // Esconder botão do Google
      googleLogin.style.display = "none";
    } else {
      // Mudar para Viajante
      toggleBtn.style.transform = "translateX(0)";
      toggleBtn.innerText = "Viajante";
      toggleBtn.style.backgroundColor = "#E7467F";
      loginTitle.innerText = "Login - Viajante";

      // Trocar CNPJ por Email
      identifierLabel.innerText = "E-mail";
      identifierInput.setAttribute("placeholder", "Digite seu e-mail");
      identifierInput.setAttribute("type", "email");

      // Mostrar botão do Google
      googleLogin.style.display = "block";
    }
  });
});
