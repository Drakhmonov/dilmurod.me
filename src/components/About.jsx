import { useRef } from 'react'
import useFadeUp from './useFadeUp'

export default function About() {
  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  useFadeUp(headerRef)
  useFadeUp(bodyRef)

  const techSkills = ['Python', 'JavaScript', 'Java', 'Swift', 'SQL', 'HTML', 'CSS']
  const toolSkills = ['Agile / Scrum', 'Project Management', 'Git & GitHub', 'Trello', 'Visual Paradigm', 'MS Office']
  const softSkills = ['Team Leadership', 'Communication', 'Problem Solving', 'Stakeholder Mgmt']

  return (
    <section id="about" className="bg-cream py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="fade-up mb-16">
          <p className="section-tag">About me</p>
          <h2 className="font-display font-black text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Code, people,<br />and curiosity.
          </h2>
        </div>

        <div ref={bodyRef} className="fade-up grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-ink2 mb-5 leading-relaxed">
              I'm a highly motivated developer with a natural love for people and a hunger for challenges.
              Starting work at 16, I've built a versatile skill set across multiple industries — always bringing
              organisation, clear communication, and energy to every role.
            </p>
            <p className="text-ink2 mb-5 leading-relaxed">
              Having just completed my BSc in Computer Science at Brunel, I'm now going deeper into Data Science
              and Big Data at Northumbria University London — combining my coding background with modern analytics.
            </p>
            <p className="text-ink2 mb-8 leading-relaxed">
              Outside tech, you'll find me learning new languages, playing football, travelling, or connecting
              at London meetups.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:dilmurod.rakhmonov01@gmail.com" className="btn-coral" style={{ fontSize: '0.78rem', padding: '0.65rem 1.5rem' }}>
                Email me
              </a>
              <a href="https://github.com/Drakhmonov" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.78rem', padding: '0.65rem 1.5rem' }}>
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="bg-white border border-border p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 pb-3 border-b border-border">
              Languages &amp; Frameworks
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {techSkills.map(s => <span key={s} className="pill-coral">{s}</span>)}
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 pb-3 border-b border-border">
              Tools &amp; Methods
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {toolSkills.map(s => <span key={s} className="pill-teal">{s}</span>)}
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 pb-3 border-b border-border">
              Strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
