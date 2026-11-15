import './Footer.css'

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__logo">NEXORA</a>

        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copy">© {year} NEXORA. A fictional product made for a frontend assignment.</p>
      </div>
    </footer>
  )
}

export default Footer
