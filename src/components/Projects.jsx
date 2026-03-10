import { useState } from 'react'

const projectTabs = [
  { id: 'destaque', label: 'Destaque' },
  { id: 'detalhes', label: 'Detalhes' }
]

const projects = {
  destaque: [
    {
      title: 'Curiosidades de Tecnologia',
      subtitle: 'História do mascote do Android',
      description:
        'Projeto responsivo com artigo completo sobre a origem do mascote do Android, imagens adaptativas, vídeo incorporado e estrutura semântica.',
      link: 'https://github.com/Johnw07/projeto-curso-site-completo',
      tags: ['HTML5', 'CSS3', 'Responsivo', 'YouTube'],
      meta: [
        'Curso em Vídeo',
        'Layout educativo',
        'Tema Android'
      ]
    }
  ],
  detalhes: [
    {
      title: 'Resumo do projeto',
      subtitle: 'O que esse repositório entrega',
      description:
        'Site educativo com design responsivo, tipografia customizada, paleta inspirada no Android e conteúdo cobrindo das versões Cupcake até Pie.',
      link: 'https://github.com/Johnw07/projeto-curso-site-completo',
      tags: ['Semântico', 'Gradientes', 'Flexbox', 'Media Queries'],
      meta: [
        'Dan Morrill',
        'Irina Blok',
        'Bugdroid'
      ]
    }
  ]
}

function Projects() {
  const [activeTab, setActiveTab] = useState('destaque')
  const currentProjects = projects[activeTab] || []

  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <h2 className="section-title section-title-left">Projetos</h2>
            <p className="projects-lead">
              Uma aba dedicada para apresentar seus trabalhos com mais contexto, stack e link direto para o repositório.
            </p>
          </div>
          <div className="project-tabs" role="tablist" aria-label="Abas de projetos">
            {projectTabs.map(tab => (
              <button
                key={tab.id}
                className={`project-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {currentProjects.map(project => (
            <article key={`${activeTab}-${project.title}`} className="project-card reveal visible">
              <div className="project-image">
                <div className="project-badge">React Portfolio</div>
                <div className="project-spotlight">
                  <span>{project.subtitle}</span>
                  <strong>{project.title}</strong>
                </div>
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    Ver no GitHub
                  </a>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-meta">
                  {project.meta.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
