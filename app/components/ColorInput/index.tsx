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
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default ColorInput
