// Array de personajes
let personajes = [
  {
    nombre: "lux",
    atributos: 
        [100, 100, 30, 30, 10],
    numero: 1,
    coste: 100,
    estado: true,
    img: "assets/lux.png",
  },
  {
    nombre: "ashe",
    atributos:
    [120, 20, 30, 30, 70],
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
const AgregarIconosDelAtributo = [
    "assets/vida-icon.jpg",
    "assets/ataque-icon.jpg",
    "assets/poder-de-habilidad-icon.jpg",
    "assets/defensa-icon.jpg",
    "assets/resistencia-magica-icon.jpg",
  ];

// Obtén el contenedor donde mostrar los personajes
const contenedorPersonajes = document.getElementById("contenedor-personajes");


