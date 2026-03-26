import { Atom, GraduationCap } from 'lucide-react'

const menuItems = [
  { key: 'home', label: 'Khám phá' },
  { key: 'wiki', label: 'Wiki Tri thức' },
  { key: 'university', label: 'Định hướng Trường & Học bổng' },
  { key: 'career', label: 'Cộng đồng' },
]

export default function Navbar({ activePage, onNavigate }) {
  return (
    <header className="sticky top-3 z-30 border border-slate-700/70 bg-slate-900/85 backdrop-blur-xl rounded-2xl">
      <nav className="mx-auto flex w-full items-center justify-between gap-3 px-4 py-3 lg:px-6">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-left hover:border-teal-400"
        >
          <span className="rounded-lg bg-teal-400/20 p-2 text-teal-300">
            <Atom size={18} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-100">NucleoHub</span>
            <span className="block text-xs text-slate-400">Trạm Điều Hướng Tương Lai</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => onNavigate(item.key)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  activePage === item.key
                    ? 'bg-teal-400/20 text-teal-200'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <span className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300">
          <GraduationCap size={14} />
          Phiên bản học sinh - sinh viên
        </span>
      </nav>
    </header>
  )
}
