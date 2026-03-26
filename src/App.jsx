import { useMemo, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Career from './pages/Career'
import Home from './pages/Home'
import University from './pages/University'
import Wiki from './pages/Wiki'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const pageComponent = useMemo(() => {
    if (activePage === 'wiki') return <Wiki />
    if (activePage === 'university') return <University />
    if (activePage === 'career') return <Career />
    return <Home />
  }, [activePage])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto w-[min(1180px,95vw)] py-4 lg:py-6">
        <Navbar activePage={activePage} onNavigate={setActivePage} />
        <div className="mt-4">{pageComponent}</div>
        <Footer />
      </main>
    </div>
  )
}
