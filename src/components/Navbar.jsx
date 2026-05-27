import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Projects', 'Experience', 'Education']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ background: 'rgba(250,247,242,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e8e4dc' }}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display font-black text-xl text-ink tracking-tight no-underline">
          Dilmurod<span className="text-coral">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-xs font-semibold tracking-widest uppercase text-muted hover:text-coral transition-colors duration-200 no-underline"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv-dilmurod-rakhmonov.docx"
              download
              className="text-xs font-semibold tracking-widest uppercase px-5 py-2 border border-ink text-ink hover:bg-ink hover:text-white transition-colors duration-200 no-underline"
            >
              CV ↓
            </a>
          </li>
          <li>
            <a
              href="#connect"
              className="text-xs font-semibold tracking-widest uppercase px-5 py-2 bg-ink text-white hover:bg-coral transition-colors duration-200 no-underline"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border px-8 py-6 flex flex-col gap-4">
          {[...links, 'Connect'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-ink2 hover:text-coral transition-colors no-underline"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
