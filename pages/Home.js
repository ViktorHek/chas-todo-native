import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-web";

export default function Home({ route, navigation }) {
  const [todos, setTodos] = useState([
    {
      title: "first todo",
      content: "to a to do list",
      done: false,
    },
  ]);
  const [uppdate, setUppdate] = useState(false);

  useEffect(() => {
    if (route.params) {
      switch (route.params.type) {
        case "add":
          addTodo(route.params);
          break;
        case "change":
          changeTodo(route.params.obj);
          break;
        case "delete":
          deleteTodo(route.params.obj);
          break;
        default:
          console.log('something went wrong');
          break;
      }
    }
  }, [route]);

  function addTodo(data) {
    let obj = {
      title: data.title,
      content: data.content,
      done: false,
    };
    let newList = todos;
    newList.push(obj);
    setTodos(newList);
    setUppdate(!uppdate);
  }

  function changeTodo(data) {
    console.log({data})
    for (let index = 0; index < todos.length; index++) {
      if (todos[index].title === data.title) {
        let newList = todos;
        newList[index].done = data.done;
        setTodos(newList);
        setUppdate(!uppdate);
      }
    }
  }

  function deleteTodo(data) {
    let newList = [];
    todos.forEach((el) => {
      if(el.title !== data.title) {
        newList.push(el)
      }
    })
    setTodos(newList);
    setUppdate(!uppdate);
  }

  const singleTodo = ({ item }) => (
    <View
      style={{
        backgroundColor: item.done ? "green" : "red",
        margin: "3px",
        border: "1px solid black",
        padding: "10px",
      }}>
      <TouchableOpacity onPress={() => navigation.navigate({ name: "Details", params: { item } })}>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>this is home</Text>
      {todos.length ? (
        <FlatList
          data={todos}
          renderItem={singleTodo}
          ListEmptyComponent={<Text>No todo yet</Text>}
        />
      ) : null}
      <Button title="go to add" onPress={() => navigation.navigate("Add")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
