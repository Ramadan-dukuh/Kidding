import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Beranda from './components/Beranda'
import Template from './components/Template'
import Harga from './components/Harga'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans">     
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Beranda />
              <Template />
              {/* <Harga /> */}
              <FAQ />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
