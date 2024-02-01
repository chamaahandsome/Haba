import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import{ SuccessScreen} from '../test/SuccessScreen';
import {HomeScreen} from '../test/HomeScreen';
import { PlaidTheme } from '../test/style';
import {OptionsScreen} from '../test/OptionsScreen';
import {IdentityScreen} from '../test/IdentityScreen';
import {BalanceScreen} from '../test/BalanceScreen';
import {AvailableProductsScreen} from '../test/AvailableProductsScreen';

const Stack = createNativeStackNavigator();

export const DashboardTest = (): React.ReactElement => {
  return (
    <SafeAreaProvider>

        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Options"
            component={OptionsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Identity"
            component={IdentityScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Balance"
            component={BalanceScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Products"
            component={AvailableProductsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
    </SafeAreaProvider>
  );
};

