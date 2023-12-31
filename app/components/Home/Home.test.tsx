import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '.'

describe('Home component', () => {
  test('updates color2 when ColorInput changes', () => {
    render(<Home />)
    const colorInput2 = screen.getByLabelText('Text color')
    fireEvent.change(colorInput2, { target: { value: '#abcdef' } })
    expect(colorInput2).toHaveValue('#abcdef')
  })

  test('updates contrast result on color change', () => {
    render(<Home />)
    const colorInput1 = screen.getByLabelText('Background color')
    const colorInput2 = screen.getByLabelText('Text color')
    userEvent.type(colorInput1, '#123456')
    userEvent.type(colorInput2, '#abcdef')
    expect(screen.getByText(/contrast ratio/i)).toBeInTheDocument()
  })

  test('renders ColorInput components with correct labels', () => {
    render(<Home />)
    const colorInput1 = screen.getByLabelText('Background color')
    const colorInput2 = screen.getByLabelText('Text color')
    expect(colorInput1).toBeInTheDocument()
    expect(colorInput2).toBeInTheDocument()
  })
})
