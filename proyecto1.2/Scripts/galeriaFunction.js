const btnIzquierda = document.getElementById("btn-izquierda");
const btnDerecha = document.getElementById("btn-derecha");
const imagenes = document.querySelectorAll("#galeriaImagenes img");

let i = 0;

btnIzquierda.addEventListener("click", function() {
  imagenes[i].style.display = "none";
  i = (i - 1 + imagenes.length) % imagenes.length;
  imagenes[i].style.display = "block";
});

btnDerecha.addEventListener("click", function() {
  imagenes[i].style.display = "none";
  i = (i + 1) % imagenes.length;
  imagenes[i].style.display = "block";
});

setInterval(function() {
  imagenes[i].style.display = "none";
  i = (i + 1) % imagenes.length;
  imagenes[i].style.display = "block";
}, 3000);