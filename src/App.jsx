import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--dark)' }}>
      <Navbar />
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#161616',
            color: '#e8e0d0',
            border: '0.5px solid rgba(255,255,255,0.1)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
          },
          success: {
            iconTheme: { primary: '#e63946', secondary: '#fff' },
          },
        }}
      />
    </div>
  )
}
