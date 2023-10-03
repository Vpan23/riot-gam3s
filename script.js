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

// Menu de entrada.
//Crear una entrada al menu que nos muestre la alcancia y nuestro mapa.
const alcancia = document.querySelector(".alcancia");
// Obtener los el click del boton de audio.
const volumeOn = document.getElementById("volumeOn");
const volumeOff = document.getElementById("volumeOff");
const btnVolume = document.querySelector(".volumeControl");
let volumeValue = true;
let userName = "";

btnVolume.addEventListener("click", () => {
  if (volumeValue) {
    volumeOn.style.display = "none";
    volumeOff.style.display = "flex";
    volumeValue = false;
  } else {
    volumeOff.style.display = "none";
    volumeOn.style.display = "flex";
    volumeValue = true;
  }
});
// Obtener el valor de los botones de play y de options.
const menuSection = document.getElementById("menuSection");
const toPlayMenu = document.querySelector(".toPlayMenu");
const toOptionsMenu = document.querySelector(".toOptionsMenu");
const userNameInterface = document.querySelector(".userName-interface");

// mostrar mapa de inicio/juego.
toPlayMenu.addEventListener("click", () => {
  menuSection.style.display = "none";
  userNameInterface.style.display = "flex";
  // Obtener referencias a los elementos HTML

  const inputElement = document.getElementById("userNameInput");
  const userNameSubmit = document.getElementById("submitUserNameButton");
  const mensajeToUser = document.querySelector(".mensajeToUser");
  const mensajeDisplay = document.querySelector(".mensajeDisplay");
  // Variable para almacenar el contenido del input

  // Agregar un evento click al botón
  userNameSubmit.addEventListener("click", function () {
    // Obtener el valor del input
    userName = inputElement.value;

    // Hacer algo con la variable userName, por ejemplo, mostrarla en la consola.
    if (userName != "") {
      //Mostrar contenido.
      userNameInterface.style.display = "none";
      mensajeToUser.style.display = "flex";
      mensajeDisplay.textContent = `Bienvenido Jugador ${userName}`;
      setTimeout(() => {
        mensajeToUser.style.display = "none";
        PRINCIPAL.style.display = "flex";
        alcancia.style.display = "flex";
      }, 1500);
    } else {
      inputElement.value = "uSeR04923";
    }
  });
});
const showOptionsMenu = document.querySelector(".showOptionsMenu");
const quitMenuOption = document.getElementById("quitMenuOption");
toOptionsMenu.addEventListener("click", () => {
  console.log("funciona");

  // mostrar el panel de options.
  showOptionsMenu.style.display = "flex";

  // Rango de Volumen
  const volumenControl = document.getElementById("volumenControl");
  const volumenValor = document.getElementById("volumenValor");

  // Agrega un evento para detectar cambios en el control deslizante
  volumenControl.addEventListener("input", () => {
    // Actualiza el valor mostrado y ajusta el volumen del videojuego (aquí deberías implementar tu lógica para ajustar el volumen del juego)
    const nuevoVolumen = volumenControl.value;
    volumenValor.textContent = nuevoVolumen;
  });

  // Obtener llamado del boton de salir del menu de opciones.
  quitMenuOption.addEventListener("click", () => {
    showOptionsMenu.style.display = "none";
    console.log("funcioona");
  });
});

