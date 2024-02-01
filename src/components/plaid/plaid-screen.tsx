import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {PlaidHome} from './plaid-home';
// import {HabaTabs} from '../../screens/tabs';


const height = Dimensions.get('window').height;

export const PlaidConnection = ({ navigation }: any) => {
  return (

    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      {/* <View style={{ top: 50 }}>

        <Button
          title="Back to login"
          onPress={() =>
            navigation.navigate('Home', { name: 'Jane' })
          }
        />
        <Button
          title="Back to main"
          onPress={() =>
            navigation.navigate('Main', { name: 'Jane' })
          }
        />
      </View> */}

      <View style={styles.container}>
        <View style={styles.topText}>
        <Text style={styles.title}>Link your bank accounts</Text>
        </View>
        {/* <Text style={styles.text}>By clicking the below you link all of your bank accounts.</Text> */}

        <View style={styles.scrollContainer}>
          <Image source={require('../../../assets/PlaidLink.png')} />
        </View>

        <PlaidHome navigation={navigation} />
      </View>
      {/* <NavigationContainer independent={true}>
        <MyTabs />
      </NavigationContainer> */}
    </ScrollView>
 
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 40,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Set the width to 100% to take the full width of the ScrollView
    height: '100%', // Let the height adjust automatically to maintain the aspect ratio
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  topText: {
    aliumntext: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    width: '90%',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: '#00CED1',

    height: 50,
    width: 270,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
