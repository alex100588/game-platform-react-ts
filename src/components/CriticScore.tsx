import { Badge } from '@chakra-ui/react';

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) => {
    const color = score > 75 ? 'purple' : score > 60 ? 'yellow' : ''

  return (
    <Badge colorScheme={color} fontSize='16px' paddingX={2} borderRadius={4}>{score}</Badge>
  )
}

export default CriticScore