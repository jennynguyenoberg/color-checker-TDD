interface ContrastRatioProps {
  contrastRatio: number
}

const ContrastRatio: React.FC<ContrastRatioProps> = ({ contrastRatio }) => {
  return <p>Contrast Ratio: {contrastRatio.toFixed(2)}</p>
}

export default ContrastRatio
