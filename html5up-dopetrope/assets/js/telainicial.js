document.addEventListener("DOMContentLoaded", function () {
  let toggleBtn = document.getElementById("toggleBtn");
  let loginTitle = document.getElementById("loginTitle");
  let toggleContainer = document.getElementById("toggleContainer");

  toggleContainer.addEventListener("click", function () {
    if (toggleBtn.innerText === "Viajante") {
      toggleBtn.style.transform = "translateX(100%)";
      toggleBtn.innerText = "Empreendedor";
      toggleBtn.style.backgroundColor = "#ff5722"; // Cor para Empreendedor
      loginTitle.innerText = "Login - Empreendedor";
    } else {
      toggleBtn.style.transform = "translateX(0)";
      toggleBtn.innerText = "Viajante";
      toggleBtn.style.backgroundColor = "#2d89ef"; // Cor para Viajante
      loginTitle.innerText = "Login - Viajante";
    }
  });
});
