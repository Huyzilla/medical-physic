import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-12 rounded-2xl border border-slate-700/70 bg-slate-900/70 px-6 py-5 text-sm text-slate-300">
      <p className="font-semibold text-slate-100">{t('footer.title')}</p>
      <p className="mt-1">{t('footer.description')}</p>
    </footer>
  )
}
