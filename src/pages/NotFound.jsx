import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center page-enter">
      <div
        className="font-bebas mb-4"
        style={{ fontSize: 120, color: 'rgba(230,57,70,0.1)', lineHeight: 1, letterSpacing: '0.04em' }}
      >
        404
      </div>
      <h2 className="font-bebas text-3xl text-white tracking-wider mb-3">PAGE NOT FOUND</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--text-dim)' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button className="btn-primary" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}
