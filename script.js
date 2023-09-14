const searchButton = document.getElementById("search");
let validation = true;
const searchText = document.querySelector(".search-text");

searchButton.addEventListener("click", function () {
  if (validation === true) {
    searchButton.style.transform = "translateX(-120px)";

    validation = false;

    setTimeout(() => {
      searchText.style.display = "flex";
    }, 400);
  } else {
    searchButton.style.transform = "translateX(0)";
    validation = true;
    searchText.style.display = "none";
  }
});

// seccion de juego
const TIENDA = document.querySelector(".tienda");
const CASA = document.querySelector(".casa");
const BATALLA = document.querySelector(".battle");

TIENDA.addEventListener("click", () => {
  console.log("tienda");
  barraDeCarga();
  setTimeout( function(){
    tienda();
  }, 4000)
});

CASA.addEventListener("click", () => {
  console.log("casa");
});

BATALLA.addEventListener("click", () => {
  console.log("batalla");
});

const BarraDeCarga = document.querySelector(".barraDeCarga");
const cargandoText = document.querySelector(".cargando");
const monedasTextDisplay = document.getElementById('monedas');

let monedas = 0; 
monedasTextDisplay.innerHTML = monedas;

// Barra de carga con Setinterval.
function barraDeCarga() {
  // Esta barra mostrar una enfrente de la pantalla de juego una barra que se estara cargando.
  BarraDeCarga.style.display = 'flex';
  cargandoText.innerHTML = "CARGANDO";
    function miFuncion() {
        cargandoText.innerHTML += ".";
    }
      var intervaloID = setInterval(miFuncion, 1000);
      setTimeout(function() {
        clearInterval(intervaloID);
        BarraDeCarga.style.display = 'none';
      }, 4000);
}

// Activador de la Funcion de Tienda.
const tiendaDisplay = document.querySelector('.tiendaDisplay');
function tienda() {
    tiendaDisplay.style.display = 'flex';
    bienvenido();
    
}

const bienvenidoTextDisplay = document.querySelector('.bienvenido');
function bienvenido() {
    bienvenidoTextDisplay.innerHTML = 'Has entrado a la Tienda';
    setTimeout(() => {
        bienvenidoTextDisplay.innerHTML = ''
    }, 1200);
}