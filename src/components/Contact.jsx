const socials = [
  {
    title: 'YouTube',
    handle: '@joaow.mendes',
    href: 'https://www.youtube.com/@joaow.mendes',
    icon: 'YT'
  },
  {
    title: 'Instagram',
    handle: '@joaowmt',
    href: 'https://www.instagram.com/joaowmt/',
    icon: 'IG'
  },
  {
    title: 'LinkedIn',
    handle: 'João Washington',
    href: 'https://www.linkedin.com/in/joão-washington-mendes-tavares-57a6a3297/',
    icon: 'in'
  },
  {
    title: 'GitHub',
    handle: '@Johnw07',
    href: 'https://github.com/Johnw07',
    icon: '<>'
  }
]

function Contact() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="contato-subtitle">
          Vamos trabalhar juntos. Você pode falar comigo pelas redes abaixo.
        </p>
        <div className="social-links">
          {socials.map(social => (
            <a
              key={social.title}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="social-card reveal"
            >
              <div className="social-icon">{social.icon}</div>
              <h3>{social.title}</h3>
              <p>{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
