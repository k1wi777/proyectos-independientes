import './CoreConcepts.css'

{/* 'props' son como los parametros de la funcion , se  convierten en un JSON al cual podemos acceder por cada atributo pasado una propiedad */}
{/* en realidad aqui puedes aplicar 'destructuring' de parametros */}
export default function CoreConcepts(props) {
  return (
    <div id='coreConcepts'>
      <img src={props.src} alt="../" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
};