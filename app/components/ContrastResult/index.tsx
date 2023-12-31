interface ContrastResultProps {
  result: string | null
}

const ContrastResult: React.FC<ContrastResultProps> = ({ result }) => {
  if (result === null) {
    return null
  }

  const colorElement =
    result === 'Pass' ? (
      <div className="text-emerald-500 font-bold" data-testid="green-element">Pass</div>
    ) : (
      <div className="text-red-500 font-bold" data-testid="red-element">Fail</div>
    )

  return (
    <p className="flex flex-row gap-1">
      Contrast:<div>{colorElement}</div>
    </p>
  )
}

export default ContrastResult
