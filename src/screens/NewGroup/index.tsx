import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { 
  Container, 
  Content, 
  Icon 
} from './styles';

export function NewGroup() {
  return (
    <Container>
        <Header showBackButton />

        <Content>
          <Icon />

          <Highlight 
            title="Nova Turma"
            subtitle="crie uma turma para adicionar pessoas"
          />

          <Input 
            placeholder="Nome da turma" 
          />

          <Button 
            title="Criar"
          />
        </Content>
    </Container>
  )
}