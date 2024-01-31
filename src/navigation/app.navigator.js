import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { DashboardPage } from "../screens/dashboard";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Dashboard: "view-dashboard-outline",
  Transactions: "credit-card-multiple-outline",
  Cards: "cards-outline",
  Wallet: "wallet-outline",
  Profile: "account-settings-outline",
};

const Transactions = () => (
  <SafeArea>
    <Text>Transactions</Text>
  </SafeArea>
);

const Cards = () => (
  <SafeArea>
    <Text>cards</Text>
  </SafeArea>
);

const Wallet = () => (
  <SafeArea>
    <Text>Wallet</Text>
  </SafeArea>
);

const Profile = () => (
  <SafeArea>
    <Text>Profile</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#00CED1",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardPage}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
