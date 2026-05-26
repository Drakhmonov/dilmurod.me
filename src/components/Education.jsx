import { useRef } from 'react'
import useFadeUp from './useFadeUp'

const education = [
  {
    degree: 'BSc (Hons) Computer Science',
    uni: 'Brunel University London',
    date: 'Oct 2021 – Jul 2025',
    modules: [
      'Software Development and Management',
      'Algorithms and their Applications',
      'Usability Engineering',
      'Networks and Operating Systems',
      'Group Project',
    ],
  },
  {
    degree: 'Computing with Data Science & Big Data Technology',
    uni: 'Northumbria University London',
    date: 'Feb 2026 – Sep 2026',
    modules: [
      'Data Science and Data Analytics',
      'Technology Strategy & Leadership',
      'Big Data Analytics',
      'Machine Learning on Cloud',
      'UG Computing Project',
    ],
  },
]

export default function Education() {
  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  useFadeUp(headerRef)
  useFadeUp(bodyRef)

  return (
    <section id="education" className="py-28 px-8 md:px-16" style={{ background: '#0F6E56' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="fade-up mb-16">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#9FE1CB' }}>
            <span className="block w-8 h-px flex-shrink-0" style={{ background: '#9FE1CB' }} />
            Education
          </p>
          <h2 className="font-display font-black leading-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Academic background.
          </h2>
        </div>
        <div ref={bodyRef} className="fade-up grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <div
              key={i}
              className="p-9"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="font-display font-bold text-white text-base leading-snug mb-2">{e.degree}</p>
              <p className="text-xs font-semibold tracking-wide mb-1" style={{ color: '#9FE1CB' }}>{e.uni}</p>
              <p className="text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>{e.date}</p>
              {e.modules.map((m, j) => (
                <div
                  key={j}
                  className="flex items-center gap-3 text-sm py-2.5"
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    borderBottom: j < e.modules.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#9FE1CB' }} />
                  {m}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
