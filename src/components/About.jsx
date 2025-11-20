import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden ring-2 ring-slate-700 shadow-xl">
              <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop" alt="Arhm profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">About Me</h3>
            <p className="text-slate-300 mt-4">I'm Arhm, a full‑stack developer passionate about crafting robust products with thoughtful UX. I blend engineering discipline with design sense to deliver reliable, maintainable solutions.</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { title: 'Problem‑solving', desc: 'I break down complex problems into clear, testable steps.' },
                { title: 'UI/UX Awareness', desc: 'I care about clarity, accessibility, and visual polish.' },
                { title: 'Clean Code', desc: 'Readable, scalable, and well‑tested code is my standard.' },
              ].map((i) => (
                <div key={i.title} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70">
                  <p className="font-medium text-white">{i.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{i.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
