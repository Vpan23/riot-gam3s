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

// const de cada carta.
const cartaLux = document.getElementById("cartaLux");
const cartaAshe = document.getElementById("cartaAshe");
const cartaMiss = document.getElementById("cartaMiss");

// Funcion de compra de personajes.
buttonToBuy.forEach(function (boton) {
  boton.addEventListener("click", function () {
    if (boton.id !== "comprado") {
      //Esta condicional evaluara si el id del boton seleccionado no haya sido cambiada a comprado. En caso contrario se nos permitira acceder a comprar.
      var getButtonId = boton.id;
      console.log(getButtonId);
      switch (getButtonId) {
        case "lux":
          costoPersonaje = personajes[0].coste;
          obtenerNumeroDePersonaje = personajes[0].numero;
          break;
        case "ashe":
          costoPersonaje = personajes[1].coste;
          obtenerNumeroDePersonaje = personajes[1].numero;
          break;
        case "miss":
          costoPersonaje = personajes[2].coste;
          obtenerNumeroDePersonaje = personajes[2].numero;
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

          //Busco una funcion para hacer desaparecer el personaje ya comprado cuando su estado sea true.
          switch (getButtonId) {
            case "lux":
              cartaLux.style.display = "none";
              break;
            case "ashe":
              cartaAshe.style.display = "none";
              break;
            case "miss":
              cartaMiss.style.display = "none";
              break;
          }
        } else {
          console.log("se ha rechazado la compra!");
        }
      }
    } else {
      console.log("este personaje ya ha sido comprado!");
    }
  });
});

// Funcion para Casa.
const mostrarCasa = document.getElementById("sectionCasa");
const contenedorDeCartas = document.querySelector(".cards__container");
const nombreCarta = document.createElement("span");
const poderCarta = document.createElement("div");
const imgCarta = document.createElement("img");

// Contenedor de cada imagen de Atributo.
const atributosContenedorCartaVida = document.createElement("div");
const atributosContenedorCartaAtaque = document.createElement("div");
const atributosContenedorCartaDefensa = document.createElement("div");
const atributosContenedorCartaResistencia = document.createElement("div");
const atributosContenedorCartaPoder = document.createElement("div");

// Imagenes de cada atributo
const contenedorDeTodosLosAtributos = document.createElement("div");

contenedorDeTodosLosAtributos.className = "contenedorDeTodosLosAtributos";
// iconos de Atributos.
const AgregarIconosDelAtributo = [
  "assets/vida-icon.jpg",
  "assets/ataque-icon.jpg",
  "assets/poder-de-habilidad-icon.jpg",
  "assets/defensa-icon.jpg",
  "assets/resistencia-magica-icon.jpg",
];

