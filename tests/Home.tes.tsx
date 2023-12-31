import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../app/components/Home'

describe('Home component', () => {
  test('updates color2 when ColorInput changes', () => {
    render(<Home />)
    const colorInput2 = screen.getByLabelText('Color 2')
    fireEvent.change(colorInput2, { target: { value: '#abcdef' } })
    expect(colorInput2).toHaveValue('#abcdef')
  })

  test('updates contrast result on color change', () => {
    render(<Home />)
    const colorInput1 = screen.getByLabelText('Color 1')
    const colorInput2 = screen.getByLabelText('Color 2')
    userEvent.type(colorInput1, '#123456')
    userEvent.type(colorInput2, '#abcdef')
    expect(screen.getByText(/contrast ratio/i)).toBeInTheDocument()
  })

  test('renders ColorInput components with correct labels', () => {
    render(<Home />)
    const colorInput1 = screen.getByLabelText('Color 1')
    const colorInput2 = screen.getByLabelText('Color 2')
    expect(colorInput1).toBeInTheDocument()
    expect(colorInput2).toBeInTheDocument()
  })
})
