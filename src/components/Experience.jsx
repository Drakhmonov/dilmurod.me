import { useRef } from 'react'
import useFadeUp from './useFadeUp'

const experience = [
  {
    date: 'Mar 2025 – Present',
    company: 'Uztech UK',
    role: 'Project Manager (Volunteer)',
    desc: 'Managing IT projects and coordinating team activities to ensure timely delivery. Leading regular meetings to monitor progress and resolve challenges, applying Agile methodologies throughout — tracking metrics and maintaining clear communication with all stakeholders.',
  },
  {
    date: 'Jun 2022 – Present',
    company: 'Oshpaz LTD',
    role: 'Customer Service Supervisor',
    desc: 'Leading and motivating a team of customer service representatives to achieve high productivity and satisfaction. Applying analytical thinking to identify and solve operational challenges, while fostering a collaborative, high-performance team culture.',
  },
]

export default function Experience() {
  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  useFadeUp(headerRef)
  useFadeUp(bodyRef)

  return (
    <section id="experience" className="bg-cream py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="fade-up mb-16">
          <p className="section-tag">Experience</p>
          <h2 className="font-display font-black text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Where I've worked.
          </h2>
        </div>
        <div ref={bodyRef} className="fade-up">
          {experience.map((e, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 py-10 border-b border-border"
              style={{ borderTop: i === 0 ? '1px solid #e8e4dc' : undefined }}
            >
              <div className="pt-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-coral mb-2">{e.date}</p>
                <p className="font-display font-bold text-muted text-sm">{e.company}</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-ink mb-3">{e.role}</h3>
                <p className="text-sm text-ink2 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
