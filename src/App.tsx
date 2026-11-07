import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Referrals from './pages/Referrals'
import Rules from './pages/Rules'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="animate-page">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/regras" element={<Rules />} />
        <Route path="/trabalhe-conosco" element={<Jobs />} />
        <Route path="/indicacoes" element={<Referrals />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HashRouter>
  )
}