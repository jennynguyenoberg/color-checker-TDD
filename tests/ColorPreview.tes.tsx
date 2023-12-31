import { render, screen } from '@testing-library/react'
import ColorPreview from '../app/components/ColorPreview'

describe('ColorPreview component', () => {
  test('renders "Lorem ipsum" text in the component', () => {
    render(<ColorPreview color1="red" color2="blue" />)
    const loremIpsumText = screen.getByText(/Lorem ipsum/i)
    expect(loremIpsumText).toBeInTheDocument()
  })

  test('integration test: renders ColorPreview component with the provided colors', () => {
    const color1 = 'red'
    const color2 = 'blue'

    const { container, getByText } = render(
      <ColorPreview color1={color1} color2={color2} />,
    )

    const colorPreviewContainer = container?.firstChild
    const innerColorDiv = colorPreviewContainer?.firstChild

    expect(innerColorDiv).toHaveStyle(`background-color: ${color1}`)
    expect(colorPreviewContainer).toHaveStyle(`color: ${color2}`)

    const textElement = getByText('Lorem ipsum')
    expect(textElement).toBeInTheDocument()
  })
})
