import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Lost from "../screens/Lostfile";
import AddLost from "../screens/AddLost";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="Lost" component={Lost} />
      <Drawer.Screen name="AddLost" component={AddLost} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;