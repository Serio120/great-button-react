export default function MiBoton({ texto = 'Mi botón' }) {
  return (
    <div className="button-demo">
      <button className="button-demo__primary" type="button">
        {texto}
      </button>

      <a
        className="button-demo__link"
        href="https://www.linkedin.com/learning/react-esencial-22877511"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver curso de React
        <span aria-hidden="true"> ↗</span>
      </a>
    </div>
  )
}
