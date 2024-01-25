import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { SafeArea } from "./utils/safe-area.component";
import { DashboardPlaidNavigation } from "./src/screens/dashboard-plaid.navigation";
import { HabaTabs } from "./src/screens/tabs";

const firebaseConfig = {
  apiKey: "AIzaSyCindGm70kUEQaL66Afr3-183c-fmJLtA8",
  authDomain: "habapay-8e6b1.firebaseapp.com",
  projectId: "habapay-8e6b1",
  storageBucket: "habapay-8e6b1.appspot.com",
  messagingSenderId: "21367525007",
  appId: "1:21367525007:web:4254040e45f0a860d3aafa",
  measurementId: "G-7TNZZPZX08",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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

export default function App() {
  return (
    <>
      <NavigationContainer>
        <HabaTabs />
        {/* <Tab.Navigator screenOptions={createScreenOptions}>
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
        </Tab.Navigator> */}
      </NavigationContainer>

      <ExpoStatusBar style="auto" />
    </>
  );
}