// Array de personajes
let personajes = [
  {
    nombre: "lux",
    atributos: [100, 20, 30, 30, 10],
    numero: 1,
    coste: 100,
    estado: false,
    img: "assets/lux.png",
  },
  {
    nombre: "ashe",
    atributos: [120, 60, 30, 30, 30],
    numero: 2,
    coste: 150,
    estado: false,
    img: "assets/ashe.png",
  },
  {
    nombre: "miss",
    atributos: [150, 50, 50, 50, 50],
    numero: 3,
    coste: 250,
    estado: false,
    img: "assets/missfortune.png",
  },
];
const casa_lux = document.getElementById("lux");
const casa_ashe = document.getElementById("ashe");
const casa_miss = document.getElementById("miss");
let sellPersonaje;
// Funcion al Tocar Casa.
CASA.addEventListener("click", () => {
  function volverCasa() {
    console.log("aqui");
  }
  console.log("casa");
  PRINCIPAL.style.display = "none";
  mostrarCasa.style.display = "flex";
  // Borrara todas las cartas anteriores que ya fueron creadas.
  contenedorDeTodosLosAtributos.innerHTML = "";
  // Calcular que personajes tienen su estado activo(true).
  personajes.forEach((personaje) => {
    // console.log(`personaje ${personajes[i].nombre} ha pasado`);
    // Verifica si el estado del personaje es true
    if (personaje.estado) {
      // Crea un contenedor para el personaje
      const divPersonaje = document.createElement("div");
      divPersonaje.className = "carta-personaje";
      divPersonaje.id = `carta-${personaje.nombre}`;
      console.log(divPersonaje.id);
      // Agrega el título del personaje
      const titulo = document.createElement("h2");
      titulo.textContent = personaje.nombre;
      titulo.className = "nombreCarta";
      divPersonaje.appendChild(titulo);

      // Agrega la imagen del personaje
      const imagen = document.createElement("img");
      imagen.className = "imgCarta";
      imagen.src = personaje.img;
      divPersonaje.appendChild(imagen);

      // Agrega el texto del personaje
      let i = 0;
      // Agregar las imagenes del Atributo.

      AgregarIconosDelAtributo.forEach((atributos) => {
        const imagenAtributo = document.createElement("img");
        const textoAtributo = document.createElement("p");
        const contenedorDeAtributos = document.createElement("div");
        imagenAtributo.src = atributos;
        imagenAtributo.className = "atributosIconos";

        textoAtributo.textContent = `${personaje.atributos[i]}`;
        textoAtributo.className = "textoDeAtributo";
        contenedorDeAtributos.appendChild(imagenAtributo);
        contenedorDeAtributos.appendChild(textoAtributo);

        contenedorDeAtributos.className = "contenedorDeAtributos";
        divPersonaje.appendChild(contenedorDeAtributos);

        i += 1;
      });
      const botonCasaToUpgrade = document.createElement("button");
      const botonCasaToSell = document.createElement("button");
      botonCasaToUpgrade.className = "botonCasaToBuy";
      botonCasaToSell.className = "botonCasaToSell";

      // Agregar los Botones de Mejorar.
      botonCasaToUpgrade.textContent = "Upgrade";
      botonCasaToSell.textContent = "Sell";
      divPersonaje.appendChild(botonCasaToUpgrade);
      divPersonaje.appendChild(botonCasaToSell);

      // Agrega el contenedor del personaje al contenedor principal
      contenedorDeTodosLosAtributos.appendChild(divPersonaje);
      contenedorDeCartas.appendChild(contenedorDeTodosLosAtributos);

      // Acceso a los botones de Mejorar y Vender personajes.
      botonCasaToUpgrade.addEventListener("click", () => {
        console.log("upgrade " + personaje.nombre);

        // Actualiza el atributo (en este caso, el atributo 2)
        let nuevoAtributo =  Math.floor(0 + Math.random() * (5 - 0));
        let nroDeMejora;
        console.log(`Nro del Atributo:  ${nuevoAtributo}`);
        //  mejora de atributos de manera aleatoria.
        switch(nuevoAtributo) {
          case 0:
            personaje.atributos[0] += 1;
            console.log(`subida en vida: ${personaje.atributos[0]}`)
            break;
          case 1:
            personaje.atributos[1] += 1;
            console.log(`subida en ataque: ${personaje.atributos[1]}`)
            break;
          case 2:
            personaje.atributos[2] += 1;
            console.log(`subida en poder: ${personaje.atributos[2]}`)
            break;
          case 3:
            personaje.atributos[3] += 1;
            console.log(`subida en defensa: ${personaje.atributos[3]}`)
            break;
          case 4:
            personaje.atributos[4] += 1;
            console.log(`subida en resistencia: ${personaje.atributos[4]}`)
            break;
        }
        // Actualiza el contenido del elemento HTML que muestra el atributo
        personaje.atributos[2].textContent = nuevoAtributo;
      });
      botonCasaToSell.addEventListener("click", () => {
        console.log("sell " + personaje.nombre);
        personaje.estado = false;

        // Ocultar la carta del personaje vendido
        const cartaPersonaje = document.getElementById(
          `carta-${personaje.nombre}`
        );
        if (cartaPersonaje) {
          cartaPersonaje.style.display = "none";
        }
        switch (personaje.nombre) {
          case "lux":
            cartaLux.style.display = "flex";
            break;
          case "ashe":
            cartaAshe.style.display = "flex";
            break;
          case "miss":
            cartaMiss.style.display = "flex";
            break;
        }
        sellPersonaje = personaje.coste * 0.5;
        monedas += sellPersonaje;
        monedasTextDisplay.textContent = monedas;
        monedasTienda.textContent = monedas;
        console.log(monedas);
      });
    } else {
      // console.log(`personaje ${personajes[i].nombre} no ha pasado`);
    }
  });
});
