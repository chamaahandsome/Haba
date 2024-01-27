import React from 'react';
import { View, Text } from 'react-native';


import {HabaTabs} from './tabs';
import { SafeArea } from '../../utils/safe-area.component';



export const LoggedInScreen = () => {
  return (
    <SafeArea>
    <View>
      <Text>Text</Text>
        <HabaTabs />
    </View>
    </SafeArea>
  );
};

