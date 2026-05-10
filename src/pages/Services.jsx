import { useNavigate } from 'react-router-dom'
import { Video, Film, Building2, Music, Smartphone, Palette } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    num: '01',
    icon: Film,
    title: 'Wedding Cinematography',
    desc: 'Full-day cinematic coverage with drone shots, multi-camera setup, highlight reels & full-length wedding films delivered in 4K.',
    tags: ['4K Delivery', 'Drone Shots', 'Same-Day Edit Available'],
  },
  {
    num: '02',
    icon: Video,
    title: 'Video Editing & Mixing',
    desc: 'Send us your raw footage — we edit, color grade, add music & motion graphics, and deliver broadcast-ready files. Remote-friendly.',
    tags: ['Remote Service', 'Fast Turnaround', 'Unlimited Revisions'],
  },
  {
    num: '03',
    icon: Building2,
    title: 'Corporate & Brand Films',
    desc: 'Product promos, company profiles, testimonial videos, explainer films, and social media content that converts viewers into customers.',
    tags: ['YouTube Optimized', 'Social Cuts', 'Motion Graphics'],
  },
  {
    num: '04',
    icon: Music,
    title: 'Event Coverage',
    desc: 'Birthdays, sangeet, receptions, conferences & concerts — multi-camera live editing and full event documentation.',
    tags: ['Multi-Camera', 'Live Mixing', 'Same-Day Highlight'],
  },
  {
    num: '05',
    icon: Smartphone,
    title: 'Reels & Short Content',
    desc: 'Instagram Reels, YouTube Shorts, WhatsApp Status — trendy cuts, transitions, music sync & text overlays for maximum reach.',
    tags: ['Trend-Based Cuts', 'Music Sync', 'Quick Delivery'],
  },
  {
    num: '06',
    icon: Palette,
    title: 'Color Grading & DI',
    desc: 'Professional digital intermediate color grading for films, music videos & commercial projects. Cinema-grade LUTs & looks.',
    tags: ['Cinema Grade', 'LUT Included', 'RAW Support'],
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className="page-enter">
      {/* Header section */}
      <div
        className="px-6 md:px-10 py-20"
        style={{ background: 'var(--card)', borderBottom: '0.5px solid var(--border)' }}
      >
        <SectionHeader eyebrow="What We Do" title="OUR SERVICES" />
        <p
          className="text-sm leading-relaxed text-center max-w-xl mx-auto"
          style={{ color: 'var(--text-dim)' }}
        >
          From raw footage to cinematic masterpiece — we handle every stage of video production.
          Based in Bhopal, serving clients across India.
        </p>
      </div>

      {/* Services grid */}
      <div
        className="grid md:grid-cols-2 gap-0.5"
        style={{ background: 'var(--border)' }}
      >
        {services.map(s => {
          const Icon = s.icon
          return (
            <div
              key={s.num}
              className="px-10 py-12 transition-colors duration-200 group"
              style={{ background: 'var(--dark)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--card)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--dark)'}
            >
              <div className="flex items-start gap-5">
                <span
                  className="font-bebas text-5xl leading-none"
                  style={{ color: 'rgba(230,57,70,0.15)', minWidth: 48 }}
                >
                  {s.num}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={18} style={{ color: 'var(--red)' }} />
                    <h3 className="text-base font-medium text-white tracking-wide">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-dim)' }}>
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-[0.12em] uppercase px-3 py-1"
                        style={{
                          border: '0.5px solid rgba(230,57,70,0.3)',
                          color: 'rgba(230,57,70,0.8)',
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA strip */}
      <div
        className="px-6 md:px-10 py-16 text-center"
        style={{ background: 'var(--card)' }}
      >
        <h3 className="font-bebas text-3xl text-white tracking-wider mb-3">
          NEED A CUSTOM PACKAGE?
        </h3>
        <p className="text-sm mb-8" style={{ color: 'var(--text-dim)' }}>
          Every project is unique. Let's talk and create something tailored for you.
        </p>
        <button className="btn-primary" onClick={() => navigate('/contact')}>
          Get a Custom Quote
        </button>
      </div>
    </div>
  )
}
