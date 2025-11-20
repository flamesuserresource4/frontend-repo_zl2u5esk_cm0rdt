import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-slate-800/60' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-white text-lg">Arhm<span className="text-blue-400">.</span></a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
            <a href="mailto:hello@example.com" aria-label="Email" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
        <button className="md:hidden text-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 bg-slate-900/90 border-t border-slate-800/60">
          <div className="flex flex-col gap-3 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-200 py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white"><Github size={20} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white"><Linkedin size={20} /></a>
              <a href="mailto:hello@example.com" aria-label="Email" className="text-slate-300 hover:text-white"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
