import { Container, Title } from "./styles";

type Props = {
  message: string;
}

export function ListEmpty({message}: Props) {
  return (
    <Container>
      <Title>{message}</Title>
    </Container>
  )
}