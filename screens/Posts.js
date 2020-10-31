import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from '../components';

export default ({ navigation }) => {
  const userId = navigation.getParam('user_id');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    response = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await response.json();
    setPosts(data.filter(post => post.userId === userId));
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts()
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
              data={posts}
              keyExtractor={post => String(post.id)}
              renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Posts', { user_id: item.id })} title={item.title}/>}
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

