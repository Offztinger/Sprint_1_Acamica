window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
  let myWidth = window.innerWidth;
  // your size calculation code here
  document.getElementById("dimensions").innerHTML =
    "El ancho de la pantalla es " + myWidth + "px";
}
