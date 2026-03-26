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
import Button from '../components/Button'
import Card from '../components/Card'

const matchOptions = ['Code', 'Y học', 'Máy móc']

const careerMap = {
  Code: {
    title: 'Gợi ý: AI Engineer trong Y tế',
    detail:
      'Bạn hợp với hướng phát triển mô hình AI hỗ trợ đọc ảnh PET/SPECT, tối ưu workflow bệnh viện và xây trợ lý chẩn đoán thông minh.',
  },
  'Y học': {
    title: 'Gợi ý: Bác sĩ Y học Hạt nhân',
    detail:
      'Bạn có thể đi theo lộ trình y khoa, chuyên sâu chẩn đoán và điều trị bằng đồng vị phóng xạ, kết hợp kiến thức lâm sàng và công nghệ.',
  },
  'Máy móc': {
    title: 'Gợi ý: Kỹ sư Thiết bị Y học Hạt nhân',
    detail:
      'Bạn phù hợp với thiết kế, vận hành và tối ưu máy PET/CT, SPECT/CT, đồng thời tham gia kiểm chuẩn và an toàn bức xạ.',
  },
}

const timeline = [
  {
    stage: 'Năm 1-2 tại HUST',
    desc: 'Xây nền tảng Toán, Vật lý, Lập trình và Tiếng Anh học thuật.',
  },
  {
    stage: 'Năm 3-4 chuyên sâu',
    desc: 'Làm dự án AI y tế, xử lý ảnh, mô phỏng detector, tham gia lab y sinh.',
  },
  {
    stage: 'Trao đổi - học bổng',
    desc: 'Ứng tuyển chương trình Nga/Đức, mở rộng nghiên cứu về Medical Physics.',
  },
  {
    stage: 'Sự nghiệp toàn cầu',
    desc: 'Làm việc ở viện nghiên cứu, bệnh viện công nghệ cao hoặc startup healthtech.',
  },
]

export default function Home() {
  const [interest, setInterest] = useState('Code')
  const [progress] = useState(32)

  const careerResult = useMemo(() => careerMap[interest], [interest])

  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-950 via-sky-950 to-teal-950 p-7 md:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-teal-200">
          <Sparkles size={16} />
          NucleoHub mở khóa hành trình nghề nghiệp tương lai
        </div>

        <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Y học hạt nhân: Khi nguyên tử cứu sống mạng người
        </h1>

        <p className="mt-4 max-w-3xl text-slate-200 md:text-lg">
          Khám phá nghề nghiệp, tri thức và cơ hội học bổng theo cách trực quan, hiện đại, dành riêng cho học sinh và sinh viên Việt Nam.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button>
            Bắt đầu hành trình khám phá
            <Rocket className="ml-2" size={16} />
          </Button>
          <Button variant="ghost">
            Chat với AI Mentor
            <Bot className="ml-2" size={16} />
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-teal-400/30 bg-slate-900/50 p-4">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
            <span>Tiến độ nhiệm vụ khám phá nghề nghiệp</span>
            <span className="font-semibold text-teal-300">{progress}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-sky-400" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 flex items-center gap-2 text-xs text-slate-300">
            <Medal size={14} className="text-amber-300" />
            Huy hiệu đang mở: Người tiên phong khám phá Y học Hạt nhân
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="border-teal-500/30">
          <h2 className="text-xl font-bold text-white">AI Career Matchmaker (Mockup)</h2>
          <p className="mt-2 text-sm text-slate-300">Bạn thích gì? Chọn sở thích để xem gợi ý nghề nghiệp.</p>

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
                {option}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="font-semibold text-teal-200">{careerResult.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{careerResult.detail}</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-white">Tại sao chọn Y học Hạt nhân?</h2>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-emerald-300">
                <Coins size={16} /> Thu nhập cao
              </p>
              <p className="mt-1 text-sm text-slate-300">Nhu cầu nhân lực chất lượng cao đang tăng nhanh tại bệnh viện và doanh nghiệp healthtech.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-sky-300">
                <ShieldCheck size={16} /> Ý nghĩa xã hội
              </p>
              <p className="mt-1 text-sm text-slate-300">Bạn góp phần phát hiện sớm bệnh và nâng chất lượng điều trị cho hàng nghìn bệnh nhân.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 font-semibold text-teal-300">
                <Cpu size={16} /> Công nghệ tiên phong
              </p>
              <p className="mt-1 text-sm text-slate-300">Lĩnh vực hội tụ AI, mô phỏng số, Digital Twin và hệ thiết bị chẩn đoán tối tân.</p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="border-sky-500/30">
          <h2 className="text-xl font-bold text-white">Lộ trình từ HUST đến toàn cầu</h2>
          <p className="mt-2 text-sm text-slate-300">Một ví dụ timeline cho sinh viên muốn đi từ nền tảng kỹ thuật tới môi trường quốc tế.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {timeline.map((step, index) => (
              <div key={step.stage} className="relative rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-2 py-1 text-xs font-semibold text-teal-200">
                  <BrainCircuit size={13} /> Mốc {index + 1}
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
