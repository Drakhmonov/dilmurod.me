import { useEffect } from 'react'

export default function useFadeUp(ref) {
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}
