var estado = 0;

var area = document.getElementById("area_para_dibujar");
var papel = area.getContext("2d");
var x;
var y;
var color_elegido;

var grosorDef;

var negro = document.getElementById("color_black");
var blanco = document.getElementById("color_white");
var marron = document.getElementById("color_brown");
var azul = document.getElementById("color_blue");
var celeste = document.getElementById("color_light_blue");
var amarillo = document.getElementById("yellow");
var naranja = document.getElementById("color_orange");
var verde = document.getElementById("color_green");
var rojo = document.getElementById("color_red");
var boton_limpiar = document.getElementById("boton_clear");
var grosorLinea = document.getElementById("grosor_linea");
var aceptarGrosor = document.getElementById("cambiar_grosor");

negro.addEventListener("click", black);
blanco.addEventListener("click", white);
marron.addEventListener("click", brown);
azul.addEventListener("click", blue);
celeste.addEventListener("click", light_bleu);
amarillo.addEventListener("click", yellow);
naranja.addEventListener("click", orange);
verde.addEventListener("click", green);
rojo.addEventListener("click", red);
boton_limpiar.addEventListener("click", clearDraw);
aceptarGrosor.addEventListener("click", changeWidth);


document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);


dibujarLinea("black", 0, 0, 1500, 0, papel, 2);
dibujarLinea("black", 1500, 0, 1500, 1500, papel, 2);
dibujarLinea("black", 1500, 500, 0, 500, papel, 2);
dibujarLinea("black", 0, 1500, 0, 0, papel, 2);


//funciones


function dibujarMouse(evento)
{
  if (estado == 1)
  {
    dibujarLinea(color_elegido, x, y, evento.layerX, evento.layerY, papel, grosorDef);
  }
  x = evento.layerX;
  y = evento.layerY;
}


function presionarMouse(evento)
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}


function soltarMouse(evento)
{
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, grosor)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function black()
{
  color_elegido = "black";
}
function white()
{
  color_elegido = "white";
}
function brown()
{
  color_elegido = "#593e3e";
}
function blue()
{
  color_elegido = "blue";
}
function light_bleu()
{
  color_elegido = "#43c4e0";
}
function yellow()
{
  color_elegido = "yellow";
}
function orange()
{
  color_elegido = "orange";
}
function red()
{
  color_elegido = "red";
}
function green()
{
  color_elegido = "green";
}
function clearDraw()
{
  papel.beginPath();
  papel.fillStyle = 'gray';
  papel.fillRect(2, 2, 1495, 495);
}
function changeWidth()
{
  grosorDef = parseInt(grosorLinea.value);
}
