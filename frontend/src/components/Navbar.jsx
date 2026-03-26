import { Atom, GraduationCap } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const menuItems = [
    { path: '/', label: t('navbar.menu.explore') },
    { path: '/wiki', label: t('navbar.menu.wiki') },
    { path: '/games', label: t('navbar.menu.games') },
    { path: '/university', label: t('navbar.menu.university') },
    { path: '/career', label: t('navbar.menu.community') },
  ]

  return (
    <header className="sticky top-3 z-30 border border-slate-700/70 bg-slate-900/85 backdrop-blur-xl rounded-2xl">
      <nav className="mx-auto w-full px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-left hover:border-teal-400"
          >
            <span className="rounded-lg bg-teal-400/20 p-2 text-teal-300">
              <Atom size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-100">{t('common.brand')}</span>
              <span className="block text-xs text-slate-400">{t('common.brandTagline')}</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? 'bg-teal-400/20 text-teal-200'
                        : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <span className="hidden items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300 md:inline-flex">
            <GraduationCap size={14} />
            {t('common.studentVersion')}
          </span>

          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-2 py-1 text-xs text-slate-300">
            <span className="hidden sm:inline">{t('navbar.language.label')}</span>
            <button
              type="button"
              className={`rounded px-2 py-1 ${i18n.language === 'vi' ? 'bg-teal-500/30 text-teal-100' : 'hover:bg-slate-700'}`}
              onClick={() => i18n.changeLanguage('vi')}
            >
              VN
            </button>
            <span className="text-slate-500">|</span>
            <button
              type="button"
              className={`rounded px-2 py-1 ${i18n.language === 'en' ? 'bg-teal-500/30 text-teal-100' : 'hover:bg-slate-700'}`}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>

        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {menuItems.map((item) => (
            <li key={`mobile-${item.path}`} className="shrink-0">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `inline-flex rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-teal-400/20 text-teal-200'
                      : 'border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
