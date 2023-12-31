'use client'
import { ChangeEvent } from 'react'

interface ColorInputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  label?: string
}

const ColorInput: React.FC<ColorInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className='flex flex-col gap-3'>
      <label className='text-sm font-medium'>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-52 bg-neutral-100 p-2 flex justify-between border-2 border-solid border-gray-200 rounded-lg'
      />
    </div>
  )
}

export default ColorInput
