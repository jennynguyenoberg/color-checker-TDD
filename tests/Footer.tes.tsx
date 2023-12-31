import { render, screen } from '@testing-library/react'
import Footer from '../app/components/Footer'

describe('Footer Component', () => {
  test('renders the footer element', () => {
    render(<Footer />)
    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toBeInTheDocument()
  })

  test('renders the correct content', () => {
    render(<Footer />)
    const footerElement = screen.getByText(
      /Code by Jenny Nguyen Öberg © 2023/i,
    )
    expect(footerElement).toBeInTheDocument()
  })
})
