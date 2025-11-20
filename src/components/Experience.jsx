import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2021',
    title: 'Started Web Development',
    desc: 'Built foundational projects, learned HTML/CSS/JS and React.',
  },
  {
    year: '2022',
    title: 'Backend & Databases',
    desc: 'Introduced Node.js, Express, and databases into production apps.',
  },
  {
    year: '2023',
    title: 'Full‑Stack Freelance',
    desc: 'Delivered client projects end‑to‑end with robust CI/CD and testing.',
  },
  {
    year: '2024',
    title: 'Scaling & Performance',
    desc: 'Optimized systems for reliability, monitoring, and speed.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-10">Experience</h3>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-800/80 -translate-x-1/2 sm:translate-x-0" />
          <div className="space-y-10">
            {timeline.map((t, idx) => (
              <motion.div key={t.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className={`relative grid sm:grid-cols-2 gap-8 items-center`}>
                <div className={`sm:text-right ${idx % 2 === 0 ? 'sm:pr-16' : 'sm:order-2 sm:pl-16' }`}>
                  <p className="text-blue-400 font-mono text-sm">{t.year}</p>
                  <h4 className="text-white font-medium mt-1">{t.title}</h4>
                  <p className="text-slate-300 mt-2">{t.desc}</p>
                </div>
                <div className={`hidden sm:block ${idx % 2 === 0 ? '' : 'order-1' }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
