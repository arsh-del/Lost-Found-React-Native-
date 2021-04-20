import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { View,TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Register from "../screens/RegisterScreen";




const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerRight: () => <View style={{marginRight:20}}>
  <TouchableOpacity onPress={console.log("working")}>
  <Ionicons name="log-out-outline" size={32} color="white" />
  </TouchableOpacity>
</View>,
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator, ContactStackNavigator };