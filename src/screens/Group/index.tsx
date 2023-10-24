import { useState } from 'react';
import { FlatList } from 'react-native';

import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

import { Container } from './styles';

export function Group() {
  const [groups, setGroups] = useState<string[]>(['Galera da rocket']);

  return (
    <Container>
        <Header />
        <Highlight 
          title="Turmas"
          subtitle="jogue com a sua turma"
        />
      
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item}
             />
          )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={groups.length === 0 && { flex: 1}}
            ListEmptyComponent={() => (
              <ListEmpty 
                message="Que tal cadastrar a primeira turma?"
              /> 
            )}
        />

      <Button 
        title='Criar nova turma'
      />
    </Container>
  );
}

