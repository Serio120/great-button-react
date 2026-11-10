import './App.css'
import MiBoton from './components/MiBoton.jsx'

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">React · Componentes</p>
        <h1>Mi primer componente de botón</h1>
        <p className="app__intro">
          Un ejemplo pequeño para practicar cómo crear un componente reutilizable
          y pasarle contenido mediante props.
        </p>
      </header>

      <section className="demo-card" aria-labelledby="demo-title">
        <h2 id="demo-title">Demostración</h2>
        <p>El primer botón recibe su texto desde la propiedad <code>texto</code>.</p>
        <MiBoton texto="Mi botón" />
      </section>

      <footer className="app__footer">
        Proyecto de aprendizaje con React y Vite.
      </footer>
    </main>
  )
}

export default App
