import { useRef } from 'react'
import useFadeUp from './useFadeUp'

const experience = [
  {
    date: 'Sep 2024 – Jul 2025',
    company: 'Oshpaz Ltd',
    role: 'IT Project Manager',
    desc: 'Designed and built a Telegram Web App for internal restaurant order management — actively used across multiple branches. Backend built in Python and deployed on Railway; frontend in HTML, CSS, and JavaScript hosted on Netlify. Applied Agile methodologies to plan and execute project sprints, managed team communication via Trello and Discord, and oversaw Git-based version control across the team.',
  },
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
  {
    date: '2022 – 2025',
    company: 'Uzbek Culture UK',
    role: 'Web Contributor',
    desc: 'Collaborated with Oshpaz and Moneff teams to build and maintain the Uzbek Culture UK website using Wix. Contributed to site structure, content, and resource sourcing to support the organisation\'s cultural outreach.',
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
