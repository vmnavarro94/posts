import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from '../components';

export default () => {
  return(
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={users}
        keyExtractor={user => user.id}
        renderItem={({ item }) => <ListItem title={item.name}/>}
      />
    </View> 
  );
}

const users = [
    { id: 1, name: 'Vin' },
    { id: 2, name: 'Kelsier' },
    { id: 3, name: 'Kaladin' },
    { id: 4, name: 'Dalinar' },
    { id: 5, name: 'Vivena' },
];


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

