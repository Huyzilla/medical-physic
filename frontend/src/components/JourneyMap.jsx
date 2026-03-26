import { useState } from 'react'
import { ChevronLeft, ChevronRight, Lock, X, Zap } from 'lucide-react'

const islandData = [
  {
    id: 1,
    title: 'Đảo Sinh Ra',
    content:
      'Chào mừng bạn đến với điểm khởi đầu! Tại đây có những Ông bố Moly khổng lồ. Khi phân rã, bố Moly sinh ra siêu nhân nhí Technetium-99m (Tc-99m) với thanh máu chỉ vỏn vẹn 6 giờ! Anh bạn này sẵn sàng phát tia Gamma rực rỡ để soi sáng cơ thể.',
    emoji: '🏝️',
  },
  {
    id: 2,
    title: 'Trạm Chuyển Tiếp',
    content:
      'Làm sao để tách Tc-99m ra? Các kỹ sư dùng quy trình Vắt sữa (Elution). Một dòng nước muối sinh lý 0.9% chạy qua, cuốn theo các siêu nhân Tc-99m năng động vào một lọ dung dịch trong suốt, sẵn sàng lên đường!',
    emoji: '🔄',
  },
  {
    id: 3,
    title: 'Đảo Kết Bạn',
    content:
      'Tc-99m sáng rực nhưng lại mù đường! Nếu tiêm ngay, anh ấy sẽ đi lang thang. Ta cần gắn Tc-99m với những Robot thông minh (Chất mang) có GPS siêu hạng như Robot MDP để dẫn anh ấy đến đúng vết nứt xương hay khối u.',
    emoji: '🤖',
  },
  {
    id: 4,
    title: 'Đài Quan Sát',
    content:
      'Điểm cuối cùng! Khi Thám tử và Robot đã đến đích, bác sĩ dùng máy SPECT/CT khổng lồ. Lớp CT vẽ bản đồ cơ thể, lớp SPECT bắt tín hiệu thám tử. Hợp nhất lại, ta thấy rõ kẻ xấu đang trốn ở đâu!',
    emoji: '🔬',
  },
]

export default function JourneyMap({ onClose }) {
  const [currentIsland, setCurrentIsland] = useState(1)
  const [maxUnlockedIsland, setMaxUnlockedIsland] = useState(1)
  const [showMap, setShowMap] = useState(true)

  const handleIslandClick = (islandId) => {
    if (islandId <= maxUnlockedIsland) {
      setCurrentIsland(islandId)
      setShowMap(false)
    }
  }

  const handleCompleteIsland = () => {
    if (currentIsland === maxUnlockedIsland && currentIsland < islandData.length) {
      setMaxUnlockedIsland(maxUnlockedIsland + 1)
    }
    setShowMap(true)
  }

  const handleNavigate = (direction) => {
    const nextIsland = currentIsland + direction
    if (nextIsland >= 1 && nextIsland <= maxUnlockedIsland) {
      setCurrentIsland(nextIsland)
    }
  }

  if (showMap) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="w-[min(95vw,1000px)] rounded-3xl border-2 border-slate-700 bg-gradient-to-b from-slate-900 via-blue-900/40 to-slate-950 p-8 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Bản Đồ Hành Trình</h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-slate-700/50 p-2 hover:bg-slate-700 transition"
            >
              <X size={24} className="text-slate-200" />
            </button>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-300 via-blue-400 to-teal-300 p-8">
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <path
                d="M 10% 50% Q 30% 30%, 50% 50% T 90% 50%"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,10"
              />
            </svg>

            <div className="relative h-full flex items-center justify-between px-4">
              {islandData.map((island) => {
                const isUnlocked = island.id <= maxUnlockedIsland
                const isCurrent = island.id === currentIsland && !showMap
                const isActive = island.id === currentIsland

                return (
                  <button
                    key={island.id}
                    type="button"
                    onClick={() => handleIslandClick(island.id)}
                    disabled={!isUnlocked}
                    className={`relative flex flex-col items-center gap-2 transition-all ${
                      isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'
                    }`}
                  >
                    <div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all ${
                        isUnlocked
                          ? isActive
                            ? 'bg-yellow-300 shadow-lg shadow-yellow-400/50 scale-125'
                            : 'bg-amber-200 hover:scale-110'
                          : 'bg-gray-400 grayscale'
                      }`}
                    >
                      {isUnlocked ? (
                        island.emoji
                      ) : (
                        <Lock size={32} className="text-gray-600" />
                      )}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full animate-pulse border-2 border-yellow-400" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-white text-center max-w-20">
                      {island.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => handleIslandClick(currentIsland)}
              disabled={currentIsland > maxUnlockedIsland}
              className="rounded-xl bg-teal-400 px-6 py-3 font-bold text-slate-950 hover:bg-teal-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Khám phá Đảo {currentIsland}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const current = islandData[currentIsland - 1]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[min(95vw,1200px)] max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-slate-700 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">{current.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-700/50 p-2 hover:bg-slate-700 transition"
          >
            <X size={24} className="text-slate-200" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              <div className="w-full h-96 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <p className="text-slate-400 text-center px-4">
                  Video Placeholder (YouTube embed kon sẽ nằm ở đây)
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-16 right-0 w-24 h-24 flex flex-col items-center justify-end">
              <div className="text-5xl animate-bounce">{current.emoji}</div>
              <p className="text-xs text-slate-400 mt-1 text-center">Nhân vật</p>
            </div>

            <div className="animate-fade-in bg-white text-slate-800 p-6 rounded-2xl shadow-xl relative">
              <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
              <p className="text-sm leading-relaxed">{current.content}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-700 pt-6">
          <button
            type="button"
            onClick={() => handleNavigate(-1)}
            disabled={currentIsland === 1}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} /> Quay lại
          </button>

          <div className="text-center">
            <p className="text-sm text-slate-400">
              Đảo {currentIsland} / {islandData.length}
            </p>
            <div className="mt-2 flex gap-1">
              {islandData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx + 1 <= currentIsland ? 'bg-teal-400' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {currentIsland === maxUnlockedIsland && currentIsland < islandData.length && (
              <button
                type="button"
                onClick={handleCompleteIsland}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600 transition"
              >
                <Zap size={18} /> Hoàn thành đảo này
              </button>
            )}
            <button
              type="button"
              onClick={() => handleNavigate(1)}
              disabled={currentIsland >= maxUnlockedIsland}
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tiếp tục <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
