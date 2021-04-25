import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { View,TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import FeedBack from "../screens/About";
import Contact from "../screens/Contact";
import Register from "../screens/RegisterScreen";
import Prodfound from "../screens/Product-Found";
import Prodlost from "../screens/Product-Lost";




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
      <Stack.Screen name="Feedback" component={FeedBack} />
      <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Prodfound" component={Prodfound} />
        <Stack.Screen name="Prodlost" component={Prodlost} />
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
