import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Career from './pages/Career'
import Games from './pages/Games'
import Home from './pages/Home'
import University from './pages/University'
import Wiki from './pages/Wiki'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto w-[min(1180px,95vw)] py-4 lg:py-6">
        <Navbar />
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/games" element={<Games />} />
            <Route path="/university" element={<University />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  )
}
