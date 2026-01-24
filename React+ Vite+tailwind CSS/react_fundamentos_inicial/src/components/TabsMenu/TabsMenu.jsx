/* valores por defecto en las props */
export default function TabsMenu({
    buttons = <li><button>boton por defecto</button></li>,
    children =<p>contenido por defecto</p>,
    ButtonsContainer ='div'
}){
    return(
        <>
        <ButtonsContainer> {/* contenedor dinamico , al la props empezar con mayuscula creamos una especie de componente*/}
            {buttons}{/* le pasamos como valor un bloque de sintaxis jsx */}
        </ButtonsContainer>
        {children}
        </>
    );
}