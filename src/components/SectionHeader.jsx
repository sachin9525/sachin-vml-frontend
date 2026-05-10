export default function SectionHeader({ eyebrow, title, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <p className="section-eye">{eyebrow}</p>
      <h2 className="section-title" style={light ? { color: 'rgba(255,255,255,0.85)' } : {}}>{title}</h2>
      <div className={`section-line ${center ? '' : 'mx-0'}`} />
    </div>
  )
}
