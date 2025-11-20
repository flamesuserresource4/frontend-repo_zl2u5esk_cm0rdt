export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Arhm. All rights reserved.</p>
        <a href="#hero" className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition">Back to top ↑</a>
      </div>
    </footer>
  )
}
