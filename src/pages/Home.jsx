import { useNavigate } from 'react-router-dom'
import { Play, ChevronRight } from 'lucide-react'
import Ticker from '../components/Ticker'
import StatsBar from '../components/StatsBar'
import VideoCard from '../components/VideoCard'
import SectionHeader from '../components/SectionHeader'

const featuredProjects = [
  { id: 1, title: 'Priya & Amit — Wedding Film', category: 'Wedding', tall: false },
  { id: 2, title: 'Annual Corporate Gala 2024', category: 'Event', tall: false },
  { id: 3, title: 'TechCorp Brand Promo', category: 'Corporate', tall: false },
  { id: 4, title: 'Rahul Dev — Music Video', category: 'Music', tall: false },
]

const process = [
  { num: '01', title: 'Consult', desc: 'We discuss your vision, style, and requirements in detail.' },
  { num: '02', title: 'Shoot / Receive', desc: 'We shoot your event or you upload raw footage to us.' },
  { num: '03', title: 'Edit & Mix', desc: 'Color grading, sound design, and motion graphics applied.' },
  { num: '04', title: 'Deliver', desc: 'Final HD/4K files delivered on time, every time.' },
]

const testimonials = [
  {
    text: '"The wedding highlight reel made us cry — in the best way. Sachin captured every single emotion perfectly. Truly cinematic work that we\'ll treasure forever."',
    author: 'Kavya & Rohan',
    role: 'Bhopal Wedding, 2024',
  },
  {
    text: '"Our corporate promo video crossed 2 lakh views on YouTube. The editing quality is next-level — both professional and creative. Highly recommended!"',
    author: 'Arun Sharma',
    role: 'MD, TechVision India',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section className="grid md:grid-cols-2 min-h-[520px]">
        {/* Left: text */}
        <div
          className="flex flex-col justify-center px-8 md:px-14 py-16"
          style={{ background: 'var(--card)' }}
        >
          <p className="section-eye flex items-center gap-2">
            <Play size={10} />
            Wedding · Event · Corporate Films
          </p>

          <h1
            className="font-bebas leading-none text-white mb-2"
            style={{ fontSize: 'clamp(52px, 8vw, 80px)', letterSpacing: '0.02em' }}
          >
            FRAME<br />EVERY<br />MOMENT
          </h1>
          <p
            className="font-serif italic mb-6"
            style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)' }}
          >
            with cinematic precision
          </p>
          <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--text-dim)' }}>
            Bhopal's premier video mixing & editing studio. We transform raw footage into stories
            that move people — weddings, events, promos & more.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={() => navigate('/work')}>
              Watch Our Reels
            </button>
            <button className="btn-ghost" onClick={() => navigate('/contact')}>
              Book Studio
            </button>
          </div>
        </div>

        {/* Right: reel grid */}
        <div
          className="grid grid-cols-2 gap-0.5"
          style={{ background: 'var(--border)' }}
        >
          <div
            className="col-span-2 video-card relative cursor-pointer overflow-hidden"
            style={{ background: 'var(--surface)', minHeight: 200 }}
          >
            <div className="overlay absolute inset-0" />
            <div
              className="play-ring absolute border rounded-full flex items-center justify-center"
              style={{ width: 52, height: 52, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderWidth: '0.5px' }}
            >
              <Play size={18} style={{ color: 'var(--red)', marginLeft: 2 }} />
            </div>
            <span
              className="absolute bottom-3 left-4 text-[10px] tracking-[0.12em] uppercase"
              style={{ color: 'var(--text-dimmer)' }}
            >
              Wedding Highlight Reel 2024
            </span>
          </div>
          {[
            'Corporate Film',
            'Event Coverage',
          ].map(label => (
            <div
              key={label}
              className="video-card relative cursor-pointer overflow-hidden"
              style={{ background: 'var(--surface)', minHeight: 120 }}
            >
              <div className="overlay absolute inset-0" />
              <div
                className="play-ring absolute border rounded-full flex items-center justify-center"
                style={{ width: 40, height: 40, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderWidth: '0.5px' }}
              >
                <Play size={14} style={{ color: 'var(--red)', marginLeft: 2 }} />
              </div>
              <span
                className="absolute bottom-2 left-3 text-[9px] tracking-[0.1em] uppercase"
                style={{ color: 'var(--text-dimmer)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── STATS ── */}
      <StatsBar />

      {/* ── FEATURED WORK ── */}
      <section className="px-6 md:px-10 py-20" style={{ background: 'var(--dark)' }}>
        <SectionHeader eyebrow="Featured Work" title="RECENT PROJECTS" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5" style={{ background: 'var(--border)' }}>
          {featuredProjects.map(p => (
            <VideoCard key={p.id} title={p.title} category={p.category} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            className="btn-ghost flex items-center gap-2 mx-auto"
            onClick={() => navigate('/work')}
          >
            View All Projects <ChevronRight size={14} />
          </button>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-6 md:px-10 py-20" style={{ background: 'var(--card)' }}>
        <SectionHeader eyebrow="How It Works" title="OUR PROCESS" />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0.5"
          style={{ background: 'var(--border)' }}
        >
          {process.map(step => (
            <div
              key={step.num}
              className="text-center px-6 py-10"
              style={{ background: 'var(--card)' }}
            >
              <div
                className="font-bebas mb-4"
                style={{ fontSize: 56, color: 'rgba(230,57,70,0.15)', lineHeight: 1 }}
              >
                {step.num}
              </div>
              <h3
                className="text-sm font-medium tracking-[0.1em] uppercase text-white mb-2"
              >
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-6 md:px-10 py-20" style={{ background: '#080808' }}>
        <SectionHeader eyebrow="Client Reviews" title="WHAT THEY SAY" />
        <div className="grid md:grid-cols-2 gap-0.5" style={{ background: 'var(--border)' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-8 py-10" style={{ background: 'var(--card)' }}>
              <div className="text-sm mb-5" style={{ color: 'var(--red)', letterSpacing: '0.1em' }}>
                ★★★★★
              </div>
              <p
                className="font-serif italic leading-relaxed mb-6"
                style={{ fontSize: 16, color: 'rgba(232,224,208,0.65)' }}
              >
                {t.text}
              </p>
              <div>
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-dim)' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="text-center px-6 py-20"
        style={{ background: 'var(--red)' }}
      >
        <p className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Limited Dates Available
        </p>
        <h2 className="font-bebas text-white mb-3" style={{ fontSize: 'clamp(28px, 5vw, 46px)', letterSpacing: '0.04em' }}>
          READY TO CREATE SOMETHING ICONIC?
        </h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Sachin Video Mixing Lab · Bhopal, Madhya Pradesh
        </p>
        <button
          className="inline-block px-10 py-3 text-[10px] tracking-[0.18em] uppercase font-medium transition-all duration-200"
          style={{ background: '#fff', color: 'var(--red)', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
          onClick={() => navigate('/contact')}
        >
          Book Your Slot
        </button>
      </section>
    </div>
  )
}
