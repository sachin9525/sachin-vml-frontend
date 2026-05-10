const stats = [
  { value: '800+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '★ 4.9', label: 'Average Rating' },
]

export default function StatsBar() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4"
      style={{ background: 'var(--card)', borderTop: '0.5px solid var(--border)' }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="text-center py-7 px-4"
          style={{
            borderRight: i < stats.length - 1 ? '0.5px solid var(--border)' : 'none',
          }}
        >
          <div
            className="font-bebas text-4xl mb-1"
            style={{ color: 'var(--red)', letterSpacing: '0.05em' }}
          >
            {s.value}
          </div>
          <div
            className="text-[10px] tracking-[0.12em] uppercase"
            style={{ color: 'var(--text-dim)' }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
