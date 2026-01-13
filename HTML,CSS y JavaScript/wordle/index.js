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
let form = document.querySelector("#juega");
let palabraSecreta = "";
let jugadas = 0;

function escogerPalabra() {
  let num = Math.floor(Math.random() * palabras.length);
  // console.log(num);
  return palabras[num];
}

function avanzarJuego(orden) {
  if (jugadas <= 6) {
    jugadas++;
    crearCasillas(orden);
    return;
  }
  contenedor.innerHTML = `<div style="text-align: center;">
        <h2>se te han acabado los intentos :C</h2>
        <p>la palabra secreta era :</p>
        <h3 style="font-size: 20px;">${palabraSecreta}</h3>
        </div>`;
  form.classList.toggle("ocultar");
  btn.classList.toggle("ocultar");
  jugadas = 0;
}

function crearCasillas(orden) {
  if (!orden) {
    contenedor.innerHTML = ` <div style="text-align: center;">
            <h2>¡¡HAZ ADIVINADO LA PALABRA!! EXCELENTEE</h2>
            <p>tu palabra era :</p>
            <h2><strong>${palabraSecreta}</strong></h2>
            </div>`;
    form.classList.toggle("ocultar");
    btn.classList.toggle("ocultar");
    jugadas = 0;
    return;
  } else if (jugadas <= 6) {
    const div = document.createElement("div");
    div.className = "intentos";

    for (let index = 0; index < palabraSecreta.length; index++) {
      const casilla = document.createElement("div");
      casilla.className = "casilla interactiva";
      // casilla.textContent = palabraSecreta[index];
      div.appendChild(casilla);
    }
    contenedor.appendChild(div);
    return;
  }
  avanzarJuego(true); // si llega hasta aqui es pq ya se han agotado los intentos y en su ultimo intento no la adivinó
}

function probarPalabra(ingresada, div) {
  let cuadro = div.firstElementChild;

  for (let index = 0; index < ingresada.length; index++) {
    let nuevaClase = "incorrecto";
    // console.log(ingresada[index]);
    if (palabraSecreta.includes(ingresada[index])) {
      //si es correcta
      nuevaClase =
        ingresada[index] === palabraSecreta[index] ? "correcto" : "existe";
    }
    cuadro.classList.add(nuevaClase);
    cuadro.textContent = ingresada[index];
    cuadro = cuadro.nextElementSibling;
  }
  avanzarJuego(!(palabraSecreta === ingresada));
}

btn.addEventListener("click", () => {
  palabraSecreta = escogerPalabra().toLowerCase();
  console.log(palabraSecreta); // para revisar cual fue la palabra
  form.classList.toggle("ocultar");
  btn.classList.toggle("ocultar");
  contenedor.innerHTML = "";
  avanzarJuego(true);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let ingresado = document.querySelector("#ingresado").value.toLowerCase();

  if (ingresado.length !== palabraSecreta.length) {
    alert("debes ingresar una palabra con el mismo numero de letras ");
    return;
  }
  //   console.log(contenedor.lastElementChild);
  probarPalabra(ingresado, contenedor.lastElementChild);
});