// Obtener los botones de discard/save changes.
const saveChanges = document.getElementById("save-changes");
const discardChanges = document.getElementById("discard-changes");
const graphicnControl = document.getElementById("graphicnControl");
saveChanges.addEventListener("click", () => {
  console.log("save change");
  saveChanges.textContent = "Saving...";
  setTimeout(() => {
    saveChanges.textContent = "Guardar Cambios";
  }, 1000);
});
discardChanges.addEventListener("click", () => {
  console.log("discard change");
  volumenControl.value = 50;
  volumenValor.textContent = 50;
  graphicnControl.value = 1;
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
// Go BACK/ir devuelta al menu
const goBack = document.querySelector(".goBack");
const goBackCasa = document.querySelector(".goBack-casa");
const goBackBatalla = document.querySelector(".goBack-batalla");

let cards = document.querySelector(".cards");

const bienvenidoDisplay = document.querySelector(".bienvenido");
const bienvenidoTextDisplay = document.querySelector(".center-mid");

const buttonToBuy = document.querySelectorAll(".toBuy");
var monedas = 100;
let costoPersonaje;
let obtenerNumeroDePersonaje;

TIENDA.addEventListener("click", () => {
  console.log("tienda");
  barraDeCarga();
  setTimeout(function () {
    tienda();
  }, 4000);
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
goBackBatalla.addEventListener("click", () => {
  mostrarBatalla.style.display = "none";
  PRINCIPAL.style.display = "flex";
});

const mensajeDeVacio = document.querySelector(".mensajeDeVacio");

// Activador de la Funcion de Tienda.
function tienda() {
  bienvenido();
  setTimeout(() => {}, 1200);

  tiendaDisplay.style.display = "flex";
  // Dentro de esta funcion calcularemos si los personajes estan todos comprados entoces que muestre un mensaje de vacio.
  conteoEnTrue();
  monedero();
}
function conteoEnTrue() {
  let conteoDePersonajesEnTrue = 0;
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].estado) {
      conteoDePersonajesEnTrue += 1;
      console.log(conteoDePersonajesEnTrue);
    }
  }
  if (conteoDePersonajesEnTrue >= personajes.length) {
    mensajeDeVacio.classList.remove("hidden");
    mensajeDeVacio.classList.add("visible");
  } else {
    mensajeDeVacio.classList.remove("visible");
    mensajeDeVacio.classList.add("hidden");
  }
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

          // Mostrar mensaje.
          mensajeDisplayNegative.classList.remove("hidden");
          mensajeDisplayNegative.classList.add("visible");
          mensajeDisplayNegative.textContent = `-${costoPersonaje} monedas`;

          // Establecer un temporizador para ocultar el mensaje después de 1 segundo
          setTimeout(function () {
            mensajeDisplayNegative.classList.remove("visible");
            mensajeDisplayNegative.classList.add("hidden");
          }, 1000);

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
          // Mostrar mensaje.
          mensajeDisplayNegative.classList.remove("hidden");
          mensajeDisplayNegative.classList.add("visible");
          mensajeDisplayNegative.textContent = `Monedas Insuficientes!`;

          // Establecer un temporizador para ocultar el mensaje después de 1 segundo
          setTimeout(function () {
            mensajeDisplayNegative.classList.remove("visible");
            mensajeDisplayNegative.classList.add("hidden");
          }, 1000);
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
    uso: "desactivado",
  },
  {
    nombre: "ashe",
    atributos: [120, 60, 30, 30, 30],
    numero: 2,
    coste: 150,
    estado: false,
    img: "assets/ashe.png",
    uso: "desactivado",
  },
  {
    nombre: "miss",
    atributos: [150, 50, 50, 50, 50],
    numero: 3,
    coste: 250,
    estado: false,
    img: "assets/missfortune.png",
    uso: "desactivado",
  },
];
const casa_lux = document.getElementById("lux");
const casa_ashe = document.getElementById("ashe");
const casa_miss = document.getElementById("miss");
const mensajeDisplayPositive = document.querySelector(
  ".mensajeDisplayPositive"
);
const mensajeDisplayNegative = document.querySelector(
  ".mensajeDisplayNegative"
);
let sellPersonaje;
// Funcion al Tocar Casa.
CASA.addEventListener("click", () => {
  entrarCasa();
});
function entrarCasa() {
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
        let nuevoAtributo = Math.floor(0 + Math.random() * (5 - 0));
        console.log(`Nro del Atributo:  ${nuevoAtributo}`);
        let valorDeAtributo;
        //  mejora de atributos de manera aleatoria.
        switch (nuevoAtributo) {
          case 0:
            personaje.atributos[0] += 1;
            console.log(`subida en vida: ${personaje.atributos[0]}`);
            valorDeAtributo = "Vida";
            break;
          case 1:
            personaje.atributos[1] += 1;
            console.log(`subida en ataque: ${personaje.atributos[1]}`);
            valorDeAtributo = "Ataque";
            break;
          case 2:
            personaje.atributos[2] += 1;
            console.log(`subida en poder: ${personaje.atributos[2]}`);
            valorDeAtributo = "Poder de Habilidad";
            break;
          case 3:
            personaje.atributos[3] += 1;
            console.log(`subida en defensa: ${personaje.atributos[3]}`);
            valorDeAtributo = "Defensa";
            break;
          case 4:
            personaje.atributos[4] += 1;
            console.log(`subida en resistencia: ${personaje.atributos[4]}`);
            valorDeAtributo = "Resistencia Magica";
            break;
        }

        // Mostrar mensaje de cada mejorar.
        mensajeDisplayPositive.classList.remove("hidden");
        mensajeDisplayPositive.classList.add("visible");
        mensajeDisplayPositive.textContent = `+1 ${valorDeAtributo}`;

        // Establecer un temporizador para ocultar el mensaje después de 1 segundo
        setTimeout(function () {
          mensajeDisplayPositive.classList.remove("visible");
          mensajeDisplayPositive.classList.add("hidden");
        }, 1000);
        entrarCasa();
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
        // Mostrar mensaje de cada vender.
        mensajeDisplayPositive.classList.remove("hidden");
        mensajeDisplayPositive.classList.add("visible");
        mensajeDisplayPositive.textContent = `+${sellPersonaje} monedas`;

        // Establecer un temporizador para ocultar el mensaje después de 1 segundo
        setTimeout(function () {
          mensajeDisplayPositive.classList.remove("visible");
          mensajeDisplayPositive.classList.add("hidden");
        }, 1000);
      });
    } else {
      // console.log(`personaje ${personajes[i].nombre} no ha pasado`);
    }
  });
}

