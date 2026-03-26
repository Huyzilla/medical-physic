import { useMemo, useState } from 'react'
import {
  Bot,
  BrainCircuit,
  Coins,
  Cpu,
  Medal,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  const { t } = useTranslation()
  const [interest, setInterest] = useState('code')
  const [progress] = useState(32)

  const matchOptions = ['code', 'medical', 'machine']

  const careerResult = useMemo(
    () => ({
      title: t(`home.matchmaker.results.${interest}.title`),
      detail: t(`home.matchmaker.results.${interest}.detail`),
    }),
    [interest, t],
  )

  const timeline = t('home.timeline.items', { returnObjects: true })

  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-950 via-sky-950 to-teal-950 p-7 md:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-teal-200">
          <Sparkles size={16} />
          {t('home.hero.badge')}
        </div>

        <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
          {t('home.hero.title')}
        </h1>

        <p className="mt-4 max-w-3xl text-slate-200 md:text-lg">
          {t('home.hero.description')}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button>
            {t('home.hero.ctaExplore')}
            <Rocket className="ml-2" size={16} />
          </Button>
          <Button variant="ghost">
            {t('home.hero.ctaMentor')}
            <Bot className="ml-2" size={16} />
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-teal-400/30 bg-slate-900/50 p-4">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
            <span>{t('home.progress.label')}</span>
            <span className="font-semibold text-teal-300">{progress}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-sky-400" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 flex items-center gap-2 text-xs text-slate-300">
            <Medal size={14} className="text-amber-300" />
            {t('home.progress.badge')}
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="border-teal-500/30">
          <h2 className="text-xl font-bold text-white">{t('home.matchmaker.title')}</h2>
          <p className="mt-2 text-sm text-slate-300">{t('home.matchmaker.description')}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {matchOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setInterest(option)}
                className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                  interest === option
                    ? 'border-teal-300 bg-teal-300/20 text-teal-100'
                    : 'border-slate-600 bg-slate-900/40 text-slate-300 hover:border-teal-400'
                }`}
              >
                {t(`home.matchmaker.options.${option}`)}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="font-semibold text-teal-200">{careerResult.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{careerResult.detail}</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-white">{t('home.why.title')}</h2>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-emerald-300">
                <Coins size={16} /> {t('home.why.cards.income.title')}
              </p>
              <p className="mt-1 text-sm text-slate-300">{t('home.why.cards.income.detail')}</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-sky-300">
                <ShieldCheck size={16} /> {t('home.why.cards.social.title')}
              </p>
              <p className="mt-1 text-sm text-slate-300">{t('home.why.cards.social.detail')}</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-teal-300">
                <Cpu size={16} /> {t('home.why.cards.tech.title')}
              </p>
              <p className="mt-1 text-sm text-slate-300">{t('home.why.cards.tech.detail')}</p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="border-sky-500/30">
          <h2 className="text-xl font-bold text-white">{t('home.timeline.title')}</h2>
          <p className="mt-2 text-sm text-slate-300">{t('home.timeline.description')}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {timeline.map((step, index) => (
              <div key={step.stage} className="relative rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-2 py-1 text-xs font-semibold text-teal-200">
                  <BrainCircuit size={13} /> {t('home.timeline.milestone', { index: index + 1 })}
                </p>
                <p className="mt-3 font-semibold text-white">{step.stage}</p>
                <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
