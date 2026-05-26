import { useRef } from 'react'
import useFadeUp from './useFadeUp'

const socials = [
  { label: 'LinkedIn', badge: 'in', color: '#0A66C2', handle: '/in/dilmurod-rakhmonov-397381233', url: 'https://www.linkedin.com/in/dilmurod-rakhmonov-397381233/' },
  { label: 'GitHub', badge: 'GH', color: '#1a1814', handle: 'Drakhmonov', url: 'https://github.com/Drakhmonov' },
  { label: 'YouTube', badge: 'YT', color: '#FF0000', handle: '@dilmurod.abroad', url: 'https://www.youtube.com/@dilmurod.abroad' },
  { label: 'Instagram', badge: 'IG', color: '#E1306C', handle: '@dilmurod.abroad', url: 'https://www.instagram.com/dilmurod.abroad/' },
  { label: 'Telegram', badge: 'TG', color: '#2AABEE', handle: 'dilmurodabroad', url: 'https://t.me/dilmurodabroad' },
]

export default function Connect() {
  const ref = useRef(null)
  useFadeUp(ref)

  return (
    <section id="connect" className="bg-cream py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-up grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-tag">Connect</p>
            <h2 className="font-display font-black text-ink leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Let's talk.
            </h2>
            <p className="text-ink2 leading-relaxed max-w-sm mb-8">
              Whether it's a job opportunity, a collaboration, or just a conversation — I'm always open to connecting.
            </p>
            <div className="inline-block px-8 py-6" style={{ background: '#D85A30' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Direct email
              </p>
              <a
                href="mailto:dilmurod.rakhmonov01@gmail.com"
                className="font-display font-bold text-white text-base no-underline hover:underline"
              >
                dilmurod.rakhmonov01@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-6 py-4 bg-white border border-border transition-all duration-200 hover:border-coral hover:bg-coral-light hover:translate-x-1 no-underline"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: s.color }}
                  >
                    {s.badge}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{s.label}</p>
                    <p className="text-xs text-muted">{s.handle}</p>
                  </div>
                </div>
                <span className="text-muted group-hover:text-coral transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
