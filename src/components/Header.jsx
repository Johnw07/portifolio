import { scrollToSection } from '../utils/helpers'

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' }
]

function Header({ menuOpen, setMenuOpen, activeSection, navHidden }) {
  const handleNavClick = id => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`navbar ${navHidden ? 'navbar-hidden' : ''}`}>
      <div className="container">
        <button className="logo logo-button" onClick={() => handleNavClick('home')}>
          JW
        </button>

        <nav>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={activeSection === item.id ? 'is-active' : ''}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
