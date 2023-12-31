interface ColorPreviewProps {
  color1: string
  color2: string
}

const ColorPreview: React.FC<ColorPreviewProps> = ({ color1, color2 }) => {
  return (
    <div style={{ color: color2, width: '50px', height: '50px' }}>
      <div style={{ backgroundColor: color1, width: '50px', height: '50px' }}>
        <p style={{ position: 'absolute' }}>Lorem ipsum</p>
      </div>
    </div>
  )
}

export default ColorPreview
