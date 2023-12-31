import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '@storage/groups/groupCreate';
import { AppError } from '@utils/AppError';

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
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if(group.trim().length === 0) {
       return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });

    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      }else {
        Alert.alert('Erro', 'Não foi possível cadastrar esse grupo.');
        console.log(error);
      }
    }
  }

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
            onChangeText={setGroup}
          />

          <Button 
            title="Criar"
            onPress={handleNewGroup}
          />
        </Content>
    </Container>
  )
}