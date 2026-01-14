const palabras = [
  "Pastel",
  "Maldad",
  "kiwi",
  "Harina",
  "diablo",
  "detone",
  "albaricoque",
];

let contenedor = document.querySelector("#contenedor");
let btn = document.querySelector("#btn");
let teclado = document.querySelector("#teclado");
// let form = document.querySelector("#juega");
let palabraSecreta = "";
let jugadas = 0;
let escrito = "";
let listJugadas = [];
let correr = false;

function escogerPalabra() {
  let num = Math.floor(Math.random() * palabras.length);
  // console.log(num);
  return palabras[num];
}

function crearJuego() {
  jugadas = 0;
  escrito = "";
  for (let index = 0; index < 6; index++) {
    const div = document.createElement("div");
    div.className = "intentos";
    for (let i = 0; i < palabraSecreta.length; i++) {
      const casilla = document.createElement("div");
      casilla.className = "casilla interactiva";
      // casilla.textContent = palabraSecreta[index];
      div.appendChild(casilla);
    }
    contenedor.appendChild(div);
  }
  listJugadas = contenedor.querySelectorAll(".intentos");
  listJugadas[0].firstElementChild.classList.toggle("resaltar"); //resalta el primero
  //   console.log(listJugadas);
}

function probarPalabra(div) {
  let cuadro = div.firstElementChild;
  animarSiguiete(cuadro, escrito, 0);
  jugadas++;
  avanzar(!(palabraSecreta === escrito));
  //   avanzarJuego(!(palabraSecreta === escrito));
}

function animarSiguiete(elemento, ingresada, index) {
  //   console.log(index);
  if (index >= palabraSecreta.length) {
    return;
  }

  let nuevaClase = "incorrecto";
  // console.log(ingresada[index]);
  if (palabraSecreta.includes(ingresada[index])) {
    //si es correcta
    nuevaClase =
      ingresada[index] === palabraSecreta[index] ? "correcto" : "existe";
  }

  elemento.classList.add(nuevaClase);
  elemento.textContent = ingresada[index];

  let t = teclado.firstElementChild;
  let valor = "";
  for (let i = 0; i < 28; i++) {
    valor = t.textContent.toLowerCase();
    if (ingresada[index] === valor) {
      asigna(t, nuevaClase);
      break;
    }
    t = t.nextElementSibling;
  }
  //esperamos a que termine la animacion
  elemento.addEventListener(
    "animationend",
    () => {
      index++;
      elemento = elemento.nextElementSibling;
      animarSiguiete(elemento, ingresada, index);
    },
    { once: true }
  );
}

function asigna(elemento, nuevaClase) {
  if (!elemento.classList.contains("correcto")) {
    if (!elemento.classList.contains("incorrecto")) {
      if (!elemento.classList.contains(nuevaClase)) {
        elemento.className = `tecla ${nuevaClase}`;
      }
    }
  }
}

function resalta(actual, otra) {
  actual.classList.toggle("resaltar");
  otra.classList.toggle("resaltar");
}
function escribir(tecla, fuente) {
  if (escrito.length < palabraSecreta.length) {
    escrito += tecla;
    // console.log(escrito);
    // console.log(escrito.length);
    let casilla = listJugadas[jugadas].firstElementChild;

    for (let index = 1; index < escrito.length; index++) {
      casilla = casilla.nextElementSibling;
    }
    if (escrito.length != 0) {
      escrito.length === palabraSecreta.length
        ? casilla.classList.toggle("resaltar")
        : resalta(casilla, casilla.nextElementSibling);
    }
    casilla.textContent = tecla;
    casilla.classList.toggle("prueba");
    if (fuente === "Backspace") {
      escrito = escrito.slice(0, -1);
    }
  } else if (fuente === "Backspace" && correr) {
    escrito = escrito.slice(0, -1);
    let casilla = listJugadas[jugadas].lastElementChild;
    casilla.textContent = "";
    casilla.classList.toggle("resaltar");
  }
}
function avanzar(instruccion) {
  // console.log(`llevas ${jugadas} jugadas`);
  if (jugadas > 5 && instruccion) {
    let mensaje = document.createElement("div");
    mensaje.innerHTML = `<div style="text-align: center;">
        <h2>se te han acabado los intentos :C</h2>
        <p>la palabra secreta era :</p>
        <h3 style="font-size: 20px;">${palabraSecreta}</h3>
        </div>`;
    contenedor.appendChild(mensaje);
    correr = false;
  } else if (instruccion) {
    // console.log("avanzando");
    // jugadas++;
    escrito = "";
    listJugadas[jugadas].firstElementChild.classList.toggle("resaltar");
  } else {
    let mensaje = document.createElement("div");
    mensaje.innerHTML = ` <div style="text-align: center;">
            <h2>¡¡HAZ ADIVINADO LA PALABRA!! EXCELENTEE</h2>
            <p>tu palabra era :</p>
            <h2><strong>${palabraSecreta}</strong></h2>
            </div>`;
    contenedor.appendChild(mensaje);
    correr = false;
  }
}
function enter() {
  if (correr) {
    if (escrito.length === palabraSecreta.length) {
      probarPalabra(listJugadas[jugadas]);
    } else {
      // console.log("invalido");
      // console.log(listJugadas[jugadas]);
      listJugadas[jugadas].classList.toggle("tiembla");
      listJugadas[jugadas].addEventListener(
        "animationend",
        () => {
          listJugadas[jugadas].classList.toggle("tiembla");
        },
        { once: true }
      );
      //mostrar la modal 
      const toast = document.getElementById("toast");
      toast.classList.add("show");
      
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    }
  }
}

btn.addEventListener("click", () => {
  palabraSecreta = escogerPalabra().toLowerCase();
  console.log(palabraSecreta); // para revisar cual fue la palabra
  /*  form.classList.toggle("ocultar");
   */
  teclado.classList.toggle("ocultar");
  btn.classList.toggle("ocultar");
  contenedor.innerHTML = "";
  correr = true;
  //   avanzarJuego(true);
  crearJuego();
});

teclado.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("tecla")) {
    // console.dir(evento.target.textContent.toLowerCase());

    // console.log(evento.target.id);
    if (evento.target.id !== "enter") {
      let fuente = evento.target.id === "borrar" ? "Backspace" : "";
      let letra =
        evento.target.id === "borrar"
          ? ""
          : evento.target.textContent.toLowerCase();
      escribir(letra, fuente);
    } else {
      enter();
    }
  }
});

// encargado de detectar tus pulsasiones
addEventListener("keydown", (evento) => {
  let fuente = evento.key;
  let tecla = evento.key.length > 1 ? "" : evento.key;
  //   console.log(tecla);

  if (evento.key === "Enter") {
    enter();
  } else {
    escribir(tecla, fuente);
  }
});

