export default function Footer() {
  return (
    <footer className="bg-ink px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
        © 2026 <span className="text-coral">Dilmurod Rakhmonov</span> · London, UK
      </p>
      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
        dilmurod.me
      </p>
    </footer>
  )
}
