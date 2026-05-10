import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const packages = [
  {
    name: 'Basic',
    price: '₹8,000',
    subtitle: 'Starting price · Half-day events',
    featured: false,
    features: [
      '1 Day Event Coverage',
      'HD 1080p Delivery',
      'Basic Color Grading',
      'Music Sync Editing',
      '3–5 Day Turnaround',
      'Online File Delivery',
    ],
  },
  {
    name: 'Pro Wedding',
    price: '₹25,000',
    subtitle: 'Most popular · Full-day coverage',
    featured: true,
    features: [
      'Cinematic 4K Wedding Film',
      'Drone Footage Included',
      'Full-Length + Highlight Reel',
      'Professional Color Grading',
      'Sound Design & Music',
      'Digital Album',
      '2 Photographers + 1 Videographer',
      '7-Day Delivery',
    ],
  },
  {
    name: 'Corporate',
    price: '₹15,000+',
    subtitle: 'Custom quote · Flexible scope',
    featured: false,
    features: [
      'Brand & Product Films',
      'Motion Graphics & Titles',
      'Social Media Cut Downs',
      'Professional Voice-over (optional)',
      'Unlimited Revisions',
      'SEO-Optimized Thumbnails',
    ],
  },
]

const addons = [
  { label: 'Same-Day Edit (Wedding)', price: '₹3,000' },
  { label: 'Drone Coverage (per event)', price: '₹2,500' },
  { label: 'Extra Photographer', price: '₹2,000/day' },
  { label: 'Printed Photo Album', price: '₹5,000+' },
  { label: 'YouTube/Instagram Reels Pack (5 reels)', price: '₹4,000' },
  { label: 'Raw Footage Hand-Over', price: '₹1,500' },
]

export default function Packages() {
  const navigate = useNavigate()

  return (
    <div className="page-enter">
      <div className="px-6 md:px-10 py-20">
        <SectionHeader eyebrow="Pricing" title="OUR PACKAGES" />

        {/* Package cards */}
        <div
          className="grid md:grid-cols-3 gap-0.5 mb-16"
          style={{ background: 'var(--border)' }}
        >
          {packages.map(pkg => (
            <div
              key={pkg.name}
              className="px-8 py-10 flex flex-col"
              style={{
                background: pkg.featured ? '#120a0a' : 'var(--dark)',
                borderTop: pkg.featured ? `2px solid var(--red)` : '2px solid transparent',
              }}
            >
              {pkg.featured && (
                <span
                  className="text-[9px] tracking-[0.18em] uppercase mb-4 font-medium"
                  style={{ color: 'var(--red)' }}
                >
                  ★ Most Popular
                </span>
              )}
              <div
                className="text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ color: 'var(--text-dim)' }}
              >
                {pkg.name}
              </div>
              <div
                className="font-bebas mb-1"
                style={{ fontSize: 44, color: 'var(--red)', letterSpacing: '0.04em' }}
              >
                {pkg.price}
              </div>
              <p className="text-xs mb-8" style={{ color: 'var(--text-dimmer)' }}>
                {pkg.subtitle}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-dim)' }}>
                    <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={pkg.featured ? 'btn-primary' : 'btn-ghost'}
                onClick={() => navigate('/contact')}
              >
                {pkg.featured ? 'Book Now' : 'Enquire'}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div>
          <SectionHeader eyebrow="Extra Services" title="ADD-ONS" />
          <div
            className="grid md:grid-cols-2 gap-0.5"
            style={{ background: 'var(--border)' }}
          >
            {addons.map(a => (
              <div
                key={a.label}
                className="flex items-center justify-between px-8 py-5"
                style={{ background: 'var(--card)' }}
              >
                <span className="text-sm" style={{ color: 'var(--text-dim)' }}>{a.label}</span>
                <span className="font-bebas text-xl" style={{ color: 'var(--red)', letterSpacing: '0.06em' }}>
                  {a.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs mt-8" style={{ color: 'var(--text-dimmer)' }}>
          * Prices are indicative. Final quote depends on location, duration & requirements.
          <button
            className="underline ml-1 transition-colors"
            style={{ color: 'rgba(230,57,70,0.7)' }}
            onClick={() => navigate('/contact')}
          >
            Get a custom quote →
          </button>
        </p>
      </div>
    </div>
  )
}
