const items = [
  'Wedding Films',
  'Music Videos',
  'Corporate Promos',
  'Event Coverage',
  'Drone Shots',
  'Color Grading',
  'Reels Editing',
  'Short Films',
  'Brand Videos',
  'Live Streaming',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-3"
      style={{ background: 'var(--red)' }}
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-medium text-white whitespace-nowrap px-6"
            >
              {item}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
