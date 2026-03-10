import { scrollToSection } from '../utils/helpers'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <span className="eyebrow animate-text">Portfólio Front-end</span>
          <h1 className="animate-text-delay">
            Olá, eu sou <span className="highlight">João Washington</span>
          </h1>
          <h2 className="animate-text-delay-2">Desenvolvedor Front-end em evolução para React</h2>
          <p className="animate-text-delay-3">
            Transformo interfaces estáticas em experiências modernas, responsivas e organizadas em componentes.
          </p>
          <div className="hero-buttons animate-text-delay-3">
            <button className="btn btn-primary" onClick={() => scrollToSection('contato')}>
              Entre em Contato
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('projetos')}>
              Ver Projetos
            </button>
          </div>
        </div>

        <div className="hero-image reveal visible">
          <div className="image-wrapper">
            <img src="/img/foto_minha.jpg" alt="João Washington" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
