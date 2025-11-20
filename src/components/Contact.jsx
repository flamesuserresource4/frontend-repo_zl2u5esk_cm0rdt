import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Contact</h3>
            <p className="text-slate-300 mt-3">Have an opportunity or idea? Let’s talk.</p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Linkedin size={18} /> LinkedIn</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Mail size={18} /> Email</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input required type="text" className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input required type="email" className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea required rows="5" className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition">
              <Send size={18} /> Send Message
            </button>
            {status && <p className="text-green-400 text-sm pt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
