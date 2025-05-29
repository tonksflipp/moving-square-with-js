
const cuadrado = document.getElementById("cuadrado");
let posX = 100;
let posY = 100;
const velocidad = 10;

document.addEventListener("keydown", (evento) => {
  switch (evento.key) {
    case "ArrowUp":
      posY -= velocidad;
      break;
    case "ArrowDown":
      posY += velocidad;
      break;
    case "ArrowLeft":
      posX -= velocidad;
      break;
    case "ArrowRight":
      posX += velocidad;
      break;
  } 
  cuadrado.style.top = posY + "px";
  cuadrado.style.left = posX + "px";
});
