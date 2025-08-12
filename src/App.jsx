import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Beranda from './components/Beranda'
import Template from './components/Template'
import Harga from './components/Harga'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">     
    <Header />
    <Beranda />
    <Template />
    {/* <Harga /> */}
    <FAQ />
    <Footer />
    </div>
  )
}

export default App
