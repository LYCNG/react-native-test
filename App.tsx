import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen1223</Text>
    </View>
  );
}

function BodyScreen() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <View style={styles.container}>
      <View style={{ height: 300, width: 200 }}>
        <ScrollView>
          {arr.map((i) => (
            <Button key={i} title={"button" + i.toString() + "12121212"} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "React Native App ",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
});

export default App;