const mostrarBatalla = document.getElementById("sectionBatalla");
const mostrarNombreUsuario = document.querySelector(".mostrarNombreUsuario");
// Rangos
const mostrarRangoImg = document.querySelector(".rango-img");
const mostrarRangoText = document.querySelector(".rango-text");

let guardarRangoImg = [
  "https://cdn3.emoji.gg/emojis/7574-iron.png",
  "https://cdn3.emoji.gg/emojis/1184-bronze.png",
  "https://cdn3.emoji.gg/emojis/7455-silver.png",
  "https://cdn3.emoji.gg/emojis/1053-gold.png",
  "https://cdn3.emoji.gg/emojis/3978-platinum.png",
  "https://cdn3.emoji.gg/emojis/1053-diamond.png",
  "https://cdn3.emoji.gg/emojis/9231-master.png",
  "https://cdn3.emoji.gg/emojis/9476-grandmaster.png",
  "https://cdn3.emoji.gg/emojis/9476-challenger.png",
];
let guardarRangoText = [
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Master",
  "Grandmaster",
  "Challenger",
];

// Mostrar fase de Batalla.
BATALLA.addEventListener("click", () => {
  console.log("batalla");
  PRINCIPAL.style.display = "none";
  mostrarBatalla.style.display = "flex";
  mostrarNombreUsuario.innerHTML = `1. ${userName} ${puntajeRango}LP`;

  // funcion para mostrar el rango del jugador.
  mostrarRango();

  // funcion selector de campeones.
  mostrarSelectorDeCampeones();

  // funcion para empezar las batallas.
  startToPlay();
});

// Funcion de mostrar los modos de juegos.
let evaluarModoDeJuego = false;
let modoDeJuego = "modo-historia";
const selectModeContainer = document.querySelector(".select-mode-container");
const btnExpandModeContainer = document.querySelector(".selectGameMode");
const modeButtons = document.querySelectorAll(".mode-button");
btnExpandModeContainer.addEventListener("click", () => {
  evaluarModo();
});
function evaluarModo() {
  if (evaluarModoDeJuego) {
    selectModeContainer.style.height = "32px"; // Establecer una altura fija para contraer
    evaluarModoDeJuego = false;
  } else {
    selectModeContainer.style.height = "165px"; // Establecer una altura mayor para expandir
    evaluarModoDeJuego = true;
  }
}
const selectGameMode = document.querySelector('.selectGameMode');
modeButtons.forEach(function (boton) {
  boton.addEventListener("click", () => {
    console.log(`Traspasar el id: ${boton.id}`);
    modoDeJuego = boton.id;
    evaluarModoDeJuego = true;
    selectGameMode.textContent = modoDeJuego;
    evaluarModo();
  });
});

const buttonStartToPlay = document.querySelector(".startToPlay");
const mostrarEstadioDeCombate = document.querySelector('.mostrarEstadioDeCombate');

buttonStartToPlay.addEventListener("click", () => {
  mostrarBatalla.style.display = "none";
  mostrarEstadioDeCombate.style.display = 'flex';
  // Entrada a la seccion de encontrar batalla.
  startToPlay();
});

function startToPlay() {
  // Mostrar carga de pantalla
  mostrarBusquedaDeEnemigos();

  selectGameMode.textContent = "Selección Automática";

  buttonStartToPlay.addEventListener("click", () => {
    console.log(modoDeJuego);
  });
}
const barraDeCargaEnCombate = document.querySelector('.barraDeCargaEnCombate');
// Barra de Busqueda.
function mostrarBusquedaDeEnemigos() {
  console.log("cargando");
  barraDeCargaEnCombate.textContent = '';
}
// Combate.
function mostrarCombate() {
  // Ocutaremos el menu de batalla y entraremos al de combate.
  
}

const casilleroVacioText = document.querySelector(".mostrarComoVacio");

const contenedorDeIconosParaCasilla = [
  "assets/batalla-icon-personajes/lux-icon.jpg",
  "assets/batalla-icon-personajes/ashe-icon.jpg",
  "assets/batalla-icon-personajes/miss-icon.jpg",
];
const casillero = document.querySelector(".contenedor-de-casillas");
const crearMensajeVacioCasilla = document.createElement("span");

