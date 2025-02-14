document.addEventListener("DOMContentLoaded", function () {
  let toggleBtn = document.getElementById("toggleBtn");
  let loginTitle = document.getElementById("loginTitle");
  let identifierLabel = document.getElementById("identifierLabel");
  let identifierInput = document.getElementById("identifier");
  let googleLogin = document.getElementById("googleLogin");
  let toggleContainer = document.getElementById("toggleContainer");
  let loginForm = document.getElementById("loginForm");
  let perfil = "viajante";

  toggleContainer.addEventListener("click", function () {
    if (perfil === "viajante") {
      perfil = "empreendedor";
      toggleBtn.style.transform = "translateX(100%)";
      toggleBtn.style.backgroundColor = "#E7467F";
      loginTitle.innerText = "Login - Empreendedor";

      identifierLabel.innerText = "CNPJ";
      identifierInput.setAttribute("placeholder", "Digite seu CNPJ");
      identifierInput.setAttribute("type", "text");

      googleLogin.style.display = "none";
    } else {
      perfil = "viajante";
      toggleBtn.style.transform = "translateX(0)";
      toggleBtn.style.backgroundColor = "#E7467F";
      loginTitle.innerText = "Login - Viajante";

      identifierLabel.innerText = "E-mail";
      identifierInput.setAttribute("placeholder", "Digite seu e-mail");
      identifierInput.setAttribute("type", "email");

      googleLogin.style.display = "block";
    }
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    if (perfil === "empreendedor") {
      window.location.href = "indexempreendedor.html"; 
    } else {
      window.location.href = "index.html"; 
    }
  });
  
});
