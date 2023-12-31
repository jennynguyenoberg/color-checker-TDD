import { render, fireEvent, screen } from '@testing-library/react'
import ColorInput from '../app/components/ColorInput'

describe('ColorInput component', () => {
  test('renders with the correct placeholder', () => {
    const placeholderText = 'Enter color'
    render(
      <ColorInput value="" onChange={() => {}} placeholder={placeholderText} />,
    )
    const inputElement = screen.getByPlaceholderText(placeholderText)
    expect(inputElement).toBeInTheDocument()
  })

  test('triggers onChange event when the input value changes', () => {
    const mockOnChange = jest.fn()
    render(
      <ColorInput value="" onChange={mockOnChange} placeholder="Enter color" />,
    )
    const inputValue = ' #FF5733'
    const inputElement = screen.getByPlaceholderText('Enter color')
    fireEvent.change(inputElement, { target: { value: inputValue } })
    expect(mockOnChange).toHaveBeenCalledWith(inputValue)
  })

  test('renders with the provided value', () => {
    const inputValue = '#4285f4'
    render(
      <ColorInput
        value={inputValue}
        onChange={() => {}}
        placeholder="Enter color"
      />,
    )
    const inputElement = screen.getByDisplayValue(inputValue)
    expect(inputElement).toBeInTheDocument()
  })

  test('renders with the correct accessibility role', () => {
    render(
      <ColorInput value="" onChange={() => {}} placeholder="Enter color" />,
    )
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  test('integration test: ColorInput renders with default value and handles input changes', () => {
    const placeholder = 'Enter color'
    const label = 'Color:'
    const defaultValue = '#00ff00'
    const onChangeMock = jest.fn()

    const { getByLabelText, getByPlaceholderText } = render(
      <ColorInput
        value={defaultValue}
        onChange={onChangeMock}
        placeholder={placeholder}
        label={label}
      />,
    )

    const inputElement = getByPlaceholderText(placeholder) as HTMLInputElement
    expect(inputElement).toBeInTheDocument()
    expect(inputElement.value).toBe(defaultValue)

    fireEvent.change(inputElement, { target: { value: '#0000ff' } })

    expect(onChangeMock).toHaveBeenCalledWith('#0000ff')
  })
})
