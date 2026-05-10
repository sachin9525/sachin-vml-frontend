import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Our Work' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClose = () => setOpen(false)

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.97)' : '#0a0a0a',
          borderBottom: '0.5px solid var(--border)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        {/* Logo */}
        <NavLink to="/" className="font-bebas text-2xl tracking-widest text-white" style={{ letterSpacing: '0.12em' }}>
          Sachin <span style={{ color: 'var(--red)' }}>VML</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="btn-primary hidden md:inline-block"
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </button>
          <button
            className="md:hidden p-1"
            style={{ color: 'var(--text-dim)' }}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8"
          style={{ background: 'rgba(10,10,10,0.98)' }}
        >
          <div className="flex flex-col gap-6 stagger">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={handleClose}
                className={({ isActive }) =>
                  `font-bebas text-4xl tracking-wider transition-colors ${isActive ? 'text-brand-red' : 'text-white'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button
              className="btn-primary mt-4 self-start"
              onClick={() => { navigate('/contact'); handleClose() }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </>
  )
}
