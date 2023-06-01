import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Home({navigation}) {
  const [todos, setTodos] = useState([])

  return (
    <View style={styles.container}>
      <Text>this is home</Text>
      <Button
        title='go to add'
        onPress={() => navigation.navigate("Add")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
