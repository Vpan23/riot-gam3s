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
const PRINCIPAL = document.querySelector(".map");

const TIENDA = document.querySelector(".tienda");
const CASA = document.querySelector(".casa");
const BATALLA = document.querySelector(".battle");

const BarraDeCarga = document.querySelector(".barraDeCarga");
const cargandoText = document.querySelector(".cargando");
const monedasTextDisplay = document.getElementById("monedas");
const monedasTienda = document.getElementById("monedasTienda");

const tiendaDisplay = document.querySelector(".tiendaDisplay");
const goBack = document.querySelector(".goBack");
const goBackCasa = document.querySelector(".goBack-casa");
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
goBackCasa.addEventListener("click", () => {
  mostrarCasa.style.display = "none";
  PRINCIPAL.style.display = "flex";
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

const mostrarCasa = document.getElementById("sectionCasa");
const contenedorDeCartas = document.querySelector(".cards__container");
const crearCarta = document.createElement("div");
const nombreCarta = document.createElement("span");
const atributosIconos = document.createElement("img");
const atributosContenedorCarta = document.createElement("div");
const poderCarta = document.createElement("div");
const imgCarta = document.createElement("img");

let personajes = [
  {
    nombre: "lux",
    atributos: [
      100, 100, 30, 30, 10,
      // vida: 100,
      // "poder de habilidad": 100,
      // defensa: 30,
      // "resistencia magica": 30,
      // ataque: 10,
    ],
    numero: 1,
    coste: 100,
    estado: false,
    img: "assets/lux.png",
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
    img: "assets/ashe.png",
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
    img: "assets/missfortune.png",
  },
];

// iconos de Atributos.
const AgregarIconosDelAtributo = [
  "assets/vida-icon.jpg",
  "assets/ataque-icon.jpg",
  "assets/poder-de-habilidad-icon.jpg",
  "assets/defensa-icon.jpg",
  "assets/resistencia-magica-icon.jpg",
];
const contenedorDeAtributos = document.createElement("p");

// Funcion al Tocar Casa.
CASA.addEventListener("click", () => {
  console.log("casa");
  PRINCIPAL.style.display = "none";
  mostrarCasa.style.display = "flex";
  // Calcular que personajes tienen su estado activo(true).
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].estado === true) {
      /*  
        EL ORDEN ES EL SIGUIENTE
        - NOMBRE. 
        - IMG.
        - ATRIBUTOS
        - BOTON.
      */
      console.log(`personaje ${personajes[i].nombre} ha pasado`);

      // Se crea la carta
      crearCarta.className = "carta-personaje";

      // Creacion de Nombres de Cartas.
      nombreCarta.textContent = `${personajes[i].nombre}`;
      nombreCarta.className = "nombreCarta";

      // Creacion de la imagen.
      imgCarta.className = "imgCarta";
      imgCarta.src = `${personajes[i].img}`;

      // Creacion de los atributos.
      atributosIconos.className = "atributosIconos";
      atributosContenedorCarta.className = "atributosContenedorCarta";
      contenedorDeAtributos.className = "contenedorDeAtributos";

      // Subirlo en nuestro contenedor.
      contenedorDeCartas.appendChild(crearCarta);
      crearCarta.appendChild(nombreCarta);
      crearCarta.appendChild(imgCarta);

      // Prueba
      
      atributosIconos.src = AgregarIconosDelAtributo[0];
      contenedorDeAtributos.textContent = `vida`;
      atributosContenedorCarta.appendChild(atributosIconos);
      atributosContenedorCarta.appendChild(contenedorDeAtributos);
      crearCarta.appendChild(atributosContenedorCarta);

      atributosIconos.src = AgregarIconosDelAtributo[1];
      contenedorDeAtributos.textContent = `velocidad`;
      atributosContenedorCarta.appendChild(atributosIconos);
      atributosContenedorCarta.appendChild(contenedorDeAtributos);
      crearCarta.appendChild(atributosContenedorCarta);
      // for (let i = 0; i < AgregarIconosDelAtributo.length; i++) {
      //   let imagen = (atributosIconos.src = AgregarIconosDelAtributo[i]);
      //   console.log("funciona " + AgregarIconosDelAtributo[i]);

      //   contenedorDeAtributos.textContent = `funciona bien`;
      //   crearCarta.appendChild(atributosContenedorCarta);
      //   atributosContenedorCarta.appendChild(imagen);
      //   atributosContenedorCarta.appendChild(contenedorDeAtributos);
      // }
    } else {
      console.log(`personaje ${personajes[i].nombre} no ha pasado`);
    }
  }
});
