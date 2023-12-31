'use client'
import React, { useState, useEffect } from 'react'
import tinycolor from 'tinycolor2'
import Header from '../Header'
import ColorInput from '../ColorInput'
import ColorPreview from '../ColorPreview'
import Result from '../ContrastResult'
import Ratio from '../ContrastRatio'
import Grade from '../ContrastGrade'
import Footer from '../Footer'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [color1, setColor1] = useState<string>('#000000')
  const [color2, setColor2] = useState<string>('#ffffff')
  const [result, setResult] = useState<string>('')
  const [contrastRatio, setContrastRatio] = useState<number | null>(null)
  const [contrastGrade, setContrastGrade] = useState<string>('')

  useEffect(() => {
    checkContrast()
  }, [color1, color2])

  const checkContrast = () => {
    const contrast = tinycolor.readability(color1, color2)

    if (contrast >= 7.0) {
      setContrastGrade('Great')
    } else if (contrast >= 4.5) {
      setContrastGrade('Okay')
    } else {
      setContrastGrade('Bad')
    }

    setResult(contrast >= 4.5 ? 'Pass' : 'Fail')
    setContrastRatio(contrast)
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-neutral-100'>
      <Header />
      <div>
        <div className=''>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            aria-label="Background color"
          />
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            aria-label="Text color"
          />
        </div>
        <div>
          <ColorInput
            value={color1}
            onChange={(value) => setColor1(value)}
            placeholder="Enter HEX color"
            label="Background color"
          />
          <ColorInput
            value={color2}
            onChange={(value) => setColor2(value)}
            placeholder="Enter HEX color"
            label="Text color"
          />
        </div>
        <div>
          <ColorPreview color1={color1} color2={color2} />
          {contrastRatio !== null && (
            <div>
              <Result result={result} />
              <Ratio contrastRatio={contrastRatio} />
              <Grade contrastGrade={contrastGrade} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
