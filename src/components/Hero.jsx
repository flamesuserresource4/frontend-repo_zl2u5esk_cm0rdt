import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm text-blue-300/80 tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">Arhm</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-200 mt-3">Full-Stack Web Developer</h2>
          <p className="text-slate-300 max-w-xl mt-5">I build fast, elegant, and scalable web experiences. Focused on performance, accessibility, and delightful user interfaces.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80 transition">Contact Me</a>
          </div>
        </motion.div>
      </div>

      <a href="#hero" className="sr-only">Back to top</a>
    </section>
  )
}
