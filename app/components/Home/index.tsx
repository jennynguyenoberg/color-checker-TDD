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
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-neutral-100 text-slate-950	'>
      <Header />
      <div className='m-6'>
        <div className='mb-5'>
          <div className='flex flex-row justify-around relative'>
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              aria-label="Background color"
              className='w-7 h-8 cursor-pointer fixed inline-block mt-14 mr-16'
            />
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              aria-label="Text color"
              className='w-7 h-8 cursor-pointer fixed mt-14 ml-96'
            />
          </div>
          <div className='flex flex-row px-7 pt-4 pb-5 gap-5 justify-between border-2 border-solid border-gray-200 rounded-lg'>
            <ColorInput
              value={color1}
              onChange={(value) => setColor1(value)}
              placeholder="#000000"
              label="Background color"
            />
            <ColorInput
              value={color2}
              onChange={(value) => setColor2(value)}
              placeholder="#ffffff"
              label="Text color"
            />
          </div>
        </div>
        <div className='bg-green-200 flex flex-row-reverse justify-between items-center p-7 gap-70 border-solid rounded-lg'>
          <ColorPreview color1={color1} color2={color2} />
          {contrastRatio !== null && (
            <div className='flex flex-col gap-1'>
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
