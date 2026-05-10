import { useState } from 'react'
import VideoCard from '../components/VideoCard'
import SectionHeader from '../components/SectionHeader'

const categories = ['All', 'Wedding', 'Corporate', 'Event', 'Music', 'Reels']

const projects = [
  { id: 1, title: 'Priya & Amit — Wedding Cinematic Film', category: 'Wedding' },
  { id: 2, title: 'Sneha & Vikas — Highlight Reel', category: 'Wedding' },
  { id: 3, title: 'Annual Corporate Gala 2024', category: 'Corporate' },
  { id: 4, title: 'TechCorp Brand Promo', category: 'Corporate' },
  { id: 5, title: 'New Year Eve Party — Bhopal', category: 'Event' },
  { id: 6, title: 'Mehendi Ceremony Coverage', category: 'Event' },
  { id: 7, title: 'Rahul Dev — Music Video', category: 'Music' },
  { id: 8, title: 'Aroha Band — Lyric Video', category: 'Music' },
  { id: 9, title: 'Instagram Reels Pack — Fashion Brand', category: 'Reels' },
  { id: 10, title: 'Wedding Reels — 30 Sec Cuts', category: 'Reels' },
  { id: 11, title: 'Riya & Arjun — Destination Wedding', category: 'Wedding' },
  { id: 12, title: 'Product Launch — AutoCo', category: 'Corporate' },
]

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="page-enter">
      <div className="px-6 md:px-10 py-20">
        <SectionHeader eyebrow="Portfolio" title="OUR WORK" />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-[10px] tracking-[0.15em] uppercase px-5 py-2 transition-all duration-200 cursor-pointer font-dm"
              style={{
                background: active === cat ? 'var(--red)' : 'transparent',
                color: active === cat ? '#fff' : 'var(--text-dim)',
                border: `0.5px solid ${active === cat ? 'var(--red)' : 'rgba(255,255,255,0.15)'}`,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-0.5 stagger"
          style={{ background: 'var(--border)' }}
        >
          {filtered.map(p => (
            <VideoCard key={p.id} title={p.title} category={p.category} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20 text-sm" style={{ color: 'var(--text-dim)' }}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}
