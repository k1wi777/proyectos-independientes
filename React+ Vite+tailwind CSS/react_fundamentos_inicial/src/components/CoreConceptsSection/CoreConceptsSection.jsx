{
  /* se utilizan las llaves para indicar que lo que estoy exportante es una vaiable */
}
import { CORE_CONCEPTS } from "../../data.js";
import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";
import './CoreConceptsSection.css'
import Section from "../Section/Section.jsx";

export default function CoreConceptsSection() {
  return (
    <Section title='principales caracteristicas' id="sectionConcepts">
      <div className="div">
        {CORE_CONCEPTS.map((conceptItems, index) => (
          <CoreConcepts key={index} {...conceptItems} />
        ))}
        {/*  despelando lista de contendido dinamica creando componentes  segun el numero de elementos del array */}

        {/* al todos las propiedades que tienen el objeto tienen los mismos nombres que tienen las props , puedes usar 'spred' o destructuracion normal de JS  */}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
                  <CoreConcepts {...CORE_CONCEPTS[1]} />
                  <CoreConcepts {...CORE_CONCEPTS[2]} />
                  <CoreConcepts
                    src={CORE_CONCEPTS[3].src}
                    title={CORE_CONCEPTS[3].title}
                    description={CORE_CONCEPTS[3].description}
                  /> */}
      </div>
    </Section>
  );
}
