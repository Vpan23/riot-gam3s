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

const BarraDeCarga = document.querySelector(".barraDeCarga");
const cargandoText = document.querySelector(".cargando");
const monedasTextDisplay = document.getElementById("monedas");
const monedasTienda = document.getElementById("monedasTienda");

const tiendaDisplay = document.querySelector(".tiendaDisplay");
const goBack = document.querySelector(".goBack");
let cards = document.querySelector(".cards");

const bienvenidoDisplay = document.querySelector(".bienvenido");
const bienvenidoTextDisplay = document.querySelector(".center-mid");

const buttonToBuy = document.querySelectorAll(".toBuy");
var monedas = 100;
let costoPersonaje;
let obtenerNumeroDePersonaje;

// toBuy.addEventListener('click', ()=> {
//   console.log('funciona')
// })

TIENDA.addEventListener("click", () => {
  console.log("tienda");
  barraDeCarga();
  setTimeout(function () {
    tienda();
  }, 4000);
});

BATALLA.addEventListener("click", () => {
  console.log("batalla");
});

// Barra de carga con Setinterval.
function barraDeCarga() {
  // Esta barra mostrar una enfrente de la pantalla de juego una barra que se estara cargando.
  BarraDeCarga.style.display = "flex";
  cargandoText.innerHTML = "CARGANDO";
  function miFuncion() {
    cargandoText.innerHTML += ".";
  }
  var intervaloID = setInterval(miFuncion, 1000);
  setTimeout(function () {
    clearInterval(intervaloID);
    BarraDeCarga.style.display = "none";
  }, 4000);
}

// Ir de regreso al menu.
goBack.addEventListener("click", () => {
  tiendaDisplay.style.display = "none";
});
// Activador de la Funcion de Tienda.
function tienda() {
  bienvenido();
  setTimeout(() => {}, 1200);

  tiendaDisplay.style.display = "flex";
  monedero();
}
// Dar la bienvenida al entrar a la tienda.
function bienvenido() {
  bienvenidoDisplay.style.display = "flex";
  bienvenidoTextDisplay.innerHTML = "Has entrado a la Tienda";
  setTimeout(() => {
    bienvenidoTextDisplay.innerHTML = "";
    bienvenidoDisplay.style.display = "none";
  }, 1200);
}
// Funcion para guardar, actualizar y mostrar las monedas que tengas actualmente.
function monedero() {
  monedasTextDisplay.innerHTML = monedas;
}
let personajes = [
  {
    nombre: "lux",
    atributos: {
      vida: 100,
      "poder de habilidad": 100,
      defensa: 30,
      "resistencia magica": 30,
      ataque: 10,
    },
    numero: 1,
    coste: 100,
    estado: false,
  },
  {
    nombre: "ashe",
    atributos: {
      vida: 120,
      "poder de habilidad": 20,
      defensa: 30,
      "resistencia magica": 30,
      ataque: 70,
    },
    numero: 2,
    coste: 150,
    estado: false,
  },
  {
    nombre: "miss",
    atributos: {
      vida: 150,
      "poder de habilidad": 50,
      defensa: 50,
      "resistencia magica": 50,
      ataque: 50,
    },
    numero: 3,
    coste: 250,
    estado: false,
  },
];

// Funcion de compra de personajes.
buttonToBuy.forEach(function (boton) {
  boton.addEventListener("click", function () {
    var getButtonId = boton.id;
    console.log(getButtonId);
    switch (getButtonId) {
      case "lux":
        costoPersonaje = personajes[0].coste;
        obtenerNumeroDePersonaje = personajes[0].numero;
        console.log(obtenerNumeroDePersonaje);
        break;
      case "ashe":
        costoPersonaje = personajes[1].coste;
        obtenerNumeroDePersonaje = personajes[1].numero;
        console.log(obtenerNumeroDePersonaje);
        break;
      case "miss":
        costoPersonaje = personajes[2].coste;
        obtenerNumeroDePersonaje = personajes[2].numero;
        console.log(obtenerNumeroDePersonaje);
        break;
    }
    if (personajes[obtenerNumeroDePersonaje - 1].estado == false) {
      // descontado al comprar un personaje.
      if (monedas >= costoPersonaje) {
        monedas -= costoPersonaje;
        monedasTextDisplay.innerHTML = monedas;
        monedasTienda.innerHTML = monedas;
        console.log(monedas);
        console.log("se ha comprado exitosamente!");

        // Marcara al personaje como ya comprado. La resta del uno es para evitar modificaciones en los numeros y que asi puedan ser contadas facilmente.
        personajes[obtenerNumeroDePersonaje - 1].estado = true;
        console.log(personajes[0].estado);
      } else {
        console.log("se ha rechazado la compra!");
      }
    } else {
      console.log("este personaje ya ha sido comprado!");
    }
  });
});

const mostrarCasa = document.getElementById('sectionCasa');

// Funcion al Tocar Casa.
CASA.addEventListener("click", () => {
  console.log("casa");
  mostrarCasa.style.display = 'flex';
});
