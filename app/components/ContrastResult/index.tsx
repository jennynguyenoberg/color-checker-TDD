interface ContrastResultProps {
  result: string | null
}

const ContrastResult: React.FC<ContrastResultProps> = ({ result }) => {
  if (result === null) {
    return null
  }

  const colorElement =
    result === 'Pass' ? (
      <div data-testid="green-element">Pass</div>
    ) : (
      <div data-testid="red-element">Fail</div>
    )

  return (
    <p>
      Contrast: <span>{colorElement}</span>
    </p>
  )
}

export default ContrastResult
