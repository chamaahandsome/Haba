import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../account/screens/account.screen";
import { LoginScreen } from "../account/screens/login.screen";
import { RegisterScreen } from "../account/screens/register.screen";
import { DashboardPage } from "../screens/dashboard";
import { DashboardPlaidNavigation } from "../screens/dashboard-plaid.navigation";
import { DashboardTest } from "../screens/dashboard-test";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    {/* <Stack.Screen name="Dashboard" component={DashboardPage} /> */}
  </Stack.Navigator>
);
