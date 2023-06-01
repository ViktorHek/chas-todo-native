import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Add({navigation}) {
  return (
    <View style={styles.container}>
      <Text>this is add</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
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
