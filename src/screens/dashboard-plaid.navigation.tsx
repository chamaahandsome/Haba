import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {SuccessScreen} from '../components/plaid/SuccessScreen';
import {HomeScreen} from '../components/plaid/HomeScreen';

import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export const DashboardPlaidNavigation = (): React.ReactElement => {
  return (
    <SafeAreaProvider>

        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
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
        </Stack.Navigator>

    </SafeAreaProvider>
  );
};

