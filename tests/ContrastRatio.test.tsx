import { render, screen } from '@testing-library/react'
import ContrastRatio from '../app/components/ContrastRatio'

describe('ContrastRatio Component', () => {
  test('renders the contrast ratio text', () => {
    render(<ContrastRatio contrastRatio={3.5} />)
    const contrastRatioText = screen.getByText(/Contrast Ratio:/i)
    expect(contrastRatioText).toBeInTheDocument()
  })

  test('displays the correct contrast ratio value', () => {
    render(<ContrastRatio contrastRatio={4.2} />)
    const contrastRatioValue = screen.getByText(/4.2/i)
    expect(contrastRatioValue).toBeInTheDocument()
  })
})
