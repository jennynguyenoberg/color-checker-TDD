import ColorInput from './components/ColorInput'
import ColorPreview from './components/ColorPreview'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Page() {
  return (
    <div>
      <Header />
      <ColorInput />
      <ColorPreview />
      <Footer />
    </div>
  )
}
