import { render, screen } from '@testing-library/react'
import Header from '../app/components/Header'

describe('Header Component', () => {
  test("renders header with text 'Color Contrast Checker'", () => {
    render(<Header />)
    const headerElement = screen.getByRole('heading', {
      name: /color contrast checker/i,
    })
    expect(headerElement).toBeInTheDocument()
  })

  test('renders header with the correct level (h1)', () => {
    render(<Header />)
    const headerElement = screen.getByRole('heading', { level: 1 })
    expect(headerElement).toBeInTheDocument()
  })

  test('header has the correct accessibility role', () => {
    render(<Header />)
    const headerElement = screen.getByRole('heading', {
      name: /color contrast checker/i,
    })
    expect(headerElement).toHaveAccessibleName(/color contrast checker/i)
  })
})
