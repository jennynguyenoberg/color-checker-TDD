import { render, screen } from '@testing-library/react'
import ContrastGrade from '../app/components/ContrastGrade'

describe('ContrastGrade Component', () => {
  const contrastGrade = 'A'

  test('renders the component with the correct grade', () => {
    render(<ContrastGrade contrastGrade={contrastGrade} />)
    const gradeElement = screen.getByText(`Grade: ${contrastGrade}`)
    expect(gradeElement).toBeInTheDocument()
  })

  test('does not render an element with incorrect text', () => {
    render(<ContrastGrade contrastGrade={contrastGrade} />)
    const incorrectGradeElement = screen.queryByText('Grade: B')
    expect(incorrectGradeElement).toBeNull()
  })
})
