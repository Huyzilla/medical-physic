import { useEffect, useRef, useState } from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Career from './pages/Career'
import Games from './pages/Games'
import Home from './pages/Home'
import University from './pages/University'
import Wiki from './pages/Wiki'
import { checkCloudinaryHealth } from './lib/cloudinaryHealth'
import { checkSupabaseHealth } from './lib/supabaseHealth'

export default function App() {
  const tawkMessengerRef = useRef(null)
  const [dbStatus, setDbStatus] = useState({
    state: 'checking',
    message: 'Dang kiem tra ket noi Supabase...',
  })
  const [cloudinaryStatus, setCloudinaryStatus] = useState({
    state: 'checking',
    message: 'Dang kiem tra ket noi Cloudinary...',
  })
  const tawkPropertyId = import.meta.env.VITE_TAWK_PROPERTY_ID
  const tawkWidgetId = import.meta.env.VITE_TAWK_WIDGET_ID
  const isTawkConfigured = Boolean(tawkPropertyId && tawkWidgetId)

  const handleTawkLoad = () => {
    console.log('Tawk.to Chat Widget da san sang!')
  }

  useEffect(() => {
    let isMounted = true

    const pingServices = async () => {
      const [dbResult, cloudinaryResult] = await Promise.all([
        checkSupabaseHealth(),
        checkCloudinaryHealth(),
      ])

      if (!isMounted) {
        return
      }

      setDbStatus({
        state: dbResult.ok ? 'ok' : 'error',
        message: dbResult.message,
      })
      setCloudinaryStatus({
        state: cloudinaryResult.ok ? 'ok' : 'error',
        message: cloudinaryResult.message,
      })
    }

    pingServices()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto w-[min(1180px,95vw)] py-4 lg:py-6">
        <div
          className={`mb-3 rounded-lg border px-3 py-2 text-sm ${
            dbStatus.state === 'ok'
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
              : dbStatus.state === 'error'
                ? 'border-rose-500/40 bg-rose-500/10 text-rose-300'
                : 'border-slate-500/40 bg-slate-500/10 text-slate-300'
          }`}
        >
          {dbStatus.message}
        </div>
        <div
          className={`mb-3 rounded-lg border px-3 py-2 text-sm ${
            cloudinaryStatus.state === 'ok'
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
              : cloudinaryStatus.state === 'error'
                ? 'border-rose-500/40 bg-rose-500/10 text-rose-300'
                : 'border-slate-500/40 bg-slate-500/10 text-slate-300'
          }`}
        >
          {cloudinaryStatus.message}
        </div>
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
      {isTawkConfigured ? (
        <TawkMessengerReact
          propertyId={tawkPropertyId}
          widgetId={tawkWidgetId}
          ref={tawkMessengerRef}
          onLoad={handleTawkLoad}
        />
      ) : null}
    </div>
  )
}
