import { useEffect, useRef } from 'react'

export default function Hero() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      leftRef.current?.classList.add('visible')
    }, 100)
    setTimeout(() => {
      rightRef.current?.classList.add('visible')
    }, 300)
  }, [])

  const stats = [
    { num: 'BSc', title: 'Computer Science', sub: 'Brunel University London · 2025' },
    { num: '3+', title: 'Years of industry experience', sub: 'Leadership & project management' },
    { num: '4', title: 'Projects shipped', sub: 'Full-stack, Java, iOS & team projects' },
    { num: 'BSc', title: 'Data Science & Big Data (Final Year)', sub: 'Northumbria University London · 2026', accent: true },
  ]

  return (
    <section id="hero" className="min-h-screen grid md:grid-cols-2">
      {/* Left dark */}
      <div ref={leftRef} className="fade-up bg-ink flex flex-col justify-center px-8 md:px-16 pt-28 pb-16">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-coral mb-6">
          <span className="block w-8 h-px bg-coral flex-shrink-0" />
          Based in London, UK
        </p>
        <h1
          className="font-display font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
        >
          Dilmurod
        </h1>
        <h1
          className="font-display font-black text-coral leading-none tracking-tight mb-0"
          style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
        >
          Rakhmonov
        </h1>
        <p
          className="text-xs font-semibold tracking-widest uppercase text-muted mt-6 mb-6 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          Software Developer · Project Manager · Content Creator
        </p>
        <p className="text-base leading-relaxed max-w-md mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Building real products that solve real problems — from full-stack delivery systems to iOS apps.
          Currently deepening expertise in Data Science &amp; Big Data.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-coral">See My Work</a>
          <a href="#connect" className="btn-ghost">Get in Touch</a>
          <a href="/cv-dilmurod-rakhmonov.docx" download className="btn-ghost">↓ Download CV</a>
        </div>
      </div>

      {/* Right light */}
      <div ref={rightRef} className="fade-up bg-cream flex flex-col justify-center px-8 md:px-12 pt-28 pb-16 gap-4">
        <div className="flex items-center gap-3 px-5 py-3 bg-teal text-white text-sm font-medium">
          <span className="text-teal-border">●</span>
          London, United Kingdom &nbsp;·&nbsp; Open to opportunities
        </div>
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-border flex items-center gap-5 px-6 py-5"
            style={s.accent ? { borderLeft: '3px solid #D85A30' } : {}}
          >
            <span
              className="font-display font-black text-coral flex-shrink-0"
              style={{ fontSize: s.num.length > 2 ? '1.5rem' : '2.2rem', minWidth: '3.5rem' }}
            >
              {s.num}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink leading-snug">{s.title}</p>
              <p className="text-xs text-muted mt-0.5">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
