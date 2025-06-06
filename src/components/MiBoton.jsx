// Creamos la función de este componente llamado MiBoton.jsx
export default function MiBoton({texto} ) {
    // Este componente recibe una propiedad llamada texto, que se puede utilizar para mostrar un texto en el botón

    return (
        <>
            
            <button>{texto}</button>
            {/* Este es un botón vacio solo para entender los componentes de React*/}
            <br />
            <button onClick={() => window.location.href = 'https://www.linkedin.com/learning-login/share?account=406153826&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Freact-esencial-22877511%3Ftrk%3Dshare_ent_url%26shareId%3D86M4Qo9oQ8uJ4Oef7Eebhw%253D%253D'}>{"Botón con enlace"}</button>
            {/* Este es un botón con un enlace */}
            {/* Hemos utilizado el mismo componente pero solo hemos cambiado el texto de botón con un String*/}
        </>
    )
}

// <> </>  Esto es una expresión React