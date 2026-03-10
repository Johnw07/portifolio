const skills = [
  {
    icon: '</>',
    title: 'HTML5',
    description: 'Estruturação semântica, acessível e otimizada para SEO.'
  },
  {
    icon: '{ }',
    title: 'CSS3',
    description: 'Interfaces responsivas com animações, layout fluido e identidade visual forte.'
  },
  {
    icon: 'JS',
    title: 'JavaScript',
    description: 'Interatividade, manipulação de dados e experiências dinâmicas no navegador.'
  },
  {
    icon: 'UI',
    title: 'React',
    description: 'Componentização, organização de interfaces e evolução natural do front-end.'
  }
]

function Skills() {
  return (
    <section id="habilidades" className="habilidades">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <article key={skill.title} className="skill-card reveal">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
