import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/groups/groupsGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]));

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
        onPress={handleNewGroup}
        title='Criar nova turma'
      />
    </Container>
  );
}

