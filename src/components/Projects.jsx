import { useRef, useEffect } from 'react'
import useFadeUp from './useFadeUp'

const projects = [
  {
    num: '01',
    type: 'Full-Stack · Real Business App',
    title: 'Internal Delivery Management System',
    desc: 'Built for Oshpaz LTD to replace manual chat-based ordering between branches and central stock. Enables structured order placement, notes, and delivery tracking — actively used in production today.',
    tags: ['Python', 'JavaScript', 'SQL', 'HTML/CSS'],
    link: 'https://github.com/Drakhmonov',
    featured: true,
  },
  {
    num: '02',
    type: 'Agile Team Project · Team of 6',
    title: 'Full-Stack Web Application',
    desc: 'University group project built using Agile methodology with weekly sprints, role rotation, and task management via Trello — delivering a full-stack web solution end-to-end.',
    tags: ['Agile', 'Full-Stack', 'Trello', 'Discord'],
  },
  {
    num: '03',
    type: 'Java GUI · Group Project',
    title: 'Brunel City Airport Shop System',
    desc: 'Java-based GUI with product management, pricing, and stock functionality. Implemented user registration using HashMap for efficient data handling and interactive UX prompts.',
    tags: ['Java', 'GUI', 'OOP', 'HashMap'],
  },
  {
    num: '04',
    type: 'iOS Development',
    title: 'BMI Calculator & Stock App',
    desc: 'iOS applications built in Swift — a BMI Calculator using UIKit patterns and a Stock data interface app, developed while completing iOS development training.',
    tags: ['Swift', 'iOS', 'UIKit', 'Xcode'],
  },
]

function ProjectCard({ project: p, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="fade-up group relative border overflow-hidden transition-all duration-300 hover:-translate-y-1 p-9"
      style={{
        transitionDelay: `${delay}s`,
        background: p.featured ? '#0F6E56' : '#faf7f2',
        borderColor: p.featured ? '#0F6E56' : '#e8e4dc',
      }}
    >
      <span
        className="absolute top-4 right-6 font-display font-black select-none leading-none"
        style={{ fontSize: '3.5rem', color: p.featured ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}
      >
        {p.num}
      </span>
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: p.featured ? '#9FE1CB' : '#D85A30' }}
      >
        {p.type}
      </p>
      <h3
        className="font-display font-bold text-lg leading-snug mb-3 pr-12"
        style={{ color: p.featured ? 'white' : '#1a1814' }}
      >
        {p.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: p.featured ? 'rgba(255,255,255,0.7)' : '#3d3a34' }}
      >
        {p.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span
            key={t}
            className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1"
            style={{
              border: `1px solid ${p.featured ? 'rgba(255,255,255,0.2)' : '#e8e4dc'}`,
              color: p.featured ? 'rgba(255,255,255,0.8)' : '#8a8680',
              background: p.featured ? 'rgba(255,255,255,0.1)' : 'white',
            }}
          >
            {t}
          </span>
        ))}
      </div>
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-xs font-semibold tracking-widest uppercase no-underline transition-opacity duration-200 hover:opacity-70"
          style={{ color: p.featured ? 'rgba(255,255,255,0.6)' : '#8a8680' }}
        >
          <span>GitHub ↗</span>
        </a>
      )}
      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  useFadeUp(headerRef)

  return (
    <section id="projects" className="bg-white py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="fade-up mb-16">
          <p className="section-tag">Projects</p>
          <h2 className="font-display font-black text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Things I've built.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