function mostrarSelectorDeCampeones() {
  casillero.innerHTML = "";

  let contadorPersonajesEnCasilla = 0;
  personajes.forEach((personaje) => {
    if (personaje.estado) {
      contadorPersonajesEnCasilla += 1;
      // Volver a crear los elementos para cada personaje.
      const crearCasillaSelector = document.createElement("button");
      const crearImagenCasilla = document.createElement("img");

      // Crear la imagen y el contenedor.
      crearCasillaSelector.className = "crearCasillaSelector";
      crearImagenCasilla.className = "crearImagenCasilla";
      crearImagenCasilla.src = personaje.img;
      crearCasillaSelector.appendChild(crearImagenCasilla);

      // Establecer la clase "activado" según el estado de uso del personaje.
      if (personaje.uso === "activado") {
        crearCasillaSelector.classList.add("activado");
      }

      casillero.appendChild(crearCasillaSelector);

      // Funcion para devolver el boton obtenido del personaje clickeado.
      crearCasillaSelector.addEventListener("click", () => {
        if (personaje.uso === "activado") {
          personaje.uso = "desactivado";
          crearCasillaSelector.classList.remove("activado");
          console.log(crearCasillaSelector.className);
        } else {
          //En caso de que sea desactivado.
          personaje.uso = "activado";
          crearCasillaSelector.classList.add("activado");
        }
      });
    }
  });

  console.log(contadorPersonajesEnCasilla);

  if (contadorPersonajesEnCasilla == 0) {
    // Crear elemento de mensaje al no tener ningún campeón disponible.
    crearMensajeVacioCasilla.className = "mostrarComoVacio";
    crearMensajeVacioCasilla.textContent =
      "La casilla se encuentra vacía, Intenta Nuevamente!";
    casillero.appendChild(crearMensajeVacioCasilla);
  }
}

// Funcion de 3 botones dentro del casillero.
const reestablecerTableroButton = document.querySelector(
  ".reestablecerTablero"
);
const seleccionarTodoButton = document.querySelector(".seleccionarTodo");
const expandirCasilleroButton = document.querySelector(".expandirCasillero");

// Boton para reestablecer nuestra seleccion de campeones
reestablecerTableroButton.addEventListener("click", () => {
  console.log("reestablecerTabler");
  personajes.forEach((personaje) => {
    personaje.uso = "desactivado";
  });
  mostrarSelectorDeCampeones();
});
seleccionarTodoButton.addEventListener("click", () => {
  console.log("seleccionarTodoButton");
  personajes.forEach((personaje) => {
    personaje.uso = "activado";
  });
  mostrarSelectorDeCampeones();
});
let evaluarAlturaDelCasillero = false;

const iconoExpandirCasillero = document.querySelector(".expandIcon");

// Expandir el alto del casillero para recibir mas personajes.
expandirCasilleroButton.addEventListener("click", () => {
  console.log("expandirCasilleroButton");
  // Rotar elemento dentro del boton.
  iconoExpandirCasillero.classList.toggle("rotar-180");

  if (evaluarAlturaDelCasillero) {
    casillero.style.height = "120px"; // Establecer una altura fija para contraer
    evaluarAlturaDelCasillero = false;
  } else {
    casillero.style.height = "400px"; // Establecer una altura mayor para expandir
    evaluarAlturaDelCasillero = true;
  }
});

let puntajeRango = 0;
function mostrarRango() {
  let obtenerNumeroDeLp;

  if (puntajeRango >= 0) {
    //Iron
    obtenerNumeroDeLp = 0;
  }
  if (puntajeRango >= 200) {
    //Bronze
    obtenerNumeroDeLp = 1;
  }
  if (puntajeRango >= 400) {
    //Silver
    obtenerNumeroDeLp = 2;
  }
  if (puntajeRango >= 600) {
    //Gold
    obtenerNumeroDeLp = 3;
  }
  if (puntajeRango >= 900) {
    //Platinum
    obtenerNumeroDeLp = 4;
  }
  if (puntajeRango >= 1200) {
    //Diamond
    obtenerNumeroDeLp = 5;
  }
  if (puntajeRango >= 1500) {
    //Master
    obtenerNumeroDeLp = 6;
  }
  if (puntajeRango >= 2000) {
    //Grandmaster
    obtenerNumeroDeLp = 7;
  }
  if (puntajeRango >= 3000) {
    //Challenger
    obtenerNumeroDeLp = 8;
  }
  mostrarRangoImg.src = guardarRangoImg[obtenerNumeroDeLp];
  mostrarRangoText.textContent = guardarRangoText[obtenerNumeroDeLp];
}
