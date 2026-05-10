import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from 'lucide-react'
import toast from 'react-hot-toast'
import SectionHeader from '../components/SectionHeader'

const serviceOptions = [
  'Wedding Cinematography',
  'Video Editing Only',
  'Corporate / Brand Film',
  'Event Coverage',
  'Music Video',
  'Reels Editing',
  'Other',
]

const initialForm = {
  name: '',
  partnerName: '',
  phone: '',
  email: '',
  service: '',
  eventDate: '',
  location: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service) {
      toast.error('Please fill in required fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast.success('Message sent! We\'ll reach out within 24 hours.')
        setForm(initialForm)
      } else {
        toast.error('Something went wrong. Please try WhatsApp or call us.')
      }
    } catch {
      toast.error('Network error. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-enter">
      <div className="px-6 md:px-10 py-20">
        <SectionHeader eyebrow="Reach Us" title="LET'S CREATE TOGETHER" />
      </div>

      <div className="grid md:grid-cols-5" style={{ borderTop: '0.5px solid var(--border)' }}>
        {/* Left info panel */}
        <div
          className="md:col-span-2 px-8 md:px-12 py-14 flex flex-col justify-between"
          style={{ background: '#080808', borderRight: '0.5px solid var(--border)' }}
        >
          <div>
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-3"
              style={{ color: 'rgba(230,57,70,0.7)' }}
            >
              Get In Touch
            </p>
            <h2
              className="font-bebas text-white mb-8"
              style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: '0.03em' }}
            >
              START YOUR<br />
              <span style={{ color: 'var(--red)' }}>PROJECT</span><br />
              TODAY
            </h2>

            <ul className="space-y-5">
              {[
                { Icon: MapPin, text: 'Bhopal, Madhya Pradesh, India' },
                { Icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
                { Icon: Mail, text: 'sachin@vml.in', href: 'mailto:sachin@vml.in' },
                { Icon: Clock, text: 'Mon – Sat · 10am – 7pm' },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-4">
                  <Icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-dim)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--text-dim)' }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-xs tracking-[0.12em] uppercase mb-3" style={{ color: 'var(--text-dimmer)' }}>
              Follow Our Work
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs transition-colors duration-200"
                  style={{ color: 'var(--text-dim)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <form
          className="md:col-span-3 px-8 md:px-12 py-14"
          style={{ background: 'var(--surface)' }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                Your Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Sachin Kumar"
                className="input-dark"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                Partner's Name
              </label>
              <input
                name="partnerName"
                value={form.partnerName}
                onChange={handleChange}
                placeholder="Priya Sharma"
                className="input-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                Phone / WhatsApp *
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="input-dark"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="input-dark"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
              Service Required *
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="input-dark"
              required
              style={{ cursor: 'pointer' }}
            >
              <option value="" disabled>Select a service...</option>
              {serviceOptions.map(s => (
                <option key={s} value={s} style={{ background: 'var(--surface)' }}>{s}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                Event Date
              </label>
              <input
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={handleChange}
                className="input-dark"
                style={{ colorScheme: 'dark' }}
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                Event Location
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Bhopal, MP"
                className="input-dark"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
              Tell Us More
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Share details about your project, budget, style references..."
              className="input-dark resize-none"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full md:w-auto px-14"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
