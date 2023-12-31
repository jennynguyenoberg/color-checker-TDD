import { Green, Red } from '../../styles/Colors'

interface ContrastResultProps {
  result: string | null
}

const ContrastResult: React.FC<ContrastResultProps> = ({ result }) => {
  if (result === null) {
    return null
  }

  const colorElement =
    result === 'Pass' ? (
      <Green data-testid="green-element">Pass</Green>
    ) : (
      <Red data-testid="red-element">Fail</Red>
    )

  return (
    <p>
      Contrast: <span>{colorElement}</span>
    </p>
  )
}

export default ContrastResult
