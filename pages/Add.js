import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Add({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // function checkingVal() {
  //   if (localStorage.getItem("todos")) {
  //     let prevList = JSON.parse(localStorage.getItem("todos"));
  //     prevList.push({ title, content, done: false });
  //     var list = prevList
  //   } else {
  //     var list = [{ title, content, done: false }];
  //   }
  //   localStorage.setItem("todos", JSON.stringify(list));
  // }

  return (
    <View style={styles.container}>
      <Text>this is add</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={{ padding: 10, margin: "10px", backgroundColor: "grey" }}
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setContent(text)}
        value={content}
        style={{ padding: 10, margin: "10px", backgroundColor: "grey" }}
      />
      {/* <Button title="testing" onPress={checkingVal} /> */}
      <Button onPress={() => navigation.navigate({name: "Home", params:{type: "add", title, content, done: false }})} title="Add" />
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
