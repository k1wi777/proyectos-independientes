import componentImage from "./assets/blocks-logo.png";
import jsxImage from "./assets/mix-logo.webp";
import propsImage from "./assets/settings-icon.png";
import stateImage from "./assets/state-logo.png";

export const CORE_CONCEPTS = [
  {
    src: componentImage,
    title: "reutilizacion",
    description: "los componentes de React son reutilizablres",
  },
  {
    src: propsImage,
    title: "props",
    description:
      "serian como los atributos de los componentes , se convierten en un JSON",
  },
  {
    src: stateImage,
    title: "imagenes",
    description:
      "es buena practica importar la ubicacion de la imagen para evitar errores",
  },
  {
    src: jsxImage,
    title: "llaves",
    description: "nos sirven para indicar que el contenido será dinamico",
  },
];

export const EXAMPLES = {
  components: {
    title: "Componentes",
    description:
      "Los componentes son los bloques de construcción de las aplicaciones React. Un componente es un módulo autocontenido (HTML + CSS opcional + JS) que renderiza alguna salida.",
    code: `
  function Welcome() {
    return <h1>¡Hola, Mundo!</h1>;
  }`,
  key: 'components'
  },
  jsx: {
    title: "JSX",
    description:
      "JSX es una extensión sintáctica de JavaScript. Es similar a un lenguaje de plantillas, pero tiene toda la potencia de JavaScript (por ejemplo, puede emitir contenido dinámico).",
    code: `
  <div>
    <h1>Bienvenido {userName}</h1>
    <p>¡Es hora de aprender React!</p>
  </div>`,
  key: 'jsx'
  },
  props: {
    title: "Props",
    description:
      "Los componentes aceptan entradas arbitrarias llamadas props. Son como argumentos de función.",
    code: `
  function Welcome(props) {
    return <h1>Hola, {props.name}</h1>;
  }`,
  key: 'props'
  },
  state: {
    title: "Estado",
    description:
      "El estado permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a las acciones del usuario, las respuestas de la red y cualquier otra cosa.",
    code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Muestra los detalles</button>
        {isVisible && <p>¡Estos detalles son alucinantes!</p>}
      </div>
    );
  }`,
  key:'state'
  },
};
