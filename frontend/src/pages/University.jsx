import Card from '../components/Card'
import { universityList } from '../data/universityList'

export default function University() {
  return (
    <section className="py-8">
      <Card>
        <h1 className="text-2xl font-bold text-white">Định hướng Trường & Học bổng</h1>
        <p className="mt-2 text-slate-300">Danh sách mẫu để bạn phát triển thành module tư vấn trường phù hợp.</p>

        <div className="mt-5 grid gap-3">
          {universityList.map((school) => (
            <article key={school.id} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="font-semibold text-teal-200">{school.name}</p>
              <p className="mt-1 text-sm text-slate-300">Quốc gia: {school.country}</p>
              <p className="mt-1 text-sm text-slate-300">Thế mạnh: {school.focus}</p>
              <p className="mt-1 text-sm text-slate-400">Gợi ý học bổng: {school.scholarshipHint}</p>
            </article>
          ))}
        </div>
      </Card>
    </section>
  )
}
