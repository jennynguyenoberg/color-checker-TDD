'use client'
import ColorInput from './components/ColorInput'
import ColorPreview from './components/ColorPreview'
import ContrastRatio from './components/ContrastRatio'
import ContrastResult from './components/ContrastResult'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Page() {
  return (
    <div>
      <Header />
      <ColorInput />
      <ColorPreview />
      <ContrastResult />
      <ContrastRatio />
      <Footer />
    </div>
  )
}
