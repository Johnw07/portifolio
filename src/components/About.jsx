function About() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="sobre-content reveal">
          <div className="sobre-text">
            <p>
              Tenho 21 anos, curso Ciência da Computação e estou focado em desenvolvimento front-end com interfaces limpas, responsivas e agradáveis de usar.
            </p>
            <p>
              Este portfólio agora foi reestruturado em React para deixar o código mais modular, escalável e pronto para crescer junto com seus próximos projetos.
            </p>
            <div className="sobre-stats">
              <div className="stat reveal">
                <h3>21</h3>
                <p>Anos</p>
              </div>
              <div className="stat reveal">
                <h3>Front-end</h3>
                <p>Foco principal</p>
              </div>
              <div className="stat reveal">
                <h3>React</h3>
                <p>Próxima etapa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
