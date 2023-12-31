interface ColorPreviewProps {
  color1: string
  color2: string
}

const ColorPreview: React.FC<ColorPreviewProps> = ({ color1, color2 }) => {
  return (
    <div style={{ color: color2}}>
      <div className='text-center flex items-center justify-center border-solid rounded-lg font-medium' style={{ backgroundColor: color1, width: '150px', height: '150px' }}>
        <p style={{ position: 'absolute' }}>Lorem ipsum</p>
      </div>
    </div>
  )
}

export default ColorPreview
