document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("dvd-icon");
    let speedX = 3; 
    let speedY = 3; 
    let posX = Math.random() * window.innerWidth; 
    let posY = Math.random() * window.innerHeight; 

    function moveIcon() {
        posX += speedX;
        posY += speedY;

        if (posX + icon.clientWidth >= window.innerWidth || posX <= 0) {
            speedX *= -1; 
            changeColor(); 
        }

        if (posY + icon.clientHeight >= window.innerHeight || posY <= 0) {
            speedY *= -1; 
            changeColor(); 
        }

        icon.style.left = posX + "px";
        icon.style.top = posY + "px";

        requestAnimationFrame(moveIcon);
    }

    function changeColor() {
        const colors = ["#FF4500", "#FFD700", "#2F4F4F", "#E53359", "#302F90", "#29ABE2"];
        icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    }

    icon.addEventListener("click", function () {
        icon.style.display = "none"; 
    });

    moveIcon();
});
