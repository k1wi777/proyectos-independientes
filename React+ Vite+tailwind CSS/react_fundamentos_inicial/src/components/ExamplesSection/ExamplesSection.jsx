import TabButton from "../../components/TabButton/TabButton.jsx";
import "./ExamplesSection.css";
import Section from "../Section/Section.jsx";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";

{
  /* import desde la propia libreria de react para utilizar estados  (react uses )*/
}
import { useState } from "react";
{
  /* funcion */
}
import { EXAMPLES } from "../../data.js";

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  {
    /* solo aqui es permitido llamar a la funcion del estado  dentro del componente*/
  }

  {
    /* la funcion al estar desarrollada en un componente solo podra ser llamada dnetro de este mismo componente */
  }
  function handleClickMenu(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(`estas pulsando el boton ${selectedTopic}`);
    {
      /* se ejecuta justo antes de la nueva renderizacion-ejecucion de el componente */
    }
  }
  let tabContent = (
    <p>
      Aqui se va a mostrar informacion sobre una caracteristica de React,para
      ello elije una opcion del menú
    </p>
  );
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  /* como EXAMPLES es un objeto no puedo usar le metodo map directamente en el , sin embargo utilizando objet puedo solucionar esto (convertir en array) */
  const buttons = Object.values(EXAMPLES).map((elemento, index) => (
    <TabButton  onClick={() => handleClickMenu(elemento.key)} key={index} >
      {elemento.title}
    </TabButton>
  ));//listado de componente dinamico (listado de sintaxis jsx)
  
  

  return (
    <Section title="Ejemplos React" id="reactExamples" className="miClase">
      <TabsMenu ButtonsContainer='menu' buttons={<>{buttons}</>}>
      {tabContent}
      </TabsMenu>
      <TabsMenu></TabsMenu>
    </Section>
  );
}
