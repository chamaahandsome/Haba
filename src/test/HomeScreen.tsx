import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlaidLink, LinkExit, LinkSuccess } from 'react-native-plaid-link-sdk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authentication.context';

var styles = require('./style');

export const HomeScreen = ({ navigation }: any) => {
  const [linkToken, setLinkToken] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const address = '10.0.2.2';

  const createLinkToken = useCallback(async () => {
    try {
      const response = await fetch(`http://${address}:8080/api/create_link_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: address }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setLinkToken(data.link_token);

      // Store linkToken in AsyncStorage with user ID
      await AsyncStorage.setItem(`linkToken_${user.id}`, data.link_token);
    } catch (error) {
      console.log(error);
    }
  }, [setLinkToken]);

  useEffect(() => {
    const retrieveLinkToken = async (currentUser) => {
      try {
        // Retrieve user-specific linkToken from AsyncStorage
        const storedLinkToken = await AsyncStorage.getItem(`linkToken_${currentUser.id}`);
        if (storedLinkToken) {
          setLinkToken(storedLinkToken);
        } else {
          // If linkToken is not found for the user, create a new one
          createLinkToken();
        }
      } catch (error) {
        console.error('Error retrieving link token:', error.message);
      }
    };
  
    retrieveLinkToken(user);
  }, [linkToken, createLinkToken, user]);
  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.heading}>
        <Text style={styles.titleText}>Haba</Text>
      </View>
      <View style={styles.bottom}>
        <PlaidLink
          tokenConfig={{
            token: linkToken,
            noLoadingState: false,
          }}
          onSuccess={async (success: LinkSuccess) => {
            console.log(success);
            await fetch(`http://${address}:8080/api/exchange_public_token`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ public_token: success.publicToken }),
            })
              .catch((err) => {
                console.log(err);
              });
            navigation.navigate('Options', success);
          }}
          onExit={(response: LinkExit) => {
            console.log(response);
          }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Open Link</Text>
          </View>
        </PlaidLink>
      </View>
    </View>
  );
};
