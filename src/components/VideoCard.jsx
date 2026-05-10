import { Play } from 'lucide-react'

export default function VideoCard({ title, category, thumbnail, aspectRatio = '16/9', tall = false }) {
  return (
    <div
      className="video-card relative overflow-hidden cursor-pointer group"
      style={{
        aspectRatio: tall ? '3/4' : aspectRatio,
        background: 'var(--card)',
      }}
    >
      {/* Thumbnail or placeholder */}
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--surface)' }}>
          <div className="text-center">
            <Play size={28} style={{ color: 'rgba(230,57,70,0.2)', margin: '0 auto' }} />
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="overlay absolute inset-0" />

      {/* Play ring */}
      <div
        className="play-ring absolute border rounded-full flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderWidth: '0.5px',
        }}
      >
        <Play size={16} style={{ color: 'var(--red)', marginLeft: 2 }} />
      </div>

      {/* Category badge */}
      {category && (
        <div
          className="absolute top-3 left-3 text-[9px] tracking-[0.15em] uppercase px-2 py-1"
          style={{
            background: 'var(--red)',
            color: '#fff',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          {category}
        </div>
      )}

      {/* Title */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
          <p className="card-label font-bebas text-base tracking-wider">{title}</p>
        </div>
      )}
    </div>
  )
}
