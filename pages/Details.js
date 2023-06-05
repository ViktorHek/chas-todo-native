import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function Details({ route, navigation }) {
  const [obj, setObj] = useState({
    title: route.params.item.title,
    content: route.params.item.content,
    done: route.params.item.done,
  });
  const [uppdate, setUppdate] = useState(false);

  function markDone() {
    let newObj = obj;
    newObj.done = !obj.done;
    setObj(newObj);
    setUppdate(!uppdate);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: obj.done ? "green" : "red",
          border: "1px solid black",
          padding: "10px",
        }}>
        <Text>{obj.title}</Text>
        <Text>{obj.content}</Text>
      </View>
      <Button onPress={() => markDone()} title="Mark as done" />
      <Button
        onPress={() => navigation.navigate({ name: "Home", params: { type: "change", obj } })}
        title="save"
      />
      <Button
        onPress={() => navigation.navigate({ name: "Home", params: { type: "delete", obj } })}
        title="Delete"
      />
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
