import { Code2, Server, Database, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Tools / Other',
    icon: Wrench,
    items: ['Git', 'Linux', 'APIs', 'Docker'],
    gradient: 'from-amber-500/20 to-red-500/20',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-10">Skills</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map(({ title, icon: Icon, items, gradient }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden`}> 
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700"><Icon className="text-white" size={20} /></div>
                  <h4 className="text-white font-medium">{title}</h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 text-sm">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
