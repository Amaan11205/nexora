import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  // true = mobile menu is open
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__mark" aria-hidden="true"></span>
          NEXORA
        </a>

        {/* The "navbar__menu--open" class shows the menu on small screens */}
        <nav
          id="main-menu"
          className={isOpen ? 'navbar__menu navbar__menu--open' : 'navbar__menu'}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="btn btn-primary navbar__cta" onClick={closeMenu}>
            Get Started
          </a>
        </nav>

        <button
          type="button"
          className="navbar__toggle btn btn-outline"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}

export default Navbar
