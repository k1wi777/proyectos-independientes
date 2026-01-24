
{/* usando parametros rest para asignar automaticamente mas valores a la etiqueta section 

todo esto es llamado 'proxy props' -props trasmitidas
con 'rest' y 'spread'    
    */}
export default function Section({title, children, ...props}){
    return (
        <section {...props}>{/* uso 'spread' para esparcir el resto de props */}
            <h2>{title}</h2>
            {children}
        </section>
    )
}