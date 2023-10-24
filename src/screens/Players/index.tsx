import { useState } from 'react';
import { FlatList } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';
import { PlayerCard } from '@components/PlayerCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { 
  Container, 
  Form, 
  HeaderList, 
  NumbersOfPlayers 
} from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers ] = useState(['Gabriel']);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="crie uma turma para adicionar pessoas"
      />
      <Form>
        <Input 
          placeholder="Nome do participante" 
          autoCorrect={false}  
        />

        <ButtonIcon
          icon="add"
        />
      </Form>
    <HeaderList>
      <FlatList 
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Filter 
          title={item}
          isActive={item === team}
          onPress={() => setTeam(item)}
        />
        )}
        horizontal
      />

    <NumbersOfPlayers>
      {players.length}
    </NumbersOfPlayers>
    </HeaderList>

        <FlatList 
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <PlayerCard 
              name={item} 
              onRemove={() => {}}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            {paddingBottom: 100},
            players.length === 0 && {flex: 1}
          ]}
          ListEmptyComponent={() => (
            <ListEmpty 
              message="Não há pessoas nesse time"
            />
          )}
        />

        <Button 
          type="SECONDARY"
          title="Remover turma"
        />
    </Container>
  )
}