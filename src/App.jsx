// Hemos limpiado la aplicación
import './App.css'
import MiBoton from './components/Miboton' // Importamos el componente MiBoton desde el archivo components/Miboton.jsx

function App() {

  return (
    <>
      {/* Renderizamos el componente MiBoton con las expresiones < />*/}
      <MiBoton texto='Mi Botón'/>  
      {/* Este es un botón que muestra el texto 'Mi Botón' */}
      {/* Puedes cambiar el texto del botón pasando una propiedad al componente MiBoton */}
      {/* El componente MiBoton se encuentra en el archivo components/Miboton.jsx */}
      {/* Este componente es el que se renderiza en la aplicación y muestra un botón */}
     </>
  )
}

export default App // Exportamos el componente App para que pueda ser utilizado en otros archivos

// Este es el componente principal de la aplicación, que renderiza el componente MiBoton
// Aquí hemos limpiado la aplicación y mantenido solo lo necesario para que funcione correctamente
// El componente MiBoton se encuentra en el archivo components/Miboton.jsx
// Este componente es el que se renderiza en la aplicación y muestra un botón
// La aplicación está configurada para utilizar Vite como herramienta de construcción y desarrollo
