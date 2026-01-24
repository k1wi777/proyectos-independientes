import "./TabButton.css";
{
  /* React siempre creara un objeto para las props de tus componentes , aunque no le colouqes parametros */
}
export default function TabButton(props) {
  return (
    <li>
      {/* children hace referencia a todo el contenido que este en medio de las etiquetas de mi componente */}
      <button className={props.isSelected ? 'active' : ''} onClick={props.onClick}>{props.children} </button>
    </li>
  );
}
