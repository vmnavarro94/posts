import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from '../components';

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    response = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers()
  }, []);

  return(
    <View style={styles.container}>
      {
        loading
          ?
            <Text>Loading...</Text>
          :
            <FlatList 
              style={styles.list}
              data={users}
              keyExtractor={user => String(user.id)}
              renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Posts', { user_id: item.id, user_name: item.name })} title={item.name}/>}
            />     
      } 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});

