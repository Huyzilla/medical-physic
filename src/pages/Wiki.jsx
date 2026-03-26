import { Atom } from 'lucide-react'
import Card from '../components/Card'
import { isotopeList } from '../data/isotopeList'

export default function Wiki() {
  return (
    <section className="py-8">
      <Card>
        <h1 className="text-2xl font-bold text-white">Wiki Tri thức</h1>
        <p className="mt-2 text-slate-300">Thư viện kiến thức nền tảng về đồng vị, kỹ thuật chẩn đoán và ứng dụng lâm sàng.</p>

        <div className="mt-5 grid gap-3">
          {isotopeList.map((item) => (
            <article key={item.isotope} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-teal-200">
                <Atom size={16} /> {item.isotope}
              </p>
              <p className="mt-1 text-sm text-slate-200">{item.useCase}</p>
              <p className="mt-1 text-sm text-slate-400">{item.note}</p>
            </article>
          ))}
        </div>
      </Card>
    </section>
  )
}
