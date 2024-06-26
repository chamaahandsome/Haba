import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { DashboardPage } from "../screens/dashboard";
import { DashboardStripeNavigation } from "../screens/dashboard-stripe.navigation";
import { DashboardPlaidNavigation } from "../screens/dashboard-plaid.navigation";
import { DashboardTest } from "../screens/dashboard-test";
import { Profile } from "../screens/profile";
import { SafeArea } from "../../utils/safe-area.component";

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
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen
      name="Dashboard"
      component={DashboardPlaidNavigation}
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
);
