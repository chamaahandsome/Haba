import React, { useEffect, useState } from 'react';
import { View, Text, Alert, FlatList, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getSymbolFromCurrency from 'currency-symbol-map';
import { FontAwesome } from '@expo/vector-icons';

import {UserService} from '../services/user-services';
import { LinkedAccount } from '../services/interfaces';
import { SafeArea } from '../../utils/safe-area.component';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const LinkedAccounts = () => {
  const [accessToken, setAccessToken] = useState('');
  const [accounts, setAccounts] = useState<LinkedAccount[]>([]);

  useEffect(() => {
    const getAccessToken = async () => {
      const token = await AsyncStorage.getItem('access_token');
      if (token) {
        setAccessToken(token);
      }
    };

    const getLinkedAccounts = async () => {
      if (!accessToken) console.log('no access token');
      await UserService.getLinkedAccounts(accessToken)
        .then((res) => {
          if (!res.data.accounts) {
            return Alert.alert('Error', `No accounts found`, [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          }
          else {
            setAccounts(res.data.accounts);
          }
        });
    };

    getAccessToken();
    getLinkedAccounts();
  }, [accessToken]);

  console.log(accounts, 'accounts123');
  return (
    <SafeArea>
    <View style={styles.container}>
      <Text style={styles.title}>Linked accounts</Text>
      <FlatList data={accounts} renderItem={({ item, index }) => {
        return (
          <View key={index} style={styles.account}>
            <FontAwesome name="bank" size={58} color="#CBD3F7" style={{ flexBasis: '20%' }} />
            <View style={styles.nameAndBalance}>

              <Text style={styles.text}>
                {item.name}
              </Text>
              <Text style={styles.text}>
                {getSymbolFromCurrency(item.balances.iso_currency_code)}
                {item.balances.available}
              </Text>
            </View>
          </View>
        );
      }} />
    </View >
    </SafeArea>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1C46',
    alignItems: 'center',
    justifyContent: 'center',
    height: height
  },
  title: {
    color: '#CBD3F7',
    fontSize: 24,
    margin: 0,
    padding: 0,
    top: 60
  },
  text: {
    color: '#CBD3F7',
    fontSize: 24,
    margin: 0,
    padding: 0
  },
  account: {
    borderColor: '#FC0086',
    borderWidth: 0.17,
    padding: 15,
    top: 100,
    width: width,
    display: 'flex',
    flexDirection: 'row'
  },
  nameAndBalance: {
    flexBasis: '80%',
    marginLeft: 20,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

// import { View, Text, Alert, FlatList, Dimensions } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import getSymbolFromCurrency from 'currency-symbol-map';
// import { FontAwesome } from '@expo/vector-icons';
// import styled from 'styled-components/native';

// import { UserService } from '../services/user-services';
// import { LinkedAccount } from '../services/interfaces';
// import { SafeArea } from '../../utils/safe-area.component';

// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;

// const Container = styled.View`
//   background-color: #1A1C46;
//   align-items: center;
//   justify-content: center;
//   height: ${height}px;
// `;

// const Title = styled.Text`
//   color: #CBD3F7;
//   font-size: 24px;
//   margin: 0;
//   padding: 0;
//   top: 60px;
// `;

// const TextStyled = styled.Text`
//   color: #CBD3F7;
//   font-size: 24px;
//   margin: 0;
//   padding: 0;
// `;

// const Account = styled.View`
//   border-color: #FC0086;
//   border-width: 0.17px;
//   padding: 15px;
//   top: 100px;
//   width: ${width}px;
//   display: flex;
//   flex-direction: row;
// `;

// const NameAndBalance = styled.View`
//   flex-basis: 80%;
//   margin-left: 20px;
//   justify-content: center;
//   align-content: center;
// `;

// export const LinkedAccounts = () => {
//   const [accessToken, setAccessToken] = useState('');
//   const [accounts, setAccounts] = useState<LinkedAccount[]>([]);

//   useEffect(() => {
//     const getAccessToken = async () => {
//       const token = await AsyncStorage.getItem('access_token');
//       if (token) {
//         setAccessToken(token);
//       }
//     };

//     const getLinkedAccounts = async () => {
//       if (!accessToken) console.log('no access token');
//       await UserService.getLinkedAccounts(accessToken)
//         .then((res) => {
//           if (!res.data.accounts) {
//             return Alert.alert('Error', `No accounts found`, [
//               { text: 'OK', onPress: () => console.log('OK Pressed') },
//             ]);
//           } else {
//             setAccounts(res.data.accounts);
//           }
//         });
//     };

//     getAccessToken();
//     getLinkedAccounts();
//   }, [accessToken]);

//   console.log(accounts, 'accounts123');
//   return (
//     <SafeArea>
//       <Container>
//         <Title>Linked accounts</Title>
//         <FlatList
//           data={accounts}
//           renderItem={({ item, index }) => {
//             return (
//               <Account key={index}>
//                 <FontAwesome name="bank" size={58} color="#CBD3F7" style={{ flexBasis: '20%' }} />
//                 <NameAndBalance>
//                   <TextStyled>{item.name}</TextStyled>
//                   <TextStyled>
//                     {getSymbolFromCurrency(item.balances.iso_currency_code)}
//                     {item.balances.available}
//                   </TextStyled>
//                 </NameAndBalance>
//               </Account>
//             );
//           }}
//         />
//       </Container>
//     </SafeArea>
//   );
// };