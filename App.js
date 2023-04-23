import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoteScreen from "./screens/NoteScreen";
import CreateScreen from "./screens/CreateScreen";

import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.container}>
    //   <Text>Test</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="NoteScreen"
            component={NoteScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateScreen"
            component={CreateScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
