import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = Array.from({ length: 6 }).map((_, i) => ({
  name: `Project ${i + 1}`,
  image: `https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop`,
  description: 'A concise description highlighting goals, results, and what makes it special.',
  stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  demo: '#',
  repo: '#',
}))

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Projects</h3>
          <p className="text-slate-300 text-sm">Selected work showcasing frontend, backend, and full‑stack builds.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article key={p.name + idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.03 }} className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="text-white font-medium">{p.name}</h4>
                <p className="text-slate-300 text-sm mt-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-200 text-xs border border-slate-700">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"><ExternalLink size={16} /> Live Demo</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm"><Github size={16} /> GitHub</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
