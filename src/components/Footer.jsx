import { NavLink } from 'react-router-dom'
import { Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Our Work' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Wedding Cinematography',
  'Video Editing & Mixing',
  'Corporate Films',
  'Event Coverage',
  'Reels & Shorts',
  'Color Grading',
]

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '0.5px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-bebas text-3xl tracking-widest text-white mb-4" style={{ letterSpacing: '0.12em' }}>
            Sachin <span style={{ color: 'var(--red)' }}>VML</span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-dim)' }}>
            Bhopal's premier video mixing & cinematography studio. Turning raw footage into cinematic stories since 2014.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center transition-all duration-200"
              style={{ border: '0.5px solid var(--border)', color: 'var(--text-dim)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--red)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <Instagram size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center transition-all duration-200"
              style={{ border: '0.5px solid var(--border)', color: 'var(--text-dim)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--red)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <Youtube size={15} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs tracking-[0.18em] uppercase mb-5 font-medium" style={{ color: 'var(--red)' }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-dim)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs tracking-[0.18em] uppercase mb-5 font-medium" style={{ color: 'var(--red)' }}>
            Services
          </h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s} className="text-sm" style={{ color: 'var(--text-dim)' }}>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.18em] uppercase mb-5 font-medium" style={{ color: 'var(--red)' }}>
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                Bhopal, Madhya Pradesh, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="flex-shrink-0" style={{ color: 'var(--red)' }} />
              <a href="tel:+91XXXXXXXXXX" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-dim)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
              >
                +91 XXXXX XXXXX
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="flex-shrink-0" style={{ color: 'var(--red)' }} />
              <a href="mailto:sachin@vml.in" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-dim)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
              >
                sachin@vml.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderTop: '0.5px solid var(--border)' }}
      >
        <p className="text-xs" style={{ color: 'var(--text-dimmer)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Sachin Video Mixing Lab. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'var(--text-dimmer)', letterSpacing: '0.05em' }}>
          Crafted with ❤ in Bhopal, MP
        </p>
      </div>
    </footer>
  )
}
