import { useNavigate } from 'react-router-dom'
import { Award, Camera, Users, Star } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const milestones = [
  { year: '2014', event: 'Sachin Video Mixing Lab founded in Bhopal' },
  { year: '2016', event: 'First 100 wedding projects completed' },
  { year: '2018', event: 'Expanded to corporate & brand film production' },
  { year: '2020', event: 'Launched online editing service — pan-India clients' },
  { year: '2022', event: '500+ happy clients milestone reached' },
  { year: '2024', event: '800+ projects · ★ 4.9 average rating' },
]

const values = [
  {
    Icon: Camera,
    title: 'Cinematic Vision',
    desc: 'Every frame is composed with the eye of a filmmaker, not just a recorder.',
  },
  {
    Icon: Award,
    title: 'Uncompromising Quality',
    desc: 'We don\'t deliver until we\'re proud of every second of your video.',
  },
  {
    Icon: Users,
    title: 'Client-First',
    desc: 'Your vision drives us. We listen deeply and execute with precision.',
  },
  {
    Icon: Star,
    title: 'On-Time Always',
    desc: 'We respect deadlines. Your memories are delivered when promised.',
  },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="page-enter">
      {/* Hero */}
      <div
        className="grid md:grid-cols-2 min-h-80"
        style={{ borderBottom: '0.5px solid var(--border)' }}
      >
        <div
          className="flex items-center justify-center px-10 py-20"
          style={{ background: 'var(--surface)', minHeight: 300 }}
        >
          <div className="text-center">
            <div
              className="font-bebas text-8xl text-white mb-2"
              style={{ color: 'rgba(230,57,70,0.12)', letterSpacing: '0.04em' }}
            >
              VML
            </div>
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--text-dimmer)' }}>
              Est. 2014 · Bhopal, India
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-center px-10 md:px-14 py-16"
          style={{ background: 'var(--card)' }}
        >
          <p className="section-eye">Our Story</p>
          <h1
            className="font-bebas text-white mb-4"
            style={{ fontSize: 'clamp(38px, 5vw, 56px)', lineHeight: 1.05, letterSpacing: '0.03em' }}
          >
            BORN FROM A PASSION<br />
            <span style={{ color: 'var(--red)' }}>FOR STORYTELLING</span>
          </h1>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-dim)' }}>
            Sachin Video Mixing Lab started in 2014 with one camera and a dream — to capture the real, 
            unscripted beauty of Indian celebrations. What began as a one-man operation has grown into 
            Bhopal's most trusted video production studio.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            Today we serve clients across India, bringing the same passion and precision to every project — 
            whether it's an intimate wedding or a national brand campaign.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="px-6 md:px-10 py-20" style={{ background: 'var(--dark)' }}>
        <SectionHeader eyebrow="What Drives Us" title="OUR VALUES" />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0.5"
          style={{ background: 'var(--border)' }}
        >
          {values.map(v => {
            const Icon = v.Icon
            return (
              <div
                key={v.title}
                className="text-center px-6 py-10"
                style={{ background: 'var(--dark)' }}
              >
                <Icon size={22} className="mx-auto mb-4" style={{ color: 'var(--red)' }} />
                <h3 className="text-sm font-medium text-white mb-2 tracking-wide">{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>{v.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 md:px-10 py-20" style={{ background: 'var(--card)' }}>
        <SectionHeader eyebrow="Our Journey" title="MILESTONES" />
        <div className="max-w-2xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="flex gap-8 relative"
              style={{ paddingBottom: i < milestones.length - 1 ? '2rem' : 0 }}
            >
              {/* Line */}
              {i < milestones.length - 1 && (
                <div
                  className="absolute left-[27px] top-6"
                  style={{ width: '0.5px', height: '100%', background: 'var(--border)' }}
                />
              )}
              {/* Dot */}
              <div
                className="w-14 h-6 flex-shrink-0 flex items-center justify-center relative z-10"
                style={{ background: 'var(--card)' }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--red)' }}
                />
              </div>
              <div className="pb-2">
                <span
                  className="font-bebas text-xl"
                  style={{ color: 'var(--red)', letterSpacing: '0.06em' }}
                >
                  {m.year}
                </span>
                <p className="text-sm mt-1" style={{ color: 'var(--text-dim)' }}>{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="text-center px-6 py-16"
        style={{ background: 'var(--dark)', borderTop: '0.5px solid var(--border)' }}
      >
        <h3 className="font-bebas text-3xl text-white tracking-wider mb-3">
          LET'S WRITE YOUR NEXT CHAPTER
        </h3>
        <p className="text-sm mb-8" style={{ color: 'var(--text-dim)' }}>
          10+ years of expertise, at your service.
        </p>
        <button className="btn-primary" onClick={() => navigate('/contact')}>
          Work With Us
        </button>
      </div>
    </div>
  )
}
