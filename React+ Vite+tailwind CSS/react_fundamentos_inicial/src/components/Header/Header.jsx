import './Header.css';
import reactImage from '../../assets/react-logo-xs.png';{/* buena practica para cargar imagenes o ficheros en React , para evitar algun error en el proceso de despliegue */}

const titles = ['react bases','react principios', 'react fundamentos '];

function getRandom(rango){
  return Math.floor(Math.random() *rango);
}

export default function Header() {
  const title=titles[getRandom(titles.length)];
  return (
    <header>
    
      {/*  las '{}' = valores dinamicos */}
      <img src={reactImage} alt='react logo '/>

      {/* //las llaves en React y jsx se toman para poder crear contenido dinamico */}
      <h1>{title}</h1>
      <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar
        cualquier app con esta famosa librería!
      </p>
    </header>
  );
}

