import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./home-page";
import { Login } from "./login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PlaidConnection } from "../components/plaid/plaid-screen";

import { Main } from "./main-page";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HabaTabs } from "./tabs";
import { LoggedInScreen } from "./logged-in.screen";
import { AccountNavigator } from "../navigation/account.navigator";

const Stack = createNativeStackNavigator();

export const DashboardPage = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Home" component={Home} /> */}

      <Stack.Screen name="HabaLink" component={PlaidConnection} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
    </Stack.Navigator>
  );
};
