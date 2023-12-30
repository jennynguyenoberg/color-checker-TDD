import { render, screen } from '@testing-library/react'
import ContrastResult from '../app/components/ContrastResult'

describe('ContrastResult component tests', () => {
  test('applies green color for "Pass" result', () => {
    render(<ContrastResult result="Pass" />)
    const greenElement = screen.getByTestId('green-element')
    expect(greenElement).toBeInTheDocument()
  })

  test('applies red color for "Fail" result', () => {
    render(<ContrastResult result="Fail" />)
    const redElement = screen.getByTestId('red-element')
    expect(redElement).toBeInTheDocument()
  })

  test('renders Pass element when result is "Pass"', () => {
    render(<ContrastResult result="Pass" />)
    const passElement = screen.getByTestId('green-element')
    expect(passElement).toBeInTheDocument()
  })

  test('renders Fail element when result is not "Pass"', () => {
    render(<ContrastResult result="Fail" />)
    const failElement = screen.getByTestId('red-element')
    expect(failElement).toBeInTheDocument()
  })

  test('does not render anything when result is null', () => {
    render(<ContrastResult result={null} />)
    const noElement = screen.queryByTestId('green-element')
    expect(noElement).not.toBeInTheDocument()
  })

  test('integration test: toggles between Pass and Fail elements based on result prop', () => {
    const { rerender } = render(<ContrastResult result="Pass" />)
    let passElement = screen.getByTestId('green-element')
    expect(passElement).toBeInTheDocument()

    // Change the result prop to "Fail" and rerender
    rerender(<ContrastResult result="Fail" />)
    const failElement = screen.getByTestId('red-element')
    expect(failElement).toBeInTheDocument()
  })
})
