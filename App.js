import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Details from "./pages/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      initialRouteName="Home"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Details" component={Details} options={{ title: "Details" }} />
          <Stack.Screen name="Add" component={Add} options={{ title: "Add" }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
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
