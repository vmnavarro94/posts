import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default ({ title }) => {
	return(
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 18,
  }
});

