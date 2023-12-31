interface ContrastGradeProps {
  contrastGrade: string
}

const ContrastGrade: React.FC<ContrastGradeProps> = ({ contrastGrade }) => {
  return <p>Grade: {contrastGrade}</p>
}

export default ContrastGrade
